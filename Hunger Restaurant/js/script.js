let switchId = 1;

galerieSwitch = (id) => {
    switchId = id;
    hideContent();
    setTimeout(showContent, 1000, id);
}

galerieInterval = () => {
    setInterval(autoGalerie, 15000, switchId);
}
autoGalerie = () => {
    if (switchId < 3) {
        console.log("++");
        switchId++;
    }

    else {
        switchId = 1;

    }
    galerieSwitch(switchId);

    
}

hideContent = () => {
    const pic = document.getElementById("switch-picture");
    const txt = document.getElementById("switch-text");
    pic.style = "opacity: 0; transition: opacity 1s, visibility 0s linear 1s;";
    txt.style = "opacity: 0;  transition: opacity 1s, visibility 0s linear 1s;";;
}

showContent = (id) => {
    console.log("switch is working");
    const picGroup = document.getElementById("switch-picture");
    const txtGroup = document.getElementById("switch-text");
    const pic = document.getElementById("switch-picture-content");
    const title = document.getElementById("switch-text-title");
    const txtMain = document.getElementById("switch-text-main");
    const txtAdd = document.getElementById("switch-text-add");
    switch (id) {
        case 1:
            console.log(switchId, "1");
            pic.src = "./img/chef.png";
            picGroup.style = "opacity: 1;  transition: opacity 1s, visibility 0s linear 1s;";;
            txtGroup.style = "opacity: 1;  transition: opacity 1s, visibility 0s linear 1s;";;
            break;
        case 2:
            console.log(switchId, "2");
            pic.src = "./img/pancake.png";
            picGroup.style = "opacity: 1;  transition: opacity 1s, visibility 0s linear 1s;";;
            txtGroup.style = "opacity: 1;  transition: opacity 1s, visibility 0s linear 1s;";;
            break;
        case 3:
            console.log(switchId, "3");
            pic.src = "./img/about-img.png";
            picGroup.style = "opacity: 1;  transition: opacity 1s, visibility 0s linear 1s;";;
            txtGroup.style = "opacity: 1;  transition: opacity 1s, visibility 0s linear 1s;";;
            break;
            
    }

}