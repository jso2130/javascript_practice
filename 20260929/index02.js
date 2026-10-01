/**************************/
// if문
/**************************/

//1. if문 (단일 선택)
// : if (조건식) {실행문}

// if (10 > 5){
//     console.log('10은 5보다 크다.');
//     }


//2. if ~ else문 (양자 택일)

//문제) 시험점수가 80이상이면 '합격'을 출력, 그렇지 않으면 '불합격'출력 
// var score = 70;

// if (score >= 80) {
//     console.log('합격');
// } else {
//     console.log('불합격');
// }


//3. if ~ elif문 (다중 선택)

//문제) 점수가 90점이상이면 'A', 
//           80점이상 90점미만 'B',
//           70점이상 80점미만 'C',
//           60점이상 70점미만 'D'

// var score = 85;

// if (score >= 90) {
//     console.log('A');
// } else if (score >= 80) {
//     console.log('B');
// } else if (score >= 70) {
//     console.log('C');
// } else if (score >= 60) {
//     console.log('D');
// }


/**************************/
// switch문
/**************************/

// switch(값){
//     case 경우:
//         break;
//     case 경우2:
//         break;
//          ...
// }

// var now = new Date();
// console.log(now);

// var year = now.getFullYear();
// var month = now.getMonth();
// var date = now.getDate();
// var day = now.getDay();   //요일

// console.log(year);
// console.log(month);
// console.log(date);
// console.log(day);

// var dayString = '';
// switch(day){
//     case 1:
//         console.log('월요일');
//         dayString = '월';
//         break;
//     case 2:
//         console.log('화요일');
//         dayString = '화';
//         break;
//     case 3:
//         console.log('수요일');
//         dayString = '수';
//         break;
//     case 4:
//         console.log('목요일');
//         dayString = '목';
//         break;
//     case 5:
//         console.log('금요일');
//         dayString = '금';
//         break;
//     case 6:
//         console.log('토요일');
//         dayString = '토';
//         break;
//     case 0:
//         console.log('일요일');
//         dayString = '일';
//         break;
//     default:
//         console.log('없음');
//         break;
// }

// console.log(`${year}년 ${month}월 ${date}일 ${dayString}요일`);

