export let rotate = (element, degrees) => {
    element.style.transform = `rotate(${degrees}deg)`;
}

export let size = (element, scale ) =>
    element.onmouseover = () => {
    element.style.transform = `scale(${scale}%)`;
}