const userName = ['김철수','강감찬','박영희'];

//userName에서 각각의 요소들을 다시 변수로 저장 시키고 싶다.
// const kim = userName[0];
// const kang = userName[1];
// const pack = userName[2];

const [kim, kang , pack] = userName;

console.log(`a : ${kim}, b: ${kang}, c:${pack}`);

const [kk, ,gg] = userName
console.log(`kk:${kk},gg:${gg}`);

//변수값 교환하기
let first = 10;
let second = 20;

[second, first] = [first, second];
console.log(`1st:${first},2nd:${second}`);

// 맨 앞 2개는 각각의 변수에 저장하고
// 나머지는 묶어서 다시 배열로 만들고 싶다.
const [one, three, ...rest] = [1,3,5,7,9,11];
console.log(`one:${one},three:${three}`);
console.log(rest);

// 스프레드를 활용한 배열 간편 복사
console.log('===========================');
const foods =['감튀','햄버거','콜라'];

// const copyFoods = foods; //배열 포인터 복사 
//배열 값 복사 방법
// const copyFoods = foods.map(f => f);
// const copyFoods = foods.slice();
const copyFoods = [...foods]; //스프레드 복사

foods[1] = '치킨버거';
copyFoods[2] = '사이다';

console.log('foods:' , foods);
console.log('copy:' , copyFoods);