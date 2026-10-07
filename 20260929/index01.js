// 반복문
// 1. for문 : '횟수'에 의한 반복 실행
// for(초기화; 조건식; 단계) {반복 실행문}



// for(var i = 1; i < 11; i++){
//     console.log('hello ', i);
// }



// 문제) 1부터 10까지의 정수의 합

// var sum = 0;
// for(var i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(`sum: ${sum}`);



// 심화 문제) 1부터 n까지의 정수의 합을 구하는 알고리즘

// (1 + n) * (n / 2)



// 문제) 1부터 10까지의 정수의 합을 구하되, 홀수 합만 구하자!

// var sum = 0;
// for(var i = 1; i <= 10; i+=2){
//     sum += i;
// }
// console.log(`sum: ${sum}`);



// 문제) 사용자가 원하는 구구단을 입력하면 해당 구구단이 출력된다. 

// var num = Number(prompt('원하는 구구단의 숫자를 입력하세요.'));

// for(var i = 1; i < 10; i++){
//     console.log(`${num} X ${i} = ${num * i}`);
// }



// 문제) 1단부터 9단까지 전체 구구단을 출력하는 프로그램

/*세로 출력*/
// for (var num = 1; num < 10; num++){
//     for(var i = 1; i < 10; i++){
//         console.log(`${num} X ${i} = ${num * i}`);
//         }
//     }    // 중첩 반복문

/* 가로 출력*/
// for (var i = 1; i < 10; i++) {
//     let result = "";
    
//     for (var num = 2; num < 10; num++) {
//         result += `${num} X ${i} = ${num * i}\t`; 
//     }
    
//     console.log(result); 
// }



/*******************/
// for ...in문
/*******************/

// var myInfo = {
//     myName : 'gildong',
//     myAge : 20,
//     myAddr : '대전',
//     myPhone : '010-0000-0000'
// }

// for (var info in myInfo){
//     console.log(info);
//     console.log(`${myInfo[info]}`);
    
// }



/*******************/
// while문
/*******************/

// while(조건식){반복 실행문}

var i = 1;
while(i < 11){
    console.log(`i: ${i}`);
    i++;
}

//do{ } while문 : 조건이 false여도 처음 한 번은 실행하는 반복문

var j = 1;
do{
    console.log(`j: ${j}`);
    j++;
} while(j < 100);
