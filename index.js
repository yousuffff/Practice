const boxs = document.querySelectorAll('.box')
const random = function changeColor() {
  const hex = "0123456789ABCDEFabcdef"
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)]
    console.log(hex)
  }
  return color;
};
boxs.forEach(function (box) {
  box.style.backgroundColor = random();
  box.style.color = random();

})