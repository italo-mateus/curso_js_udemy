//const data = new Date ();
// a saida de dados mais utilizada é const data = new Date ('2023-04-01 20:20:20');

const data = new Date();
console.log('Dia', data.getDate());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); //Mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); //0 - Domingo, 6 - Sabado
console.log(data.toDateString());