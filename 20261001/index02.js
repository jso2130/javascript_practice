//문제)
// 전기를 많이 사용하면 누진세가 붙어 단가와 기본요금이 올라갑니다.
// 다음 누진제가 적용된 단가표를 참고하여 전기 사용량을 입력하면 
// 전기료가 출력되는 프로그램을 만들어봅시다.

// -------------------------------------------------------
// 사용량(kwh)   200이하     201초과 ~ 400이하      400초과
// 단가(원)        99.3                187.9       280.6
// 기본요금         910                 1600        7300
// -------------------------------------------------------

// var kwh = Number(prompt('전기 사용량을 입력하세요.'));

// var basicPrice = 0;
// var unitPrice = 0;
// var tatalPrice = 0;

// if (kwh <= 200) {

//     basicPrice = 910;
//     unitPrice = 99.3;

// } else if (kwh > 400) {

//     basicPrice = 7300;
//     unitPrice = 280.6;

// } else {
//     basicPrice = 7300;
//     unitPrice = 280.6;

// }

// totalPrise = basicPrice + unitPrice * kwh
// console.log()


// console.log(`사용량 : ${kwh}kwh`);

// if (kwh <= 200){

//     console.log(`기본요금 : 910원`);
//     console.log(`단가 : 99.3 원`);
//     console.log(`전기 요금 : ${910 + ( 99.3 * kwh )}`);

// } else if (time > 400) {
    
//     console.log(`기본요금 : 7300원`);
//     console.log(`단가 : 280.6 원`);
//     console.log(`전기 요금 : ${7300 + ( 280.6 * kwh )}`);

// } else {

//     console.log(`기본요금 : 1600원`);
//     console.log(`단가 : 187.9 원`);
//     console.log(`전기 요금 : ${1600 + ( 187.9 * kwh )}`);

// }




//문제)
// 다음의 요구사항을 삼항 연산자(조건식)와 if ~ else문을 이용해서 각각의 프로그램으로 만드시오.
/*
 - 시험 점수를 입력한다.
 - 점수가 85점 이상이면 'success'를 출력하고, 85점 미만이면 'fail'을 출력한다.
*/

// var score = Number(prompt('시험 점수를 입력한다.'));

// if (score >= 85) {
//     alert('success');

// } else {
//     alert('fail');

// }

// var result = score >= 85 ? 'success' : 'fail';
// alert(result);



//문제)
// 어린이의 신장을 입력하면 놀이기구 탑승 여부가 출력되는 프로그램을 만드시오
// (단, 놀이기구 탑승은 신장이 최소 120cm부터 최대 160cm까지 가능하다)
// var height = Number(prompt('신장을 입력하세요.'));

// /*if ~ else*/
// if (120 <= height && height <= 160) {
//     alert('탑승 가능합니다.');

// } else {
//     alert('탑승 불가합니다.');

// }


// /*삼항연산자*/
// var heightLimit = 120 <= height && height <= 160 ? '탑승 가능합니다.' : '탑승 불가합니다.';
// alert(heightLimit);






//문제)
// 다음의 요구사항을 충족시키는 프로그램을 만드시오.
/*
 - 아침 최저 기온을 입력한다.
 - 오후 최고 기온을 입력한다.
 - 일교차가 10도 이상이면 '감기 조심하세요.'를 출력한다.
 - 오후 최고 기온이 28도 이상이고 일교차가 10도 미만이면 '초여름 날씨입니다.'를 출력한다.
*/
// var amTemperature = Number(prompt('오전 최저 기온을 입력하세요.'));
// var pmTemperature = Number(prompt('오후 최고 기온을 입력하세요.'));

// var temperatureRange = pmTemperature - amTemperature

// /*if ~ else*/
// if (temperatureRange >= 10) {
//     alert('감기 조심하세요.');
//
// } else if (pmTemperature >= 28 && temperatureRange < 10){
//     alert('초여름 날씨입니다.');
//
// }



//문제)
// Q) 사용자가 입력한 문자 메시지 길이에 따라서 SMS 또는 MMS의 발송을 결정하는 
// 프로그램을 완성하시오
// (단, 메시지 길이가 50 이하면 SMS 발송, 그렇지 않으면 MMS를 발송한다).

// var textLength = prompt('메시지를 입력하세요.').length;
// var textSending = textLength <= 50 ? 'SMS 발송완료.' : 'MMS 발송완료.';
// alert(textSending);

