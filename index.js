document.getElementById("search-btn").addEventListener("click",generateMovie)
const movieContainer = document.querySelector("main")
// console.log(movieContainer)
const api_key= "716d62f1"
const movieInput = document.getElementById("movie-input")


function generateMovie(event){
        event.preventDefault()
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
                window.location.href="watchlist.html"
                console.log(movie.poster)

                
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
          

  const container = document.querySelector(".container")
  container.style.visibility = "hidden"
  const main = document.querySelector("main")
  main.style.margin = "0"
   
}



