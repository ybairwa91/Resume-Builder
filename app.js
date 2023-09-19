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

//generating cv
function generateCv() {
  //   console.log("generating cv");
  let nameField = document.getElementById("nameField").value;

  let nameT = document.getElementById("nameT");

  nameT.innerHTML = nameField;

  //direct
  document.getElementById("nameT1").innerHTML = nameField;

  //contact
  let contacts = document.getElementById("contactField").value;
  document.getElementById("contactT").innerHTML = contacts;
  //address
  let addressField = document.getElementById("addressField").value;
  document.getElementById("addressT").innerHTML = addressField;

  //links
  let facebookField = document.getElementById("facebookField").value;
  document.getElementById("fbT").innerHTML = facebookField;

  let linkedField = document.getElementById("LinkedInField").value;
  document.getElementById("linkedT").innerHTML = linkedField;

  let instaField = document.getElementById("instaField").value;
  document.getElementById("instaT").innerHTML = instaField;

  //professional summary
  //objective
  let objectiveField = document.getElementById("objectiveField").value;
  document.getElementById("objectiveT").innerHTML = objectiveField;

  //work experience
  let wes = document.getElementsByClassName("weField");
  //   console.log(wes);

  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  //aq
  let aqs = document.getElementsByClassName("aqField");

  let str1 = "";
  for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = str1;

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

//printcv
function printCv() {
  window.print;
}
