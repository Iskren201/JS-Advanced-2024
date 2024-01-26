function extractText() {
  const list = document.getElementById("items");
  let reslut = [];

  const items = Array.from(list.children);
  for (let item of items) {
    reslut.push(item.textContent);
  }

  const textArea = document.getElementById("result");
  textArea.value = reslut.join("\n");
}
