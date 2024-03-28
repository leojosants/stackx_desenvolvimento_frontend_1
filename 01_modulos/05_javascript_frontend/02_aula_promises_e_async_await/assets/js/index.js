const newPromise = new Promise((resolve, reject) => {
    const password = '12345';

    if (password === '12345') {
        resolve('Senha correta');
    }
    else {
        reject('Senha incorreta');
    }
});

newPromise
    .then((data) => data.toUpperCase())
    .then((processedData) => processedData.repeat(10))
    .then((processedDataRepeat) => console.log(processedDataRepeat));