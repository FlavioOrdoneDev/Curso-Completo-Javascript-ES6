var videogames = ['Switch', 'PS4', 'XBox', '3DO'];

for (let i = 0; i < videogames.length; i++) {
  const element = videogames[i];
  console.log(element);  
}

console.log('------------------------')

for (let i = 0; i < videogames.length; i++) {
  const element = videogames[i];
  if (element === 'PS4'){
    console.log(element);
    break;
  }  
}

console.log('------------------------')

var i = 0;
while (i < videogames.length) {
  console.log(videogames[i])
  i++;
}

console.log('------------------------')

videogames.forEach((element, index) => {
  console.log(element, index);
});