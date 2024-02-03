//API used https://opentdb.com/api_config.php

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const numOfQuest = document.querySelector("#numOfQuest").value;
  const difficulty = document.querySelector("#difficulty").value;
  console.log(difficulty);
  const url = `https://opentdb.com/api.php?amount=${numOfQuest}&category=11&difficulty=${difficulty}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
