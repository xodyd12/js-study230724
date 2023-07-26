let qNum = 1; // 문제 넘버링

// 정답, 오답 횟수
let correctCount = 0;
let wrongCount = 0;

let maxNumber;

while (true) {
  let message = `~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
[1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`;
  let level = +prompt(message);

  if (level === 1) {
    maxNumber = 100;
  } else if (level === 2) {
    maxNumber = 50;
  } else if (level === 3) {
    maxNumber = 20;
  } else {
    alert('난이도를 숫자로 다시 입력하세요!');
    continue;
  }
  break;
} // end while

while (true) {
  // 랜덤 정수 2개를 생성
  let firstNumber = Math.floor(Math.random() * maxNumber) + 1;
  let secondNumber = Math.floor(Math.random() * maxNumber) + 1;

  // 부호를 만들 랜덤 정수 생성
  let markNum = Math.floor(Math.random() * 3);

  let mark;
  let realAnswer; // 실제 정답
  if (markNum === 0) {
    mark = "+";
    realAnswer = firstNumber + secondNumber;
  } else if (markNum === 1) {
    if (firstNumber === secondNumber) continue;
    else if (firstNumber < secondNumber) {
      let t = firstNumber;
      firstNumber = secondNumber;
      secondNumber = t;
    }
    mark = "-";
    realAnswer = firstNumber - secondNumber;
  } else {
    mark = "x";
    realAnswer = firstNumber * secondNumber;
  }

  let userAnswer = +prompt(
    `Q${qNum++}. ${firstNumber} ${mark} ${secondNumber} = ??`
  );

  if (userAnswer === 0) {
    alert("게임을 종료합니다!");
    break;
  }

  // 정답 확인
  if (userAnswer === realAnswer) {
    alert("정답입니다!");
    correctCount++;
  } else {
    alert("틀렸습니다!");
    wrongCount++;
  }
} // end while

alert(`정답 횟수: ${correctCount}회, 틀린 횟수: ${wrongCount}회`);
