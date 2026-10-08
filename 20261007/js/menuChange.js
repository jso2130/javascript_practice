const SIGN_OUT_STATUS = 1;
const SIGN_IN_STATUS = 2;

const setMenuStatus = (menuNo) => {
    
    console.log('setMenuStatus() CALLED');
    
    switch(menuNo) {

        case SIGN_OUT_STATUS:
            document.querySelector('div.menu_wrap a.sign_up').style.display = 'inline-block';    //앵커 태그를 인라인블록으로 바꾸고 보이게 하려면 인라인 블록으로 써야 함
            document.querySelector('div.menu_wrap a.sign_in').style.display = 'inline-block';
            document.querySelector('div.menu_wrap a.sign_out').style.display = 'none';
            break;

        case SIGN_IN_STATUS:
            document.querySelector('div.menu_wrap a.sign_up').style.display = 'none';
            document.querySelector('div.menu_wrap a.sign_in').style.display = 'none';
            document.querySelector('div.menu_wrap a.sign_out').style.display = 'inline-block';
            break;

    }

}