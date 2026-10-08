const doEleValueClean = (...eles) => {
    
    console.log('doEleValueClean() CALLED');
    
    for (let i = 0; i < eles.length; i++) 
        eles[i].value = '';     // 딱 한 줄인 경우 중괄호 생략 가능

}