// 사칙연산 게임

alert(`문제풀다가 0누르면 종료`);
alert(`난이도를 만들겠습니다`);
let level = +prompt(`1.상 (1~100)| 2. 중(1~50)|3.하 (1~20)`)
let cnt = 0;
let count =0;
if(level =1){
while(true){
    let rn =Math.floor(Math.random() * 100)+1;
    let ra =Math.floor(Math.random() * 100)+1;
    let rm = Math.floor(Math.random() * (4 - 1+1))+1;
    if(rm === 1){
        let answer = rn + rn;
        let plus = +prompt(`[${rn}+${ra}=??]`);
        if(plus === answer){
            cnt ++;
            alert('정답입니다!');        
        } else if(plus === 0)break;    
        else if(plus !==answer){
            count ++;
            alert('오답이네요,,');
        }
    }
    if(rm === 2){
        let answer = rn * rn;
    let plus = +prompt(`[${rn}*${ra}=??]`);
    if(plus === answer){
        cnt ++;
        alert('정답입니다!');        
    } else if(plus === 0)break;    
    else if(plus !==answer){
        count ++;
        alert('오답이네요,,');
    }
}
if(rm === 3){
    let answer = rn - rn;
let plus = +prompt(`[${rn}-${ra}=??]`);
if(plus === answer){
    cnt ++;
    alert('정답입니다!');        
} else if(plus === 0)break;    
else if(plus !==answer){
    count ++;
    alert('오답이네요,,');
}
}


    }          
if(level =2){
    while(true){
        let rn =Math.floor(Math.random() * 50)+1;
        let ra =Math.floor(Math.random() * 50)+1;
        if(rm === 1){
        let answer = rn + rn;
        let plus = +prompt(`[${rn}+${ra}=??]`);
        if(plus === answer){
            cnt ++;
            alert('정답입니다!');        
        } else if(plus === 0)break;    
        else if(plus !==answer){
            count ++;
            alert('오답이네요,,');
        }}
        if(rm === 2){
            let answer = rn * rn;
        let plus = +prompt(`[${rn}*${ra}=??]`);
        if(plus === answer){
            cnt ++;
            alert('정답입니다!');        
        } else if(plus === 0)break;    
        else if(plus !==answer){
            count ++;
            alert('오답이네요,,');
        }
    }
    if(rm === 3){
        let answer = rn - rn;
    let plus = +prompt(`[${rn}-${ra}=??]`);
    if(plus === answer){
        cnt ++;
        alert('정답입니다!');        
    } else if(plus === 0)break;    
    else if(plus !==answer){
        count ++;
        alert('오답이네요,,');
    }
}   
    }
}       
if(level =3){
    while(true){
        let rn =Math.floor(Math.random() * 20)+1;
        let ra =Math.floor(Math.random() * 20)+1;
        if(rm === 1){
        let answer = rn + rn;
        let plus = +prompt(`[${rn}+${ra}=??]`);
        if(plus === answer){
            cnt ++;
            alert('정답입니다!');        
        } else if(plus === 0)break;    
        else if(plus !==answer){
            count ++;
            alert('오답이네요,,');
        }}
     
    if(rm === 2){
        let answer = rn * rn;
    let plus = +prompt(`[${rn}*${ra}=??]`);
    if(plus === answer){
        cnt ++;
        alert('정답입니다!');        
    } else if(plus === 0)break;    
    else if(plus !==answer){
        count ++;
        alert('오답이네요,,');
    }
}
if(rm === 3){
    let answer = rn - rn;
let plus = +prompt(`[${rn}-${ra}=??]`);
if(plus === answer){
    cnt ++;
    alert('정답입니다!');        
} else if(plus === 0)break;    
else if(plus !==answer){
    count ++;
    alert('오답이네요,,');
}
}
    }
}
}
alert('0 눌렀으니 게임종료');
alert(`[정답횟수:${cnt},틀린횟수:${count}]`)           
