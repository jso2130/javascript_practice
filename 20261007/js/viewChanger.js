/*화면 구분 상수 - 화면 전환 함수의 매개변수*/
const VIEW_NO = {
    SIGN_UP_VIEW: 1,
    SIGN_IN_VIEW: 2,
    SIGN_OUT_VIEW: 3,
    DIARY_WRITE_VIEW: 4,
    DIARY_LIST_VIEW: 5,
    HOME_VIEW: 6
}


/*화면 요소 초기화 함수*/
let signUpWrap = '';
let signInWrap = '';
let writeWrap = '';
let listWrap = '';

const initViews = () => {

    signUpWrap = document.querySelector('#wrap > div.sign_up_wrap')
    signInWrap = document.querySelector('#wrap > div.sign_in_wrap')
    writeWrap = document.querySelector('#wrap > div.write_wrap')
    listWrap = document.querySelector('#wrap > div.list_wrap')

};


/*VIEW_NO에 따라 활성화되는 '화면 전환 함수'*/
const showSelectedView = (viewNo) => {

    switch (viewNo) {

        case VIEW_NO.SIGN_UP_VIEW:
            signUpWrap.style.display = 'block';  //보이다
            signInWrap.style.display = 'none';   //숨기다
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;

        case VIEW_NO.SIGN_IN_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'block';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;

        case VIEW_NO.HOME_VIEW:                 // switch case문에는 논리연산자가 동작하지 않음
        case VIEW_NO.SIGN_OUT_VIEW:             // <- 똑같은 코드를 실행할 때 묶어서 쓰는 방법
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;

        case VIEW_NO.DIARY_WRITE_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'block';
            listWrap.style.display = 'none';
            break;

        case VIEW_NO.DIARY_LIST_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'block';
            break;

    }

};