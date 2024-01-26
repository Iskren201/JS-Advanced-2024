function toggle() {
  let show = document.getElementById("extra");
  let btn = document.getElementsByClassName("button")[0];

  if (show.style.display == "none" || show.style.display === "") {
    show.style.display = "block";
    btn.textContent = "Less";
  } else {
    show.style.display = "none";
    btn.textContent = "More";
  }
}
