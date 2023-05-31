const containerDiv = document.querySelector('#container #grid');
let i = 1;
let r = 1;
let y = 1;  
let pixelHeight = '';
let pixelWidth = '';
let pixels = 0;
let rows = 25;

function getSize() {
    if (document.getElementById('mid').classList.contains('pressed')) {
        pixelHeight = '31px';
        pixelWidth = '32px';
        pixels = 30;
        rows = 14;
        
    } else if (document.getElementById('big').classList.contains('pressed')) {
        pixelHeight = '51px';
        pixelWidth = '48px';    
        pixels = 20; 
        rows = 9;  

    } else if (document.getElementById('sml').classList.contains('pressed')) {
        pixelHeight = '16px';
        pixelWidth = '16px';
        pixels = 60;   
        rows = 25;         
    }
}

function createRows() {

    const gridRow = document.createElement('div');
    gridRow.classList.add('row');
    gridRow.style.width = '900px';
    gridRow.style.margin = '0 auto';
    gridRow.style.display = "flex";
    containerDiv.appendChild(gridRow);
    console.log('First I is' + i);
    getSize();
    
    do {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.setAttribute('id', 'cell' + y);
        div.style.width = pixelWidth;
        div.style.height = pixelHeight;       
        gridRow.appendChild(div);
        i = i + 1;
        y = y + 1;
        
    }  while (i < pixels);
  

}

function etchFill(){

    var cell = document.querySelectorAll('.cell')
    for (let c = 0; c < cell.length; c++) {
        cell[c].addEventListener('mouseover' , function() {
            cell[c].classList.remove('coloured');
            cell[c].classList.add('etched');
            cell[c].style.backgroundColor = '#333';
            
        });
    };
};

function colourFill(){

    const rgb = () => {
        let rValue = Math.floor(Math.random() * 256); 
        let gValue = Math.floor(Math.random() * 256); 
        let bValue = Math.floor(Math.random() * 256); 
        return 'rgb(' + rValue + ',' + gValue + ',' + bValue + ')';
    };

    console.log('colour chosen is ' + rgb())

    var cell = document.querySelectorAll('.cell')
    for (let c = 0; c < cell.length; c++) {
        cell[c].addEventListener('mouseover' , function() {
            cell[c].classList.remove('etched');
            cell[c].classList.add('coloured');  
            if (cell[c].classList.contains('coloured')) {
                cell[c].style.backgroundColor = rgb();}   
        });

        
    };

    
};

function erase(){

    var cell = document.querySelectorAll('.cell')
    for (let c = 0; c < cell.length; c++) {
        cell[c].addEventListener('mouseover' , function() {
            cell[c].classList.remove('etched');
            cell[c].classList.remove('coloured');
            cell[c].style.backgroundColor = '#d3d3d3';
            
        });
    };
};

function reset() {
    if (i === pixels) {
        i = 1;
    }

    if (r === rows) {
        r = 1;
    }
}

function build() {
    do {
        createRows();
        reset();
        r = r + 1;
    } while (r < rows);
}

build();
etchFill();   

const clearBtn = document.getElementById('clrBtn');
clearBtn.onclick = () => rebuild();
eraseBtn.onclick = () => erase();
fillBtn.onclick = () => etchFill();
colrBtn.onclick = () => colourFill();


function clear () {
    containerDiv.innerHTML = ' ';
}

function rebuild() {

    clear();
    reset();
    build();
    etchFill();
    
}

function changeSize(elem) {
    
    var sizeBtn = document.querySelectorAll('.sizeBtn')
    for (let sb = 0; sb < sizeBtn.length; sb++) {
            sizeBtn[sb].classList.remove('pressed');
        }

        elem.classList.add('pressed');
        rebuild()

    }



const rgb = () => {
    let rValue = Math.floor(Math.random() * 256); 
    let gValue = Math.floor(Math.random() * 256); 
    let bValue = Math.floor(Math.random() * 256); 
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};









