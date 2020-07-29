addRoot = () => {
    const root = document.querySelector(".tree-container");
    root.append(tree.content.cloneNode(true));
    document.body.append(root);

    document.querySelectorAll('.tree__button-close').forEach(e => {
        console.log(e);
        e.addEventListener('click', function(e){
            closeTreeBranch(e.target);
        });
    });
    
    document.querySelectorAll('.tree__button-open').forEach(e => {
        console.log(e);
        e.addEventListener('click', function(e){
            openTreeBranch(e.target);
        });
    });
}



closeTreeBranch = (btn) => {
    const btnClose = btn;
    const root = btnClose.closest(".tree__root");
    console.log(root);
    const btnOpen = btn.nextSibling;
    const content = root.firstChild;
    btnOpen.classList.remove('hidden');
    btnClose.classList.add('hidden');
    content.classList.add('hidden');
    
}

openTreeBranch = (btn) => {
    const btnOpen = btn;
    const root = btnOpen.closest(".tree__root");
    console.log(root);
    const btnClose = btn.previousSibling;
    const content = root.firstChild;
    btnClose.classList.remove('hidden');
    btnOpen.classList.add('hidden');
    content.classList.remove('hidden');
}

// document.querySelectorAll('.tree__button-close').forEach(e => {
//     console.log(e);
//     e.addEventListener('click', function(e){
//         closeTreeBranch(e.target);
//     });
// });

// document.querySelectorAll('.tree__button-open').forEach(e => {
//     console.log(e);
//     e.addEventListener('click', function(e){
//         openTreeBranch(e.target);
//     });
// });

window.onload = addRoot();
