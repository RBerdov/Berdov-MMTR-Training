getRandomColor = () =>  Math.floor(Math.random() * Math.floor(255));

changeLabelColor = (id) => {
    
    document.getElementById(id).style.color = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;

};

