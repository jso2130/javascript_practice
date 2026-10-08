/*상수명을 보고 작업 프로세스를 알 수 있게 상수를 만들어서 쓰기*/
// const SIGN_UP_VIEW = 1;                         // 상수는 코드 맨 위에 쓰는 것이 일반적이다.
// const SIGN_IN_VIEW = 2;
// const SIGN_OUT_VIEW = 3;
// const WRITE_VIEW = 4;
// const LIST_VIEW = 5;

/*코드 변경 편의성(자동 완성 목록)을 위해 만들어진 함수*/
const VIEW_NO = {

    SIGN_UP_VIEW : 1,
    SIGN_IN_VIEW : 2,
    SIGN_OUT_VIEW : 3,
    WRITE_VIEW : 4,
    LIST_VIEW : 5,
    HOME_VIEW : 6

}

/*함수 안에 있는 함수를 전역함수로*/
let signUpWrap = '';
let signInWrap = '';
let writeWrap = '';
let listWrap = '';

/*화면 영역 요소들을 초기 설정(가져오기)하는 함수*/
const initViews = () => {

    signUpWrap = document.querySelector('#wrap div.sign_up_wrap');
    signInWrap = document.querySelector('#wrap div.sign_in_wrap');
    writeWrap = document.querySelector('#wrap div.write_wrap');
    listWrap = document.querySelector('#wrap div.list_wrap');

};

/*클릭한 메뉴의 내용만 보이게 하는 함수*/
const showSelectedView = (viewNo) => {

    switch (viewNo) {

        case VIEW_NO.SIGN_UP_VIEW:                // 변수는 넣을 수 없다. 상수만 가능
            signUpWrap.style.display = 'block';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;
    
        case VIEW_NO.SIGN_IN_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'block';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;

        case VIEW_NO.SIGN_OUT_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;
        
        case VIEW_NO.WRITE_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'block';
            listWrap.style.display = 'none';
            break;
        
        case VIEW_NO.LIST_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'block';
            break;
        case VIEW_NO.HOME_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;
            
    }

};