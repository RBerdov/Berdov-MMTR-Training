const prevParams = {
    x: 0,
    y: 0,
    rectWidth: 0,
    rectHeight: 0
}

drawRectangles = (x, y, rectWidth, rectHeight) => {
    let w = window.innerWidth/2 + rectWidth;
    console.log(w);
    let h = window.innerHeight/2 + rectHeight;
    console.log(h);
    const rect = document.querySelector('.rectangle');
    console.log(rect);
    setRectangle(x, y, rectWidth, rectHeight, rect);
    rect.style.border = '1px solid red';
    rect.style.zIndex = '2';
    prevParams.x = x;
    prevParams.y = y;
    prevParams.rectWidth = rectWidth;
    prevParams.rectHeight = rectHeight;
    let nextX = x - (13 * rectWidth);
    let nextY = y - (13 * rectHeight);
    for(let i = 1; i < 25; i++) {
        
            for(let i2 = 1; i2 < 25; i2++) {
                const newRect = document.createElement('div');
                newRect.className = 'rectangle';
                nextX = nextX + rectWidth;
                setRectangle(nextX, nextY, rectWidth, rectHeight, newRect);
                document.querySelector('.body').appendChild(newRect);
            }
        
        
        nextY = nextY + rectHeight;
        nextX = x - (13 * rectWidth);
        
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

editRectangle = () => {
    console.log(prevParams);
    let w = window.innerWidth/2 + rectWidth;
    console.log(w);
    let h = window.innerHeight/2 + rectHeight;
    console.log(h);
    const rect = document.querySelector('.rectangle');
    console.log(rect);
    setRectangle(x, y, rectWidth, rectHeight, rect);
    rect.style.border = '1px solid red';
    rect.style.zIndex = '2';
    prevParams.x = x;
    prevParams.y = y;
    prevParams.rectWidth = rectWidth;
    prevParams.rectHeight = rectHeight;
    let nextX = x - (13 * rectWidth);
    let nextY = y - (13 * rectHeight);
    for(let i = 1; i < 25; i++) {
        
            for(let i2 = 1; i2 < 25; i2++) {
                const newRect = document.createElement('div');
                newRect.className = 'rectangle';
                nextX = nextX + rectWidth;
                setRectangle(nextX, nextY, rectWidth, rectHeight, newRect);
                document.querySelector('.body').appendChild(newRect);
            }
        
        
        nextY = nextY + rectHeight;
        nextX = x - (13 * rectWidth);
        
    } 
}

document.querySelector('.edit-rectangle').addEventListener('submit', function(event) {
    event.preventDefault();
    editRectangle();
}); 

