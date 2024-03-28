let texto = 'Olá, Mundo! Bem-vindo(a) ao JavaScript!'
console.log('texto:', texto);
console.log('texto - tamanho:', texto.length);

console.log('\ntexto:', texto);
console.log('texto - primeiro caracter:', texto.charAt(0));

console.log('\ntexto:', texto);
console.log('texto - tem "Mundo":', texto.includes('Mundo'));

console.log('\ntexto:', texto);
console.log('texto: - caracteres da posição 5 a 9:', texto.slice(5, 10));

console.log('\ntexto:', texto);
console.log('texto - todas as posições');

for (let i = 0; i < texto.length; i++) {
    console.log(`texto - posição ${i}: ${texto[i]}`);
}

console.log('\ntexto:', texto);
console.log('texto - em maiúsculo:', texto.toUpperCase());

console.log('\ntexto:', texto);
console.log('texto - em minúsculo:', texto.toLowerCase());

let comEspaço = '   Olá   ';
console.log('\ncomEspaço:', comEspaço);
console.log('comEspaço - tamanho:', comEspaço.length);

let semEspaço = comEspaço.trim();
console.log('\nsemEspaço:', semEspaço);
console.log('semEspaço - tamanho:', semEspaço.length);

console.log('\ntexto:', texto);
console.log('texto - inteiro em um array:', texto.split());

console.log('\ntexto:', texto);
console.log('texto - dividido por caracteres em um array:', texto.split(''));

console.log('\ntexto:', texto);
console.log('texto - dividido por espaços em um array:', texto.split(' '));

let stringOla = 'Olá, ';
console.log('\nstringOla:', stringOla);
let stringMundo = 'Mundo!';
console.log('stringMundo:', stringMundo);
let stringUnidas = stringOla.concat(stringMundo);
console.log('stringUnidas:', stringUnidas);

console.log('\ntexto:', texto);
console.log('texto - começa com "Olá":', texto.startsWith("Olá"));

console.log('\ntexto:', texto);
console.log('texto - termina com "JavaScript!":', texto.endsWith("JavaScript!"));

console.log('\ntexto:', texto);
console.log('texto - primeira ocorrência de "Mundo":', texto.indexOf('Mundo'));

console.log('\ntexto:', texto);
console.log('texto - substituir "JavaScript" por "JS":', texto.replace('JavaScript', 'JS'));

console.log('\ntexto:', texto);
console.log('texto - repetir 3x:', texto.repeat(3));

console.log('\ntexto:', texto);
console.log('texto - extrair inicio(5) fim(10):', texto.substring(5, 10));
