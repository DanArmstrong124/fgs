var nav = document.getElementById('nav');
var ft = document.getElementById('fulltitle');
var tf = document.getElementById('titlef');
var th = document.getElementById('titleh');
var ts = document.getElementById('titles');

setInterval(function(){
    if (scrollY > 60){
        nav.classList.add('navm');
        ft.classList.add('fulltitlem');
        tf.classList.add('titlefm');
        th.classList.add('titlehm');
        ts.classList.add('titlesm');
    }
},50);