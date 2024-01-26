function showText() {
  // Get the text element by its ID
  var textElement = document.getElementById("text");

  // Toggle the display style between 'none' and 'inline' (or any other desired style)
  if (
    textElement.style.display === "none" ||
    textElement.style.display === ""
  ) {
    textElement.style.display = "inline";
  } else {
    textElement.style.display = "none";
  }

  // Hide the "Read more" link after clicking
  var moreLink = document.getElementById("more");
  moreLink.style.display = "none";
}
