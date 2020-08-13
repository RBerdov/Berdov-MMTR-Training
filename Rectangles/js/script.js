drawRectangles = (x, y, rectWidth, rectHeight) => {
    let w = window.innerWidth/2 + rectWidth;
    console.log(w);
    let h = window.innerHeight/2 + rectHeight;
    console.log(h);
    const rect = document.querySelector('.rectangle');
    console.log(rect);
    setRectangle(x, y, rectWidth, rectHeight, rect)
    let nextX = x;
    let nextY = y;
    for(let i = 1; i < 25; i++) {
        if(i == 1) {
            for(let i2 = 1; i2 < 24; i2++) {
                const newRect = document.createElement('div');
                newRect.className = 'rectangle';
                nextX = nextX + rectWidth;
                setRectangle(nextX, nextY, rectWidth, rectHeight, newRect);
                document.querySelector('.body').appendChild(newRect);
            }
        }
        else {
            for(let i2 = 1; i2 < 25; i2++) {
                const newRect = document.createElement('div');
                newRect.className = 'rectangle';
                nextX = nextX + rectWidth;
                setRectangle(nextX, nextY, rectWidth, rectHeight, newRect);
                document.querySelector('.body').appendChild(newRect);
            }
        }
        
        nextY = nextY + rectHeight;
        nextX = x - rectWidth;
        
    } 
}

setRectangle = (x, y, w, h, rectangle) => {
    rectangle.style.top = window.innerHeight/2 + y +'px';
    rectangle.style.left = window.innerWidth/2 + x + 'px';
    rectangle.style.paddingRight = w/2 + 'px';
    rectangle.style.paddingLeft = w/2 + 'px';
    rectangle.style.paddingTop = h/2 + 'px';
    rectangle.style.paddingBottom = h/2 + 'px';
}

editRectangle = (x, y, w, h) => {
    
}

