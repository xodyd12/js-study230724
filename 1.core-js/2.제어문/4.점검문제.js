let plus = +prompt('첫번째 숫자를 입력:');
let plus2 = +prompt('두번째 숫자를 입력');

if (plus > plus2){
    let t = plus;
    plus = plus2;
    plus2 = plus;
}

let sum = 0;
for(let i=plus; i <= plus2; i++ ){
    sum += i;
}
alert(`두 수의 누 적합은${sum}입니다.`);


