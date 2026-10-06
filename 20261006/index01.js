document.addEventListener('DOMContentLoaded', function () {
    console.log('READY!!');
  
    var inputEle = document.querySelector('#colorPicker');
    var inputEleValue = inputEle.value;

    var colorTextEle = document.querySelector('#colorText');
    var colorTextContent = colorTextEle.textContent;

    colorTextEle.textContent = `컬러 코드 검색: ${inputEleValue}`;

    /*방법 1.*/
    inputEle.addEventListener('input', function(e){

        console.log(e.target);

        var changedColorValue = e.target.value;
        colorTextEle.textContent = `컬러 코드 검색: ${changedColorValue}`;
    
        var bodyEle = document.querySelector('body');
        bodyEle.style.backgroundColor = changedColorValue;

    })

})

/*방법 2. input 이벤트의 엘리먼트를 그룹화할 때*/
// document.addEventListener('input', function(e){

//     var colorPickerEle = document.querySelector('#colorPicker')

//     if (e.target === colorPickerEle) {
//         var changedColorValue = e.target.value;
//         colorTextEle.textContent = `컬러 코드 검색: ${changedColorValue}`;
    
//         var bodyEle = document.querySelector('body');
//         bodyEle.style.backgroundColor = changedColorValue;
//     }

// })