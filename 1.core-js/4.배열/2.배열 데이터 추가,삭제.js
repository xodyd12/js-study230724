
let petsList = ['멍멍이','야옹이','쩝쩝이','범준이'];

console.log(petsList);

//맨 끝에 데이터 추가
petsList.push('규현이');
petsList.push('영석이');
petsList.push('용섭이');
petsList.push('콩콩이');
console.log(petsList);
console.log(`petsList의 배열 갯수:${petsList.length}`)

//맨 끝 데이터 지우기
let r1 = petsList.pop();
petsList.pop();
let r3 = petsList.pop();
console.log(petsList);
console.log(`r1: ${r1}`); //배열항목에서 꺼내서 가져옴
console.log(`r3:${r3}`); //이것도 포함
petsList.unshift('비둘긔');
petsList.shift(); 
console.log(`petsList의 배열 갯수:${petsList.length}`)

