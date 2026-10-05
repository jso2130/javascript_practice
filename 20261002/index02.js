/*
선생님은 해당 학급 학생 시험점수를 입력한다
선생님은 해당의 이름을 입력한다.
입력된 모든 학생의 시험점수 총점과 평점 그리고 학급 이름을 입력한다

[출력 형태]
학급이름: 3-3
학생수: 3명
총점: 270점
평점: 90점
*/

function printTotalAndAVG(clsName, scs) {
   
    console.log(`학급 이름: ${clsName}`);
    console.log(`학생수: ${scs.length}`);

    var totalScore = 0;
    for (var i = 0; i < scs.length; i++){
        totalScore += scs[i];
    }

    console.log(`총점: ${totalScore}`);
    console.log(`평점: ${totalScore/scs.length}`);
    
}

function setData() {

    var className;
    var scores = [];    

    className = prompt(`학급 이름 입력하세요.`)

    var flag = true;
    while (flag) {
        var selectMenu = Number(prompt(`1.점수 입력  2.출력 후 종료`));
        switch (selectMenu) {
            case 1:
                var score = Number(prompt(`점수 입력하세요.`));
                scores.push(score)
                break;
            case 2:
                flag = false;
                printTotalAndAVG(className, scores);
                break;
        }
    }

}

setData();
