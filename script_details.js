var link = window.location.href;
var newLink = new URL(link);
const movieId = newLink.searchParams.get("movieId");

const apiKey = "04c35731a5ee918f014970082a0088b1";

const detailMovie =
  "https://api.themoviedb.org/3/movie/" +
  movieId +
  "?api_key=" +
  apiKey +
  "&language=en-US";

const imgBaseURL = "http://image.tmdb.org/t/p/w500";

let data;

//Movie Details API
axios.get(detailMovie).then((res) => {
    data = res.data;
  
    console.log(data);
    const img = document.createElement("img");
    document.getElementById("myImageID").src = `${imgBaseURL}${data.poster_path}`;
    document.getElementById("original_title").innerHTML = data.original_title;
    document.getElementById("overview_details").innerHTML = data.overview;
    document.getElementById("release_date").innerHTML = data.release_date;
  });