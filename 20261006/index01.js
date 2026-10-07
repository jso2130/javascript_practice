document.addEventListener('DOMContentLoaded', function() {

    var inputEle = document.querySelector('#colorPicker');
    var inputEleValue = inputEle.value;

    var colorTextEle = document.querySelector('#colorText');
    var colorTextValue = colorText.textContent;

    colorText.textContent = `${colorTextValue}: ${inputEleValue}`;

    document.addEventListener('input', function(e) {
        
        var colorPickerEle = document.querySelector('#colorPicker')

        if (e.target === colorPickerEle) {
            var changedColorValue = e.target.value;
            colorText.textContent = `${colorTextValue}: ${changedColorValue}`;

            var bodyEle = document.querySelector('body');
            bodyEle.style.backgroundColor = changedColorValue;
        }

    })

})