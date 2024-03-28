const vegetais = ['cenoura', 'tomate', 'alface', 'batata', 'pepino'];
console.log('vegetais:', vegetais);
console.log('vegetais - tamanho:', vegetais.length);

console.log('\nvegetais:', vegetais);
console.log('vegetais - string:', vegetais.toString());

console.log('\nvegetais:', vegetais);
const vegetalRemovidoComPop = vegetais.pop();
console.log('vegetal removido com pop:', vegetalRemovidoComPop);
console.log('vegetais:', vegetais);

console.log('\nvegetais:', vegetais);
const vegetalAdicionadoComPush = vegetais.push('brócolis');
console.log('posição do vegetal adicionado com push:', vegetalAdicionadoComPush);
console.log('vegetais:', vegetais);

console.log('\nvegetais:', vegetais);
const vegetalRemovidoComShift = vegetais.shift();
console.log('vegetal removido com shift:', vegetalRemovidoComShift);
console.log('vegetais:', vegetais);

console.log('\nvegetais:', vegetais);
const vegetalRemovidoComUnshift = vegetais.unshift('espinafre');
console.log('vegetal adicionado com unshift:', vegetalRemovidoComUnshift);
console.log('vegetais:', vegetais);

console.log('\nvegetais:', vegetais);
console.log('vegetais - transformados em string:', vegetais.join(' - '));

console.log('\nvegetais:', vegetais);
console.log('vegetais - delete[0]:', delete vegetais[0]);
console.log('vegetais:', vegetais);

console.log('\nvegetais:', vegetais);
const maisVegetais = ['abóbora', 'cebola'];
console.log('\nmaisVegetais:', maisVegetais);
const todosVegetais = vegetais.concat(maisVegetais);
console.log('todosVegetais:', todosVegetais);

const vegetaisAninhados = [['cenoura', 'tomate'], ['alface', 'batata']];
console.log('\nvegetaisAninhados:', vegetaisAninhados);
console.log('vegetaisAninhados:', vegetaisAninhados.flat());

console.log('\ntodosVegetais:', todosVegetais);
console.log('todosVegetais - apartir da posicao 2 delete um elemento e adicione:', todosVegetais.splice(2, 1, 'milho', 'arroz'));
console.log('todosVegetais:', todosVegetais);