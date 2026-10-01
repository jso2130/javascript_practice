// console.log('Hello javascript')
// alert('추석');

//변수 정의 (선언과 초기화)

var myScore = 80;
console.log(myScore);

myScore = 90;
console.log(myScore);

myScore = 'Hello';
console.log(myScore);

myScore = 3.14;
console.log(myScore);

myScore = 'o';
console.log(myScore);

myScore = true;
console.log(myScore);



//변수 선언 키워드(var,(let,const) -> ES6+)


// let myName = "gildong";
// console.log(myName);

// myName = 50;
// console.log(myName);

// const PI = 3.14;
// console.log(PI);



//Q1. 변수 myName과 myMajor에 자신의 이름과 전공을 저장하고 출력해보자!

var myName = "정승윤";
console.log("myName: ",myName);

var myMajor = "식품영양";
console.log("myMajor: ",myMajor);



/*
Q2. 다음 순서에 맞추어 코드를 작성해봅시다.
1) intro 변수를 선언하고 'Hello'로 초기화합니다.
2) intro 변수에 저장된 값을 화면에 출력합니다.
3) intro 변수의 데이터를 '안녕하세요.'로 변경합니다.
4) 변경된 값을 화면에 출력합니다.
*/

var intro = 'Hello';
console.log(intro);

intro = '안녕하세요.';
console.log(intro);



//변수명 규칙
//1. 영문자를 사용한다.
//2. 소문자로 시작한다(camelCase)
//3. 데이터의 의미를 쉽게 파악할 수 있게 짓는다.
//4. 두개 이상의 단어가 조합될 경우 camelCase표기법을 따라서 두번째 단어의 시작은 대문자로 표기한다.
//5. 예약어는 변수명으로 사용할 수 없다.
//6. 언더바(_)를 제외한 특수문자는 사용할 수 없다.
//7. 숫자는 첫 글자는 제외한 나머지 자리에서만 사용한다.



//데이터 자료형
//1. 정수(integer)
//2. 실수(float)
//3. 문자열형(string)
//4. 논리형(bool)