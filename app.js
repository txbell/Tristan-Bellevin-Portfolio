// IDEA: Auto generate the boxes of color around the elements in the home.html
// How it would work: I preset the possible column and row values for the grid-row and grid-column positions,
// then I create an empty div, to which I add a randomly selected column and row value,
//  as well as a random background color (maybe from a preset collection)

// array of objects that contain possible row and column values for each box
console.log(window.location.pathname)
if (sessionStorage.getItem('number') === null) {
    sessionStorage.setItem('number', '0')
}
if (window.location.pathname === "/Tristan-Bellevin-Portfolio/home.html") {

// creating array of grid space I want the boxes to take up
const boxArr = [ {row: "1/ span 5", column: "1/span 3",}, {row: "1/ span 1", column: "4/span 2",}, 
    {row: "1/ span 3", column: "6/span 2",}, {row: "1/ span 2", column: "8/span 3",}, {row: "3/ span 2", column: "10/span 1",}, 
    {row: "5/ span 3", column: "8/span 2",}, {row: "5/ span 6", column: "10/span 1",}, {row: "8/ span 3", column: "8/span 2",}, 
    {row: "9/ span 2", column: "4/span 4",},  {row: "8/ span 3", column: "1/span 3",}, {row: "6/ span 2", column: "1/span 1",},]

// creating array with colors
const bckgrndColor = ["#ffffff", "rgba(93, 177, 223, 0.95)", "rgb(20, 0, 123)"]

// If statement tests what the window width is upon page load
if (window.innerWidth > 768 && window.innerWidth < 992) {
    for (let i = 0; i < boxArr.length; i++) {
        makeDiv(i)
    }
} else if (window.innerWidth > 992) {
    boxArr.push({row: "4/ span 2", column: "4/span 1",}, {row: "5/ span 3", column: "7/span 1",}, {row: "3/ span 1", column: "6/span 1",},)
    boxArr[2].row = '1/span 2'
    boxArr[4].column = '9/span 2'
    boxArr[10].column = '1/span 2'
    for (let i = 0; i < boxArr.length; i++) {
        makeDiv(i)
    }
} else if (window.innerWidth < 768) {
    document.getElementById('prjcts').style.gridColumn = "2/span 2";
    for (let i = 0; i < boxArr.length; i++) {
        makeDiv(i)
    }
}
console.log(document.getElementsByClassName('clrBxs'))

// function that creates an empty div with an id of "box " + its number, then adds a grid position, 
// then adds a background color, then adds it as a child of the body.
function makeDiv (x) {
    const deev = document.createElement('div')
    const bod = document.body
    deev.setAttribute('id', `colrBox${x}`)
    deev.setAttribute('class', 'clrBxs')
    deev.style.gridRow = boxArr[x].row;
    deev.style.gridColumn = boxArr[x].column;
    deev.style.backgroundColor = bckgrndColor[Math.floor(Math.random() * bckgrndColor.length)]
    if (x === 6) {
        deev.addEventListener('click', () => {
    
            if (sessionStorage.getItem('number') === "0") {
            sessionStorage.setItem('meme', "true")
            sessionStorage.setItem('number', '1')
            } else if (sessionStorage.getItem('number') === "1") {
                sessionStorage.setItem('meme', 'false')
                sessionStorage.setItem('number', '0')
            }
            console.log(sessionStorage.getItem('meme'))
        })
    }
    bod.append(deev)
}


} else if (window.location.pathname === "/Tristan-Bellevin-Portfolio/projects.html") {
    // Burgah Modal
    const Burgah = document.getElementById('BurgahBar')
    const modalBurgah = document.getElementById('modalBurgah')
    let openB = false;

    document.getElementById('myVideo').pause()
    Burgah.addEventListener('click', Borgir)
    function Borgir () {
        if (openB === false) {
            modalBurgah.style.display = 'block'
            if (sessionStorage.getItem('meme') === "true") {
                document.getElementById('daRest').style.opacity = '.25'
                document.getElementById('myVideo').style.display = 'block'
                document.getElementById('myVideo').play()
                document.querySelector(':root').style.setProperty('--inPgBkgrClr', 'red')
            }
            openB = true
        } else {
            modalBurgah.style.display = 'none'
            if (sessionStorage.getItem('meme') === "true") {
                document.getElementById('myVideo').style.display = 'none'
                document.getElementById('myVideo').pause()
                document.getElementById('daRest').style.opacity = '1'
                document.querySelector(':root').style.setProperty('--inPgBkgrClr', 'rgba(93, 177, 223, 0.95)')
            }
            openB = false
        }
    }



    const projects = document.getElementsByClassName('projImg');
    const projTxts = document.getElementsByClassName('projTxt');
    const projLnk = document.getElementById('projGit')
    const projTitle = ["Hangman", "Space Battle", "Portfolio", "Rock, Paper, Scissors"];
    const projDesc = ["Hangman Game in Browser", "Space Battle in Console", "This Website", "Simple game"]
    const projGit = ["https://git.generalassemb.ly/txbell/DLVR-Hangman", "https://git.generalassemb.ly/txbell/DLVR-Space-Battle", "https://github.com/txbell/Tristan-Bellevin-Portfolio", "https://codepen.io/txbell/pen/NWBBNqO"]
    let currentProj = 0;

    for (let i = 0; i < projects.length; i++) {
        function openProj (x) {
            for (let d = 0; d < projects.length; d++) {
                projTxts[d].style.display = "none"
            }
            document.getElementsByClassName('projTit')[0].innerText = `Project ${x + 1}: ${projTitle[x]}`
            document.getElementsByClassName('projDesc')[0].innerText = `${projDesc[x]}.`
            console.log(projLnk.outerHTML)
            projLnk.href = projGit[x]
            projTxts[x].style.display = "flex"
            currentProj = x;
        }
        function selectedProj (x) {
            for (let d = 0; d < projects.length; d++) {
                projects[d].style.border = "none"
            }
            projects[x].style.border = "2px solid blue"
        }
        projects[i].addEventListener('click', () => {
            selectedProj(i)
            openProj(i)
        })
    }

    const leftArr = document.getElementsByClassName('lnr lnr-chevron-left col-12 col-lg-1')
    const rightArr = document.getElementsByClassName('lnr lnr-chevron-right col-12 col-lg-1')
    leftArr[0].addEventListener('click', () => {
        if (currentProj === 0) {
            selectedProj(projects.length - 1)
            openProj(projects.length - 1)
        } else {
            selectedProj(currentProj - 1)
            openProj(currentProj - 1)
        }
    })
    rightArr[0].addEventListener('click', () => {
        if (currentProj === projects.length - 1) {
            selectedProj(0)
            openProj(0)
        } else {
            selectedProj(currentProj + 1)
            openProj(currentProj + 1)
        }
    })

} else if (window.location.pathname === "/Tristan-Bellevin-Portfolio/about-me.html") {
    // Burgah Modal
    const Burgah = document.getElementById('BurgahBar')
    const modalBurgah = document.getElementById('modalBurgah')
    let openB = false;
    document.getElementById('myVideo').pause()
    Burgah.addEventListener('click', Borgir)
    function Borgir () {
        if (openB === false) {
            modalBurgah.style.display = 'block'
            if (sessionStorage.getItem('meme') === "true") {
                document.getElementById('myVideo').style.display = 'block'
                document.getElementById('myVideo').play()
                document.getElementById('theRest').style.opacity = '.25'
                document.querySelector(':root').style.setProperty('--inPgBkgrClr', 'red')
            }
            console.log(sessionStorage.getItem('number'))
            console.log(sessionStorage.getItem('meme'))
            openB = true
        } else {
            modalBurgah.style.display = 'none'
            if (sessionStorage.getItem('meme') === "true") {
                document.getElementById('myVideo').style.display = 'none'
                document.getElementById('myVideo').pause()
                document.getElementById('theRest').style.opacity = '1'
                document.querySelector(':root').style.setProperty('--inPgBkgrClr', 'rgba(93, 177, 223, 0.95)')
            }
            console.log(sessionStorage.getItem('number'))
            console.log(sessionStorage.getItem('meme'))
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
    document.getElementById('myVideo').pause()
    console.log(sessionStorage.getItem('meme'))
    Burgah.addEventListener('click', Borgir)
    function Borgir () {
        if (openB === false) {
            modalBurgah.style.display = 'block'
            if (sessionStorage.getItem('meme') === "true") {
                document.getElementById('myVideo').style.display = 'block'
                document.getElementById('myVideo').play()
                document.getElementById('resumeImg').style.opacity = '.25'
                document.querySelector(':root').style.setProperty('--inPgBkgrClr', 'red')
            }
            openB = true
        } else {
            modalBurgah.style.display = 'none'
            if (sessionStorage.getItem('meme') === "true") {
                document.getElementById('myVideo').style.display = 'none'
                document.getElementById('myVideo').pause()
                document.getElementById('resumeImg').style.opacity = '1'
                document.querySelector(':root').style.setProperty('--inPgBkgrClr', 'rgba(93, 177, 223, 0.95)')
            }
            openB = false
        }
    }
}

console.log("JS ran")