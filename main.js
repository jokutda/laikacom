const bodyEl = document.querySelector("#body")
const bodyElHTML = bodyEl.innerHTML
bodyEl.innerHTML = ""
console.log("blipped")



const pwBtn = document.querySelector("#password-btn")
const pwInp = document.querySelector("#password-inp")

pwBtn.addEventListener("click", function () {
    if (pwInp.value == "67iloveyou") {
        unBlip()
    }
    
})


function unBlip() {
    bodyEl.innerHTML = bodyElHTML
    document.body.removeChild(pwBtn)
    document.body.removeChild(pwInp)
    console.log("unblipped")
}



const arrowBtn = document.querySelector("#arrow-img")
const nightBallImg = document.querySelector("#night-ball-img")
arrowBtn.addEventListener("click", function () {
    nightBallImg.src = "images/night_at_bal.jpeg"
})


let run = true
let ftImages = []

while (run) {
    let img = document.querySelector(".ft-img")
    if (img) {
        img.classList = ["ft-img-processed"]

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
    })

}