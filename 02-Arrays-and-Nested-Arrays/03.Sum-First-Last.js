function slove(arr) {
  let firsEl = Number(arr[0]);
  let lastEl = Number(arr.slice(-1));

  let result = firsEl + lastEl;

  console.log(result);
}

slove(["20", "30", "40"]);
