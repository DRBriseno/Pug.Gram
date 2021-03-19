import data from "src/data.js";

const addPuppy = e => {
  // prevent page from refreshing on submit
  e.preventDefault();


  // Get input elements from the form
  let newPupName = document.getElementById("PuppyName").value;
  let newPupInfo = document.getElementById("IGUrl").value;
  let newPupPic = document.getElementById("PhotoURL").value;
  let newPupDif = document.getElementById("diff").value;


  // format values into a new object
  const newPup = {
    name: newPupName.value,
    info: newPupInfo.value,
    pic: newPupPic.value,
    breed: newPupDif.value,
    id: data.length
  };


  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const a = document.createElement("a");
  const img = document.createElement("img");
  const body = document.querySelector(".puppy-container");
  div.appendChild(h4);
  h4.appendChild(a);
  div.appendChild(img);


  body.append(div);
  a.textContent = puppy.name;
  div.classList.add("card");
  a.setAttribute("href", puppy.info);
  img.setAttribute("src", puppy.pic);

  // Clear the form
  newPupName.value = "";
  newPupInfo.value = "";
  newPupPic.value = "";
  newPupDif.value = "";
};

const button = document.querySelector('button[type="submit"]');
button.addEventListener("click", addPuppy);

const buildPuppyCard = puppy => {
  // elements needed to build a card
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const a = document.createElement("a");
  const img = document.createElement("img");

  // append newly created elements into the DOM
  const body = document.querySelector(".puppy-container");
  body.append(div);
  h4.append(a);
  div.append(h4);
  div.append(img);

  // content and attributes
  a.innerHTML = puppy.name;
  a.setAttribute("href", puppy.info);
  img.setAttribute("src", puppy.pic);
  div.setAttribute("class", "card");

  // edit btn and form for each pup
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit-btn" + puppy.id);

  editBtn.addEventListener("click", () => editStyle(puppy));

  const editForm = document.createElement("form");
  editForm.classList.add("hidden");

  // unique id
  editForm.classList.add("edit-form" + puppy.id, "edit-form");
  editForm.innerHTML = `
  
    <label for="pupname">Puppy Name:</label><input id="pupname"<br>
    <input type="text" id="pupname" name="pupname"><br>
 
    <label for="infoURL">URL to Photo:</label><input id="infoURL"<br>
    <input type="text" id="infoURL" name="infoURL"><br>
 
    <label for="pugIG">URL to Puppy IG:</label><input id="pugIG"<br>
    <input type="text" id="pugIG" name="pugIG"><br>
   
    <label for="diff">What Breed Is Your Pup?</label>
    <select id="diff">
      <option value="pug">PUG</option>
      <option value="corgi">CORGI</option>
      <option value="australianshepherd">AUSTRALIAN SHEPHERD</option>
      <option value="pitbull">PITBULL</option>
      <option value="frenchbulldog">FRENCH BULLDOG</option>
    </select>
     
  `;
  div.append(editBtn);
  div.append(editForm);
};

const editStyle = puppy => {
  
  const editForm = document.querySelector(".edit-form" + puppy.id);
  editForm.classList.toggle("hidden");

  const editBtn = document.querySelector(".edit-btn" + puppy.id);

  // reflect this when in edit mode
  editBtn.innerText = "Done Editing";

  // event listener to the edit button
  // take user input and update the UI
  // reflect the user's changes
  editBtn.addEventListener("click", () => {
    const editForm = document.querySelector(".edit-form" + puppy.id);

    // new puppy object with the users changes
    // replace the previous pup info
    // values are either be new user input/default values if not changed by user
    const editedPupName =
      editForm.querySelector("input#name").value || puppy.name;
    const editedPupInfo =
      editForm.querySelector("input#infoUrl").value || puppy.info;
    const editedPupPic =
      editForm.querySelector("input#picture").value || puppy.pic;
    const editedPupDif =
      editForm.querySelector("select#diff").value || puppy.breed;

    // new object that includes users changes
    const updatedPuppy = {
      name: editedPupName,
      info: editedPupInfo,
      pic: editedPupPic,
      breed: editedPupDif,
      id: puppy.id
    };

    data[puppy.id - 1] = updatedPuppy;

    // puppy container in the HTML
    // replace with a new list of puppy cards that include the updated puppy
    const puppyContainer = document.querySelector(".puppy-container");
    puppyContainer.innerHTML = "";
    data.forEach(puppy => buildPuppyCard(puppy));

   
    editForm.classList.toggle("hidden");
    editBtn.innerText = "Edit";
  });
};


data.forEach(puppy => buildPuppyCard(puppy));

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
div.append(deleteBtn);

deleteBtn.addEventListener("click", () => {
  deletePuppy(puppy.id));
}

const deletePuppy = puppyId => {
  let nonDeletedPuppy = data.filter(puppy => {
    return puppy.id !== puppyId;
  });
 const puppyContainer = document.querySelector(".hairstyle-container");
 puppyContainer.innerHTML = "";
  nonDeletedPuppy.forEach(puppy => {    
    buildPuppyCard(puppy));
}
};

