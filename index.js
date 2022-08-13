
const randomMovieContainer = document.getElementById("movie-container");
const startButton = document.getElementById(`start-button`);
const btnLeft = document.getElementById("dislike-btn");
const btnRight = document.getElementById("like-btn");
const nextPersonBtn = document.getElementById("next-person");
const showWinnersBtn = document.getElementById("show-winners");
const moviesTotal = document.getElementById("movies-total");
const participants = document.getElementById("participants");
const rating = document.getElementById("rating-container");
const filter = document.getElementById("filter");
btnLeft.addEventListener("click", nextImage);
btnRight.addEventListener("click", nextImageWin);
nextPersonBtn.addEventListener("click", newPersonChoose);
showWinnersBtn.addEventListener("click", showWinners);





startButton.addEventListener(`click`, () => 
{
  var users = participants.value;
  // Saves data to retrieve later
  localStorage.setItem("userName", users);
var movies = moviesTotal.value
  console.log(users)
  filter.style.display = "none";
  rating.style.display = "flex";
  getRandommovie(movies); 
});

let array = [];

function getRandommovie(movies) {  
  for (let i = 0; i < movies; i++) {
    const item = Math.floor(Math.random() * 250);
    array.push(item);
  }  
  console.log(array);
  updateImage();
}

//randomerare 250

let currentIndex = 0;
let id = 1;
let x = 1;
y = x++;
function nextImage() {
  var users = getUser();

  console.log(users + "hi" + id)
  let amountOfarray = array.length;
  if (currentIndex < amountOfarray - 1) {
    // Can't go higher than the amount of array present.
    currentIndex++;

    updateImage();
  }
  else if(users == id){
console.log("yttutu")
  } else {
    id++;
    nextPerson();
  }

  //Show next person btn
}
let winArray = [];
function nextImageWin() {
  var users = getUser();

  console.log(users + "hi" + id)
  let amountOfarray = array.length;
  if (currentIndex < amountOfarray - 1) {
    // Can't go higher than the amount of array present.
    currentIndex++;
    winArray.push(array[currentIndex - 1]);
    updateImage();
    
  }  
  else if(users == id){
    console.log("yttutu")
      } else {
    id++;
    nextPerson();
    //Show next person btn
  }
}
function nextPerson() {
  nextPersonBtn.style.display = "flex";
  console.log(winArray);
  console.log("id" + id);
}

function newPersonChoose() {
  currentIndex = 0;
  updateImage();
}

function updateImage() {
  randomMovieContainer.innerHTML = array[currentIndex];
}

function showWinners() {
  const toFindDuplicates = (winArray) =>
    winArray.filter((item, index) => winArray.indexOf(item) !== index);
  const duplicateElements = toFindDuplicates(winArray);
  console.log(duplicateElements);
  randomMovieContainer.innerHTML = duplicateElements;
}

// if index exist in array
function getUser() {   
  return localStorage.getItem("userName");
 }

