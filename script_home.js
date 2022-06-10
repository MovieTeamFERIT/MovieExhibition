//TMDB
const API_KEY = 'api_key=04c35731a5ee918f014970082a0088b1';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;



const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const favourites = document.getElementById('favouritelink');

getMovies(API_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then (data =>{
        console.log(data.results)
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML = '';

    data.forEach(movie => {
        const {id, title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="green">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        `
        main.appendChild(movieEl);
        movieEl.setAttribute("id", id);
        let red = document.getElementById(id);

        red.addEventListener("click", () => {
            window.location =
            "details.html?movieId=" + id;
        });
        
    })
}

function showMovies(data){
    main.innerHTML = '';

    data.forEach(movie => {
        const {id, title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="green">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        `
        main.appendChild(movieEl);
        movieEl.setAttribute("id", id);
        let red = document.getElementById(id);

        red.addEventListener("click", () => {
            window.location =
            "details.html?movieId=" + id;
        });
        
    })
}



search_icon.addEventListener('click',(e)=>{
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm);
    }else{
        getMovies(API_URL);
    }
})