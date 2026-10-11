/*현재 로그인한 사용자 정보를 저장할 가상 세션*/

/*정보 저장할 함수*/
let currentSignInedMemberID = '';

/*로그인 정보 저장 함수*/
const setCurrentSignInedMemberID = (id = '') => {

    console.log('setCurrentSignInedMemberID() CALLED');

    currentSignInedMemberID = id;

};


/*저장된 로그인 정보 불러오는 함수*/
const getCurrentSignInedMemberID = () => {

    console.log('getCurrentSignInedMemberID() CALLED!!');

    return currentSignInedMemberID;

};