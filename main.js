
/*
const objectData = { 
    key: "value",
    name: "Kim",
    age: 29,
    email: "ksssk96@naver.com"
  }  

 console.log(objectData['age'])
*/
  

/*
const arrayData = [9, 8, 7, 6]
console.log(arrayData[0]) 
console.log(arrayData[1]) 
console.log(arrayData[4]) 
*/

/*
const number = 123
console.log(number) // 123

number = 456 // Error! 
*/

/*
let number = 123
console.log(number) //123
number = 456
console.log(number) 
*/

/*
function hello() {
    const message = "Hello world!"
    console.log(message)
  }
  hello()
  hello()
  hello()
 
  */

 /* 
  function hello(name) {
    const message = 'Hello ' + name + '!'
    console.log(message)
  }
  hello('Kim')
  hello('Neo')
  hello('Evan')
  */

/*
  function hello(name) {
    if(name.length > 5) {
        return  
    }
    const message = 'Hello ' + name + '!'
    console.log(message)
  }
  hello('Kim')
  hello('Neo')
  hello('javascript')
  */
 const itemEls = document.querySelectorAll('.item5')
 const btnEl = document.querySelector('.btn')
 const colors = ['royalblue', 'orange', 'tomato']

 btnEl.addEventListener('click', function() {
    itemEls.forEach(function(itemEl, index) {
        console.log(index, itemEl)
        itemEl.style.backgroundColor = colors[index]
    })
    btnEl.innerHTML = '<span>Clicked!</span>'
 })