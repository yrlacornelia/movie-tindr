const randomMovieContainer = document.getElementById("movie-container");
const startButton = document.getElementById(`start-button`);
 const btnLeft = document.getElementById("dislike-btn");
 const btnRight = document.getElementById("like-btn");
const nextPersonBtn = document.getElementById("next-person");
const showWinnersBtn = document.getElementById("show-winners");
const moviesTotal = document.getElementById("movies-total");
const participants = document.getElementById("participants");
const rating = document.getElementById("rating-container");
const winnerContainer = document.getElementById("winner-movie-container")
const filter = document.getElementById("filter");
btnLeft.addEventListener("click", nextImage);
btnRight.addEventListener("click", nextImageWin);
nextPersonBtn.addEventListener("click", newPersonChoose);
showWinnersBtn.addEventListener("click", showWinners);
const foodContainer = document.getElementById("food-test")
// async function getRandommoviesss(movies) { 
//   const response = await fetch(``);
//  const data =  await response.json()
//  const films = data
// console.log(films)
// }
// getRandommoviesss()
//   async function fetchMovies() {
//     const response = await fetch//(``);
//     const data =  await response.json()
// randomMovie(data)

//   }

// fetchMovies()

// function randomMovie(data) {
//     console.log(data.items)

// }

let arraytest = [

  {"title": "this is us",
      "color": "purple",
  "type": "minivan",
  "capacity": 1
},
{"title": "love u ",
  "color": "purple",
  "type": "minivan",
  "capacity": 2
},
{"title": "coool ",
  "color": "purple",
"type": "minivan",
"capacity": 3
},
{"title": "im fine ",
"color": "purple",
"type": "minivan",
"capacity": 4
},
{"title": "lololo ",
"color": "purple",
"type": "minivan",
"capacity": 5
},
{"title": "waxxup ",
"color": "purple",
"type": "minivan",
"capacity": 6
},
{"title": "five minutes ",
"color": "purple",
"type": "minivan",
"capacity": 7
},
{"title": "harry potter  ",
"color": "purple",
"type": "minivan",
"capacity": 8
}
]

console.log(arraytest)

startButton.addEventListener(`click`, () => 
{
  var users = participants.value;
  // Saves data to retrieve later
  localStorage.setItem("userName", users);
var movies = moviesTotal.value
  filter.style.display = "none";
  getRandommovie(movies); 
  rating.style.display = "flex";
updateImage()
});

let array = [];


function getRandommovie(movies) {  
  for (let i = 0; i < movies; i++) {
    apiCall();
  }  
}

async function apiCall() { 
  const fetchPromise = fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);

  fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((jsonPromise) => {
      console.log(jsonPromise); 
       array.push(jsonPromise.meals[0].strMeal)
    });
  });


 }

//randomerare 250


let currentIndex = 0;
let id = 1;


function nextImage() { 
  var users = getUser();
  console.log(users + "hi" + id)
  let amountOfarray = array.length;             
  console.log(id + " " + users)
 
if (currentIndex  == amountOfarray  ) {
  if(users == id){
    console.log("yttutu")
    console.log(winArray)
    showWinnersBtn.style.display = "flex"

  rating.style.display = "none";
      }  
 else  {
         id++;
       console.log("HU")
       console.log(winArray)
  rating.style.display = "none";
    nextPerson();}
  }   else {
    console.log(winArray)
    updateImage();

    //Show next person btn
  }
  //Show next person btn
}
let winArray = [];
function nextImageWin() {
  var users = getUser();
  console.log(users + "hi" + id)
  let amountOfarray = array.length;             
  console.log(id + " " + users)
 
if (currentIndex  == amountOfarray  ) {
  if(users == id){
    console.log("yttutu")
    winArray.push(array[currentIndex -1]);
    console.log(winArray)
    showWinnersBtn.style.display = "flex"

  rating.style.display = "none";
      }  
 else  {
         id++;
       console.log("HU")
       winArray.push(array[currentIndex -1]);
       console.log(winArray)
  rating.style.display = "none";
    nextPerson();}
  }   else {
    winArray.push(array[currentIndex -1]);
    console.log(winArray)
    updateImage();
    //Show next person btn
  }
}








 
function nextPerson() {
  nextPersonBtn.style.display = "flex";

}

function newPersonChoose() {
  currentIndex = 0;

  rating.style.display = "flex";
  updateImage();
  nextPersonBtn.style.display = "none";
}

function updateImage() {

  console.log(array.length)
  console.log(array)
    currentIndex++;
    
}



function showWinners() {

  showWinnersBtn.style.display = "none"
  rating.style.display = "none";
  winnerContainer.style.display= "flex"
  if (winArray.length === 0) {
winnerContainer.innerHTML = "You have no matches"
  }
  else{
  const toFindDuplicates = (winArray) =>
    winArray.filter((item, index) => winArray.indexOf(item) !== index);
  const duplicateElements = toFindDuplicates(winArray);
  console.log(duplicateElements);
  for (let i = 0; i < duplicateElements.length; i++) {
 const newDiv = document.createElement("div");
  const newContent = document.createTextNode(duplicateElements[i].title);

 newDiv.appendChild(newContent);
 document.body.insertBefore(newDiv, winnerContainer);
  }
 }

}


// if index exist in array
function getUser() {   
  return localStorage.getItem("userName");
 }



 //mealname jsonResponse.meals[0].strMeal