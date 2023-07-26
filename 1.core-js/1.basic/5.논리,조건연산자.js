// && : 양쪽이 모두 참일 경우 참 
//  || : 둘 중 하나만 참이어도 참

// 아이디 검증 // 패스워드 검증

// true               ture => true
// true               false => false
// false               ture => false
// false               false => false


let t = true;
let f = false;
console.log( t && t);
console.log( t && f);
console.log( f && t);
console.log( f && f);


console.log( t || t);
console.log( t || f);
console.log( f || t);
console.log( f || f);


// 논리 반전 (not)
console.log('===================================');
console.log(!t);

let money = 7000;
if (!money) {
    console.log('쇼핑을 할거야 !');
} else {
    console.log('집에서 숼거여!');
}

// 조건 연산자 (3항)
console.log('===================================');

let food; //먹고 싶은 음식
// if(money > 6000){
//     food = '돈까스';
// }else {
//     food = '라면';
// }
console.log(`선택된 음식: ${money > 6000 ? '돈까스' : '라면'}`);