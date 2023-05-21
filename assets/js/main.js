const div = document.querySelector(".div");
const para = document.querySelectorAll("p");

const styles = getComputedStyle(document.body)
const bcStyle = styles.backgroundColor
console.log(bcStyle)

for (let i of para) {
    i.style.backgroundColor = bcStyle
    console.log(i)
}
