
let elList = document.querySelector("#list");

let renderMovies = function (movie) {
  let eLItem = document.createElement("li");
  let card = `

  <div class=" w-25 card mb-5">
  <iframe width="300" height = "250"  src="https://www.youtube.com/embed/${movie.trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="card-body">
          <h1 class="title">${movie.title}</h1>
          <p class="text text-truncate ">
          ${movie.summary}
          </p>
          <a class="btn btn-primary" href="">Treiler ko'rish</a>
          <p>${movie.imdbRating}</p>
        </div>
      </div>



  `;
  eLItem.innerHTML = card;
  elList.appendChild(eLItem);
};

let main = function (movies, limits = movies.length) {
  for (let i = 0; i < limits; i++) {
    let movieTrailler = movies[i].trailer.split("=")[1];
    console.log(movieTrailler);
    let movieObj = {
      title: movies[i].title,
      year: movies[i].year,
      categories: movies[i].categories,
      summary: movies[i].summary,
      imdbId: movies[i].imdbId,
      imdbRating: movies[i].imdbRating,
      runtime: movies[i].runtime,
      language: movies[i].language,
      trailer: movieTrailler,
      bigPoster: movies[i].bigPoster,
      smallPoster: movies[i].smallPoster,
    };
    renderMovies(movieObj);
  }
};
main(movies, 20);
