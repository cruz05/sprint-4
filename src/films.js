// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(film => film.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter(film => film.director == director)
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const filteredMovies = array.filter(film => film.director == director) 
  const totalScore = filteredMovies.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0)

  return Number((totalScore / filteredMovies.length).toFixed(2))
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  return array.map(film => film.title).sort().slice(0,20)
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  return [...array].sort((a, b) => {
    if (a.year == b.year) {
      const title1 = a.title.toUpperCase()
      const title2= b.title.toUpperCase()
      return title1.localeCompare(title2)
    }
    return a.year - b.year
  })
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const filteredMovies = array.filter(film => film.genre.includes(category) && film.score)

  const totalScore = filteredMovies.reduce((accumulator, currentValue) => 
    accumulator + (currentValue.score), 0)

  return Number((totalScore / filteredMovies.length).toFixed(2))
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(film => {
    const [hours, minutes] = film.duration.split(' ')
    return { duration : (parseInt(hours) * 60) + (minutes ? parseInt(minutes) : 0) }
  })
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  return array.filter(film => film.year == year).sort((a,b) => b.score - a.score).slice(0,1)
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
