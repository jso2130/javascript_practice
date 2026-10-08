/*데이터 유실방지를 위해 상수로 데이터를 저장할 MAP생성*/
const memberDB = new Map();
const diaryDB = new Map();

/*Mamber DB START*/
//sign-up(Create)
const addMember = (id, pw, mail) => {

    console.log('addMember() CALLED!');
    
    memberDB.set(id, {
        u_id: id,
        u_pw: pw,
        u_mail: mail
    });

    diaryDB.set(id, []);      //가입하자마다 다이어리의 빈 노트를 하나 생성
    
}

//sign-in(Read)
const searchMember = (id, pw) => {

    console.log('searchMember() CALLED!');
    
    let memberOBJ = memberDB.get(id);
    if (memberOBJ !== undefined && memberOBJ.u_pw === pw) {
        console.log('SIGN IN SUCESS');
        return true;

    } else {
        console.log('SIGN IN FAIL');
        return false;

    }

};
/*Mamber DB END*/

/*diary DB START*/
const addDiary = (diary) => {

    console.log('addDiary() CALLED');

    let u_id = getCrurrentSignInedMemberID();
    let diaries = diaryDB.get(u_id);
    diaries.push(diary);
    
}

const searchDiaries = () => {

    console.log('searchDiaries() CALLED');
    
}
/*diary DB END*/

/*set dummy data START*/
if (IS_DEV) {                      // dummy data가 개발모드에서만 사용될 수 있도록 하는 조건문
    addMember('gildong', '1234', 'gildong@gamil.com');
    addMember('chanho', '0000', 'chanho@naver.com');
}
/*set dummy data END*/
