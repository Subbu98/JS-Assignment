//Promises callBack functions:
const success = true;
    const data = new Promise((resolve, reject) => {
        if (success) {
            const results = {
                message: "This was a success!"
            };

            resolve(results);
        } else {
            const results = {
                message: "This failed!"
            };

            reject(results);
        }
    });

    data.then(success => {
        console.log(success.message);
    }).catch(error => {
        console.log(error.message);
    })

//Async callBack function

    async function apiSuccess() {
        const results = {
            message: "This was a success!"
        };

        return results;
    }

    async function apiFailure() {
        const results = {
            message: "This failed!"
        };

        throw new Error(results);
    }

//Await callBack function await/fetch

async function getAPIData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);
    } catch(error) {
        // catches errors in all async functions
        console.log(error);
    }
}

let url = "https://jsonplaceholder.typicode.com/todos/1";
getAPIData(url);