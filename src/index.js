let addToy = false;
let toydiv = document.getElementById("toy-collection")
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  
  function fetchToys(){
    return fetch("http://localhost:3000/toys")
    .then(res => res.json());
  }
  
  function createCard(){
    fetchToys().then(toys=> {toys.forEach(toy =>{
      let h = document.createElement("h2");
      h.innerText = toy.name;
      
      let img = document.createElement("img");
      img.src = toy.image; 
      img.className = "toy-avatar";
      
      let p = document.createElement("p");
      p.innerText = `${toy.likes} likes`;
      
      let btn = document.createElement("button");
      btn.className = "like-btn";
      btn.innerText = "like";
      // btn.addEventListener('click', ()=>{
        
      // })
      
      let div = document.createElement('div');
      div.className = "card";
      div.appendChild(h, img, p, btn);
      toydiv.appendChild(div);
      
    })});
   
  }
  createCard();
});
