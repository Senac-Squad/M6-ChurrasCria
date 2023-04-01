import { getConnection } from "../infra/connection.js"

export default class ApplicationModel {
    static _propertyToColumn = new Map()
    static _columnToProperty = new Map()

    static configurar() {
        throw new Error('Você deve criar sua própria versão de SuaModel.configurar! Dentro dela chame o método "SuaModel.associar" para relacionar as propriedades da model com as colunas do banco!')
    }

    static associar( property, column ) {
        this._propertyToColumn.set(property, column)
        this._columnToProperty.set(column, property)
    }

    static getTableName() {
        return this.name.toLowerCase()
    }

    static _toModel(dbResult) {
        if (!dbResult) {
            return null
        }
        const columns = Object.keys(dbResult)
        const instance = new this()
        for (const column of columns) {
            const property = this._columnToProperty.get(column)
            instance[property] = dbResult[column] ?? null
        }
        return instance
    }

    static _toDatabase(model) {
        if (!model) {
            return null
        }
        const properties = Object.keys(model)
        const row = {}
        for (const property of properties) {
            const column = this._propertyToColumn.get(property)
            row[column] = model[property] ?? null
        }
        return row
    }

    // ----- metodos auxiliares
    static async _clear() {
        const connection = await getConnection()
        await connection.exec(`DELETE FROM ${this.getTableName()};`)
        await connection.close()
    }
    static async _drop() {
        const connection = await getConnection()
        await connection.exec(`DROP TABLE IF EXISTS ${this.getTableName()};`)
        await connection.close()
    }
    static async _migrate(columnsConfig) {
        const connection = await getConnection()
        await connection.exec(`CREATE TABLE IF NOT EXISTS ${this.getTableName()} (${columnsConfig.join(',')});`)
        await connection.close()
    }
    static async _seed(models) {
        for ( const model of models ) {
            await model.save()
        }
    }

    // --------

    
    id;

    async save() {
        // Busca o nome da tabela
        const table = this.constructor.getTableName()
        // Busca a tabela de tradução de propriedade para coluna
        const propToCol = this.constructor._propertyToColumn

        // Se transforma em um objeto traduzido para colunas do banco de dados
        const dbObj = this.constructor._toDatabase(this)
        // Guarda o nome das colunas do banco
        const columns = Object.keys(dbObj)
        // Guarda os valores que serão inseridos nas colunas
        const values = Object.values(dbObj)

        const connection = await getConnection()
        // Possui id: atualizar
        if (this.id) {
            // Gera a query no formato do UPDATE
            const updates = columns.map(column => `${column}=?`)
            // Executa um update na tabela, informa quais colunas que serão modificadas, seus valores e qual linha será afetada
            await connection.run(
                `UPDATE ${table} SET ${updates} WHERE ${propToCol.get('id')} = ?;`,
                ...values,
                this.id
            )
        // Não possui id: inserir
        } else {
            // Busca o último id da inserção executada informando o nome das colunas e os valores inseridos
            const { lastID } = await connection.run(
                `INSERT INTO ${table} (${columns}) VALUES (${values.map(_ => '?').join(',')});`,
                ...values
            )
            // Atualiza o objeto do código para refletir as alterações do banco de dados
            this.id = lastID
        }
        // Finaliza a conexão
        await connection.close()
    }

    // select

    static async findAll() {
        const connection = await getConnection()
        const all = await connection.all(
            `SELECT * FROM ${this.getTableName()}`
        )
        await connection.close()
        // Importante traduzir os resultados do banco para as models que podemos usar
        return all.map( result => this._toModel(result) )
    }

    static async findByProperty(property, value) {
        const connection = await getConnection()
        // Traduz o nome da propriedade para o nome da coluna
        const column = this._propertyToColumn.get(property)
        const result = await connection.get(
            `SELECT * FROM ${this.getTableName()} WHERE ${column} = ?`,
            value
        )
        await connection.close()
        // Traduz de volta o resultado para uma model
        return this._toModel(result)
    }

}