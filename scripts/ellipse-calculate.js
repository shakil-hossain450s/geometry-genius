function calculateEllipse(){
    const ellipseA = getInputValueById('ellipse-a');
    const ellipseB = getInputValueById('ellipse-b');

    const area = Math.PI * ellipseA * ellipseB;


    setInnerTextById('ellipse-area', parseFloat(area.toFixed(2)));
}