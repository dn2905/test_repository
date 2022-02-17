"use strict";

let countOfFilms;
let tr = true;
do {
  countOfFilms = prompt("Сколько фильмов вы посмотрели?", "");
  if (countOfFilms != null && !!Number(countOfFilms)) {
    countOfFilms = +countOfFilms;
    tr = false;
  }
  console.log(countOfFilms, tr, Number(countOfFilms));
} while (tr);

const personalMovieDB = {
  count: countOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let lastF = prompt("Назовите последний просмотренный фильм"),
    r = prompt("Оцените его");
  if (
    lastF != "" &&
    r != "" &&
    lastF != null &&
    r != null &&
    lastF.length < 50
  ) {
    personalMovieDB.movies[lastF] = r;
  } else {
    i--;
  }
}

if (personalMovieDB.count < 10) {
  alert("Маловато..");
} else if (30 < personalMovieDB.count > 10) {
  alert("Вы стандартный зритель");
} else if (personalMovieDB.count > 30) {
  alert("Да вы киноман!");
}

console.log(personalMovieDB);
