var quotes = [
  "Boris turns into Chuck Norris",
  "You're a Saint",
  "You have a baby pink elephant, enjoy!",
  "Pigs trotters for feet?",
  "Going to Porto on Tuesday",
];

function randomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
};

function randomize() {
  document.getElementById("quoteDisplay").style.color = randomColors();
}

function randomColors() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
