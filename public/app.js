
const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".new-quote");
const saveBtn = document.querySelector(".save-btn");
const savedQuote = document.querySelector(".saved-quote");

// get data from api and render on the




async function getData(){
  try{
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    

    quoteText.innerText = data.content;
    quoteAuthor.innerText = data.author;
  }
  catch(error){
    console.log(error);
  }
}

async function postRequest(quoteText, quoteAuthor) {
  const postReq = await axios({
  method: 'post',
  url: 'http://localhost:3000/api/quote',
  data: {
    name: quoteText,
    author: quoteAuthor
    }
  });
  const rest = postReq.data;
  newQuotes(rest);
}


newQuoteBtn.addEventListener("click", getData);


saveBtn.addEventListener("click", function(){
  const a = quoteAuthor.innerHTML;
  const b = quoteText.innerHTML;
  postRequest(a, b);
  
})
getData();
// submit data you like to your db and render it on the screen
function newQuotes(data){
    const id = data["_id"];
    const newQ = document.createElement("div");
    newQ.classList.add("indpq");
    newQ.innerHTML = ` 
    <p data="${id}">${data["author"]} </p> 
    <h3> ${data["name"]}</h3> 
    <button class="button">
    <i class="fas fa-trash"></i> </button>
    </div>`;
    savedQuote.append(newQ);
    
}

async function getDataFromDb() {
  const response = await fetch("http://localhost:3000/api/quote");
  const data = await response.json();
  data.forEach(quote => {
    newQuotes(quote);
  })
  }

getDataFromDb();
