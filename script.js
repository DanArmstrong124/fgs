let width = screen.width;

var start = document.getElementById('enterthesite');
var so = document.getElementById('nextone');
var st = document.getElementById('nexttwo');
var nav = document.getElementById('nav');
var ft = document.getElementById('fulltitle');
var tf = document.getElementById('titlef');
var th = document.getElementById('titleh');
var ts = document.getElementById('titles');
var tbg = document.getElementById('tbg');
var body = document.getElementById('body');
var sertext = document.getElementById('servicetext');
var serone = document.getElementById('serviceone');
var sertwo = document.getElementById('servicetwo');
var serthree = document.getElementById('servicethree');
var soi = document.getElementById('soi');
var sti = document.getElementById('sti');
var sthi = document.getElementById('sthi');

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
        start.classList.remove('hide');
    }
    if ((scrollY > 250)&&(scrollY < 1000)){
        nav.classList.remove('nav');
        ft.classList.remove('fulltitle');
        tf.classList.remove('titlef');
        th.classList.remove('titleh');
        ts.classList.remove('titles');
        start.classList.remove('hide');

        tf.classList.remove('titlefmt');
        th.classList.remove('titlehmt');
        ts.classList.remove('titlesmt');

        tbg.classList.remove('titlebgm');

        nav.classList.add('navm');
        ft.classList.add('fulltitlem');
        tf.classList.add('titlefm');
        th.classList.add('titlehm');
        ts.classList.add('titlesm');
        tbg.classList.add('titlebg')
        body.classList.add('bg')
        body.classList.remove('bgm')
    }
    if (scrollY > 1001){
        start.classList.add('hide');
        nav.classList.add('navm');
        tf.classList.add('titlefmt');
        th.classList.add('titlehmt');
        ts.classList.add('titlesmt');
        body.classList.add('bgm')
        tbg.classList.add('titlebgm');

        ft.classList.add('fulltitlem');
        ft.classList.remove('fulltitle');

        tf.classList.remove('titlefm');
        nav.classList.remove('nav');
        th.classList.remove('titlehm');
        ts.classList.remove('titlesm');
        tbg.classList.remove('titlebg');
        body.classList.remove('bg');
    }

    if (scrollY < 2000){
        sertext.classList.add('servicetext');
        sertext.classList.remove('servicetextm');
    }
    if (scrollY > 2001){
        sertext.classList.remove('servicetext');
        sertext.classList.add('servicetextm');
    }

    if ((scrollY < 2400)||(scrollY > 3201)){
        serone.classList.add('serviceone');
        serone.classList.remove('serviceonem');
        soi.classList.add('soi');
        soi.classList.remove('soim');
        so.classList.add('hide');
    }
    if ((scrollY > 2401)&&(scrollY < 3200)){
        serone.classList.remove('serviceone');
        serone.classList.add('serviceonem');
        soi.classList.remove('soi');
        soi.classList.add('soim');
        so.classList.remove('hide');
    }

    if ((scrollY < 3600)||(scrollY > 4401)){
        sertwo.classList.add('servicetwo');
        sertwo.classList.remove('servicetwom');
        sti.classList.add('sti');
        sti.classList.remove('stim');
        st.classList.add('hide');
    }
    if ((scrollY > 3601)&&(scrollY < 4400)){
        sertwo.classList.remove('servicetwo');
        sertwo.classList.add('servicetwom');
        sti.classList.remove('sti');
        sti.classList.add('stim');
        st.classList.remove('hide');
    }

    if ((scrollY < 5000)||(scrollY > 5801)){
        serthree.classList.add('servicethree');
        serthree.classList.remove('servicethreem');
        sthi.classList.add('sthi');
        sthi.classList.remove('sthim');
    }
    if ((scrollY > 5001)&&(scrollY < 5800)){
        serthree.classList.remove('servicethree');
        serthree.classList.add('servicethreem');
        sthi.classList.remove('sthi');
        sthi.classList.add('sthim');
    }
},50);
