function calculateParallelogram(){
    // get parallelogram base
    const base = getInputValueById('parallelogram-base');
    // get parallelogram height
    const height = getInputValueById('parallelogram-height')
    const area = base * height;
    // display the value
    setElementValueById('parallelogram-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}

function setElementValueById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}