# Project related to Dom

## project link
[Click here](https://stackblitz.com/edit/web-platform-zcvkgs?file=01_ColorChange%2Fscript.js)

# Solution code

##  project - 1 Solution code

```javascript

document.querySelectorAll('.button');
const buttons = document.querySelectorAll('.button');

document.querySelector('body');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    //event where comes from by the target
    console.log(event.target);
    if(event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === 'purple') {
      body.style.backgroundColor = event.target.id;
    }

    
  });
});


```
## Project - 2 Solution code
```javascript
document.querySelector('form');
const forms = document.querySelector('form');
//this use case will give you empty value
const height = parseInt(document.querySelector('#height').value);

// forms submit by two method post  method or get method and goes for url or server then we default action will be stop
forms.addEventListener('submit', function(event) {
 event.preventDefault()

 const height = parseInt(document.querySelector('#height').value);
 const weight = parseInt(document.querySelector('#weight').value);
 const results = document.querySelector('#results');

 if(height === '' || height < 0 || isNaN(height)) {
  results.innerHTML = `Please give a valid height ${height}`;

 } else if(weight === '' || weight < 0 || isNaN(weight)) {
  results.innerHTML = `Please give a valid height ${weight}`;

} else {
  (weight / ((height*weight)/10000)).toFixed(2);
  const bmi = (weight / ((height*weight)/10000)).toFixed(2);

  // show the result
  results.innerHTML = `<span>${bmi}</span>`;

}
const bmi = (weight / ((height*weight)/10000)).toFixed(2);
 if(bmi < 18.6) {
   results.innerHTML = `Under Weight ${bmi}`
 } else if( bmi === 18.6 || bmi === 24.9) {
   results.innerHTML = `Normal Range ${bmi}`
 } else {
   results.innerHTML = `Overweight ${bmi}`
 }


})

```

## Project - 3 Solution code
```javascript
document.getElementById('clock');
const clock = document.getElementById('clock');
// or
// document.querySelector('#clock')
// const clock = document.querySelector('#clock');

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function() {
  let date = new Date();
// console.log(date.toLocaleTimeString()); it is given time in console
clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

