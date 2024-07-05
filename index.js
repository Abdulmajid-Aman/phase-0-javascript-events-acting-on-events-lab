// Your code here
const dodger = document.getElementById("dodger")

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if(left > 0) {
        dodger.style.left = `${left - 10}px`
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
})


function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "") 
    let right = parseInt(rightNumbers , 10)

    if (right < 360) {
        dodger.style.left = `${right + 10}px`
    }
}


document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
       moveDodgerRight()
    }
})