
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))




const url1 = 'https://jsonplaceholder.typicode.com/posts/2';
const options1 = {
  method: 'HEAD'
}

fetch(url1, options1)
  .then(response => {
    console.log(response.headers.forEach(console.log))
  })


/* Está dando erro

const url = 'https://jsonplaceholder.typicode.com/posts';
const options = {
  method: 'POST',
  body: '{"title", "Javascript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
}

fetch(url, options)
 .then(response => response.json())
.then(item => console.log(item)); */


