const Api = () => {
    const url = 'http://localhost:3001'

    return {
        login (email, senha) {
            return fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    senha
                })
            })
        },       
        getCardapio () {
            return fetch(`${url}/cardapio`)
        },
        postCardapio (cardapios) {
            return fetch(`${url}/cardapio`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(cardapios)
            })
        },
        patchCardapio (cardapios) {
            return fetch(`${url}/cardapio/${cardapios.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(cardapios)
            })
        },
        deleteCardapio (id) {
            return fetch(`${url}/cardapio/${id}`, {
                method: 'DELETE'
            })
        },
        // restaurante
        getRestaurante () {
            return fetch(`${url}/restaurante`)
        },
        postRestaurante (restaurantes) {
            return fetch(`${url}/restaurante`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(restaurantes)
            })
        },
        patchRestaurante (restaurantes) {
            return fetch(`${url}/restaurante/${restaurantes.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(restaurantes)
            })
        },
        deleteRestaurante (id) {
            return fetch(`${url}/restaurante/${id}`, {
                method: 'DELETE'
            })
        },
        // avaliar
        getAvaliar () {
            return fetch(`${url}/avaliar`)
        },
        postAvaliar (avaliar) {
            return fetch(`${url}/avaliar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(avaliar)
            })
        }
    }
}

export default Api