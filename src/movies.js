
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    return movies.map(movie => movie.director);
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    if (movies.length === 0) {
      return 0; 
    }
    const spielbergDramaMovies = movies.filter(movie => {
      return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });
    return spielbergDramaMovies.length;
  }
  
  
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) {
      return 0;
    }
    const sumScores = movies.reduce((total, movie) => {
      return total + (movie.score || 0); 
    }, 0);
    const averageScore = sumScores / movies.length;
    return Number(averageScore.toFixed(2));
  }
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length === 0) {
      return 0;
    }
    const sumScores = dramaMovies.reduce((total, movie) => {
      return total + (movie.score || 0);
    }, 0);
    const averageScore = sumScores / dramaMovies.length;
    return parseFloat(averageScore.toFixed(2));
  }
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const sortedMovies = [...movies];
  
    sortedMovies.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        return a.title.localeCompare(b.title); 
      }
    });
    return sortedMovies;
  }
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const sortedMovies = [...movies]; 

    sortedMovies.sort((a, b) => {
      return a.title.localeCompare(b.title); 
    });

    const titles = sortedMovies.slice(0, 20).map(movie => movie.title);
    return titles;
  }
  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
