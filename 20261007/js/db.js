import {
    IS_DEV
} from './config.js';


if (localStorage.getItem('memberDB') === undefined)          // 만약 스토리지에 데이터가 없다면 
    localStorage.setItem("memberDB", JSON.stringify({}));    // 로컬 저장소에 빈 객체 만들어서 데이터를 문자열화해서 넣기

if (localStorage.getItem('diaryDB') === undefined)
    localStorage.setItem("diaryDB", JSON.stringify({}));


/*[member DB]*/
/*회원가입 정보를 저장하는 함수*/
export const addMember = (id, pw, mail) => {

    console.log('addMember() CALLED');

    let memberDB = JSON.parse(localStorage.getItem('memberDB'));       // 문자열을 객체로 바꿔서 꺼내기

    if (member[id] !== undefined)  // ID 중복 체크 (이미 존재하면 회원가입 및 다이어리 초기화 진행 막음)
        return;

    memberDB[id] = {
        u_id: id,
        u_pw: pw,
        u_mail: mail
    };

    localStorage.setItem('memberDB', JSON.stringify(memberDB));

    // 로그인 정보는 두 개의 값이 쌍을 이뤄져있으므로 object로 설정
    /*
    memberDB.set(id, {    // 고유한 값인 id를 key값으로
        u_id: id,
        u_pw: pw,
        u_mail: mail
    });
    */


    let diaryDB = JSON.parse(localStorage.getItem('diaryDB'));
    diaryDB[id] = [];
    localStorage.setItem('diaryDB', JSON.stringify(diaryDB));

    // 다이어리 기록은 순서대로 쌓이는 배열로 
    /*diaryDB.set(id, []);*/

    // console.log(memberDB.get(id));
    // console.log(diaryDB.get(id));

};


/*로그인 함수 - true/false값을 받는다*/
export const searchMember = (id, pw) => {

    console.log('searchMember() CALLED');

    /*web storage 저장 버전*/
    let memberDB = JSON.parse(localStorage.getItem('memberDB'));
    if (memberDB[id] !== undefined && memberDB[id].u_pw == pw) {
        console.log('SUCCESS');
        return true;
    } else {
        console.log('SIGN IN FAIL!!');
        return false;
    }

    /*Map 저장 버전
    let memberOBJ = memberDB.get(id);
    if (memberOBJ !== undefined && memberOBJ.u_pw === pw) {
        console.log('SUCCESS');
        return true;
    }

    console.log('SIGN IN FAIL!!');
    return false;
    */
};


/*[diary DB]*/
/*다이어리 저장*/
export const addDiary = (diary) => {

    console.log('addDiary() CALLED');

    let diaryDB = JSON.parse(localStorage.getItem('diaryDB'));
    let u_id = getCurrentSignInedMemberID();
    let myDiaries = diaryDB[u_id];
    myDiaries.push(diary);
    localStorage.setItem('diaryDB', JSON.stringify(diaryDB));

    /*
    let u_id = getCurrentSignInedMemberID();    // 세션에 저장된 로그인 정보 
    let diaries = diaryDB.get(u_id);            // 사용자의 다이어리 기록(배열) 

    diaries.push(diary);           // 새로운 다이어리 추가
    */
};


/*다이어리 검색*/
export const searchDiaries = (u_id) => {

    console.log('searchDiaries() CALLED');

    let diaryDB = JSON.parse(localStorage.getItem('diaryDB'));
    return diaryDB[u_id];

    /*
    return diaryDB.get(u_id);     // id에 맞는 다이어리 가져와서 반환
    */
};


/*dummy data*/
if (IS_DEV) {
    addMember('gildong', '1234', 'gildong@gmail.com');
    addMember('chanho', '0000', 'chanho@naver.com');
}