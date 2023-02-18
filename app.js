// IDEA: Auto generate the boxes of color around the elements in the home.html
// How it would work: I preset the possible column and row values for the grid-row and grid-column positions,
// then I create an empty div, to which I add a randomly selected column and row value,
//  as well as a random background color (maybe from a preset collection)

// array of objects that contain possible row and column values for each box
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