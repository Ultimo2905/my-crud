export class AppBackend {
    constructor() {
        this.baseUrl = 'https://5bf417c491c25b0013a3b9a2.mockapi.io';
    }

    isDevEnvironment() {
        return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    }

    get({limit = 5, page = 1, search = ''}) {
        let url = `${this.baseUrl}/users?`;

        if (page) {
            url += `page=${page}`;
        }


        return fetch(`${this.baseUrl}/users?page=${page}&limit=${limit}&search=${search}`)
            .then((response) => response.json());
    }

    create(user) {
        return fetch(`${this.baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    delete(id) {
        console.log(id);
        return fetch(`${this.baseUrl}/users/${id}`, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json());
    }
}