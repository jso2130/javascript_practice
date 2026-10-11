document.addEventListener('DOMContentLoaded', function () {

    console.log('DOCUMENT READY!');

    initViews();

    addEvents();

});

/*이벤트 리스너, 핸들러 정의*/
function addEvents() {

    console.log('addEvents() CALLED');

    /*menu CLICK EVENT*/
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function () {

        console.log('signUpMenuBtn CLICKED');

        showSelectedView(VIEW_NO.SIGN_UP_VIEW);

    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function () {

        console.log('signInMenuBtn CLICKED');

        showSelectedView(VIEW_NO.SIGN_IN_VIEW);

    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function () {

        console.log('signOutMenuBtn CLICKED');

        showSelectedView(VIEW_NO.SIGN_OUT_VIEW);

        setMenuStatus(SIGN_OUT_STATUS);
        showSelectedView(VIEW_NO.SIGN_OUT_VIEW);

    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function () {

        console.log('writeMenuBtn CLICKED');

        showSelectedView(VIEW_NO.DIARY_WRITE_VIEW);

    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function () {

        console.log('listMenuBtn CLICKED');

        showSelectedView(VIEW_NO.DIARY_LIST_VIEW);

    });


    /* fuction button CLICK EVENT*/
    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
    signUpBtn.addEventListener('click', function () {

        console.log('signUpBtn CLICKED');

        /*사용자가 입력한 데이터를 받는 변수*/
        let u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value;
        let u_mail = document.querySelector('div.sign_up_wrap input[name="u_mail"]').value;

        addMember(u_id, u_pw, u_mail);

        alert('SUCCESS');

        doElementValueClean(
            document.querySelector('div.sign_up_wrap input[name="u_id"]'),
            document.querySelector('div.sign_up_wrap input[name="u_pw"]'),
            document.querySelector('div.sign_up_wrap input[name="u_mail"]')
        );                                         // 입력값 지우기  

        showSelectedView(VIEW_NO.SIGN_IN_VIEW);   //회원가입 후 로그인 화면으로 이동

    });

    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
    signInBtn.addEventListener('click', function () {

        console.log('signInBtn CLICKED');

        let u_id = document.querySelector('div.sign_in_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_in_wrap input[name="u_pw"]').value;

        let signInResult = searchMember(u_id, u_pw);  // true or false
        if (signInResult) {

            setCurrentSignInedMemberID(u_id);  //세션에 로그인 정보 저장 

            alert('SUCCESS');

            showSelectedView(VIEW_NO.HOME_VIEW);   // 로그인 완료 후 홈화면으로 
            setMenuStatus(SIGN_STATUS.SIGN_IN);         // 로그인 상태의 메뉴 구성으로 변경 

        } else {

            setCurrentSignInedMemberID();      //세션에 로그인 정보 저장 안함

            alert('FAIL');

            showSelectedView(VIEW_NO.SIGN_IN_VIEW);   // 다시 로그인 화면으로
            setMenuStatus(SIGN_STATUS.SIGN_OUT);           // 로그아웃 상태의 메뉴 구성으로 변경

        }

        doElementValueClean(
            document.querySelector('div.sign_in_wrap input[name="u_id"]'),
            document.querySelector('div.sign_in_wrap input[name="u_pw"]')
        );

    });

    let writeBtn = document.querySelector('div.write_wrap button');
    writeBtn.addEventListener('click', function () {

        console.log('writeBtn CLICKED');

        let diary = document.querySelector('div.write_wrap input').value;
        addDiary(diary);

    });

}