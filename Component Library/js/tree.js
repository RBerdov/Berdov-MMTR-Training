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
            
            generateRoot(e, elem);
            
            e.content.forEach(e => {
                const treeElem = document.createElement('li');
                treeElem.className = 'tree__main-branch';
                elem.querySelector('.content-container').appendChild(treeElem);
                //Если элементом массива content является подменю (объект)
                if(typeof e == 'object') {
                    generateRoot(e,treeElem);
                    e.content.forEach(el => {
                        const innerTreeElem = document.createElement('li');
                        innerTreeElem.className = 'tree__main-branch';
                        treeElem.querySelector('.content-container').appendChild(innerTreeElem);
                        generateElements(el, innerTreeElem);
                        
                    });
                }
                //Если элементом content массива - строка
                else {
                    generateElements(e, treeElem)
                    
                }
                
                
            });            
            
        });

        elem.onmousedown = function() {
            return;
          };
    }

    //Генерация корня меню
    generateRoot = (e, parent) => {
            const root = document.createElement('ul');
            console.log(root);
            root.className = 'tree__root';
            parent.appendChild(root);
            const toggleBtn = document.createElement('button');
            toggleBtn.classList = 'tree__button-close';
            toggleBtn.textContent = '+';
            toggleBtn.onclick = function(event) {
                toggleTreeBranch(event.target);
            };
            root.appendChild(toggleBtn);
            const contentContainer = document.createElement('div');
            contentContainer.className = 'content-container hidden';
            root.appendChild(contentContainer);
            const treeTitle = document.createElement('span');
            treeTitle.textContent = e.title;
            treeTitle.className = 'tree__main-branch';
            treeTitle.style.fontWeight = 'bold';
            treeTitle.style.display = 'contents';
            toggleBtn.after(treeTitle);
    }

    //Генерация элементов меню
    generateElements = (e, parent) => {
        const treeCheckbox = document.createElement('input');
        treeCheckbox.type = 'checkbox';
        treeCheckbox.name = e;
        treeCheckbox.id = 'confirm';
        treeCheckbox.checked = true;
        treeCheckbox.onchange = function(event) {
            console.log(event.target);
        };
        parent.appendChild(treeCheckbox);
        const treeLabel = document.createElement('span');
        treeLabel.textContent = e;
        treeLabel.style.display = 'contents';
        parent.appendChild(treeLabel);
    }

    //Открытие и закрытие меню
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
        return;
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
