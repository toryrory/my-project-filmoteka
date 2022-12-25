async function fetchFilmsTrending() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=345007f9ab440e5b86cef51be6397df1`
  )
const films = await response.json();
  return films;
  };
  
  

  export { fetchFilmsTrending };

//   return fetch(
//     `https://api.themoviedb.org/3/trending/all/week?api_key=345007f9ab440e5b86cef51be6397df1`
//   ).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.status);
//       }
//       return resp.json();
//   });
  
// }

