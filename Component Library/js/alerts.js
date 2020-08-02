showError = () => {
    const err = document.createElement("div");
    err.innerHTML = "<div class='alert alerts__error'><span>Ошибка!</span><span class='alerts__close'>x</span></div>"
    document.body.append(err);
    const darkScreen = document.createElement("div");
    darkScreen.innerHTML = '<div id="darker" style="position: fixed; width:100%; height:100%; background:#000;  top: 0; padding: 0; z-index:3; opacity:0.2; "></div>';
    document.body.append(darkScreen);
    document.querySelectorAll(".alerts__close").forEach(e => {
        console.log(e);
        e.addEventListener('click', function(e){
            closeAlert();
        });
    });
}
 

showConfirm = () => {
    const conf = document.createElement("div");
    conf.innerHTML = "<div class='alert alerts__confirm'><span>Подтвердить?</span><span class='alerts__close'>x</span><span class='alerts__confirm-accept'>Да</span><span class='alerts__confirm-decline'>Нет</span></div>"
    document.body.append(conf);
    const darkScreen = document.createElement("div");
    darkScreen.innerHTML = '<div id="darker" style="width:100%; height:100%; background:#000; position: fixed; top: 0; padding: 0; z-index:3; opacity:0.2; "></div>';
    document.body.append(darkScreen);
    document.querySelectorAll(".alerts__close").forEach(e => {
        console.log(e);
        e.addEventListener('click', function(e){
            closeAlert();
        });
    });

    document.querySelectorAll(".alerts__confirm-accept").forEach(e => {
        console.log(e);
        e.addEventListener('click', function(e){
            acceptConfirm();
        });
    });

    document.querySelectorAll(".alerts__confirm-decline").forEach(e => {
        console.log(e);
        e.addEventListener('click', function(e){
            declineConfirm();
        });
    });
}

acceptConfirm = () => {
    document.querySelector(".alert").remove();
    document.querySelector("#darker").remove();
}

declineConfirm = () => {
    document.querySelector(".alert").remove();
    document.querySelector("#darker").remove();
}


closeAlert = () => {
    document.querySelector(".alert").remove();
    document.querySelector("#darker").remove();
}


document.querySelectorAll(".test-error").forEach(e => {
    console.log(e);
    e.addEventListener('click', function(e){
        showError();
    });
});

document.querySelectorAll(".test-confirm").forEach(e => {
    console.log(e);
    e.addEventListener('click', function(e){
        showConfirm();
    });
});
