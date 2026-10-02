// 매개변수

// function printHello(name) {
//     console.log(`${name}님 안녕하세요.`);
    
// }

// printHello('길동');   // 호출부에 쓴 값이 정의부로 가서 매개변수에 할당이 된다.




//문제)
// 학교에서 선생님의 요구: 우리반 총학생 3명의 시험점수 총합과 평균을 구하는 프로그램

// function printTotalAndAverageScore(...student) {       // 값을 배열(리스트)로 담는다.
    
//     var totalScore = 0;

//     for (var i = 0; i < student.length; i++) {
//         console.log(student[i]);
//         totalScore += student[i];
        
//     }

//     var averageScore = totalScore / student.length

//     console.log(`총점: ${totalScore}`);
//     console.log(`평점: ${averageScore}`);
    
// }

// printTotalAndAverageScore(10, 30, 70);