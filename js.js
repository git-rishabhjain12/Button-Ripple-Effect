let btnEl = document.querySelector(".button");

btnEl.addEventListener("mouseover", (event) => {
  console.log(event.pageX - btnEl.offsetLeft);
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
