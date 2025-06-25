const movieContainer = document.querySelector("main")
// console.log(movieContainer)
const api_key= "716d62f1"
const movieInput = document.getElementById("movie-input")

//Function for changing from light mode to anothr mode
function toggleTheme(){
   const svgs = document.querySelectorAll("svg")

   svgs.forEach(theme =>{
    theme.classList.toggle("hide-btn")
    
   })
  if(document.body.classList.toggle("dark-mode")){
    const movieContainer = document.querySelectorAll(".movie-content")
    movieContainer.forEach(movie =>{
    console.log(movie)
    movie.style.color = "white"
  
    const moviePlots = document.querySelectorAll(".movie-plot")
    for(let moviePlot of moviePlots){
      
        moviePlot.style.color="white"
        console.log(moviePlots)
      
    }

    
    
    })
  }

  else{
    const movieContainer = document.querySelectorAll(".movie-content")
    movieContainer.forEach(movie =>{
    console.log(movie)
    movie.style.color = "black"
   

    const moviePlots = document.querySelectorAll(".movie-plot")
    for(let moviePlot of moviePlots){
      
        moviePlot.style.color="black"
        console.log(moviePlots)
      
    }

    
    
    })
  }
  
 
}

function generateMovie(event){

        fetch(`https://www.omdbapi.com/?apiKey=${api_key}&s=${movieInput.value}`)
        .then(res => res.json())
        .then(data => {
        
          for(let movieList of data.Search){


          fetch(`https://www.omdbapi.com/?apiKey=${api_key}&i=${movieList.imdbID}`)
          .then(res=> res.json())
          .then(data => {
            // console.log(data)
          
                movieContainer.innerHTML +=`
              <div class="movie-content">
          
                <img src=${movieList.Poster} class="movie-img">
                <div class="movie-info">
                    <div class="movie-des">
                      <h3 class="movie-title">${data.Title}</h3>
                      <p class="movie-rating"><i class="fa-solid fa-star"></i>${data.imdbRating}</p>
                    </div>
                    <div class="movie-des">
                      <p class="movie-duration">${data.Runtime}</p>
                      <p class="movie-genre">${data.Genre}</p>
                      <p class=movie-watch"><i class="fa-solid fa-circle-plus"></i>Watchlist</p>
                    </div>             
                    <p class="movie-plot">${data.Plot}</p>
                </div>
              
              </div>
          `
          
        
         
            const movieAdd = document.querySelectorAll(".fa-circle-plus")
            
            movieAdd.forEach((baby)=> {
              baby.addEventListener('click',(event)=>{
                const connect =baby.closest('.movie-content')
                console
                const movie = {
                  poster: connect.querySelector(".movie-img").src,
                  title: connect.querySelector(".movie-title").textContent,
                  rating: connect.querySelector(".movie-rating").textContent,
                  runtime: connect.querySelector(".movie-duration").textContent,
                  genre: connect.querySelector(".movie-genre").textContent,
                  plot: connect.querySelector(".movie-plot").textContent
                }

                //Storing data and converting the object into a string
                localStorage.setItem("selectedMovie",JSON.stringify(movie))
                //the location of the local Storage is "watchlist.html"
                window.location.href="watchlist.html"
                

                
              })
            })
            
             

            //  for(let baby of movieAdd){
            //   baby.addEventListener("click",function(event){
            //     console.log("Baby,I am ready,let go right now")
            //     let watchlistPage = document.getElementById("watchlist-page")
            //     watchlistPage = movieContainer
            //     console.log(watchlistPage)
            //     console.log(event.target)
                
            //   })
            //  }

           
          })
          }
        
         
        })
        .catch(error => {
          
          if(error= true){
              const errorText = document.querySelector(".error-text")
         
              errorText.textContent= "Unable to find what you are looking for.Please try another search"
              
          }

          else if(error.message.includes('data.search is undefined')){
            errorText.style.visibility = "hidden"
            errorText.style.color = "orange"
            console.log("You are right,I am going")
          }
          
          
       
        //  console.error("Unable to find what you are looking for.Please try another search",error)
         })

  const container = document.querySelector(".container")
  container.style.visibility = "hidden"
  const main = document.querySelector("main")
  main.style.margin = "0"
   
}

document.getElementById("search-btn").addEventListener("click",generateMovie)



