const inner = document.querySelector('.inner');


kvad.onclick = function () {
    var kolvoOBJ = document.getElementById('vvod').value
    for (var i = 0; i < kolvoOBJ ; i++)
    {
       var kvadrat = document.createElement('div');
        kvadrat.classList.add('kvadratik');
        inner.appendChild(kvadrat);
        kvadrat.style.height = Math.random() * 200 + "px";
        kvadrat.style.width = kvadrat.style.height ;
        kvadrat.style.top = Math.random() * 800 + "px";
        kvadrat.style.left = Math.random() * 800 + "px";
        kvadrat.setAttribute('onclick', 'setColor(this)');
        kvadrat.setAttribute('ondblclick', 'deleteObj(this)');
        
        
    }
}

treug.onclick = function () {
    var kolvoOBJ = document.getElementById('vvod').value
    for (var i = 0; i < kolvoOBJ; i++)
    {
        var treug = document.createElement('div');
        treug.classList.add('treug');
        inner.appendChild(treug)
        treug.style.top = Math.random() * 800 + "px";
        treug.style.left = Math.random() * 800 + "px"
        treug.setAttribute('onclick', 'setColorTR(this)');
        treug.setAttribute('ondblclick', 'deleteObj(this)');
       
    }
}

krug.onclick = function () {
    var kolvoOBJ = document.getElementById('vvod').value
    for (var i = 0; i < kolvoOBJ; i++)
    {
        var krug = document.createElement('div');
        krug.classList.add('krug');
        inner.appendChild(krug)
        krug.style.height = Math.random() * 200 + "px";
        krug.style.width = krug.style.height;
        krug.style.top = Math.random() * 800 + "px";
        krug.style.left = Math.random() * 800 + "px"
        krug.setAttribute('onclick', 'setColor(this)');
        krug.setAttribute('ondblclick', 'deleteObj(this)');
        
    }
}




function deleteObj(elem) {
    elem.remove();
}

function setColor(elem) {
    elem.style.background = 'yellow';
    elem.style.opacity = '0.7'
}

function setColorTR(elem) {
    elem.style.borderBottom = '50px solid yellow';
    elem.style.opacity = '0.7'
}

//Я добавлял эти две функции, думая, что нужно возвращать исходный цвет у блоков. Не удалил т.к. подумал что вдруг пригодится
function removeColorTR(elem) {
    elem.style.border = '';
    elem.style.opacity = ''
}

function removeColor(elem) {
    elem.style.background = '';
    elem.style.opacity = ''
}
