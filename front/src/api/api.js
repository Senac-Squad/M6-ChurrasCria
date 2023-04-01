const Api = () => {
    const url = 'http://localhost:3001'

    return {
        login (email, password) {
            return fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
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
        }
    }
}

export default Api