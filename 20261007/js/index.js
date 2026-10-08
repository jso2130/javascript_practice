document.addEventListener('DOMContentLoaded', function () {
    
    console.log('DOCUMENT READY!');
    
    /*실행문을 함수로 따로 뺌*/
    initViews();
    addEvents();

});

/*리스너와 핸들러(콜백 함수) 정의*/
function addEvents() {

    /*MENU CLICK EVENT START*/
    let signUpEle = document.querySelector('div.menu_wrap a.sign_up');
    signUpEle.addEventListener('click', function() {
        
        showSelectedView(VIEW_NO.SIGN_UP_VIEW);

    });

    let signInEle = document.querySelector('div.menu_wrap a.sign_in');
    signInEle.addEventListener('click', function() {
        
        showSelectedView(VIEW_NO.SIGN_IN_VIEW);

    });

    let signOutEle = document.querySelector('div.menu_wrap a.sign_out');
    signOutEle.addEventListener('click', function() {
        
        console.log('signOutEle CLICKED!');

        setCrurrentSignInedMemberID();
        showSelectedView(VIEW_NO.SIGN_OUT_VIEW);
        setMenuStatus(SIGN_OUT_STATUS);

    });

    let writeEle = document.querySelector('div.menu_wrap a.write');
    writeEle.addEventListener('click', function() {
        
        console.log('writeEle CLICKED!');
        showSelectedView(VIEW_NO.WRITE_VIEW);

    });

    let listEle = document.querySelector('div.menu_wrap a.list');
    listEle.addEventListener('click', function() {
        
        console.log('listEle CLICKED!');
        showSelectedView(VIEW_NO.LIST_VIEW);

    });
    /*MENU CLICK EVENT END*/

    /*BUTTON CLICK EVENT START*/
    let signUpBtnEle = document.querySelector('div.sign_up_wrap input[type="button"]')
    signUpBtnEle.addEventListener('click', function() {      //콜백 함수라는 명칭은 자바스크립트에서만 사용
        
        console.log('signUpBtn CLICKED');     
        
        let u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value;
        let u_mail = document.querySelector('div.sign_up_wrap input[name="u_mail"]').value;

        addMember(u_id, u_pw, u_mail);
        
        alert('SIGN-UP SUCCESS');

        /*가입후 입력란 초기화*/
        // document.querySelector('div.sign_up_wrap input[name="u_id"]').value = '';
        // document.querySelector('div.sign_up_wrap input[name="u_pw"]').value = '';
        // document.querySelector('div.sign_up_wrap input[name="u_mail"]').value = '';
        
        doEleValueClean(
            document.querySelector('div.sign_up_wrap input[name="u_id"]'),
            document.querySelector('div.sign_up_wrap input[name="u_pw"]'),
            document.querySelector('div.sign_up_wrap input[name="u_mail"]')
        );

        showSelectedView(VIEW_NO.SIGN_IN_VIEW);
    });

    let signInBtnEle = document.querySelector('div.sign_in_wrap input[type="button"]');
    signInBtnEle.addEventListener('click', function() {      //콜백 함수라는 명칭은 자바스크립트에서만 사용
        
        console.log('signInBtn CLICKED');     
        
        let u_id = document.querySelector('div.sign_in_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_in_wrap input[name="u_pw"]').value;

        searchMember(u_id, u_pw);
        
        let signInResult = searchMember(u_id, u_pw);
        if (signInResult) {
            setCrurrentSignInedMemberID(u_id);
            alert ('SUCESS')
            showSelectedView(VIEW_NO.HOME_VIEW);
            setMenuStatus(SIGN_IN_STATUS);
        } else {
            setCrurrentSignInedMemberID();
            alert ('FAIL')
            showSelectedView(VIEW_NO.SIGN_IN_VIEW);
            setMenuStatus(SIGN_OUT_STATUS);
        };

        alert('SIGN-UP SUCCESS');

        // document.querySelector('div.sign_in_wrap input[name="u_id"]').value = '';
        // document.querySelector('div.sign_in_wrap input[name="u_pw"]').value = '';

        doEleValueClean(
            document.querySelector('div.sign_up_wrap input[name="u_id"]'),
            document.querySelector('div.sign_up_wrap input[name="u_pw"]'),
            document.querySelector('div.sign_up_wrap input[name="u_mail"]')
        );

    });
    /*BUTTON CLICK EVENT END*/
    let wrapBtn = document.querySelector('div.write_wrap button');
    wrapBtn.addEventListener('click', function() {

        console.log('wrapBtn CLICKED');

        let diary = document.querySelector('div.write_wrap input').value;
        addDiary(diary);

    })
};