
function writeConsole(mesage) {
    console.log(mesage);
    }
    function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    function cerc(x,y,r,cul) {
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, false);
        context.fillStyle = cul;
        context.fill();
        
    }
    function deplasare(d,v) {
        var cos = Math.cos(d*Math.PI/180);
        var sin = Math.sin(d*Math.PI/180)*-1;
        var dx = Math.round(cos*v);
        var dy = Math.round(sin*v);
        xb+=dx;
        yb+=dy;

        var dist = Math.pow( Math.pow((xm-xb), 2) + Math.pow((ym-yb), 2) , 0.5 );
        if(dist <= rb+rm) {
            t=0;
            var unghi;
            unghi=(Math.asin((xm-xb)/dist)+Math.PI/2)*180/Math.PI;
            if(ym-yb<0) {
                unghi=360-unghi;
            }
            d = Math.round(unghi)
        }
        if(yb<=rb || yb>=h-rb) d=360-d;
        if(xb>=w-rb || xb <= rb) {
            if(d<=180) d=180-d;
            else d=540-d;
        }
        dir = d;
    }
    function timer() {
        deplasare(dir,viteza);
        context.clearRect(0, 0, w, h);
        cerc(xm,ym,rm,culoare_m);
        cerc(xb,yb,rb,culoare_b);
    }
    var canvas = document.getElementById('myCanvas');
    var xm,ym;
    var rm=20, rb=30;
    var pas=10; 
    var culoare_m="#BDB76B";
    var culoare_b="#FF8C00";
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    var xb=w/2;
    var yb=h/2;
    var dir = 100;
    var viteza = 7;
    var myVar = setInterval(timer, pas);
    canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    xm=mousePos.x;
    ym=mousePos.y;
    }, false);
    