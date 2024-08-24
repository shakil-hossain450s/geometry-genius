function calculateTriangle(){
    // get the base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    
    // get the height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    const area = 0.5 * base * height;

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
    console.log('area of the triangle is:', area);
}