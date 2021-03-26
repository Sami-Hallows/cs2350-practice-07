// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'

// JavaScript

//TODO
let name = "John Smith"
let x = 10

let y

x = 18

const PI = 3.14

console.log(typeof name)

console.log(name + " said that when he was " + x + " years old he learned that Pi is " + PI + ".") //concatenation
console.log(`${name} said that when he was ${x} years old he learned that Pi is ${PI}.`)
console.log('hello world!')
console.log(300)

document.write('<h1 class="container">12 X 12 Multiplication Table</h1>')
document.write('<table class="table container">')
for(let i = 1; i <= 12; i++){
    document.write('<tr>')
    for(let j = 1; j <= 12; j++){
        console.log(i * j)
        document.write(`<td style="border: 1px solid black;">${i * j}</td>`)
    }
    document.write("</tr>")
}
document.write("</table>")

//Canvas drawing
let c = document.querySelector("#myCanvas")
if(c.getContext){
    let ctx = c.getContext("2d")

    ctx.fillStyle = "#F000FF"
    ctx.fillRect(50, 100, 380, 180)

    ctx.fillStyle = "#00FF00"
    ctx.strokeRect(50, 100, 380, 180)
}
