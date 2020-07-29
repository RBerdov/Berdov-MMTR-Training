addAccordion = () => {
    const root = document.querySelector(".accordion-container");
    root.append(accordion.content.cloneNode(true));
    document.body.append(root);

    document.querySelectorAll(".accordion__item-header").forEach(e => {
        console.log(e);
        e.addEventListener('click', function(e){
            openContent(e.target);
        });
    });
    
}

openContent = (el) => {
    console.log(el);
    document.querySelectorAll(".accordion__item").forEach(e => {
        console.log(e);
        console.log(e.lastChild);
        e.lastChild.style.display = "none";
    });
    const item = el.closest(".accordion__item");
    item.lastChild.style.display = "block";

}

document.querySelectorAll(".accordion__item-header").forEach(e => {
    console.log(e);
    e.addEventListener('click', function(e){
        openContent(e.target);
    });
});

window.onload = addAccordion();

