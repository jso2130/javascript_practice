//문제) 사용자가 입력한 숫자가 10보다 큰지 아닌지 출력

// var num = Number(prompt('정수 입력'));
// if (num > 10){
//     console.log('10보다 큽니다.');  
// } else {
//     console.log('10보다 작거나 같습니다.');
// }



//문제) 속도위반 경고하기
//     제한 속도가 50km/h인 도로에서 속도위반을 하는 자동차에 경고를 하는 프로그램
//     속도가 50km/h을 초과하면 '경고' 출력하기

// var speed = Number(prompt('속도를 입력하세요'));
// if (speed > 50){
//     console.log('경고');  
// }



//문제) 사용자가 입력한 점수가 80점 이상이면 '합격입니다.' 출력하고,
//     80점 미만이면 '아쉽습니다. 다시 도전해주세요.'를 출력합니다.

// var score = Number(prompt('점수를 입력하세요'));
// if (score >= 80){
//     console.log('합격입니다.');  
// } else {
//     console.log('아쉽습니다. 다시 도전해주세요.');
// }



//문제) 자동 주문 시스템 만들기
//    다국어를 지원하는 식당에서 사용할 자동 주문 시스템을 만들자
//    1번을 누르면 한국어로, 2번을 누르면 영어로, 3번을 누르면 중국어로, 그 외는 영어로 주문을 받는 프로그램

// var orderLanguage = Number(prompt('주문할 언어의 숫자를 선택하세요.   1.한국어  2.영어  3.중국어'));

// switch (orderLanguage) {
//     case 1:
//         console.log('주문하시겠어요?');
//         break;
//     case 2:
//         console.log('Would you like to order?');
//         break;
//     case 3:
//         console.log('您点菜了吗？');
//         break;
//     default:
//         console.log('Would you like to order?');
//         break;
// }



//문제) 국자재난지원금 수령액 조회하기
//     다음은 가구 인원수에 따른 국가재난지원금 수령액을 안내하는 프로그램

// var num = Number(prompt('가구 인원수의 숫자를 쓰세요.'));

// if (num === 1) {
//     console.log('1인 가구 수령액은 400,000원 입니다.');  
// } else if (num === 2) {
//     console.log('2인 가구 수령액은 600,000원 입니다.');
// } else if (num === 3) {
//     console.log('3인 가구 수령액은 800,000원 입니다.');
// } else if (num >= 4) {
//     console.log('4인 가구 이상은 수령액은 1,000,000원 입니다.');
// }



//문제) 사용자가 몸무게와 신장을 입력하면 BMI지수와 비만 상태를 출력하는 프로그램
// BMI = 몸무게 / 키의 제곱

// var weight = Number(prompt('몸무게를 입력하세요.'));
// var height = Number(prompt('신장을 입력하세요.'));
// var bmi = weight / (height ** 2);

// if (bmi < 18.5) {
//     console.log('저체중입니다.');  
// } else if (num <= 22.9) {
//     console.log('정상입니다.');
// } else if (num <= 29.9) {
//     console.log('비만 1단계입니다.');
// } else if (num  <= 34.9) {
//     console.log('비만 2단계입니다.');
// } else {
//     console.log('비만 3단계입니다.');
// }



//문제) 사용자가 입력한 정수에 대해서 '음수, 0, 양수'를 판단하고 출력하기
//     양수라면 홀수인지 짝수인지 출력하자

// var int = parseInt(prompt('정수를 입력하세요.'));

// if (int < 0){
//     console.log('음수');
// } else if (int === 0) {
//     console.log('0');
// } else if (int > 0) {
//     if (int % 2 === 0){
//         console.log('짝수');
//     } else if (int % 2 === 1){
//         console.log('홀수');
//     }
// }



//문제) 다음 요구사항을 참고하여 버스 전용차로 단속 프로그램 만들기
//       - 버스 전용차로에 버스가 아닌 승용차가 주행할 경우 단속한다
//       - 단 토요일 및 공휴일은 단속을 하지 않는다.

// var day = prompt('요일을 입력하세요.(공휴일일 경우, 공휴일로 입력)')

// if (day === '토요일' || day ==='공휴일'){
//     console.log('단속일이 아닙니다.');
// } else {
//     var car = prompt('차종을 입력하세요. (승용차 혹은 버스로 입력)')
    
//     if(car === '승용차'){
//         console.log('버스 전용차로입니다. 단속!!');
//     } else {
//         console.log('버스 전용차로입니다. 통과~');
//     }
// }



//문제) 출생연도 끝자리와 나이를 입력하면 다음 요구사항에 맞춰 마스크 구매 가능한 요일을 출력하는 프로그램
//     1,6: 월요일 구매 가능
//     2,7: 화요일 구매 가능
//     3,8: 수요일 구매 가능
//     4,9: 목요일 구매 가능
//     5,0: 금요일 구매 가능
//     단, 만 65세 이상 어르신은 언제든 구매 가능

// var age = prompt('나이를 입력하세요')

// if (age >= 65){
//     console.log('요일 제한없이 구매 가능합니다.');
// } else {
//     var endBirthYear = Number(prompt('출생연도 끝자리를 입력하세요'))
//     if (endBirthYear === 1 || endBirthYear === 6) {
//         console.log('월요일에 구매 가능합니다.');
//     } else if (endBirthYear === 2 || endBirthYear === 7) {
//         console.log('화요일에 구매 가능합니다.');
//     } else if (endBirthYear === 3 || endBirthYear === 8) {
//         console.log('수요일에 구매 가능합니다.');
//     } else if (endBirthYear === 4 || endBirthYear === 9) {
//         console.log('목요일에 구매 가능합니다.');
//     } else if (endBirthYear === 5 || endBirthYear === 0) {
//         console.log('금요일에 구매 가능합니다.');
//     } 
// }
