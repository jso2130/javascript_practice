alert('Hello')

//object
/*
여러 값을 키와 값의 쌍으로 묶어 표현하는 자료 구조입니다.
쉽게 말해 '관련된 데이터를 하나로 묶어 놓은것'
*/
var height = 188;
var weight = 85;
var name = "gildong";
var age = 50;


console.log(height); //188
height = 190;
console.log(height); //190

var friendHeight = height;
console.log(friendHeight);    //190

friendHeight = 200;
console.log(friendHeight);    //200
console.log(height);          //190]

var man = {
    height:188,
    weight:85,
    myName:"gildong",
    age:50
}

console.log(man);

var friendMan = man;
console.log(friendMan);

friendMan.myName = "chanho";

console.log("----------------------------");
console.log(man);   
console.log(friendMan);


//참조 타입을 깊은 복사하는 방법
var obj1 = {
    myName: "gildong"
}

var obj2 = {...obj1}    //스프레드 문법 

obj1.myName = "chanho";

console.log(obj1);
console.log(obj2);



//objact 선언 방법
var ourClass = {
    className: '1학년 1반',
    classLocation: '4층',
    classStudentCount: 20,
    classTeacherName: '홍길동'
}


//objact 데이터 조회 방법: 도트 접근 연산자(.) 이용
console.log(ourClass.classLocation);

//objact 데이터 변경 방법: 도트 접근 연산자(.) 이용
ourClass.classLocation = "5층"
console.log(ourClass.classLocation);

//objact 데이터 삭제 방법: delete & 도트 접근 연산자(.) 이용
delete ourClass.classLocation;

//objact value에는 모든 데이터 타입이 들어갈 수 있다.






//문제1) number01과 number02의 값 바꾸기(swaping)
var number01 = 10;
var number02 = 20;

var temp = number01;
number01 = number02;
number02 = temp;

console.log(number01);
console.log(number02);
