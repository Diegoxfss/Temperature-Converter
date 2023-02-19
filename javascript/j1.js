//  converting temperatures - 4 functions //


//  1) Celsius to Farenheit start //

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  console.log (celsius + '\xB0C = ' + Math.round(cToFahr) + '\xB0F') ;  
}
 cToF ((0).toFixed(0));


//  ......... end ............ //

//  2 ) Fahrenheit to Celsius  start //

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  console.log (fahrenheit + '\xB0F = ' + Math.round(fToCel) +'\xB0c.');
} 
fToC((32).toFixed(0));

//  ......... end ............ //

//  3 ) Celsius to Kelvin start //

function ctok (celsius)
{
  var ceTemp = celsius;
  var cTok = ceTemp + 273.15;
  console.log (celsius + '\xB0c = ' + Math.round(cTok) +'\xB0k.');
} 
ctok((0).toFixed(0));


//  ......... end ............ //

//  4 ) Fahrenheit to Kelvin  start //

function ftok (fahrenheit) 
{
  var fTemp = fahrenheit;
  var ftok= fTemp + 459.67 * 5/9;
  console.log (fTemp+'\xB0F = ' +Math.round(ftok) +'\xB0k.');
} 
ftok((0).toFixed(0));

//  ......... end ............ //







