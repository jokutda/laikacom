const body = document.body
body.classList.add("hidden")



const pwBtn = document.querySelector("#password-btn")
const pwInp = document.querySelector("#password-inp")
const pwCont = document.querySelector("#pw-container")

pwBtn.addEventListener("click", function () {
    if (pwInp.value == "67iloveyou") {
        unBlip()
    }
    
})

function unBlip() {
    body.classList.remove("hidden")
    pwCont.classList.remove("visible")
    pwCont.classList.add("hidden")
}



const arrowBtn = document.querySelector("#arrow-img")
const nightBallImg = document.querySelector("#night-ball-img")
arrowBtn.addEventListener("click", function () {
    nightBallImg.src = "images/night_at_bal.jpeg"
})


let run = true
let ftImages = []

while (run) {
    let img = document.querySelector(".unprocessed")
    if (img) {
        img.classList = ["ft-img"]

        ftImages.push(img)
    } else {
        run = false
    }
}



for (let i = 0; i < ftImages.length; i++) {
ftImages[i].addEventListener("mouseenter", function () {
    ftImages[i].src = "images/ft_2.jpeg"
})

ftImages[i].addEventListener("mouseleave", function () {
    ftImages[i].src = "images/ft_1.jpeg"
})}




