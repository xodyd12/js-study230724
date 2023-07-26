
// 단축평가
/*
    //and 연산
    t && t
    t && f
    f && t
    f && f
    //or 연산
    t || t
    t || f
    f || t
    f || f

*/

//OR 연산: 첫번째 truthy를 반환
console.log('hello' || 'world');
console.log(0 || '안녕');

//AND 연산: 첫번째 falsy를 반환
console.log('HELLO' && 'WORLD');
console.log(null && '메롱');

//응용 예시
/* 
    <h1>웰컴 투 홈페이지</h2>    //처음에는 이 화면이 보여지고 
    isLogin && <h2>xxxx님 환영합니다</h2> 
    //로그인후에 &&연산을 사용해서 falsy를 변환하면 왼쪽은 true니깐 
    오른쪽을 볼꺼임 그런데 오른쪽에도 true니깐 오른쪽만 보여질거임  




    */


