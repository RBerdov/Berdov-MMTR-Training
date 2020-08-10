drawRectangles = (x, y, rectWidth, rectHeight) => {
    let w = window.innerWidth;
    console.log(w/2);
    let h = window.innerHeight;
    console.log(h/2);
    const rect = document.querySelector('.rectangle');
    console.log(rect);
    rect.style.top = h/2 + y +'px';
    rect.style.left = w/2 + x + 'px';
    rect.style.paddingRight = rectWidth/2 + 'px';
    rect.style.paddingLeft = rectWidth/2 + 'px';
    rect.style.paddingTop = rectHeight/2 + 'px';
    rect.style.paddingBottom = rectHeight/2 + 'px';
    let nextX = x;
    let nextY = y;
    for(let i = 1; i < 25; i++) {
        if(i == 1) {
            for(let i2 = 1; i2 < 24; i2++) {
                const newRect = document.createElement('div');
                newRect.className = 'rectangle';
                nextX = nextX + rectWidth;
                newRect.style.top = h/2 + nextY + 'px';
                newRect.style.left = w/2 + nextX + 'px';
                newRect.style.paddingRight = rectWidth/2 + 'px';
                newRect.style.paddingLeft = rectWidth/2 + 'px';
                newRect.style.paddingTop = rectHeight/2 + 'px';
                newRect.style.paddingBottom = rectHeight/2 + 'px';
                document.querySelector('.body').appendChild(newRect);
            }
        }
        else {
            for(let i2 = 1; i2 < 25; i2++) {
                const newRect = document.createElement('div');
                newRect.className = 'rectangle';
                nextX = nextX + rectWidth;
                newRect.style.top = h/2 + nextY + 'px';
                newRect.style.left = w/2 + nextX + 'px';
                newRect.style.paddingRight = rectWidth/2 + 'px';
                newRect.style.paddingLeft = rectWidth/2 + 'px';
                newRect.style.paddingTop = rectHeight/2 + 'px';
                newRect.style.paddingBottom = rectHeight/2 + 'px';
                document.querySelector('.body').appendChild(newRect);
            }
        }
        
        nextY = nextY + rectHeight;
        nextX = x - rectWidth;
        
    } 
}

