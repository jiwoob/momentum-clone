const quotes = [
  {
    quote: "Love is or it ain't. Thin love ain't love at all.",
    author: "Toni Morrison",
  },
  {
    quote:
      "Love is an act of endless forgiveness, a tender look which becomes a habit.",
    author: "Havelock Ellis",
  },
  {
    quote:
      "A coward is incapable of exhibiting love; it is the prerogative of the brave.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Age does not protect you from love. But love, to some extent, protects you from age.",
    author: "Jeanne Moreau",
  },
  {
    quote: "Only a life lived for others is a life worth while.",
    author: "Albert Einstein",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
