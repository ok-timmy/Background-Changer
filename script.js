const btn = document.getElementById('change')
const body = document.getElementById('body');

btn.addEventListener('click', randomBgColor); 


function randomBgColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
   // var a = (Math.random()*1).toFixed(1);

    var rgba =  r + ',' + g + ',' + b ; //+ ',' + a ;
    console.log(rgba);
    body.style.backgroundColor = 'rgb(' + rgba + ')';
}

//setInterval(randomBgColor, 2000);
