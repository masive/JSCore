let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let pf = canvas.getContext("2d");

canvas.addEventListener('mousemove', function (evt) {
    let mousePos = getMousePos(canvas, evt);
    let message = 'Mouse position: ' + ((mousePos.x).toFixed(0)) + ',' + ((mousePos.y).toFixed(0));
    writeMessage(canvas, message);
}, false);

let pull = [];
let position;
let colour = '';
let count = 0;
let newPosition = [];
let colourReduser = false;

let arr = [[70, 70, 'yellow'], [70, 500, 'yellow'], [70, 920, 'yellow'], [500, 920, 'yellow'], [930, 70, 'yellow'], [930, 500, 'yellow'],
    [930, 920, 'yellow'], [500, 70, 'yellow'], [220, 220, 'yellow'], [220, 500, 'yellow'], [220, 780, 'yellow'], [500, 780, 'yellow'], [780, 780, 'yellow'],
    [780, 500, 'yellow'], [780, 220, 'yellow'], [500, 220, 'yellow'], [370, 370, 'yellow'], [370, 500, 'yellow'], [370, 630, 'yellow'], [500, 630, 'yellow'],
    [630, 630, 'yellow'], [630, 500, 'yellow'], [630, 370, 'yellow'], [500, 370, 'yellow']];
canvas.addEventListener('mousedown', function (evt) {
    position = getMousePos(canvas, evt);
    let message1 = 'Position' + ((position.x).toFixed(0)) + ',' + ((position.y).toFixed(0));
    writeMessage1(canvas, message1);
    fillboard(position);
    playField();
    //movePull(position);

}, false);
// ...................................... fill board


function cls() {
    ctx.clearRect(0, 0, 1200, 1200);
}
function playField() {
    pf.strokeStyle = 'green';
    pf.fillStyle = 'yellow';
    pf.lineWidth = 3;
    pf.lineCap = 'butt';
    pf.beginPath();
//_____________________________________________________out square
//left side___________
    pf.arc(70, 70, 30, 0, Math.PI * 2, true);//out left-up circle
    pf.moveTo(70, 100);
    pf.lineTo(70, 470);//let upper line
    pf.moveTo(100, 500);
    pf.arc(70, 500, 30, 0, Math.PI * 2, true);//out middle circle
    pf.moveTo(70, 530);
    pf.lineTo(70, 890);// left down line
    pf.moveTo(100, 920);
    pf.arc(70, 920, 30, 0, Math.PI * 2, true);//out down-left circle
//down side___________
    pf.moveTo(100, 920);
    pf.lineTo(470, 920);//down-left line
    pf.moveTo(530, 920);
    pf.arc(500, 920, 30, 160, Math.PI * 2, true);//out down-middle circle
    pf.moveTo(530, 920);
    pf.lineTo(900, 920);// down-right line
//right side___________
    pf.moveTo(960, 70);
    pf.arc(930, 70, 30, 0, Math.PI * 2, true);//out right-down circle
    pf.moveTo(930, 100);
    pf.lineTo(930, 470);//right-down line
    pf.moveTo(960, 500);
    pf.arc(930, 500, 30, 0, Math.PI * 2, true);//out right-middle circle
    pf.moveTo(930, 530);
    pf.lineTo(930, 890);//right upper line
    pf.moveTo(960, 920);
    pf.arc(930, 920, 30, 0, Math.PI * 2, true);//out right-upper circle
// up side_____________
    pf.moveTo(100, 70);
    pf.lineTo(470, 70);
    pf.moveTo(530, 70);
    pf.arc(500, 70, 30, 160, Math.PI * 2, true);// out up-middle circle
    pf.moveTo(530, 70);
    pf.lineTo(900, 70);
//-------------------------------------> middle square
    pf.moveTo(250, 220);
//left side_____________
    pf.arc(220, 220, 30, 0, Math.PI * 2, true);//middle left-up circle
    pf.moveTo(220, 250);
    pf.lineTo(220, 470);
    pf.moveTo(250, 500);
    pf.arc(220, 500, 30, 0, Math.PI * 2, true);//middle left-middle circle
    pf.moveTo(220, 530);
    pf.lineTo(220, 750);
    pf.moveTo(250, 780);
    pf.arc(220, 780, 30, 0, Math.PI * 2, true);//middle left-down circle
//down side___________
    pf.moveTo(250, 780);
    pf.lineTo(470, 780);
    pf.moveTo(530, 780);
    pf.arc(500, 780, 30, 0, Math.PI * 2, true);//middle down-middle circle
    pf.moveTo(530, 780);
    pf.lineTo(750, 780);
//right side___________
    pf.moveTo(810, 780);
    pf.arc(780, 780, 30, 0, Math.PI * 2, true);//middle right-down circle
    pf.moveTo(780, 750);
    pf.lineTo(780, 530);
    pf.moveTo(810, 500);
    pf.arc(780, 500, 30, 0, Math.PI * 2, true);//middle right-middle circle
    pf.moveTo(780, 470);
    pf.lineTo(780, 250);
    pf.moveTo(810, 220);
    pf.arc(780, 220, 30, 0, Math.PI * 2, true);// middle right-up circle
// up side______________
    pf.moveTo(750, 220);
    pf.lineTo(550, 220);
    pf.arc(500, 220, 30, 0, Math.PI * 2, true);//middle up-middle circle
    pf.moveTo(470, 220);
    pf.lineTo(250, 220);

//------------------------------------------> inner square
    pf.moveTo(400, 370);
//left side___________
    pf.arc(370, 370, 30, 0, Math.PI * 2, true);//inner left-up circle
    pf.moveTo(370, 400);
    pf.lineTo(370, 470);
    pf.moveTo(400, 500);
    pf.arc(370, 500, 30, 0, Math.PI * 2, true);//inner left-middle circle
    pf.moveTo(370, 530);
    pf.lineTo(370, 600);
    pf.moveTo(400, 630);
    pf.arc(370, 630, 30, 0, Math.PI * 2, true);//inner left-down circle
//down side___________
    pf.moveTo(400, 630);
    pf.lineTo(470, 630);
    pf.moveTo(530, 630);
    pf.arc(500, 630, 30, 0, Math.PI * 2, true);//inner down-middle circle
    pf.moveTo(530, 630);
    pf.lineTo(600, 630);
//right side___________
    pf.moveTo(660, 630);
    pf.arc(630, 630, 30, 0, Math.PI * 2, true);//inner right-down circle
    pf.moveTo(630, 600);
    pf.lineTo(630, 530);
    pf.moveTo(660, 500);
    pf.arc(630, 500, 30, 0, Math.PI * 2, true);//inner right-middle circle
    pf.moveTo(630, 470);
    pf.lineTo(630, 400);
    pf.moveTo(660, 370);
    pf.arc(630, 370, 30, 0, Math.PI * 2, true);//inner right-up circle
// up side______________
    pf.moveTo(600, 370);
    pf.lineTo(530, 370);
    pf.arc(500, 370, 30, 0, Math.PI * 2, true);//inner up-middle circle
    pf.moveTo(470, 370);
    pf.lineTo(400, 370);
//------------------------------------> inner connecting lines
//horizontal____________
    pf.moveTo(100, 500);
    pf.lineTo(190, 500);
    pf.moveTo(250, 500);
    pf.lineTo(340, 500);
    pf.moveTo(900, 500);
    pf.lineTo(810, 500);
    pf.moveTo(750, 500);
    pf.lineTo(660, 500);
//vertical_________________
    pf.moveTo(500, 100);
    pf.lineTo(500, 190);
    pf.moveTo(500, 250);
    pf.lineTo(500, 340);
    pf.moveTo(500, 890);
    pf.lineTo(500, 810);
    pf.moveTo(500, 750);
    pf.lineTo(500, 660);
//final drawing____________

    pf.stroke();
    pf.fill();

    for (let p of pull) {
        pf.beginPath();
        pf.fillStyle = p.colour;
        pf.arc(p.x, p.y, 30, 0, Math.PI * 2);
        pf.fill();
    }
}
let pointPosition;


playField();
function writeMessage(canvas, message) {
    pf.clearRect(0, 0, 400, 30);
    pf.font = '18pt Calibri';
    pf.fillStyle = 'black';
    pf.fillText(message, 10, 25);
}
function writeMessage1(canvas, message) {
    pf.clearRect(400, 0, 800, 30);
    pf.font = '18pt Calibri';
    pf.fillStyle = 'black';
    pf.fillText(message, 410, 25);
}

function fillboard(position) {

    let ifPointOnPosition = false;
    //while (count <= 18) {
    for (let point of arr) {
        if ((position.x >= point[0] - 30 && position.x <= point[0] + 30) &&
            (position.y >= point[1] - 30 && position.y <= point[1] + 30) &&
            (point[2] == 'yellow')) {
            ifPointOnPosition = true;

            if (count % 2 == 0) {
                colour = 'red';
                point[2] = 'red';
                console.log(point[2])
            } else if (count % 2 !== 0){
                colour = 'blue';
                point[2] = 'blue';
                console.log(point[2])
            } else {
                break;
            }
            count++;
            console.log('true');
            if (count <= 18) {
                pull.push({x: point[0], y: point[1], colour: colour});
            }
        }
    }

    console.log("yellow middle");
    for (let point of arr) {

        if ((position.x >= point[0] - 30 && position.x <= point[0] + 30) &&
            (position.y >= point[1] - 30 && position.y <= point[1] + 30)) {
            newPosition[0]=(point[0]);
            newPosition[1]=(point[1]);

        }
    }
    console.log(count);
    if (count > 18&& colourReduser!=true) {
        for (let i of pull) {
            console.log("yellowwwwwwwwwwwww");
            if (i.x == newPosition[0] && i.y == newPosition[1]) {
                newPosition[2]=(i.colour);
                console.log(newPosition[2]);
                //colour1.push(i.colour);
                //delete pull.colour;
                i.colour = 'yellow';
                //pull.push({x: newPosition[0], y: newPosition[1], colour: 'yellow'});
                count++;
                colourReduser=true;
                break;
            }
        }

    }
    else if (count > 18){
        pull.push({x: newPosition[0], y: newPosition[1], colour: newPosition[2]});
        colourReduser = false;
    }
    return ifPointOnPosition;
}

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top,
    };
}
function res() {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = ' black';
    ctx.lineWidth = 1;
    ctx.lineCap = 'butt';
}
function grid() {
    ctx.save();
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 0.25;
    for (let row = 0; row < 60; row++) {
        if (row % 5 == 0) ctx.lineWidth = 0.5;
        if (row % 10 == 0) ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, row * 10);
        ctx.lineTo(800, row * 10);
        ctx.stroke();
        if (row % 5 == 0) ctx.lineWidth = 0.25;
    }
    for (let col = 0; col < 80; col++) {
        if (col % 5 == 0) ctx.lineWidth = 0.5;
        if (col % 10 == 0) ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(col * 10, 0);
        ctx.lineTo(col * 10, 600);
        ctx.stroke();
        if (col % 5 == 0) ctx.lineWidth = 0.25;
    }
    ctx.restore();
}
