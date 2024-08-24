function calculateRectangle(){
    // get the rectangle width
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    // get the rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);

    const area = width * length;

    // display the rectangle value
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}