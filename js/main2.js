var quotes = [
  'Its not what happens to you, but how you react to it that matters--Epictetus',
  'The best revenge is massive success.--Frank Sinatra',
  'You miss 100% of the shots you dont take.--Wayne Gretzy',
  'Its not what happens to you, but how you react to it that matters.--Epictetus',
  'Resentment is like drinking poison and waiting for your enemies to die.--Nelson Mandela',
  'Do not take life too seriously. You will not get out alive.--Elbert Hubbard',
  
]
  

 function newQuote() {
  var randomNumber = Math.floor(Math.random()*(quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
 }
  
  
 






 

