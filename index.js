const addmorebtn = document.querySelector("#admore");
const updateData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const noteArry = [];
  textAreaData.forEach((note) => {
    return noteArry.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(noteArry));
};

const addNote = (text = " ") => {
  const note = document.createElement("div");
  note.classList.add("note");
  const htmldata = `
  <div class="operation">
  <button class="edibtn" ><i class="fas fa-edit edit"></i></button>
  <button class="deleebtn"><i class="fas fa-trash-alt delete"></i></button>
</div>
<div class="main ${text ? "hidden" : ""}" ></div>
<textarea class = " ${text ? "" : "hidden"}"></textarea>
  `;
  note.insertAdjacentHTML("afterbegin", htmldata);

  const edibtn = note.querySelector(".edit");
  const deleebtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  //delete btn
  deleebtn.addEventListener("click", () => {
    note.remove();
    updateData();
  });
  main.innerHTML = text;
  textarea.value = text;
  ////edit btn
  edibtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });
  textarea.addEventListener("change", (event) => {
    const value = event.target.value;
    main.innerHTML = value;
    updateData();
  });
  document.body.appendChild(note);
};
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((note) => {
    return addNote(note);
  });
}
addmorebtn.addEventListener("click", () => addNote());

// const admorebitton = document.querySelector("#admore");

// const updatedata = (text = "click on edit button and enter your text") => {
//   const note = document.createElement("div");
//   note.classList.add("note");
//   const htmldata = `
//   <div class="operation">
//         <button><i class="fas fa-edit edit"></i></button>
//         <button><i class="fas fa-trash-alt delete"></i></button>
//       </div>
//       <div class="main" ${text ? " " : "hidden"}"></div>
//       <textarea class ='${text ? "hidden" : " "}'></textarea>
//   `;
//   note.insertAdjacentHTML("afterbegin", htmldata);
//   document.body.appendChild(note);

//   const editbttn = note.querySelector(".edit");
//   const deleebtn = note.querySelector(".delete");
//   const main = note.querySelector(".main");
//   const textarea = note.querySelector("textarea");

//   // delete btn
//   deleebtn.addEventListener("click", () => {
//     note.remove();
//   });
//   textarea.value = text;
//   main.innerHTML = text;
//   //editt btn
//   editbttn.addEventListener("click", () => {
//     main.classList.toggle("hidden");
//     textarea.classList.toggle("hidden");
//   });
//   textarea.addEventListener("change", (event) => {
//     const value = event.target.value;
//     main.innerHTML = value;
//   });
// };

// admorebitton.addEventListener("click", () => updatedata());
