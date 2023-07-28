// 1~ 10 사이의 랜덤정수를 생성
// Math.random() : 0.0이상 ~ 1.0미만의 렌덤 실수 생성
// Math.random() * 10 : 0.0이상 부터 10.0 미만 까지 나옴
// Math.floor(Math.random() * 10) 이건 소숫점을 버려버리는 코드임 floor 안에 Math.random()을 넣으면 됨 
// Math.floor(Math.random() * 10) +1 이러면 1부터 10사이의 랜덤 정수 생성함

// x이상 y이하의 랜덤 정수 생성 공식
// Math.floor(Math.random() * (y - x +1)) +x;
// 예를 들어서 117~123 랜덤하게 숫자 구하려면 x는 117이 되고 123은 y가 되니 위에 공식에 대입 한다. 
let rn = Math.random();
console.log(rn);
