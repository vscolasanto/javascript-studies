/**
 * A função splice mexe no array original e ao mesmo tempo que ela exclui, ela pode inserir
 * items no array. Ela também retorna os items que foram removidos em forma de ARRAY
 */
const names = ['Vinicius', 'Patrícia', 'Nathália'];
console.log('ARRAY: ', names);
const removed = names.splice(0, 1);
console.log('UPDATED ARRAY: ', names);
console.log('REMOVED:', removed);

const languages = ['Node', 'Javascript', 'Ruby', 'C#', '.NET', 'Angular', 'React'];
console.log('ORIGINAL', languages);
const removeds = languages.splice(-3, Number.MAX_VALUE); // para ir até o final
console.log('UPDATED', languages);
console.log('REMOVED', removeds);
languages.splice(2, 0, 'Elixir'); // adicionar exatamente no indice informado
console.log('UPDATED', languages);

// Simulando método padrão do array
/*POP*/ languages.splice(-1, 1);
/*PUSH*/ languages.splice(languages.length, 0, 'Svelte');
/*SHIFT*/ languages.splice(0, 1);
/*UNSHIFT*/ languages.splice(0, 0, 'AngularJS', 'CSS', 'HTML');
console.log(languages);
