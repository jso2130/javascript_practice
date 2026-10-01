// Q) 2~8 사이의 짝수 출력하자!

// for (var i = 1; i <= 8; i++) {
//     even = "";

//     if (i % 2 == 0){
//         even += i;
//         console.log(even);
//     }

// }


// Q) 1~10 사이의 정수를 출력하되, 정수가 3의 배수이면 '3의 배수!' 출력하기

// for (var i = 1; i <= 10; i++) {
//     num = "";

//     if (i % 3 == 0){
//         console.log(`${i} '3의 배수'`);

//     } else {
//         console.log(i);
//     }

// }



// Q)  for문을 이용해서 1~100까지 정수 중에서 3과 7의 공배수와 최소공배수를 출력하시오

// var minNum = 0;

// for (var i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 7 === 0 ) {
//         console.log(`3과 7의 공배수: ${i}`);
//         if(minNum === 0) {
//             minNum = i;
//         }
//     }

// }
// console.log(`최소 공배수: ${minNum}`);





// Q) 0~100까지 정수 중 3과 8의 공배수와 최소공배수 출력하기

// var minNum = 0;

// for (var i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 8 === 0 ) {
//         console.log(`3과 8의 공배수: ${i}`);
//         if(minNum === 0) {
//             minNum = i;
//         }
//     }

// }
// console.log(`최소 공배수: ${minNum}`);





// Q)369 게임 만들기
/*
친구들끼리 많이 하는 369 게임을 만들어 봅시다.
1부터 99까지 1씩 증가하면서 숫자에 3, 6, 9가 들어 있을 때마다
숫자와 함께 '짝!' 을 출력합니다. 
*/

// for (var i = 1; i <= 99; i++) {

//     if (i < 10) {
//         var str = '';

//         if(i % 3 === 0)
//             str = ` '짝'`;

//         console.log(`${i}${str}`);

//     } else {
//         var firstNum = parseInt(i / 10);    //10을 1.0으로 만들고 소숫점을 날려 첫번째 수 추출
//         var secondNum = i % 10;
//         var str = '';

//         if (firstNum % 3 === 0)
//             str += ` '짝'`;

//         if (secondNum % 3 === 0 && secondNum !== 0)
//             str += ` '짝'`;

//         console.log(`${i}${str}`);

//     }

// }




// Q) 열차 교차 시간 알아내기
/*
대전역에는 3개 노선의 열차가 오전 9시부터 오후 6시까지 교차 운행한다.
3대의 열차가 교차하는 시간을 구해 열차 충돌 사고를 막으세요.
(단 매일 오전 9시에 대전역에서 모든 열차가 출발한다.)
A열차 첫차(오전 9시) 막차(오후 6시)    운행간격(10분)
B열차 첫차(오전 9시) 막차(오후 6시)  운행간격(25분)
C열라 첫차(오전 9시) 막차(오후 6시)  운행간격(30분)
*/

// var trainA = 10;
// var trainB = 25;
// var trainC = 30;



// for (var i = 1; i <= 540; i++) {

//     var clashTime = `${9 + parseInt(i / 60)}시 ${i % 60}분 `;

//     if (i % trainA === 0 && i % trainB === 0 && i % trainC === 0) 
//         console.log(`열차A, 열차B, 열차C 출동 시간 ${clashTime}분 `);
        
//     else if (i % trainA === 0 && i % trainB === 0)
//         console.log(`열차A, 열차B 출동 시간 ${clashTime}분 `);

//     else if (i % trainB === 0 && i % trainC === 0)
//         console.log(`열차B, 열차C 출동 시간 ${clashTime}분 `);

//     else if (i % trainA === 0 && i % trainC === 0)
//         console.log(`열차A, 열차C 출동 시간 ${clashTime}분 `);
// }



/*수정해본 버전*/


// for (var i = 1; i <= 540; i++) {

//     var trainA = i % 10 === 0;
//     var trainB = i % 25 === 0;  
//     var trainC = i % 30 === 0;
//     var clashTime = `${9 + parseInt(i / 60)}시 ${i % 60}분 `;

//     if (trainA && trainB && trainC === true) 
//         console.log(`열차A, 열차B, 열차C 출동 시간 ${clashTime}분 `);
        
//     else if (trainA && trainB === true)
//         console.log(`열차A, 열차B 출동 시간 ${clashTime}분 `);

//     else if (trainB && trainC === true)
//         console.log(`열차B, 열차C 출동 시간 ${clashTime}분 `);

//     else if (trainA && trainC === true)
//         console.log(`열차A, 열차C 출동 시간 ${clashTime}분 `);

// }