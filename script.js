var nav = document.getElementById('nav');
var ft = document.getElementById('fulltitle');
var tf = document.getElementById('titlef');
var th = document.getElementById('titleh');
var ts = document.getElementById('titles');
var tbg = document.getElementById('tbg');
var body = document.getElementById('body');

setInterval(function(){
    if (scrollY < 249) {
        nav.classList.add('nav');
        ft.classList.add('fulltitle');
        tf.classList.add('titlef');
        th.classList.add('titleh');
        ts.classList.add('titles');
        body.classList.add('bg')

        nav.classList.remove('navm');
        ft.classList.remove('fulltitlem');
        tf.classList.remove('titlefm');
        th.classList.remove('titlehm');
        ts.classList.remove('titlesm');
        body.classList.remove('bgm')
    }
    if ((scrollY > 250)&&(scrollY < 1000)){
        nav.classList.remove('nav');
        ft.classList.remove('fulltitle');
        tf.classList.remove('titlef');
        th.classList.remove('titleh');
        ts.classList.remove('titles');

        tf.classList.remove('titlefmt');
        th.classList.remove('titlehmt');
        ts.classList.remove('titlesmt');

        tbg.classList.remove('titlebgm');

        nav.classList.add('navm');
        ft.classList.add('fulltitlem');
        tf.classList.add('titlefm');
        th.classList.add('titlehm');
        ts.classList.add('titlesm');
    }
    if (scrollY > 1001){
        tf.classList.add('titlefmt');
        th.classList.add('titlehmt');
        ts.classList.add('titlesmt');
        body.classList.add('bgm')
        tbg.classList.add('titlebgm');

        tf.classList.remove('titlefm');
        th.classList.remove('titlehm');
        ts.classList.remove('titlesm');
        tbg.classList.remove('titlebg');
        body.classList.remove('bg');
    }
},50);