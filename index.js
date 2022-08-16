


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

//   async function fetchMovies() {
//     const response = await fetch//(``);
//     const data =  await response.json()
// randomMovie(data)

//   }

// fetchMovies()

// function randomMovie(data) {
//     console.log(data.items)

// }

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
    const item = Math.floor(Math.random() * 250);
    array.push(item);
  }  
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
      }  
 else  {
         id++;
       console.log("HU")
       console.log(winArray)
       
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
  randomMovieContainer.innerHTML = array[currentIndex];
  console.log(array)    
    currentIndex++;
}

function showWinners() {

  showWinnersBtn.style.display = "none"
  rating.style.display = "flex";
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


//  likeBtn.onclick = () => rateMovie('likes', movieInfo);
// dislikeBtn.onclick = () => rateMovie('dislikes', movieInfo);
//  const ratings = {
//   likes: [],
//   dislikes: [],
// };

// const rateMovie = (type, data) => {
//     ratings[type].push(data);
//     clearCurrentMovie();
//     showRandomMovie();
// };

