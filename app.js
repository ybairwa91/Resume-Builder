function addNewWeField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.setAttribute("placeholder", "Enter here");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewaqField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.setAttribute("placeholder", "Enter here");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");
  aqOb.insertBefore(newNode, aqAddButtonOb);
}
