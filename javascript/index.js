


let sectionCards = document.querySelector(".section-card")

let submitButton = document.querySelector("#submit-button")
let imgUpload = document.querySelector("#img-input")
let nameInput = document.querySelector("#name-input")
let jobInput = document.querySelector("#job-input")
let emailInput = document.querySelector("#email-input")





submitButton.addEventListener("click", () =>{
    let containerCards = document.createElement("div");
    let card = document.createElement("div");
    let imgContainer = document.createElement("div");
    let img = document.createElement("img");
    let textContainer = document.createElement("div");
    let textH3 = document.createElement("h3");
    let textJob = document.createElement("p");
    let textEmail = document.createElement("p");

    containerCards.className = "card-containter"
    card.className = "card"
    imgContainer.className = "card-img"
    img.style.width = "100%"
    img.style.height = "100%"
    textContainer.className = "card-text"
    textH3.style.textTransform = "uppercase"
    textEmail.className = "email-text"
    

    img.value = imgUpload.value;
    textH3.innerHTML = nameInput.value
    textJob.innerHTML = jobInput.value
    textEmail.innerHTML = emailInput.value

    containerCards.appendChild(card);
    card.appendChild(imgContainer);
    imgContainer.appendChild(img);
    card.appendChild(textContainer);
    textContainer.appendChild(textH3);
    textContainer.appendChild(textJob);
    textContainer.appendChild(textEmail);
    sectionCards.appendChild(containerCards)
    
    
   



})

