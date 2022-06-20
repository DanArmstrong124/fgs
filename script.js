var nav = document.getElementById('nav');
var ft = document.getElementById('fulltitle');
var tf = document.getElementById('titlef');
var th = document.getElementById('titleh');
var ts = document.getElementById('titles');

setInterval(function(){
    if (scrollY < 60) {
        nav.classList.add('nav');
        ft.classList.add('fulltitle');
        tf.classList.add('titlef');
        th.classList.add('titleh');
        ts.classList.add('titles');

        nav.classList.remove('navm');
        ft.classList.remove('fulltitlem');
        tf.classList.remove('titlefm');
        th.classList.remove('titlehm');
        ts.classList.remove('titlesm');
    }
    if ((scrollY > 150)&&(scrollY < 400)){
        nav.classList.remove('nav');
        ft.classList.remove('fulltitle');
        tf.classList.remove('titlef');
        th.classList.remove('titleh');
        ts.classList.remove('titles');

        tf.classList.remove('titlefmt');
        th.classList.remove('titlehmt');
        ts.classList.remove('titlesmt');

        nav.classList.add('navm');
        ft.classList.add('fulltitlem');
        tf.classList.add('titlefm');
        th.classList.add('titlehm');
        ts.classList.add('titlesm');
    }
    if (scrollY > 400){
        tf.classList.add('titlefmt');
        th.classList.add('titlehmt');
        ts.classList.add('titlesmt');

        tf.classList.remove('titlefm');
        th.classList.remove('titlehm');
        ts.classList.remove('titlesm');
    }
},50);