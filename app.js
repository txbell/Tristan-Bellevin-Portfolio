// IDEA: Auto generate the boxes of color around the elements in the home.html
// How it would work: I preset the possible column and row values for the grid-row and grid-column positions,
// then I create an empty div, to which I add a randomly selected column and row value,
//  as well as a random background color (maybe from a preset collection)

// array of objects that contain possible row and column values for each box
console.log(window.location)
if (window.location.pathname === "/Tristan-Bellevin-Portfolio/home.html") {
const boxArr = [{row: "1/ span 5", column: "1/span 3",}, {row: "1/span 2", column: "6/span 3",}, {row: "1/span 4", column: "9/span 2",}
    , {row: "5/span 3", column: "7/span 4",}, {row: "8/span 3", column: "8/span 3",}, {row: "9/span 2", column: "4/span 4",}
    , {row: "8/span 3", column: "1/span 3",}, {row: "6/span 2", column: "1/span 2",}, {row: "1/span 2", column: "4/span 2",}
    , {row: "3/span 2", column: "6/span 1",}, {row: "5/span 1", column: "4/span 1",}, ]
const bckgrndColor = ["#582f0e", "#7f4f24", "#936639", "#a68a64", "#b6ad90", "#c2c5aa", "#a4ac86", "#656d4a", "#414833", "#333d29"]

if (window.innerWidth > 750 && window.innerWidth < 1000) {
    document.getElementById('txbImg').style.height = "30vh";
    document.getElementById('txbImg').style.gridRowStart = "5";
} else if (window.innerWidth > 1000) {
    document.getElementById('txbImg').style.height = "40vh";
    document.getElementById('txbImg').style.gridRowStart = "4";
    document.getElementById('resume').style.gridRow = "2/span 2";
    boxArr[8].row = "1/span 1"
    boxArr[9].row = "3/span 1"
    boxArr[10].row = "4/span 2"
} else if (window.innerWidth < 750) {
    boxArr[10].column = "4/span 3"
}

// function that creates an empty div with an id of "box " + its number, then adds a grid position, 
// then adds a background color, then adds it as a child of the body.
function makeDiv (x) {
    const deev = document.createElement('div')
    const bod = document.body
    deev.setAttribute('id', `colrBox${x}`)
    deev.style.gridRow = boxArr[x].row;
    deev.style.gridColumn = boxArr[x].column;
    deev.style.backgroundColor = bckgrndColor[Math.floor(Math.random() * bckgrndColor.length)]
    bod.append(deev)
}

for (let i = 0; i < boxArr.length; i++) {
    makeDiv(i)
}
} else if (window.location.pathname === "/Tristan-Bellevin-Portfolio/projects.html") {
    // Burgah Modal
    const Burgah = document.getElementById('BurgahBar')
    const modalBurgah = document.getElementById('modalBurgah')
    let openB = false;

    Burgah.addEventListener('click', Borgir)
    function Borgir () {
        if (openB === false) {
            modalBurgah.style.display = 'block';
            openB = true;
        } else {
            modalBurgah.style.display = 'none'
            openB = false
        }
    }

    // Proj Modals
    const openProj1 = document.getElementById('proj1')
    const modalP1 = document.getElementsByClassName('projMod')
    const closeP1 = document.getElementById('close1')

    openProj1.addEventListener('click', openP1)
    function openP1 () {
        console.log(modalP1)
        modalP1[0].style.display = 'block'
    }
    function byeP1 () {
        modalP1[0].style.display = 'none'
    }
    closeP1.addEventListener('click', byeP1)
} else if (window.location.pathname === "/Tristan-Bellevin-Portfolio/about-me.html") {
    // Burgah Modal
    const Burgah = document.getElementById('BurgahBar')
    const modalBurgah = document.getElementById('modalBurgah')
    let openB = false;

    Burgah.addEventListener('click', Borgir)
    function Borgir () {
        if (openB === false) {
            modalBurgah.style.display = 'block'
            openB = true
        } else {
            modalBurgah.style.display = 'none'
            openB = false
        }
    }

    // Hobbies Carousel
    let currentImgIndex = 0;
    let previousImgIndex = 0;
    const main = document.getElementsByClassName('hobTxt');
    const sub = document.getElementsByClassName('hobInfo');


    const next = document.getElementById('abtNext')    
    next.addEventListener('click', () => {
        moveImage(1)
    })

    const prev = document.getElementById('abtPrev')    
    prev.addEventListener('click', () => {
        moveImage(-1)
    })

    function moveImage (dir) {
        previousImgIndex = currentImgIndex;
        currentImgIndex = currentImgIndex + dir
        if (currentImgIndex >= main.length) {
            currentImgIndex = 0;
        } else if (currentImgIndex < 0) {
            currentImgIndex = main.length - 1;
        }
        console.log(previousImgIndex)
        console.log(document.getElementsByClassName('hobTxt'))
        main[previousImgIndex].style.display = 'none'
        main[currentImgIndex].style.display = 'block'
        sub[previousImgIndex].style.display = 'none'
        sub[currentImgIndex].style.display = 'block'
    }

} else if (window.location.pathname === "/Tristan-Bellevin-Portfolio/resume.html") {
    // Burgah Modal
    const Burgah = document.getElementById('BurgahBar')
    const modalBurgah = document.getElementById('modalBurgah')
    let openB = false;

    Burgah.addEventListener('click', Borgir)
    function Borgir () {
        if (openB === false) {
            modalBurgah.style.display = 'block'
            openB = true
        } else {
            modalBurgah.style.display = 'none'
            openB = false
        }
    }
}

console.log("JS ran")