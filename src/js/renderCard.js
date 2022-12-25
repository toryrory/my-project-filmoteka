import { fetchFilmsTrending } from "./fetchFilms";
import { refs } from "./refs";


async function onCreate() {
 await fetchFilmsTrending()
  .then(films => createCardMarkup(films.results))
  .catch(err => console.log(err));
}

async function createCardMarkup(data) {
    const markup = data
        .map(({ id, genre_ids, poster_path, title, release_date }) => {
          return
        `<li class="gallery-card card">
              <img data-id=${id} data-ganres='${genre_ids}'
              src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" class="card-image">
            <div class="card-info">
              <p class="card-name">${title}</p>
              <p class="card-genre">${genre_ids}
              <span class="card-year">${release_date}
              </span></p>
              </div>
          </li>`;
      })
        .join('');
   
    refs.gallery.innerHTML = markup;
}

export {fetchFilmsTrending, onCreate, createCardMarkup };