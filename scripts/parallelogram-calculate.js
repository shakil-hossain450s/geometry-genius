function calculateParallelogram(){
    // get parallelogram base
    const base = getInputValueById('parallelogram-base');
    // get parallelogram height
    const height = getInputValueById('parallelogram-height')
    const area = base * height;
    // display the value
    setInnerTextById('parallelogram-area', area);
}
