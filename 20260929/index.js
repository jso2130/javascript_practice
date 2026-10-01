// 비교연산자

// 문제1) 범퍼카 탑승 가능 판별하기
// 놀이동산에서 범퍼카는 신장이 120cm 이상인 어린이만 탑승할 수 있습니다.
// 신장을 입력하면 범퍼카를 탑승할 수 있는지 알려주는 프로그램을 만들어줍니다.
// (탑승 가능은 true, 불가능은 false로 출력)

// var height = Number(prompt('어린이의 신장을 입력하세요.'));
//console.log(`탑승가능 여부: ${height>=120}`);

// 피연산자 && 피연산자  -> 둘 다 true여야 true


// 문제2) 범퍼카 탑승 가능 판별하기
// 놀이동산에서 범퍼카는 신장이 120cm 이상이고 180미만인 경우에만 탑승할 수 있습니다.
// 신장을 입력하면 범퍼카를 탑승할 수 있는지 알려주는 프로그램을 만들어줍니다.
// (탑승 가능은 true, 불가능은 false로 출력)

//console.log(`탑승가능 여부: ${height>=120 && height<180}`);
//console.log(`탑승가능 여부: ${180 > height >= 120}`);



// var num1 = 5;
// var num2 = 8;

// console.log(num1 != num2);   //true
// console.log(num1 == num2);   //false
// console.log(num1 > num2);   //false
// console.log(num1 >= num2);   //false
// console.log(num1 < num2);   //true
// console.log(num1 <= num2);   //true


//!==, ===

// console.log(`${5 == '5'}`);    //true
// console.log(`${5 === '5'}`);   //false


/*********************************************/
//논리 연산자
/*********************************************/

// 문제) 컴퓨터하고 홀/작 게임하기

// var random = Math.random();     //난수(0.0 ~ 1.0) 발생
// random = parseInt(random*10);     //난수 정수로 변경
// console.log('${random}');

// var userSelectedNumber = Number(prompt('1.짝  2.홀'));
// console.log(`WIN: ${(random % 2 === 0) && (userSelectedNumber === 1)}`);  //O
// console.log(`LOSE: ${(random % 2 === 0) && (userSelectedNumber === 2)}`);  //X

// console.log(`random: ${random}`);
// console.log(`userSelectedNumber: ${userSelectedNumber}`);



// 문제) (10 > -10) && (3.14 > 0) || (-1 == 0)
// 결과는 true

// 문제) 다음 지문을 읽고 밑줄 친 부분에 맞는 코드를 완성하시오.
//  사무실 냉/난방기는 실내 온도가 16도 이하 또는 28도 초과 시 작동한다.
   
//    temperature <=  16 ||  temperature >  28 




/*********************************************/
// (자동) 증감 연산자
/*********************************************/

// var score = 80;
// console.log(`score: ${score}`);

// score += 1;
// score++;

// var myScore = 90;
// console.log(`myScore: ${myScore}`);

// // var result = myScore++;
// // console.log(`result: ${result}`);  // 90

// var result = ++myScore;
// console.log(`result: ${result}`);     // 91



/*********************************************/
// 삼항 연산자
/*********************************************/


// var resultVar = ( 5 > 1 ) ? '5는 1보다 크다.' : '5는 1보다 크지 않다.'
// console.log(`resultVar: ${resultVar}`);     // 91

// 문제) 사용자가 시험 점수를 입력하고 점수가 80이상이면 합격 그렇지 않으면 불합격을 출력하자. 

// var score = prompt('시험 점수 입력하세요.')
// var result = Number(score)  >= 80 ? '합격' : '불합격'
// console.log(result);


// var childHeight = prompt('어린이 신장 입력하세요.')
// var msg = Number(childHeight) >= 120 && Number(childHeight) < 180 ? '탑승 가능' : '탑승 불가'
// console.log(msg);

// 문제) DW 마트는 수입과 지출을 입력하면 흑자인지 적자인지 판별하는 프로그램을 만들어보자!

var income = prompt('수입을 입력하세요.');
var expense = prompt('지출을 입력하세요.');
var result = Number(income) - Number(expense) <= 0 ? '적자' : '흑자';
console.log(result);

