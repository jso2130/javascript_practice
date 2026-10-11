/*inputEle값 지우는 함수*/
const doElementValueClean = (...eles) => {

    console.log('doElementValueClean() CALLED');

    for (let i = 0; i < eles.length; i++)
        eles[i].value = '';

};