import data from "./data.js";

var addPuppy = event => {
  event.preventDefault();  //Prevent Unnecessary Page Refresh



  // get values from the form
  var newPupName = document.getElementById("PuppyName").value;
  var newPupInfo = document.getElementById("IGUrl").value;
  var newPupPic = document.getElementById("PhotoURL").value;
  var newPupDif = document.getElementById("diff").value;



  // format values into a new object
  var newPup = {
    name: newPupName,
    info: newPupInfo,
    pic: newPupPic,
    breed: newPupDif,
    id: data.length
  };



  // // add-data
  // data.push(newPup);

  var div = document.createElement("div");
  var h4 = document.createElement("h4");
  var a = document.createElement("a");
  var img = document.createElement("img");
  var body = document.getElementById("body");
  div.appendChild(h4);
  h4.appendChild(a);
  div.appendChild(img);

  body.append(div);
  var puppy = newPup;



  // Add text
  a.textContent = puppy.name;




  // Add class
  div.classList.add("card");





  // Add an attribute
  a.setAttribute("href", puppy.info);
  img.setAttribute("src", puppy.pic);


};

// call function w/for loop when add button clicked
var submitBtn = document.querySelector('button[type="submit"]');
submitBtn.addEventListener("click", addPuppy);




for (var i = 0; i < data.length; i++) {
  var div = document.createElement("div");
  var h4 = document.createElement("h4");
  var a = document.createElement("a");
  var img = document.createElement("img");
  var span = document.createElement("div");




  var body = document.getElementById("body");
  div.appendChild(h4);
  h4.appendChild(a);
  div.appendChild(img);
  div.append(span);



  body.append(div);
  var puppy = data[i];



  // Add text
  a.textContent = puppy.name;
  span.textContent = `This pup is a: ${puppy.breed} `;
  span.classList.add("breed");



  // Add class
  div.classList.add("card");





  // Add an attribute
  a.setAttribute("href", puppy.info);
  img.setAttribute("src", puppy.pic);
}









