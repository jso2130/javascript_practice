export const SIGN_STATUS = {
    SIGN_IN: 1,
    SIGN_OUT: 2
};

export const setMenuStatus = (status) => {

    console.log('setMenuStatus() CALLED');

    switch (status) {

        case SIGN_STATUS.SIGN_OUT:
            document.querySelector('div.menu_wrap a.sign_up').style.display = 'inline-block'; // css에서 앵커태그를 인라인 블록으로 설정해놈
            document.querySelector('div.menu_wrap a.sign_in').style.display = 'inline-block';
            document.querySelector('div.menu_wrap a.sign_out').style.display = 'none';
            break;

        case SIGN_STATUS.SIGN_IN:
            document.querySelector('div.menu_wrap a.sign_up').style.display = 'none'; // css에서 앵커태그를 인라인 블록으로 설정해놈
            document.querySelector('div.menu_wrap a.sign_in').style.display = 'none';
            document.querySelector('div.menu_wrap a.sign_out').style.display = 'inline-block';
            break;

    }


};