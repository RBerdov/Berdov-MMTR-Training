drawRectangles = (x, y, rectWidth, rectHeight) => {
    let w = window.innerWidth;
    console.log(w/2);
    let h = window.innerHeight;
    console.log(h/2);
    const rect = document.querySelector('.rectangle');
    console.log(rect);
    rect.style.top = h/2 + 'px';
    rect.style.left = w/2 + 'px';
    rect.style.paddingRight = rectWidth/2 + 'px';
    rect.style.paddingLeft = rectWidth/2 + 'px';
    rect.style.paddingTop = rectHeight/2 + 'px';
    rect.style.paddingBottom = rectHeight/2 + 'px';
    for(let i = 1; i < 8; i++) {

    } 
}

