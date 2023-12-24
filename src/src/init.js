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
    }
})
window.addEventListener("keyup", (e)=>{
    const dragon1 = document.getElementById("dragon1")
    const dragon2 = document.getElementById("dragon2")
    const dragon3 = document.getElementById("dragon3")
    const dragon4 = document.getElementById("dragon4")
    const dragon5 = document.getElementById("dragon5")
    const audioFiles = [dragon1, dragon2, dragon3, dragon4, dragon5]
    if(e.code == "Space"){
        document.getElementById('player').style.display = "block"
        document.getElementById('shootup').style.display = "none"
        audioFiles[Math.floor(Math.random() * 5)].play()
        document.getElementById('music').play()

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
          duration: 5000, // milliseconds
          easing: 'ease-in-out', // 'linear', a bezier curve, etc. delay: 10, // milliseconds
          iterations: Infinity, // or a number
          direction: 'alternate', // 'normal', 'reverse', etc.
        },
      );
  }


  

