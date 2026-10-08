let currentSignInedMemberID = '';

const setCrurrentSignInedMemberID = (id = '') => {        // 기본값을 ''로 설정
    console.log('setCrurrentSignInedMemberID() CALLED');
    currentSignInedMemberID = id;
}

const getCrurrentSignInedMemberID = () => {
    console.log('getCrurrentSignInedMemberID() CALLED');
    return currentSignInedMemberID;
}