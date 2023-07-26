
// let num =1234567;

// let count = 0;
// while(true) {
//     num = Math.floor(num/10);
//     count++;
//     let rest = num % 10;
//     if (rest === 0) break;
// }


// 숫자를 문자로 변환

let x = 30, y = 40;

let result = String(x) + y.toString();

console.log(`resule: ${result}`);

// 숫자를 문자로 변환

let z = '100';
let result2 = +z + 200;     //z 앞에 +를 붙히면 문자가 숫자로 된다. or // Number(z)를 쓰면 숫자로 변환된다.
console.log(`result2:${result2}`);


// 논리로 변환
let money = 7000;
let hasMoney = !!money; //money 앞에 !! 를 붙히면 true 또는 false 가 나온다 
console.log(`돈이 있는가? ${hasMoney}`);