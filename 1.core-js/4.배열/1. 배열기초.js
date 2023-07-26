// array: 순서가 있는 집합 자료형
let number = [10, 20, 30, 40];
console.log(typeof number); //배열의 타입
console.log(number); // 배열의 항목
console.log(number[0]); //배열의 n번째 숫자 
console.log(number.length); //배열의 갯수


console.log(`첫번째 데이터:${number[0]}`);
console.log(`마지막 데이터:${number[number.length-1]}`);

let foods = ['오렌지','짬뽕','포도','라임','레몬'];
console.log('======================');
console.log(foods);
//배열 요소(element)수정
// foods[1] = '파인애플';
// console.log(foods);

//수정 시 주의사항
// foods[4] = '자몽';
// console.log(foods);

// //배열 내부 데이터 전체 참조 (순회)
// for (let i =0; i<foods.length; i++){
// console.log(`${i+1}번째 요소${foods[i]}`);
// }

// for (let f of foods){
    // console.log(`저장된 과일: ${f}`);
// }

// ES6 : 모던 자바스크립트 문법
foods.forEach((f, i)=>{
    console.log(`${i+1}번째 과일과일:${f}`);
});