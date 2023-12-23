window.onload = function () {

    mapWidth = map[0].length;
    mapHeight = map.length;
    addKeys();
    initScreen();
    initSprites();
    initEnemies();
    drawMap();
    dragonMove();
    gameCycle();
    renderCycle();
}

//----------------------------------------------------------

var $ = function (id) {
    return document.getElementById(id);
};

//----------------------------------------------------------

var lastGameCycleTime = 0;
var gameCycleDelay = 1000 / 30;

//----------------------------------------------------------

gameCycle = function () {

    var now = new Date().getTime();
    var timeDelta = now - lastGameCycleTime;

    move(timeDelta);
    var cycleDelay = gameCycleDelay;
    if (timeDelta > cycleDelay) {
        cycleDelay = Math.max(1, cycleDelay - (timeDelta - cycleDelay))
    }
    lastGameCycleTime = now;
    setTimeout(gameCycle, cycleDelay);

}

//----------------------------------------------------------

renderCycle = function () {

    updateMap();
    clearSprites();
    castRays();
    renderEnemies();
    updateBackground();

    setTimeout(renderCycle, gameCycleDelay);
}

//----------------------------------------------------------

window.addEventListener("keydown", (e)=>{
    if(e.code == "Space"){
        document.getElementById('player').style.display = "none"
        document.getElementById('shootup').style.display = "block"
        console.log("pressed")

    }
})
window.addEventListener("keyup", (e)=>{
    if(e.code == "Space"){
        document.getElementById('player').style.display = "block"
        document.getElementById('shootup').style.display = "none"
        console.log("pressed")

    }
})

function dragonMove() {
    const dragon = document.getElementById("dragon");   
    dragon.animate(
        [
          { transform: 'scale(1)', top: "30%", left: "20%"},
          { transform: 'scale(.7)' },
          { transform: 'scale(.8)', top:"20%", left: "30%"},
        ],
        {
          duration: 7500, // milliseconds
          easing: 'ease-in-out', // 'linear', a bezier curve, etc. delay: 10, // milliseconds
          iterations: Infinity, // or a number
          direction: 'alternate', // 'normal', 'reverse', etc.
        },
      );
  }


