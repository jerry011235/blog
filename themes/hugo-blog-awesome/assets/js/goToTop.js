const gttButton = document.getElementById("totop");

window.onscroll = () =>
{
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    gttButton.style.visibility = "visible";
    gttButton.style.opacity = "1";
  } else {
    gttButton.style.visibility = "hidden";
    gttButton.style.opacity = "0";
  }
}

gttButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0, 
    behavior: "smooth"
  })
})