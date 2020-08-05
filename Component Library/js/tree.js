let treeItem2 = {
    title: 'Menu2',
    content: ['Element', 'Element', 'Element']
}

let treeItem3 = {
    title: 'Menu3',
    content: ['Element', 'Element', 'Element', 'Element']
}

let treeItem1 = {
    title: 'Menu 1',
    content: ['Element', 'Element', 'Element', 'Element', treeItem2, 'Element', 'Element', treeItem3]
}

function Tree(options) {
    let elem;

    getElem = () => {
        if (!elem) render();
        return elem;
    }

    function render() {
        elem = document.getElementById("tree-container");


        options.treeItems.forEach(e => {
            const root = document.createElement('ul');
            console.log(root);
            root.className = 'tree__root';
            elem.appendChild(root);
            const toggleBtn = document.createElement('button');
            toggleBtn.classList = 'tree__button-close';
            toggleBtn.textContent = '+';
            toggleBtn.onclick = function(event) {
                toggleTreeBranch(event.target);
            };
            root.appendChild(toggleBtn);
            const contentContainer = document.createElement('div');
            contentContainer.className = 'hidden';
            root.appendChild(contentContainer);
            const treeTitle = document.createElement('span');
            treeTitle.textContent = e.title;
            treeTitle.className = 'tree__main-branch';
            treeTitle.style.fontWeight = 'bold';
            treeTitle.style.display = 'contents';
            toggleBtn.after(treeTitle);
            
            e.content.forEach(e => {
                const treeElem = document.createElement('li');
                treeElem.className = 'tree__main-branch';
                contentContainer.appendChild(treeElem);
                if(typeof e == 'object') {
                    const innerRoot = document.createElement('ul');
                    console.log(innerRoot);
                    innerRoot.className = 'tree__root';
                    treeElem.appendChild(innerRoot);
                    const innerBtn = document.createElement('button');
                    innerBtn.classList = 'tree__button-close';
                    innerBtn.textContent = '+';
                    innerBtn.onclick = function(event) {
                        toggleTreeBranch(event.target);
                    };
                    innerRoot.appendChild(innerBtn);
                    const innerTitle = document.createElement('li');
                    innerTitle.textContent = e.title;
                    innerTitle.className = 'tree__title';
                    innerTitle.style.fontWeight = 'bold';
                    innerTitle.style.display = 'contents';
                    innerBtn.after(innerTitle);
                    const innerContainer = document.createElement('div');
                    innerContainer.className = 'hidden';
                    innerRoot.appendChild(innerContainer);
                    e.content.forEach(el => {
                        const innerTreeElem = document.createElement('li');
                        innerTreeElem.className = 'tree__main-branch';
                        innerContainer.appendChild(innerTreeElem);
                        const innerCheckbox = document.createElement('input');
                        innerCheckbox.type = 'checkbox';
                        innerCheckbox.name = el;
                        innerCheckbox.id = 'confirm';
                        innerCheckbox.checked = true;
                        innerCheckbox.onclick = function(event) {
                            if(event.target.checked = true) {
                                console.log(event.target);
                                innerCheckbox.checked = false;
                            }
                            else {
                                console.log('checked');
                                innerCheckbox.value = true;
                            }
                        };
                        innerTreeElem.appendChild(innerCheckbox);
                        const innerTreeLabel = document.createElement('span');
                        innerTreeLabel.textContent = el;
                        innerTreeLabel.style.display = 'contents';
                        innerTreeElem.appendChild(innerTreeLabel);
                        
                    });
                   

                }

                else {
                    const treeCheckbox = document.createElement('input');
                    treeCheckbox.type = 'checkbox';
                    treeCheckbox.name = e;
                    treeCheckbox.id = 'confirm';
                    treeCheckbox.checked = true;
                    treeCheckbox.onclick = function(event) {
                        if(event.target.checked = true) {
                            console.log('unchecked');
                            event.target.checked = false;
                        }
                        else {
                            console.log('checked');
                            event.target.checked = true;
                        }
                    };
                    treeElem.appendChild(treeCheckbox);
                    const treeLabel = document.createElement('span');
                    treeLabel.textContent = e;
                    treeLabel.style.display = 'contents';
                    treeElem.appendChild(treeLabel);
                    
                }
                
                
            });
            
            


            
            
            
        });

        elem.onmousedown = function() {
            return false;
          };
    }

    toggleTreeBranch = (btn) => {
        const root = btn.closest(".tree__root");
        console.log(root);
        const content = root.lastChild;
        if(btn.textContent == '+'){
            btn.textContent = '-';
        }
        else {
            btn.textContent = '+';
        }
        content.classList.toggle('hidden');
            
    }

    this.getElem = getElem;

    getElem().onclick = function() {
        return false;
    };
}

const tree = new Tree({
    treeItems: [treeItem1]
});


//Старый код до реализации классов (через template)

// addRoot = () => {
//     const root = document.querySelector(".tree-container");
//     root.append(tree.content.cloneNode(true));
//     document.body.append(root);

//     document.querySelectorAll('.tree__button-close').forEach(e => {
//         console.log(e);
//         e.addEventListener('click', function(e){
//             closeTreeBranch(e.target);
//         });
//     });
    
//     document.querySelectorAll('.tree__button-open').forEach(e => {
//         console.log(e);
//         e.addEventListener('click', function(e){
//             openTreeBranch(e.target);
//         });
//     });
// }



// closeTreeBranch = (btn) => {
//     const btnClose = btn;
//     const root = btnClose.closest(".tree__root");
//     console.log(root);
//     const content = root.firstChild;
//     btnClose.classList.toggle('up')
//     content.classList.toggle('hidden');
    
// }

// openTreeBranch = (btn) => {
//     const btnOpen = btn;
//     const root = btnOpen.closest(".tree__root");
//     console.log(root);
//     const btnClose = btn.previousSibling;
//     const content = root.firstChild;
//     btnClose.classList.remove('hidden');
//     btnOpen.classList.add('hidden');
//     content.classList.remove('hidden');
// }

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

// window.onload = addRoot();
