document.addEventListener('DOMContentLoaded', function () {
    
    console.log('DOCUMENT READY!');
    
    /*실행문을 함수로 따로 뺌*/
    initViews();
    addEvents();

});

/*리스너와 핸들러 정의*/
function addEvents() {

    /*MENU CLICK EVENT START*/
    let signUpEle = document.querySelector('div.menu_wrap a.sign_up');
    signUpEle.addEventListener('click', function() {
        console.log('signUpEle CLICKED!');
        console.log('+++ ', VIEW_NO.SINGN_UP_VIEW);
        showSelectedView(VIEW_NO.SIGN_UP_VIEW);
    });

    let signInEle = document.querySelector('div.menu_wrap a.sign_in');
    signInEle.addEventListener('click', function() {
        console.log('signInEle CLICKED!');
        showSelectedView(VIEW_NO.SIGN_IN_VIEW);
    });

    let signOutEle = document.querySelector('div.menu_wrap a.sign_out');
    signOutEle.addEventListener('click', function() {
        console.log('signOutEle CLICKED!');
        showSelectedView(VIEW_NO.SIGN_OUT_VIEW);
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

}