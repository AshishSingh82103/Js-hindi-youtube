# Project related to Dom

## project link
[Click here](https://stackblitz.com/edit/web-platform-zcvkgs?file=01_ColorChange%2Fscript.js)

# Solution code

##  project one

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
## Project - 2
```javascript


```
