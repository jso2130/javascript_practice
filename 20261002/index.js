//함수

//[기본 선언문]
/*
function 함수이름 ([input 데이터]) {          //함수 선언부
    함수 실행부
}
*/

// function hello (){
//     console.log('안녕하세요.');    
// }

// hello();
// hello();        // 기능 재사용

// for (var i = 0; i < 100; i++){               // 100번 반복
//     hello();
// }



//[익명 함수]
/*
var 변수명 = function() {
    실행부
}
*/

// var hello = function() {
//     console.log('안녕하세요.');
    
// }



//[화살표 함수]
/*
const 함수이름 = () => {
    실행부
    } 
*/

// const hello = () => {
//     console.log('안녕하세요.');
    
//     } 

// hello(); 



//[즉시 실행 함수]
/*
(function () {
     console.log('안녕하세요.');    
})();
*/





//문제)
/*
현재 시스템의 날짜와 시간을 출력하는 함수를 정의하고 호출하기
*/

// function todayDate () {
//     var now = new Date();

//     var month = now.getMonth();
//     var date = now.getDate();
//     var hour = now.getHours();

//     console.log(`${month}월 ${date}일 ${hour}시 입니다.`);
    
// }

// todayDate();



//문제)
/*
현재 시스템의 날짜와 시간을 다음과 같이 출력하는 함수를 정의하고 호출하기

[언어선택]
1. kor : 2026년 10월 2일 5시 30분 25초
2. eng : 2026/10/02 5:30::25
*/ 

// function time () {
//     var now = new Date();
//     return{
//         year: now.getFullYear(),
//         month: Number(now.getMonth()) + 1,
//         date: now.getDate(),
//         hour: now.getHours(),
//         minutes: now.getMinutes(),
//         seconds: now.getSeconds()
//     }
    
//     console.log(`eng: ${year}/${month}/${date} ${hour}:${minutes}:${seconds}`);
    
// }

// function kor () {
    // var today = time ();
    
//     console.log(`kor: ${year}년 ${month}월 ${date}일 ${hour}시 ${minutes}분 ${seconds}초`);
    
// }

// function eng () {
//     var today = time ();
//     console.log(`eng: ${year}/${month}/${date} ${hour}:${minutes}:${seconds}`);
    
// }

// var language = Number(prompt('언어 선택  1.kor  2.eng'));
 
// if (language === 1) {
//     kor();

// } else {
//     eng();
    
// }



//문제)
/*
온도 센서를 작동 시키고 중단시키는 함수를 선언하고 호출하자
*/

// function startTempSenser () {                   // 함수명이나 변수명은 '동사 + 목적어'
//     console.log('START TEMPERATUR SENSER');
    
// }

// function endTempSenser () {
//     console.log('END TEMPERATUR SENSER');

// }

// startTempSenser ();
// endTempSenser ();



//문제)
/*
고등학교 졸업 기념으로 노트북을 하나 장만했습니다.
노트북 사이즈에꼭 맞는 파우치를 하나 구매하려고 하는데 사이즈 표에 인치로만 표시되
어있습니다. cm를 인치로 바꿔주는 함수를 만들어봅시다. 
*/

// var cm = Number(prompt('노트북의 크기(cm)를 입력하세요'));

// function inch () {
//     console.log(`${cm * 0.393701}inch`);
// }

// inch();





//문제)
/*
길동이는 5시간 동안 3km의 속도로 등산을 했습니다.
길동이는 등산한 시간과 속도를 입력하면 이동한 거리를 계산해주는 프로그램을 함수를 이용해 만들어보자.
*/

// var time = Number(prompt('등산한 시간을 입력하세요'));
// var speed = Number(prompt('등산한 속도(km)를 입력하세요'));

// const distance = () => {
//     console.log(`이동거리: ${time * speed}`);
    
// }

// distance();



/*
함수 내에서 또 다른 함수 넣기 (동기 방식, 비동기 방식)
*/

// function fun1 () {
//     console.log('재미');
    
// }

// function fun2 () {
//     console.log('잼');
    
// }

// function fun3 () { 
//     fun1();         
//     fun2();
//     console.log('jam');
    
// }

// fun3 ();



//문제) 계산기 프로그램
/*
사용자가 숫자 2개를 이력하고 4칙연산자를 선택하면 연산 결과가 출력되는 프로그램을 만들자
*/

// function add() {
//     console.log(`덧셈 결과:  ${inputNum1} + ${inputNum2} = ${inputNum1 + inputNum2}`);
   
// }

// function sub() {
//     console.log(`뺄셈 결과: ${inputNum1} - ${inputNum2} = ${inputNum1 - inputNum2}`);
    
// }

// function mul() {
//     console.log(`곱셈 결과: ${inputNum1} x ${inputNum2} = ${inputNum1 * inputNum2}`);
    
// }

// function div() {
//     console.log(`나눗셈 결과: ${inputNum1} / ${inputNum2} = ${inputNum1 / inputNum2}`);
    
// }

// function calculator () {
//     if (selectOperator === 1){
//         add();

//     } else if (selectOperator === 2){
//         sub();

//     } else if (selectOperator === 3){
//         mul();

//     } else if (selectOperator === 4){
//         div();

//     } 
// }

// var inputNum1 = Number(prompt('첫번째 숫자를 입력하세요.'));
// var selectOperator = Number(prompt('연산자를 선택하세요  1. 덧셈   2. 뺄셈   3. 곱셈   4. 나눗셈'))
// var inputNum2 = Number(prompt('두번째 숫자를 입력하세요.'));


// calculator ();
