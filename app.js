setInterval(() => {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session="  AM";
    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session="PM";
    }
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }


    var h1=document.getElementById('hour');
    var m1=document.getElementById('minute');
    var s1=document.getElementById('second');
    var ap=document.getElementById('smy');
    h1.innerHTML=h;
    m1.innerHTML=m;
    s1.innerHTML=s;
    ap.innerHTML=session;
}, 1000);