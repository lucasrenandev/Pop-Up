const btnBox = document.querySelector(".btnPop")
const boxPop = document.querySelector(".container_PopUp")
const closePop = document.querySelector(".btnClose")

btnBox.addEventListener("click", (event) => {
    event.preventDefault()
    boxPop.classList.add("active")
})

closePop.addEventListener("click", () => {
    boxPop.classList.remove("active")
})