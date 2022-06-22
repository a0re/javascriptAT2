$ = (object) => document.getElementById(object);

let listColours = ['red', 'blue', 'yellow', 'green'];
let counter = [0, 0, 0, 0];

function Spin() {
  let spinColor = Math.floor(Math.random() * listColours.length);
  console.log(spinColor);
  $('SquareColor').style.backgroundColor = listColours[spinColor];
  $('DisplayResults').innerHTML += ` ${listColours[spinColor]}`;
  ++counter[spinColor];

  let highest = 0;

  counter.forEach((number, index) => {
    if (highest < number) {
      highest = number;
      $('Spuns').innerHTML = listColours[index];
    } else if (highest == number) {
      $('Spuns').innerHTML += ` ${listColours[index]}`;
    }
  });

  $('Totals').innerHTML = counter.reduce((a, b) => a + b);
}

function Pause() {
  setTimeout(Spin, 2000);
}

function Reset() {
  counter = [0, 0, 0, 0];
  $('Totals').innerHTML = '';
  $('DisplayResults').innerHTML = '';
  $('Spuns').innerHTML = '';
}
