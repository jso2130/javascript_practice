/*데이터를 저장할 Map 생성*/
const memberDB = new Map();
const diaryDB = new Map();


/*[member DB]*/
/*회원가입 정보를 저장하는 함수*/
const addMember = (id, pw, mail) => {

    console.log('addMember() CALLED');

    // 로그인 정보는 두 개의 값이 쌍을 이뤄져있으므로 object로 설정
    memberDB.set(id, {    // 고유한 값인 id를 key값으로
        u_id: id,
        u_pw: pw,
        u_mail: mail
    });

    // 다이어리 기록은 순서대로 쌓이는 배열로 
    diaryDB.set(id, [])

    console.log(memberDB.get(id));
    console.log(diaryDB.get(id));

};


/*로그인 함수 - true/false값을 받는다*/
const searchMember = (id, pw) => {

    console.log('searchMember() CALLED');

    let memberOBJ = memberDB.get(id);
    if (memberOBJ !== undefined && memberOBJ.u_pw === pw) {
        console.log('SUCCESS');
        return true;
    }

    console.log('SIGN IN FAIL!!');
    return false;

};


/*[diary DB]*/
/*다이어리 저장*/
const addDiary = (diary) => {

    console.log('addDiary() CALLED');

    let u_id = getCurrentSignInedMemberID();    // 세션에 저장된 로그인 정보 
    let diaries = diaryDB.get(u_id);            // 사용자의 다이어리 기록(배열) 

    diaries.push(diary);           // 새로운 다이어리 추가

};

const searchDiaries = () => {

    console.log('searchDiaries() CALLED');

};


/*다이어리 검색*/


/*dummy data*/
if (IS_DEV) {
    addMember('gildong', '1234', 'gildong@gmail.com');
    addMember('chanho', '0000', 'chanho@naver.com');
}