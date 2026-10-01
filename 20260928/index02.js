// [연산자 종류]
// 1. 산술 연산자 : +, -, *, /, %(나머지값), **(제곱승)

var num1 = 10;
var num2 = 20;

console.log(num1 + num2); 
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(3 ** 2);        //9



/*(예제) DW전자 회사의 1분기 매출의 총합을 구하고자 합니다. 프로그램을 만들어 보세요.
사용자가 1월, 2월, 3월 매출액을 입력하면 1분기 총합을 출력하자!*/


// var sales1 = Number(prompt('1월 매출 입력: '));
// var sales2 = Number(prompt('2월 매출 입력: '));
// var sales3 = Number(prompt('3월 매출 입력: '));

// console.log('1분기 매출 총합: ', (sales1 + sales2 + sales3));

/*(예제) 덧셈 연결 연산자 : 문자열 덧셈*/
//console.log('Hello' + 'world');

/*(예제) DW 전자에서 1분기 수익을 계산하려고 합니다.
사용자가 1분기 매출액과 매입액을 입력하면 수익을 계산해주는 프로그램을 만들어보자!*/
// var sales = Number(prompt('1분기 매출 입력: '));
// var purchase = Number(prompt('1분기 매입 입력: '));

// var profit = sales - purchase;
// console.log('수익: ', profit);


/*(예제) 방의 넓이 구하기.
가로와 세로 길이를 입력하면 방의 넓이를 계산해주는 프로그램 만들기!*/
// var width = Number(prompt('가로 길이 입력: '));
// var height = Number(prompt('세로 길이 입력: '));

// console.log('방의 넓이: ', (width * height));


/**** 템플릿 문자열 : 백틱(``) *****/
// console.log(`방의 넓이: ${width * height}`)


/*(예제) 신체질량지수(BMI) 구하기
사용자가 몸무게, 신장을 입력하면 신체질량지수(BMI)를 계산해주는 프로그램을 만들자*/
// var weight = Number(prompt('몸무게(kg) 입력: '));
// var height = Number(prompt('신장(cm) 입력: '));
// var bmi = parseInt(weight / (height ** 2));
// console.log(`BMI : ${bmi}`);


/*(예제) 홀짝 게임
컴퓨터가 홀짝 진행하고 우리가 맞춘다.*/

// var random = Math.random();
// random = parseInt(random * 10);
// console.log(random);

// var userInputNumber = Number(prompt('홀짝 맞추세요. 1. 홀  2.짝'));
// console.log(`userInputNumber: ${userInputNumber}`);
// console.log(`random: ${random}`);


/*(예제) 빵을 나누어 줄 수 있는 학생 수 구하기
길동이는 97개의 빵을 3개씩 같은 반의 친구들에게 나누어 주려고 합니다.
최대 몇 명에게 나누어 줄 수 있는지 구하고, 남는 빵의 개수도 구해봅시다.*/
// var bread = 97;
// var cnt = 3;
// var maxStudentCnt = bread / cnt;
// var restBread = bread % cnt;

// console.log(`maxStudentCnt: ${parseInt(maxStudentCnt)}`);
// console.log(`restBread: ${restBread}`)


/*(예제) 전염병 예상 감염자 수 구하기
보건 당국은 전염병의 감염 확산 추세 파악한 결과,
하루에 한 사람이 한 명씩 감염시키는 것으로 나타났습니다.
확진자 한 사람이 나올 경우 30일 이후에 몇 명의 감염자가 나오는지 계산해봅시다.*/

var man = 2;
var date = 30;
var total = man ** date;

console.log(`total: ${total}`);





//---------------------------------------//

// 2. 할당(대입) 연산자와 복합 대입 연산자: =, +=, -=, *=, /=, %=

var num5 = 10;

// num5 = num5 + 5;
num5 += 5;


// 3. 비교 연산자 : ==, ===, !=(같지않다), !==, >, <, >=, <= 
// 4. 논리 연산자 : &&, ||, !
// 5. 증감 연산자 : ++, --
// 6. 삼항 연산자 : 3개의 항을 사용하는 연산자, 조건 ? 값1 : 값2

