const chalk = require('chalk');
const quoteSource = require('./quotes');
const randomNumber = require('./helpers/helpers');
// const str = require('./b');

function selectAndPrintAQuote(listOfQuotes) {
  const number = randomNumber(0, listOfQuotes.length - 1);
  const quote = listOfQuotes[number];
  console.log(chalk.red(`${quote.quote} by ${quote.name}`));
}

// console.log('b es,', str);
selectAndPrintAQuote(quoteSource);
