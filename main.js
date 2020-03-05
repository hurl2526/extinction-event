// const lis = document.querySelectorAll('li')

// const makeBlue = function(event) {
//   event.target.style.color = 'blue';
// }

// for (const li of lis) {
//   li.addEventListener('click', makeBlue)
// }

const ols = document.querySelectorAll('ol li');

const lineThrough = function(event){
  event.target.style.textDecoration = 'line-through';
};

for (const li of ols){
  li.addEventListener('click',lineThrough);
}
const uls = document.querySelectorAll('ul li');

const opacity = function(event){
  event.target.style.opacity = '0';
};

for (const li of uls){
  li.addEventListener('click', opacity);
}

const pics = document.querySelectorAll('div img');

const picOpacity = function(event){
  event.target.style.width = '0px'
  event.target.style.transition = '2s'
}

for (const img of pics){
  img.addEventListener('click',picOpacity)
}

const button = document.querySelector('#destroy-all')
// const all = document.querySelectorAll('pics', 'uls', 'ols')
const destroyAll = function(){
  for (const li of ols){
    li.style.textDecoration = 'line-through';
  }
  for (const li of uls){
    li.style.opacity = '0';
  }
  for (const img of pics){
    img.style.width = '0px'
    img.style.transition = '2s'
  }
};

button.addEventListener('click', destroyAll)






