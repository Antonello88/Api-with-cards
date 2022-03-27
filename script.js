


// //CHIMATA API CON ARROW FUNCTION 

// const getAPIdata = async (URL, index = "") => {
//     const res = await fetch (`${URL}${index}`);
//     return await res.json ();
// };

// getAPIdata("https://swapi.dev/api/planets/").then((data) => 
// console.log(data)
// );





// //CHIMATA API CON ARROW FUNCTION PER UN SINGOLO ELEMENTO

// const getAPIdata = async (URL, index) => {
//   const res = await fetch (`${URL}${index}`);
//   return await res.json ();
// };

// getAPIdata("https://swapi.dev/api/planets/",1).then((data) => 
// console.log(data)
// );


//Funzione Create Card

const createCard = (title, desc, imgUrl, price) => {


    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const parPriceEl = document.createElement("p");

    divEl.classList.add("card");
    parPriceEl.classList.add("price");
    parDescEl.classList.add("description");

    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "img cosi");
    h3El.textContent = title;
    parDescEl.textContent = desc;
    parPriceEl.textContent = price;

    divEl.append(h3El, parDescEl, imgEl, parPriceEl);
    document.querySelector("body").appendChild(divEl); 

}

// createCard();


//CHIMATA API CON ARROW FUNCTION 

const getAPIdata = async (URL, index = "") => {
  const res = await fetch (`${URL}${index}`);
  return await res.json ();
};


//Stampa di tutti gli elementi all'interno del fake store 


getAPIdata("https://fakestoreapi.com/products/").then((data) => {

  data.map((product) => createCard (product.title,formatMinText(product.description),product.image,product.price + " $"))


  //Elimina elemento card al click (da inserire sempre all'interno del then) 
  const cardEls = document.querySelectorAll(".card");

  cardEls.forEach((card) => {
    
    card.addEventListener('click', () => {
     
    card.classList.add("show-off")
    
    });
  
  
  });
});


//Funzione Formatta testo 
const formatMinText = (text) => text.split(" ").slice(0,6).join(" ") + "...";




// const cardEls = document.querySelectorAll(".card");

// cardEls.forEach((card) => {
//   card.addEventListener('click', () => {
   
//   card.textContent = "";
//   });


// });



