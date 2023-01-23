// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    prueba= moviesArray.map((movie) => movie.director)
    
    return prueba
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(
      (movie) =>
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    ).length
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0

    } 
    let total = moviesArray.reduce((acc, valor) => {
      if (valor.score) {
        return acc + valor.score

      }
      return acc
    }, 0)

    return Math.round((total / moviesArray.length) * 100) / 100


    
  }
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return scoresAverage(moviesArray.filter((movie) => movie.genre.includes('Drama')));
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArr = moviesArray.slice()
    let movieYear = newArr.sort(function(a, b) {
      if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      } else if (a.year === b.year) {
        if (a.title > b.title) {
          return 1
        } else {
          return -1
        }
      }
    })
    return movieYear
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(movie => movie.title).sort().slice(0, 20)
  }
  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}
function stringToMins(string) {
    let arr, minutes;
    minutes = 0;
    arr = string.split(" ");

    arr.forEach(string => {
        string.includes("h") ? minutes += Number(string.replace("h",""))*60 : string.includes("min") ? minutes += Number(string.replace("min","")) : minutes += 0;
    })

    return minutes;
}

function turnHoursToMinutes(moviesArray) {
    let durations;
    durations = moviesArray.map(movie => stringToMins(movie.duration));
    return moviesArray.map((movie, index) => ({...movie, duration: durations[index]}))

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    } else { 
        let uniqueYears, moviesByYear, scores, avgScores, biggestScore, idxScores, bestYears, bestYear;
        uniqueYears = [...new Set(moviesArray.map(movie=>movie.year))];

        moviesByYear = [];
        uniqueYears.forEach(year => {moviesByYear.push(moviesArray.filter(movie => movie.year === year))})

        scores = [];
        moviesByYear.forEach(yearMovies => scores.push(yearMovies.map(movie => movie.score)))

        avgScores = scores.map(scoresArr => scoresArr.reduce((score1,score2) => score1+score2,0)/scoresArr.length);

        biggestScore = Math.max(...avgScores)

        idxScores = avgScores.reduce(function(accum,score,currentIndex) {
            if (score === biggestScore) {
                accum.push(currentIndex)
            };
            return accum;
        }, []);

        bestYears = idxScores.map(index => uniqueYears[index]);
        bestYear = Math.min(...bestYears);

        return `The best year was ${bestYear} with an average score of ${biggestScore}`
    }
}
 
