/* 
    var variavel = 'Hello, World!';
    console.log(variavel);

    var variavel = 'Olá, Mundo!';
    console.log(variavel);
*/

/* Cannot redeclare block-scoped variable 'variavel'.
    let variavel = 'Hello, World!';
    console.log(variavel);

    let variavel = 'Olá, Mundo!';
    console.log(variavel);
*/

/* var - vazamento de escopo 
    var variavel = 'Hello, World!';
    console.log('global - antes do IF:', variavel);

    if (true) {
        console.log('local  - dentro do IF:', variavel);
        var variavel = 'Olá, Mundo!';
    }

    console.log('Global - depois do IF:', variavel);
*/

/* 
    let variavel = 'Hello, World!';
    console.log('global - antes do IF:', variavel);

    if (true) {
        // console.log('local  - dentro do IF:', variavel);
        let variavel = 'Olá, Mundo!';
        console.log('local  - dentro do IF:', variavel);
    }

    console.log('Global - depois do IF:', variavel);
*/

/* Cannot redeclare block-scoped variable 'variavel'.
    const variavel = 'Hello, World!';
    console.log(variavel);

    let variavel = 'Hello, World!';
    console.log(variavel);
*/

/* if-else 
    let x = 10;

    if (x === 10) {
        console.log('x é igual a 10');
    }
    else {
        console.log('x não é igual a 10');
    }
*/

/* while 
    let contador = 0;

    while (contador < 10) {
        console.log('contador:', contador);
        contador++;
    }
*/

/* do-while 
    let contador = 10;

    do {
        console.log('contador:', contador);
        contador++;
        console.log('contador:', contador);
    } while (contador === 10);
*/

/* for */
for (let i = 0; i < 10; i++) {
    console.log('i:', i);
}