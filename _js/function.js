/*	VARIÁVEIS	*/
blockStatus = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	];
var blockStatus;
var	hBlock = 0;
var	vBlock = 0;
var pieceType = 0;
var pieceRotation = 0;
var velocity = 1000;
var clickOnce = 0;
var atLeastOnce = 0;
var placarPoints = 0;
var gameGo = 0;
var pausedGame = 0;
var levelGame = 1;
var xSize;
var ySize;
var tryNumber = 1;
var linesDones = 0;
var gameTimer = 0;
var gameMode = 0;
var playingGame = 0;
var trapTime = 0;
var lastPiece1 = -1;
var lastPiece2 = -1;
var lastPieceStatus = 1;
var alertOnce = 0;
var trapMin = 0;
var trapMax = 4;
var trapCurrent = 0;
var bonusOnce = 0;
var rankingList = [	playerRank = {nickName: "Rengar Recalls U",pointsObtained: 500,levelObtained: 2,timePlayed: "10m 0s",gameType: "Arcade", sizeGame: "10x20"},
					playerRank = {nickName: "Gigant0ssaur0",pointsObtained: 300,levelObtained: 1,timePlayed: "7m 30s",gameType: "Arcade", sizeGame: "10x20"}, 
					playerRank = {nickName: "Sor Dollynho",pointsObtained: 200,levelObtained: 1,timePlayed: "5m 00s",gameType: "Arcade", sizeGame: "10x20"}, 
					playerRank = {nickName: "MuJubertoni",pointsObtained: 100,levelObtained: 1,timePlayed: "2m 30s",gameType: "Arcade", sizeGame: "10x20"}, 
					playerRank = {nickName: "BruBebum",pointsObtained: 0,levelObtained: 1,timePlayed: "0m 0s",gameType: "Arcade", sizeGame: "10x20"}];

/*	FUNÇÕES COM A TABELA	*/
function generateTable(X, Y)
{
	if(playingGame == 0)
	{
		generateRank();
		var w = 0;
		var body = document.getElementsByTagName("div")[2];
		var tbl     = document.createElement("table");
		var tblBody = document.createElement("tbody");
		body.innerHTML="";
		for (var j = 0; j < Y; j++)
		{
			var row = document.createElement("tr");
			for (var i = 0; i < X; i++, w++)
			{
				var cell = document.createElement("td");
				var cellText = document.createTextNode(" ");
				cell.appendChild(cellText);
				row.appendChild(cell);
				cell.setAttribute("id",j+"-"+i);
				//cell.innerHTML=j+"-"+i;
			}
			tblBody.appendChild(row);
		}
		tbl.appendChild(tblBody);
		body.appendChild(tbl);
		if (X == 10 && Y == 20)
		{
			for (var q = 0; q < 11; q++)
			{
				blockStatus[20][q] = 1;
			}
			for (var q = 0; q < 21; q++)
			{
				blockStatus[q][10] = 1;
			}
			for(var y = 0; y < document.getElementsByTagName("td").length; y++)
			{
				document.getElementsByTagName("td")[y].setAttribute("style","border-radius: 0.3em;");
			}
		}
		xSize = X;
		ySize = Y;
		zerarTabela();
	}
};

function zerarTabela()
{
	for(var y = 0; y < ySize; y++)
	{
		for(var x = 0; x < xSize; x++)
		{
			blockStatus[y][x] = 0;
		}
	}
	for(var q = 0; q < xSize-2; q++)
	{
		blockStatus[44][q] = 1;
	}
	switch(gameMode)
	{
		case 0:
			classicMode();
			break;
		case 1:
			invertedGravity();
			break;
		case 2:
			trapMode();
			break;
	}
};

/*	OPÇÕES DE JOGO	*/
function developerMode()
{
	if(alertOnce == 0)
	{
		alert("Modo Desenvolvedor:\n	Todo Jogo é Pausado, mas os comandos de teclado da peça continuam funcionando para mover a peça livremente!");
		alertOnce = 1;
	}
	if(playingGame == 1)
	{
		if(pausedGame == 0)
		{
			document.getElementsByTagName("button")[1].setAttribute("style","background: none; opacity: 1; color: white;");
			clearInterval(runningGame);
			clearInterval(gameTimer);
			pausedGame = 1;
		}
		else
		{
			document.getElementsByTagName("button")[1].setAttribute("style","background: white; opacity: 1; color: black;");
			gameTimer = setInterval(timeGame, 1000);
			runningGame = setInterval(dropPiece, velocity);
			pausedGame = 0;
		}
	}
};

/*	MODOS DE JOGO	*/
function classicMode()
{
	if(playingGame == 0)
	{
		if (xSize == 22 && ySize == 44)
		{
			bord = "border-radius: 0.1em;";
		}
		else
		{
			bord = "border-radius: 0.3em;";
		}
		for(var x = 0; x < 12; x++)
		{
			document.getElementsByTagName("span")[x].setAttribute("style","color: black;");
		}
		for(var y = 0; y < document.getElementsByTagName("td").length; y++)
		{
			document.getElementsByTagName("td")[y].setAttribute("style","border: 0.1em solid rgba(0,0,0,0.1);"+bord);
		}
		document.getElementById("animal-gif").setAttribute("style","box-shadow: 0em 0.6em 0.6em -0.5em #01ab26;");
		document.getElementById("animal-gif").setAttribute("src","_images/pixel-rabbit.gif");
		document.body.setAttribute("style","background: url('_images/pixel-wallpaper.jpg') center top no-repeat; background-size: auto 200%; background-color: #7bd434;");
		document.getElementsByTagName("table")[0].setAttribute("style","transform: rotate(0eg);");
		gameMode = 0;
	}
};

function invertedGravity()
{
	if(playingGame == 0)
	{
		if (xSize == 22 && ySize == 44)
		{
			bord = "border-radius: 0.1em;";
		}
		else
		{
			bord = "border-radius: 0.3em;";
		}
		for(var x = 0; x < 12; x++)
		{
			document.getElementsByTagName("span")[x].setAttribute("style","color: white;");
		}
		for(var y = 0; y < document.getElementsByTagName("td").length; y++)
		{
			document.getElementsByTagName("td")[y].setAttribute("style","border: 0.1em solid rgba(255,255,255,0.8);"+bord);
		}
		document.getElementById("animal-gif").setAttribute("style","box-shadow: 0em 0.6em 0.6em -0.5em white;");
		document.getElementById("animal-gif").setAttribute("src","_images/pixel-owl.gif");
		document.body.setAttribute("style","background: url('_images/pixel-inverted-wallpaper.jpg') center top no-repeat; background-size: auto 200%; background-color: #48b8fa;");
		document.getElementsByTagName("table")[0].setAttribute("style","transform: rotate(180deg);");
		gameMode = 1;
	}
};

function trapMode()
{
	if(playingGame == 0)
	{
		if (xSize == 22 && ySize == 44)
		{
			bord = "border-radius: 0.1em;";
		}
		else
		{
			bord = "border-radius: 0.3em;";
		}
		for(var x = 0; x < 12; x++)
		{
			document.getElementsByTagName("span")[x].setAttribute("style","color: black;");
		}
		for(var y = 0; y < document.getElementsByTagName("td").length; y++)
		{
			document.getElementsByTagName("td")[y].setAttribute("style","border: 0.1em solid rgba(255,255,255,0.3);"+bord);
		}
		document.getElementById("animal-gif").setAttribute("style","box-shadow: 0em 1em 0.6em -0.5em #084411;");
		document.getElementById("animal-gif").setAttribute("src","_images/pixel-lion.gif");
		document.body.setAttribute("style","background: url('_images/pixel-night-wallpaper.jpg') center top no-repeat; background-size: auto 200%; background-color: #305e15;");
		document.getElementsByTagName("table")[0].setAttribute("style","transform: rotate(0eg);");
		gameMode = 2;
	}
};

/*	INICIALIZAÇÃO DO TRAP MODE	*/
function startTrapMode()
{
	trapCurrent = 0;
	for(var y = 6; y < ySize; y++)
	{
		for(var x = 0; x < xSize; x++)
		{
			if(trapCurrent < trapMax)
			{
				if(blockStatus[y][x] == 0)
				{
					if (xSize == 22 && ySize == 44)
					{
						chanceHole = Math.floor(Math.random() * 200);
					}
					else
					{
						chanceHole = Math.floor(Math.random() * 60);
					}
					if(chanceHole == 9)
					{
						blockStatus[y][x] = 9;
						trapCurrent++;
					}
				}
			}
		}
	}
	if(trapCurrent < trapMin)
	{
		startTrapMode();
	}
};

/*	TEMPORIZADOOR DO JOGO	*/
function timeGame()
{
	secondsTime++;
	if(secondsTime == 60)
	{
		secondsTime = 0;
		minutesTime++;
	}
	document.getElementById("Time").innerHTML = minutesTime + "m " + secondsTime + "s";
};

/*	INICIALIZAÇÃO DO JOGO	*/
function startGameVariables()
{
	zerarTabela();
	if(gameMode == 2)
	{
		startTrapMode();
		if (xSize == 22 && ySize == 44)
		{
			trapTime = setInterval(startTrapMode, 120000);
			trapMin = 1;
			trapMax = 6;
		}
		else
		{
			trapTime = setInterval(startTrapMode, 60000);
			trapMin = 1;
			trapMax = 4;
		}
	}
	if (xSize == 22 && ySize == 44)
	{
		velocity = 775;
	}
	else
	{
		velocity = 1000;
	}
	gameGo = 0;
	levelGame = 1;
	tryNumber = 1;
	placarPoints = 0;
	linesDones = 0;
	secondsTime = 0;
	minutesTime = 0;
	playingGame = 1;
	buttonControl(0,1);
	gameTimer = setInterval(timeGame, 1000);
	startGame();
};

function startGame()
{
	if(pausedGame == 0)
	{
		goToPoints();
		clearInterval(runningGame);
		runningGame = setInterval(dropPiece, velocity);
		generatePiece();
	}
};

/*	FINAL DE JOGO	*/
function endGame()
{
	if(gameMode == 2)
	{
		clearInterval(trapTime);
	}
	gameGo = 1;
	playingGame = 0;
	zerarTabela();
	clearInterval(gameTimer);
	addToRank();
	buttonControl(1,0);
};

/*	CONTROLE DOS BOTÕES	*/
function buttonControl(X, Y)
{
	for(var x = 0; x < 7; x++)
	{
		document.getElementsByTagName("button")[x].setAttribute("style","opacity: "+X+";");
	}
	document.getElementsByTagName("button")[1].setAttribute("style","opacity: "+Y+";");
	if(playingGame == 0)
	{
		document.getElementById("title2").innerHTML="Selecionar Tamanho do Jogo";
		document.getElementById("title1").innerHTML="Modos de Jogo";
		document.getElementById("title3").innerHTML="";
	}
	else
	{
		document.getElementById("title2").innerHTML="";
		document.getElementById("title1").innerHTML="";
		document.getElementById("title3").innerHTML="Opções";
		document.getElementById("title3").setAttribute("style","font-size: 1em; color: white; margin: auto; display: table;")
	}
};

/*	SISTEMA DE PONTOS	*/
function doPoints(lineY)
{
	linesDones++;
	document.getElementById("Lines").innerHTML = linesDones;
	if(atLeastOnce < 4)
	{
		atLeastOnce++;
		if(atLeastOnce == 2)
		{
			document.getElementById("bonus").style.animation = "bonus 3s 1";
			bonusTime = setInterval(bonusTimer, 1000);
		}
	}
	for(var x = 0; x < xSize; x++)
	{
		blockStatus[lineY][x] = 0;
	}
	for(var y = lineY; y >= 0; y--)
	{
		for(var x = xSize; x >= 0; x--)
		{
			blockStatus[y][x] = blockStatus[y-1][x];
		}
	}
};

function bonusTimer()
{
	bonusOnce++;
	if(bonusOnce == 4)
	{
		document.getElementById("bonus").style.animation = "";
		bonusOnce = 0;
		clearInterval(bonusTime);
	}
};

function makePoints()
{
	for(var y = 0; y < ySize; y++)
	{
		countAmount = 0;
		for(var x = 0; x < xSize; x++)
		{
			
			if(blockStatus[y][x] != 0)
			{
				countAmount++;
			}
			if(countAmount == xSize)
			{
				doPoints(y);
			}
		}
	}
}; 

function goToPoints()
{
	runningGame = setInterval(dropPiece, 1);
	for(var y = 0; y < ySize; y++)
	{
		makePoints();
	}
	placarPoints =  placarPoints + (atLeastOnce * atLeastOnce * 10);
	levelGame = 1;
	if(placarPoints >= 500)
	{
		levelGame = 2;
		if(placarPoints >= 1000)
		{
			levelGame = 3;
			if(placarPoints >= 1500)
			{
				levelGame = 4;
				if(placarPoints >= 2000)
				{
					levelGame = 5;
				}
			}
		}
		document.getElementById("Levels").innerHTML = levelGame;
		if(levelGame == 5)
		{
			document.getElementById("Levels").innerHTML = "Último!";
		}
		if(levelGame > tryNumber)
		{
			if(velocity > 100)
			{
				velocity -= 225;
				document.getElementById("Levels").innerHTML = levelGame;
			}
			tryNumber++;
		}
	}
	document.getElementById("Points").innerHTML = placarPoints;
};

/*	SISTEMA DE RANKING	*/
function addToRank()
{
	var playerRank = {
		nickName: "None",
		pointsObtained: 0,
		levelObtained: 0,
		timePlayed: 0
	};
	var nickName = prompt ("Entre com seu Nome para o Ranking:","");
	if (nickName != null && nickName != "")
	{
		playerRank.nickName = nickName;
		playerRank.pointsObtained = placarPoints;
		playerRank.timePlayed = minutesTime + "m " + secondsTime + "s";
		playerRank.levelObtained = levelGame;
		if(gameMode == 0)
			playerRank.gameType = "Arcade";
		if(gameMode == 1)
			playerRank.gameType = "Inverted";
		if(gameMode == 2)
			playerRank.gameType = "Trap";
		playerRank.sizeGame = xSize+"x"+ySize;
		rankingList.push(playerRank);
		rankingList.sort(function(a, b){return b.timePlayed - a.timePlayed});
		rankingList.sort(function(a, b){return b.pointsObtained - a.pointsObtained});
		generateRank();
	}
};

function generateRank()
{
	for (var q = 0; q < 5; q++)
	{
		titleLine = document.getElementById("nick"+q);
		spanLine = document.getElementById("rank"+q);
		spanLine.innerHTML="";
		titleLine.innerHTML="";
		t = document.createTextNode(q+1+" - ");
		titleLine.appendChild(t);
		t = document.createTextNode("Nick: "+rankingList[q].nickName);
		titleLine.appendChild(t);
		t = document.createTextNode("Level: "+rankingList[q].levelObtained);
		spanLine.appendChild(t);
		t = document.createTextNode(" - Tamanho: "+rankingList[q].sizeGame);
		spanLine.appendChild(t);
		t = document.createTextNode(" - Modo: "+rankingList[q].gameType);
		spanLine.appendChild(t);
		t = document.createTextNode(" - Pontos: "+rankingList[q].pointsObtained);
		spanLine.appendChild(t);
		t = document.createTextNode(" - Tempo: "+rankingList[q].timePlayed);
		spanLine.appendChild(t);
		spanLine.appendChild(document.createElement("br"));
	}
};

/*	CONTROLE DAS PEÇAS	*/
/*	GRAVIDADE	*/
function dropPiece()
{
	switch(pieceType)
	{
		case 0:
			if(blockStatus[vBlock][hBlock] == 0 && pieceRotation == 0)
			{
				blockStatus[vBlock][hBlock] = 1;
				blockStatus[vBlock-4][hBlock] = 0;
				vBlock ++;
				dropOnce++;
			}else
			{
			if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock][hBlock+1] == 0 && blockStatus[vBlock][hBlock+2] == 0 && blockStatus[vBlock][hBlock+3] == 0 && pieceRotation == 1)
			{
				blockStatus[vBlock][hBlock] = 1;
				blockStatus[vBlock][hBlock+1] = 1;
				blockStatus[vBlock][hBlock+2] = 1;
				blockStatus[vBlock][hBlock+3] = 1;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-1][hBlock+1] = 0;
				blockStatus[vBlock-1][hBlock+2] = 0;
				blockStatus[vBlock-1][hBlock+3] = 0;
				vBlock ++;
				dropOnce++;
			}else
			{
				clearInterval(runningGame);
				if(dropOnce == 0)
				{
					endGame();
				}
				else
				{
					startGame();
				}
			}
			}
			break;
		case 1:
			if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock][hBlock+1] == 0 && pieceRotation == 0)
			{
				blockStatus[vBlock][hBlock] = 2;
				blockStatus[vBlock][hBlock+1] = 2;
				blockStatus[vBlock-2][hBlock] = 0;
				blockStatus[vBlock-2][hBlock+1] = 0;
				vBlock++;
				dropOnce++;
			}else{
				clearInterval(runningGame);
				if(dropOnce == 0)
				{
					endGame();
				}
				else
				{
					startGame();
				}
			}
			break;
		case 2:
			if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock][hBlock+1] == 0 && pieceRotation == 0)
			{
				blockStatus[vBlock][hBlock] = 3;
				hBlock += 1;
				blockStatus[vBlock][hBlock] = 3;
				vBlock -= 1;
				blockStatus[vBlock][hBlock] = 0;
				hBlock -=1;
				vBlock -=2;
				blockStatus[vBlock][hBlock] = 0;
				vBlock +=4;
				dropOnce++;
			}else{
				if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock][hBlock+1] == 0 && blockStatus[vBlock][hBlock+2] == 0 && pieceRotation == 1)
				{
					blockStatus[vBlock][hBlock] = 3;
					blockStatus[vBlock][hBlock+1] = 3;
					blockStatus[vBlock][hBlock+2] = 3;
					blockStatus[vBlock-1][hBlock] = 0;
					blockStatus[vBlock-1][hBlock+1] = 0;
					blockStatus[vBlock-2][hBlock+2] = 0;
					vBlock +=1;
					dropOnce++;
				}else{
					if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock-2][hBlock-1] == 0 && pieceRotation == 2)
					{
						blockStatus[vBlock][hBlock] = 3;
						blockStatus[vBlock-2][hBlock-1] = 3;
						blockStatus[vBlock-3][hBlock-1] = 0;
						blockStatus[vBlock-4][hBlock] = 0;
						blockStatus[vBlock-3][hBlock] = 0;
						vBlock +=1;
						dropOnce++;
					}else{
						if(blockStatus[vBlock][hBlock-1] == 0 && blockStatus[vBlock-1][hBlock] == 0 && blockStatus[vBlock-1][hBlock+1] == 0 && pieceRotation == 3)
						{
							blockStatus[vBlock][hBlock-1] = 3;
							blockStatus[vBlock-1][hBlock] = 3;
							blockStatus[vBlock-1][hBlock+1] = 3;
							blockStatus[vBlock-2][hBlock-1] = 0;
							blockStatus[vBlock-2][hBlock] = 0;
							blockStatus[vBlock-2][hBlock+1] = 0;
							vBlock +=1;
							dropOnce++;
						}else{
							clearInterval(runningGame);
							if(dropOnce == 0)
							{
								endGame();
							}
							else
							{
								startGame();
							}
						}	
					}
				}
			}
			break;
		case 3:
			if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock][hBlock+1] == 0 && pieceRotation == 0)
			{
				blockStatus[vBlock][hBlock] = 4;
				blockStatus[vBlock][hBlock+1] = 4;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-3][hBlock+1] = 0;
				vBlock+=1;
				dropOnce++;
			}else{
				if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock][hBlock+1] == 0 && blockStatus[vBlock+1][hBlock+2] == 0 && pieceRotation == 1)
				{
					blockStatus[vBlock][hBlock] = 4;
					blockStatus[vBlock][hBlock+1] = 4;
					blockStatus[vBlock+1][hBlock+2] = 4;
					blockStatus[vBlock-1][hBlock] = 0;
					blockStatus[vBlock-1][hBlock+1] = 0;
					blockStatus[vBlock-1][hBlock+2] = 0;
					vBlock+=1;
					dropOnce++;
				}else{
					if (blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock-2][hBlock+1] == 0 && pieceRotation == 2) 
					{
						blockStatus[vBlock][hBlock] = 4;
						blockStatus[vBlock-2][hBlock+1] = 4;
						blockStatus[vBlock-3][hBlock] = 0;
						blockStatus[vBlock-3][hBlock+1] = 0;
						vBlock+=1;
						dropOnce++;
					}else{
						if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock][hBlock+1] == 0 && blockStatus[vBlock][hBlock+2] == 0 && pieceRotation == 3)
						{
							blockStatus[vBlock][hBlock] = 4;
							blockStatus[vBlock][hBlock+1] = 4;
							blockStatus[vBlock][hBlock+2] = 4;
							blockStatus[vBlock-2][hBlock] = 0;
							blockStatus[vBlock-1][hBlock+1] = 0;
							blockStatus[vBlock-1][hBlock+2] = 0;
							vBlock+=1;
							dropOnce++;
						}else{
							clearInterval(runningGame);
							if(dropOnce == 0)
							{
								endGame();
							}
							else
							{
								startGame();
							}
						}
					}
				}	
			}
			break;
		case 4:
			if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock][hBlock+1] == 0 && blockStatus[vBlock][hBlock+2] == 0 && pieceRotation == 0)
			{
				blockStatus[vBlock][hBlock] = 5;
				blockStatus[vBlock][hBlock+1] = 5;
				blockStatus[vBlock][hBlock+2] = 5;
				blockStatus[vBlock-1][hBlock+1] = 0;
				blockStatus[vBlock-2][hBlock] = 0;
				blockStatus[vBlock-2][hBlock+2] = 0;
				vBlock += 1;
				dropOnce++;
			}else{
				if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock][hBlock+1] == 0 && blockStatus[vBlock-2][hBlock] == 0 && pieceRotation == 1)
				{
					blockStatus[vBlock][hBlock] = 5;
					blockStatus[vBlock][hBlock+1] = 5;
					blockStatus[vBlock-2][hBlock] = 5;
					blockStatus[vBlock-1][hBlock] = 0;
					blockStatus[vBlock-3][hBlock] = 0;
					blockStatus[vBlock-3][hBlock+1] = 0;
					vBlock +=1;
					dropOnce++;
				}else{
					if(blockStatus[vBlock-1][hBlock] == 0 && blockStatus[vBlock][hBlock-1] == 0 && blockStatus[vBlock][hBlock+1] == 0 && pieceRotation == 2)
					{
						blockStatus[vBlock-1][hBlock] = 5;
						blockStatus[vBlock][hBlock-1] = 5;
						blockStatus[vBlock][hBlock+1] = 5;
						blockStatus[vBlock-2][hBlock] = 0;
						blockStatus[vBlock-2][hBlock+1] = 0;
						blockStatus[vBlock-2][hBlock-1] = 0;
						vBlock ++;
						dropOnce++;
					}else{
						if(blockStatus[vBlock+1][hBlock+1] == 0 && blockStatus[vBlock+1][hBlock+2] == 0 && blockStatus[vBlock-1][hBlock+2] == 0 && pieceRotation == 3)
						{
							blockStatus[vBlock+1][hBlock+1] = 5;
							blockStatus[vBlock+1][hBlock+2] = 5;
							blockStatus[vBlock-1][hBlock+2] = 5;
							blockStatus[vBlock][hBlock+2] = 0;
							blockStatus[vBlock-2][hBlock+1] = 0;
							blockStatus[vBlock-2][hBlock+2] = 0;
							vBlock +=1;
							dropOnce++;
						}else{
							clearInterval(runningGame);
							if(dropOnce == 0)
							{
								endGame();
							}
							else
							{
								startGame();
							}
						}
					}
				}
			}
			break;
		case 5:
			if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock][hBlock-1] == 0 && blockStatus[vBlock][hBlock+1] == 0 && pieceRotation == 0)
			{
				blockStatus[vBlock][hBlock] = 6;
				blockStatus[vBlock][hBlock-1] = 6; 
				blockStatus[vBlock][hBlock+1] = 6;
				blockStatus[vBlock-1][hBlock-1] = 0; 
				blockStatus[vBlock-1][hBlock+1] = 0;
				blockStatus[vBlock-2][hBlock] = 0;
				vBlock ++;
				dropOnce++;
			}else{
				if(blockStatus[vBlock][hBlock] == 0 && blockStatus [vBlock-1][hBlock-1] == 0 && pieceRotation == 1)
				{
					blockStatus[vBlock][hBlock] = 6;
					blockStatus[vBlock-1][hBlock-1] = 6;
					blockStatus[vBlock-3][hBlock] = 0;
					blockStatus[vBlock-2][hBlock-1] = 0;
					vBlock++;
					dropOnce++;
				}else{
					if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock-1][hBlock-1] == 0 && blockStatus[vBlock-1][hBlock+1] == 0 && pieceRotation == 2)
					{
						blockStatus[vBlock][hBlock] = 6;
						blockStatus[vBlock-1][hBlock-1] = 6;
						blockStatus[vBlock-1][hBlock+1] = 6;
						blockStatus[vBlock-2][hBlock] = 0;
						blockStatus[vBlock-2][hBlock-1] = 0;
						blockStatus[vBlock-2][hBlock+1] = 0;
						vBlock++;
						dropOnce++;
					}else{
						if(blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock-1][hBlock+1] == 0 && pieceRotation == 3)
						{
							blockStatus[vBlock][hBlock] = 6;
							blockStatus[vBlock-1][hBlock+1] = 6;
							blockStatus[vBlock-3][hBlock] = 0;
							blockStatus[vBlock-2][hBlock+1] = 0;
							vBlock++;
							dropOnce++;
						}else{
							clearInterval(runningGame);
							if(dropOnce == 0)
							{
								endGame();
							}
							else
							{
								startGame();
							}
						}	
					}						
				}
			}
			break;
		case 6:
			break;
		case 7:
			break;
	}
	atLeastOnce = 0;
	updateStatus();
};

/*	CRIAÇÃO	*/
function generatePiece()
{
	dropOnce = 0;
	pieceRotation = 0;
	pieceType = Math.floor(Math.random() * 6);
	if(lastPiece1 == lastPiece2 && lastPiece1 == pieceType)
	{
		pieceType = Math.floor(Math.random() * 6);
		if(lastPiece1 == lastPiece2 && lastPiece1 == pieceType)
		{
			pieceType = Math.floor(Math.random() * 6);
		}
	}
	if(lastPieceStatus == 1)
	{
		lastPiece1 = pieceType;
		lastPieceStatus = 2;
	}
	else
	{
		lastPiece2 = pieceType;
		lastPieceStatus = 1;
	}
	switch (pieceType)
	{
		case 0:
			LinePiece();
			break;
		case 1:
			SquarePiece();
			break;
		case 2:
			LPiece();
			break;
		case 3:
			LInvertedPiece();
			break;
		case 4:
			UPiece();
			break;
		case 5:
			TPiece();
			break;
		case 6:
			ZInvertedPiece();
			break;
		case 7:
			ZPiece();
			break;
	}
	updateStatus();
};

function LinePiece()
{
	if(blockStatus[0][xSize/2-1] == 0 && blockStatus[1][xSize/2-1] == 0 && blockStatus[2][xSize/2-1] == 0 && blockStatus[3][xSize/2-1] == 0)
	{
		blockStatus[0][xSize/2-1] = 1;
		blockStatus[1][xSize/2-1] = 1;
		blockStatus[2][xSize/2-1] = 1;
		blockStatus[3][xSize/2-1] = 1;
		hBlock = xSize/2-1;
		vBlock = 4;
	}
	else
	{
		clearInterval(runningGame);
		endGame();
	}
};

function SquarePiece()
{
	if(blockStatus[0][xSize/2-1] == 0 && blockStatus[1][xSize/2-1] == 0 && blockStatus[0][xSize/2] == 0 && blockStatus[1][xSize/2] == 0)
	{
		blockStatus[0][xSize/2-1] = 2;
		blockStatus[1][xSize/2-1] = 2;
		blockStatus[0][xSize/2] = 2;
		blockStatus[1][xSize/2] = 2;
		hBlock = xSize/2-1;
		vBlock = 2;
	}
	else
	{
		clearInterval(runningGame);
		endGame();
	}
};

function LPiece()
{
	if(blockStatus[0][xSize/2-1] == 0 && blockStatus[1][xSize/2-1] == 0 && blockStatus[2][xSize/2-1] == 0 && blockStatus[2][xSize/2] == 0)
	{
		blockStatus[0][xSize/2-1] = 3;
		blockStatus[1][xSize/2-1] = 3;
		blockStatus[2][xSize/2-1] = 3;
		blockStatus[2][xSize/2] = 3;
		hBlock = xSize/2-1;
		vBlock = 3;
	}
	else
	{
		clearInterval(runningGame);
		endGame();
	}
};

function LInvertedPiece()
{
	if(blockStatus[0][xSize/2] == 0 && blockStatus[1][xSize/2] == 0 && blockStatus[2][xSize/2] == 0 && blockStatus[2][xSize/2-1] == 0)
	{
	blockStatus[0][xSize/2] = 4;
	blockStatus[1][xSize/2] = 4;
	blockStatus[2][xSize/2] = 4;
	blockStatus[2][xSize/2-1] = 4;
	hBlock = xSize/2-1;
	vBlock = 3;
	}
	else
	{
		clearInterval(runningGame);
		endGame();
	}
};

function ZPiece()
{
	var Z = [
			[0,1,1]
			[1,1,0]
			];
};

function ZInvertedPiece()
{
	var ZInverted = [
			[1,1,0]
			[0,1,1]
			];
};

function TPiece()
{
	if(blockStatus[1][xSize/2-2] == 0 && blockStatus[1][xSize/2-1] == 0 && blockStatus[1][xSize/2] == 0 && blockStatus[0][xSize/2-1] == 0)
	{
		blockStatus[1][xSize/2-2] = 6;
		blockStatus[1][xSize/2-1] = 6;
		blockStatus[1][xSize/2] = 6;
		blockStatus[0][xSize/2-1] = 6;
		hBlock = xSize/2-1;
		vBlock = 2;
	}
	else
	{
		clearInterval(runningGame);
		endGame();
	}
};

function UPiece()
{
	if(blockStatus[0][xSize/2-2] == 0 && blockStatus[1][xSize/2-2] == 0 && blockStatus[1][xSize/2-1] == 0 && blockStatus[0][xSize/2] == 0 && blockStatus[1][xSize/2] == 0)
	{
		blockStatus[0][xSize/2-2]=5;
		blockStatus[1][xSize/2-2]=5;
		blockStatus[1][xSize/2-1]=5;
		blockStatus[1][xSize/2]=5;
		blockStatus[0][xSize/2]=5;
		vBlock=2;
		hBlock=xSize/2-2;
	}
	else
	{
		clearInterval(runningGame);
		endGame();
	}
};

/*	ROTAÇÃO	*/
function rotatePiece()
{
	switch(pieceType)
	{
		case 0:
			if(pieceRotation == 0 && blockStatus[vBlock-3][hBlock-1] == 0 && blockStatus[vBlock-3][hBlock+1] == 0 && blockStatus[vBlock-3][hBlock+2] == 0)
			{
				blockStatus[vBlock-3][hBlock-1] = 1;
				blockStatus[vBlock-3][hBlock+1] = 1;
				blockStatus[vBlock-3][hBlock+2] = 1;
				vBlock -= 3;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock+1][hBlock] = 0;
				blockStatus[vBlock+2][hBlock] = 0;
				vBlock += 1;
				hBlock -= 1;
				pieceRotation = 1;
			}else{
				if(pieceRotation == 1 && blockStatus[vBlock-2][hBlock+1] == 0 && blockStatus[vBlock][hBlock+1] == 0 && blockStatus[vBlock+1][hBlock+1] == 0)
				{
					blockStatus[vBlock-1][hBlock] = 0;
					blockStatus[vBlock-1][hBlock+2] = 0;
					blockStatus[vBlock-1][hBlock+3] = 0;
					vBlock -= 1;
					hBlock += 1;
					blockStatus[vBlock-1][hBlock] = 1;
					blockStatus[vBlock+1][hBlock] = 1;
					blockStatus[vBlock+2][hBlock] = 1;
					vBlock += 3;
					pieceRotation = 0;
				}
			}
			break;
		case 1:
			break;
		case 2:
			if(pieceRotation == 0 && blockStatus[vBlock-3][hBlock+1] == 0 && blockStatus[vBlock-2][hBlock+1] == 0 && blockStatus[vBlock-2][hBlock-1] == 0)
			{
				blockStatus[vBlock-3][hBlock+1] = 3;
				blockStatus[vBlock-2][hBlock+1] = 3;
				blockStatus[vBlock-2][hBlock-1] = 3;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-1][hBlock+1] = 0;
				blockStatus[vBlock-3][hBlock] = 0;
				vBlock -= 1;
				hBlock -=1;
				
				pieceRotation = 1;
			}else{
				if(pieceRotation == 1 && blockStatus[vBlock-2][hBlock] == 0 && blockStatus[vBlock-2][hBlock+1] == 0 && blockStatus[vBlock][hBlock+1] == 0)
				{
					blockStatus[vBlock-1][hBlock] = 0;
					blockStatus[vBlock-1][hBlock+2] = 0;
					blockStatus[vBlock-2][hBlock+2] = 0;
					blockStatus[vBlock-2][hBlock] = 3;
					blockStatus[vBlock-2][hBlock+1] = 3;
					blockStatus[vBlock][hBlock+1] = 3;
					vBlock += 1;
					hBlock += 1;
					pieceRotation = 2;
				}else{
					if(pieceRotation == 2 && blockStatus[vBlock-2][hBlock+1] == 0 && blockStatus[vBlock-2][hBlock-1] == 0 && blockStatus[vBlock-1][hBlock+1] == 0)
					{
						blockStatus[vBlock-1][hBlock] = 0;
						blockStatus[vBlock-3][hBlock] = 0;
						blockStatus[vBlock-3][hBlock-1] = 0;
						blockStatus[vBlock-1][hBlock-1] = 3;
						blockStatus[vBlock-2][hBlock-1] = 3;
						blockStatus[vBlock-2][hBlock+1] = 3;
						pieceRotation = 3;
						
						
					}else{
						if(pieceRotation == 3 && blockStatus[vBlock-3][hBlock] == 0 && blockStatus[vBlock-1][hBlock] == 0 && blockStatus[vBlock-1][hBlock+1] == 0)
						{
							blockStatus[vBlock-1][hBlock-1] = 0;
							blockStatus[vBlock-2][hBlock-1] = 0;
							blockStatus[vBlock-2][hBlock+1] = 0;
							blockStatus[vBlock-3][hBlock] = 3;
							blockStatus[vBlock-1][hBlock] = 3;
							blockStatus[vBlock-1][hBlock+1] = 3;
							pieceRotation = 0;
						}
					}
				}
			}
			break;
		case 3:
			if(pieceRotation == 0 && blockStatus[vBlock-2][hBlock] == 0 && blockStatus[vBlock-2][hBlock+2] == 0 && blockStatus[vBlock-1][hBlock+2] == 0)
			{
				blockStatus[vBlock-2][hBlock] = 4;
				blockStatus[vBlock-2][hBlock+2] = 4;
				blockStatus[vBlock-1][hBlock+2] = 4;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-1][hBlock+1] = 0;
				blockStatus[vBlock-3][hBlock+1] = 0;
				vBlock-=1;
				pieceRotation = 1;
			}else{
				if(pieceRotation == 1 && blockStatus[vBlock][hBlock+1] == 0 && blockStatus[vBlock-2][hBlock+1] == 0 && blockStatus[vBlock-2][hBlock+2] == 0)
				{
					blockStatus[vBlock][hBlock+1] = 4;
					blockStatus[vBlock-2][hBlock+1] = 4;
					blockStatus[vBlock-2][hBlock+2] = 4;
					blockStatus[vBlock-1][hBlock] = 0;
					blockStatus[vBlock-1][hBlock+2] = 0;
					blockStatus[vBlock][hBlock+2] = 0;
					hBlock++;
					vBlock++;
					pieceRotation = 2;
				}else{
					if(pieceRotation == 2 && blockStatus[vBlock-2][hBlock-1] == 0 && blockStatus[vBlock-3][hBlock-1] == 0 && blockStatus[vBlock-2][hBlock+1] == 0 )
					{
						blockStatus[vBlock-2][hBlock-1] = 4;
						blockStatus[vBlock-3][hBlock-1] = 4;
						blockStatus[vBlock-2][hBlock+1] = 4;
						blockStatus[vBlock-1][hBlock] = 0;
						blockStatus[vBlock-3][hBlock] = 0;
						blockStatus[vBlock-3][hBlock+1] = 0;
						hBlock-=1;
						vBlock-=1;
						pieceRotation = 3;
					}else{
						if(pieceRotation == 3 && blockStatus[vBlock][hBlock] == 0 && blockStatus[vBlock][hBlock+1] == 0 )
						{
							blockStatus[vBlock][hBlock] = 4;
							blockStatus[vBlock][hBlock+1] = 4;
							blockStatus[vBlock-2][hBlock+1] = 4;
							blockStatus[vBlock-1][hBlock] = 0;
							blockStatus[vBlock-2][hBlock] = 0;
							blockStatus[vBlock-1][hBlock+2] = 0;
							vBlock+=1;
							pieceRotation = 0;
						}
					}
				}
			}
			break;
		case 4:
			if(pieceRotation == 0 && blockStatus[vBlock-2][hBlock+1] == 0 && blockStatus[vBlock][hBlock+1] == 0 && blockStatus[vBlock][hBlock] == 0)
			{
				blockStatus[vBlock-2][hBlock+1] = 5;
				blockStatus[vBlock][hBlock+1] = 5;
				blockStatus[vBlock][hBlock] = 5;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-2][hBlock+2] = 0;
				blockStatus[vBlock-1][hBlock+2] = 0;
				vBlock += 1;
				pieceRotation = 1;
			}else{
				if(pieceRotation == 1 && blockStatus[vBlock-2][hBlock+2] == 0 && blockStatus[vBlock-2][hBlock+2] == 0 && blockStatus[vBlock-1][hBlock+2] == 0)
				{
					blockStatus[vBlock-3][hBlock] = 0;
					blockStatus[vBlock-3][hBlock+1] = 0;
					blockStatus[vBlock-1][hBlock+1] = 0;
					blockStatus[vBlock-1][hBlock+2] = 5;
					blockStatus[vBlock-2][hBlock+2] = 5;
					blockStatus[vBlock-2][hBlock] = 5;
					hBlock += 1;
					pieceRotation = 2;
				}else{
					if(pieceRotation == 2 && blockStatus[vBlock-1][hBlock] == 0 && blockStatus[vBlock-3][hBlock] == 0 && blockStatus[vBlock-3][hBlock+1] == 0)
					{
						blockStatus[vBlock-1][hBlock-1] = 0;
						blockStatus[vBlock-2][hBlock-1] = 0;
						blockStatus[vBlock-2][hBlock+1] = 0;
						blockStatus[vBlock-1][hBlock] = 5;
						blockStatus[vBlock-3][hBlock] = 5;
						blockStatus[vBlock-3][hBlock+1] = 5;
						hBlock--;
						vBlock -= 1;
						pieceRotation = 3;
					}else{
						if(pieceRotation == 3 && blockStatus[vBlock-1][hBlock] == 0 && blockStatus[vBlock-2][hBlock] == 0 && blockStatus[vBlock-1][hBlock+2] == 0)
						{
							blockStatus[vBlock][hBlock+1] = 0;
							blockStatus[vBlock][hBlock+2] = 0;
							blockStatus[vBlock-2][hBlock+1] = 0;
							blockStatus[vBlock-2][hBlock] = 5;
							blockStatus[vBlock-1][hBlock+2] = 5;
							blockStatus[vBlock-1][hBlock] = 5;
							pieceRotation = 0;
						}
					}
				}
			}
			break;
		case 5:
			if(blockStatus[vBlock][hBlock] == 0 && pieceRotation == 0)
			{
				blockStatus[vBlock][hBlock] = 6;
				blockStatus[vBlock-1][hBlock+1] = 0;
				vBlock ++;
				pieceRotation = 1;
			}else{
				if(blockStatus[vBlock-2][hBlock+1] == 0 && pieceRotation == 1)
				{
					blockStatus[vBlock-2][hBlock+1] = 6;
					blockStatus[vBlock-3][hBlock] = 0;
					pieceRotation = 2;
				}else{
					if(blockStatus[vBlock-3][hBlock] == 0 && pieceRotation == 2)
					{
						blockStatus[vBlock-3][hBlock] = 6;
						blockStatus[vBlock-2][hBlock-1] = 0;
						pieceRotation = 3;
					}else{
						if(blockStatus[vBlock-2][hBlock-1] == 0 && pieceRotation == 3)
						{
							blockStatus[vBlock-2][hBlock-1] = 6;
							blockStatus[vBlock-1][hBlock] = 0;
							vBlock--;
							pieceRotation = 0;
						}
					}						
				}
			}
			break;
		case 6:
			break;
		case 7:
			break;
	}
	updateStatus();
};

/*	CONTROLE POR ARROW KEYS	*/
document.onkeydown = function(e)
{
	if (gameGo == 0)
	{
    switch (e.keyCode)
	{
        case 37:
			if((pieceType == 0) && (pieceRotation == 0) && (hBlock > 0) && (blockStatus[vBlock-4][hBlock-1] == 0) && (blockStatus[vBlock-1][hBlock-1] == 0) && (blockStatus[vBlock-2][hBlock-1] == 0) && (blockStatus[vBlock-3][hBlock-1] == 0))
			{
				limit = vBlock-1;
				for (; limit > vBlock-5 ; limit--)
				{
					blockStatus[limit][hBlock] = 0;
				}
				limit = vBlock-1;
				hBlock--;
				for (; limit > vBlock-5 ; limit--)
				{
					blockStatus[limit][hBlock] = 1;
				}
			}
			if((pieceType == 0) && (pieceRotation == 1) && (hBlock > 0) && (blockStatus[vBlock-1][hBlock-1] == 0))
			{
				vLimit = vBlock-1;
				hLimit = hBlock-1;
				blockStatus[vLimit][hLimit] = 1;
				hLimit += 4;
				blockStatus[vLimit][hLimit] = 0;
				hBlock -= 1;
			}
			if(blockStatus[vBlock-1][hBlock-1] == 0 && blockStatus[vBlock-2][hBlock-1] == 0 && pieceRotation == 0 && pieceType == 1)
			{
				blockStatus[vBlock-1][hBlock-1] = 2;
				blockStatus[vBlock-2][hBlock-1] = 2;
				blockStatus[vBlock-1][hBlock+1] = 0;
				blockStatus[vBlock-2][hBlock+1] = 0;
				hBlock--;
			}
			if((pieceType == 5 && pieceRotation == 0) && (hBlock > 1) && (blockStatus[vBlock-1][hBlock-2] == 0 && blockStatus[vBlock-2][hBlock-1] == 0))
			{
				blockStatus[vBlock-1][hBlock-2] = 6;
				blockStatus[vBlock-2][hBlock-1] = 6;
				blockStatus[vBlock-2][hBlock] = 0;
				blockStatus[vBlock-1][hBlock+1] = 0;
				hBlock--;
			}
			if((pieceType == 5 && pieceRotation == 1) && (hBlock > 1) && (blockStatus[vBlock-1][hBlock-1] == 0 && blockStatus[vBlock-2][hBlock-2] == 0 && blockStatus[vBlock-3][hBlock-1] == 0))
			{
				blockStatus[vBlock-1][hBlock-1] = 6;
				blockStatus[vBlock-2][hBlock-2] = 6;				
				blockStatus[vBlock-3][hBlock-1] = 6;
				blockStatus[vBlock-3][hBlock] = 0;
				blockStatus[vBlock-2][hBlock] = 0;
				blockStatus[vBlock-1][hBlock] = 0;
				hBlock--;
			}
			if((pieceType == 5 && pieceRotation == 2) && (hBlock > 1) && (blockStatus[vBlock-1][hBlock-1] == 0 && blockStatus[vBlock-2][hBlock-2] == 0))
			{
				blockStatus[vBlock-1][hBlock-1] = 6;
				blockStatus[vBlock-2][hBlock-2] = 6;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-2][hBlock+1] = 0;
				hBlock--;
			}
			if((pieceType == 5 && pieceRotation == 3) && (hBlock > 0) && (blockStatus[vBlock-1][hBlock-1] == 0 && blockStatus[vBlock-2][hBlock-1] == 0 && blockStatus[vBlock-3][hBlock-1] == 0))
			{
				blockStatus[vBlock-1][hBlock-1] = 6;
				blockStatus[vBlock-2][hBlock-1] = 6;
				blockStatus[vBlock-3][hBlock-1] = 6;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-2][hBlock+1] = 0;
				blockStatus[vBlock-3][hBlock] = 0;	
				hBlock--;
			}
			if((pieceType == 2) && (pieceRotation == 0) && (hBlock > 0) && (blockStatus[vBlock-3][hBlock-1] == 0) && (blockStatus[vBlock-2][hBlock-1] == 0) && (blockStatus[vBlock-1][hBlock-1] == 0))
			{
				//codigo L
				blockStatus[vBlock-3][hBlock-1] = 3;
				blockStatus[vBlock-2][hBlock-1] = 3;
				blockStatus[vBlock-1][hBlock-1] = 3;
				blockStatus[vBlock-1][hBlock+1] = 0;
				blockStatus[vBlock-2][hBlock] = 0;
				blockStatus[vBlock-3][hBlock] = 0;
				hBlock -=1;
			}
			if((pieceType == 2) && (pieceRotation == 1) && (hBlock > 0) && (blockStatus[vBlock-1][hBlock-1] == 0) && (blockStatus[vBlock-2][hBlock+1] == 0))
			{
				//codigo _|
				blockStatus[vBlock-1][hBlock-1] = 3;
				blockStatus[vBlock-2][hBlock+1] = 3;
				blockStatus[vBlock-2][hBlock+2] = 0;
				blockStatus[vBlock-1][hBlock+2] = 0;
				hBlock -=1;
			}
			if((pieceType == 2) && (pieceRotation == 2) && (hBlock > 0) && (blockStatus[vBlock-1][hBlock-1] == 0) && (blockStatus[vBlock-2][hBlock-1] == 0) && (blockStatus[vBlock-3][hBlock-2] == 0))
			{
				//codigo -|
				blockStatus[vBlock-1][hBlock-1] = 3;
				blockStatus[vBlock-2][hBlock-1] = 3;
				blockStatus[vBlock-3][hBlock-2] = 3;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-2][hBlock] = 0;
				blockStatus[vBlock-3][hBlock] = 0;
				hBlock -=1;
			}
			if((pieceType == 2) && (pieceRotation == 3) && (hBlock > 0) && (blockStatus[vBlock-1][hBlock-2] == 0) && (blockStatus[vBlock-2][hBlock-2] == 0))
			{
				
				//codigo |-
				blockStatus[vBlock-1][hBlock-2] = 3;
				blockStatus[vBlock-2][hBlock-2] = 3;
				blockStatus[vBlock-1][hBlock-1] = 0;
				blockStatus[vBlock-2][hBlock+1] = 0;
				hBlock -=1;
			}
			if((pieceType == 4) && (pieceRotation == 0) && (hBlock > 0) && (blockStatus[vBlock-1][hBlock-1] == 0) && (blockStatus[vBlock-2][hBlock-1] == 0) && (blockStatus[vBlock-2][hBlock+1] == 0))
			{
				//codigo U
				blockStatus[vBlock-1][hBlock-1] = 5;
				blockStatus[vBlock-2][hBlock-1] = 5;
				blockStatus[vBlock-2][hBlock+1] = 5;
				blockStatus[vBlock-1][hBlock+2] = 0;
				blockStatus[vBlock-2][hBlock+2] = 0;
				blockStatus[vBlock-2][hBlock] = 0;
				hBlock -=1;
			}
			if((pieceType == 4) && (pieceRotation == 1) && (hBlock > 0) && (blockStatus[vBlock-1][hBlock-1] == 0) && (blockStatus[vBlock-3][hBlock-1] == 0) && (blockStatus[vBlock-2][hBlock] == 0))
			{
				//codigo U
				blockStatus[vBlock-1][hBlock-1] = 5;
				blockStatus[vBlock-3][hBlock-1] = 5;
				blockStatus[vBlock-2][hBlock] = 5;
				blockStatus[vBlock-1][hBlock+1] = 0;
				blockStatus[vBlock-2][hBlock+1] = 0;
				blockStatus[vBlock-3][hBlock+1] = 0;
				hBlock -=1;
			}
			if((pieceType == 4) && (pieceRotation == 2) && (hBlock > 0) && (blockStatus[vBlock-2][hBlock-2] == 0) && (blockStatus[vBlock-1][hBlock] == 0) && (blockStatus[vBlock-1][hBlock-2] == 0))
			{
				//codigo U
				blockStatus[vBlock-1][hBlock] = 5;
				blockStatus[vBlock-2][hBlock-2] = 5;
				blockStatus[vBlock-1][hBlock-2] = 5;
				blockStatus[vBlock-1][hBlock+1] = 0;
				blockStatus[vBlock-2][hBlock+1] = 0;
				blockStatus[vBlock-1][hBlock-1] = 0;
				hBlock -=1;
			}
			if((pieceType == 4) && (pieceRotation == 3)  && (blockStatus[vBlock][hBlock] == 0) && (blockStatus[vBlock-1][hBlock] == 0) && (blockStatus[vBlock-2][hBlock] == 0))
			{
				//codigo U
				blockStatus[vBlock][hBlock] = 5;
				blockStatus[vBlock-1][hBlock] = 5;
				blockStatus[vBlock-2][hBlock] = 5;
				blockStatus[vBlock-1][hBlock+1] = 0;
				blockStatus[vBlock][hBlock+2] = 0;
				blockStatus[vBlock-2][hBlock+2] = 0;
				hBlock -=1;
			}
			if(pieceType == 3 && pieceRotation==0 && blockStatus[vBlock-1][hBlock-1]==0 && blockStatus[vBlock-2][hBlock]==0 && blockStatus[vBlock-3][hBlock]==0)
			{
				blockStatus[vBlock-1][hBlock-1]=4;
				blockStatus[vBlock-2][hBlock]=4;
				blockStatus[vBlock-3][hBlock]=4;	
				blockStatus[vBlock-1][hBlock+1]=0;
				blockStatus[vBlock-2][hBlock+1]=0;
				blockStatus[vBlock-3][hBlock+1]=0;
				hBlock-=1;
			}
			if(pieceType == 3 && pieceRotation==1 && blockStatus[vBlock-1][hBlock-1]==0 && blockStatus[vBlock][hBlock+1]==0 )
			{
				blockStatus[vBlock-1][hBlock-1]=4;
				blockStatus[vBlock][hBlock+1]=4;	
				blockStatus[vBlock][hBlock+2]=0;
				blockStatus[vBlock-1][hBlock+2]=0;
				hBlock-=1;
			}
			if(pieceType == 3 && pieceRotation==2 && blockStatus[vBlock-1][hBlock-1]==0 && blockStatus[vBlock-2][hBlock-1]==0 && blockStatus[vBlock-3][hBlock-1]==0)
			{
				blockStatus[vBlock-1][hBlock-1]=4;
				blockStatus[vBlock-2][hBlock-1]=4;
				blockStatus[vBlock-3][hBlock-1]=4;	
				blockStatus[vBlock-1][hBlock]=0;
				blockStatus[vBlock-2][hBlock]=0;
				blockStatus[vBlock-3][hBlock+1]=0;
				hBlock-=1;
			}
			if(pieceType == 3 && pieceRotation==3 && blockStatus[vBlock-1][hBlock-1]==0 && blockStatus[vBlock-2][hBlock-1]==0 )
			{
				blockStatus[vBlock-1][hBlock-1]=4;
				blockStatus[vBlock-2][hBlock-1]=4;
				blockStatus[vBlock-1][hBlock+2]=0;
				blockStatus[vBlock-2][hBlock]=0;
				hBlock-=1;
			}
            break;
        case 38:
			rotatePiece();
            break;
        case 39:
			if((pieceType == 0) && (pieceRotation == 0) && (hBlock < xSize-1) && (blockStatus[vBlock-4][hBlock+1] == 0) && (blockStatus[vBlock-1][hBlock+1] == 0) && (blockStatus[vBlock-2][hBlock+1] == 0) && (blockStatus[vBlock-3][hBlock+1] == 0))
			{
				limit = vBlock-1;
				for (; limit > vBlock-5 ; limit--)
				{
					blockStatus[limit][hBlock] = 0;
				}
				limit = vBlock-1;
				hBlock++;
				for (; limit > vBlock-5 ; limit--)
				{
					blockStatus[limit][hBlock] = 1;
				}
			}
			if((pieceType == 0) && (pieceRotation == 1) && (hBlock < xSize-1) && (blockStatus[vBlock-1][hBlock+4] == 0))
			{
				vLimit = vBlock-1;
				hLimit = hBlock+4;
				blockStatus[vLimit][hLimit] = 1;
				hLimit -= 4;
				blockStatus[vLimit][hLimit] = 0;
				hBlock += 1;
			}
			if(blockStatus[vBlock-1][hBlock+2] == 0 && blockStatus[vBlock-2][hBlock+2] == 0 && pieceRotation == 0 && pieceType == 1)
			{
				blockStatus[vBlock-1][hBlock+2] = 2;
				blockStatus[vBlock-2][hBlock+2] = 2;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-2][hBlock] = 0;
				hBlock++;
			}
			if((pieceType == 5 && pieceRotation == 0) && (hBlock < xSize-2) && (blockStatus[vBlock-1][hBlock+2] == 0 && blockStatus[vBlock-2][hBlock+1] == 0))
			{
				blockStatus[vBlock-1][hBlock+2] = 6;
				blockStatus[vBlock-2][hBlock+1] = 6;
				blockStatus[vBlock-2][hBlock] = 0;
				blockStatus[vBlock-1][hBlock-1] = 0;
				hBlock++;
			}
			if((pieceType == 5 && pieceRotation == 1) && (hBlock < xSize-1) && (blockStatus[vBlock-1][hBlock+1] == 0 && blockStatus[vBlock-2][hBlock+1] == 0 && blockStatus[vBlock-3][hBlock+1] == 0))
			{
				blockStatus[vBlock-1][hBlock+1] = 6;
				blockStatus[vBlock-2][hBlock+1] = 6;				
				blockStatus[vBlock-3][hBlock+1] = 6;
				blockStatus[vBlock-3][hBlock] = 0;
				blockStatus[vBlock-2][hBlock-1] = 0;
				blockStatus[vBlock-1][hBlock] = 0;
				hBlock++;
			}
			if((pieceType == 5 && pieceRotation == 2) && (hBlock < xSize-2) && (blockStatus[vBlock-1][hBlock+1] == 0 && blockStatus[vBlock-2][hBlock+2] == 0))
			{
				blockStatus[vBlock-1][hBlock+1] = 6;
				blockStatus[vBlock-2][hBlock+2] = 6;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-2][hBlock-1] = 0;
				hBlock++;
			}
			if((pieceType == 5 && pieceRotation == 3) && (hBlock < xSize-2) && (blockStatus[vBlock-1][hBlock+1] == 0 && blockStatus[vBlock-2][hBlock+2] == 0 && blockStatus[vBlock-3][hBlock+1] == 0))
			{
				blockStatus[vBlock-1][hBlock+1] = 6;
				blockStatus[vBlock-2][hBlock+2] = 6;
				blockStatus[vBlock-3][hBlock+1] = 6;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-2][hBlock] = 0;
				blockStatus[vBlock-3][hBlock] = 0;
				hBlock++;
			}
			if((pieceType == 2) && (pieceRotation == 0) && (hBlock < xSize-1) && (blockStatus[vBlock-1][hBlock+2] == 0) && (blockStatus[vBlock-2][hBlock+1] == 0) && (blockStatus[vBlock-3][hBlock+1] == 0))
			{
				//L
				blockStatus[vBlock-1][hBlock+2] = 3;
				blockStatus[vBlock-2][hBlock+1] = 3;
				blockStatus[vBlock-3][hBlock+1] = 3;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-2][hBlock] = 0;
				blockStatus[vBlock-3][hBlock] = 0;
				hBlock +=1;
				
			}
			if((pieceType == 2) && (pieceRotation == 1) && (hBlock < xSize-1) && (blockStatus[vBlock-1][hBlock+3] == 0) && (blockStatus[vBlock-2][hBlock+3] == 0))
			{
				//_|
				blockStatus[vBlock-1][hBlock+3] = 3;
				blockStatus[vBlock-2][hBlock+3] = 3;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-2][hBlock+2] = 0;
				hBlock +=1;
			}
			if((pieceType == 2) && (pieceRotation == 2) && (hBlock < xSize-1) && (blockStatus[vBlock-1][hBlock+1] == 0) && (blockStatus[vBlock-2][hBlock+1] == 0) && (blockStatus[vBlock-3][hBlock+1] == 0))
			{
				//-|
				blockStatus[vBlock-1][hBlock+1] = 3;
				blockStatus[vBlock-2][hBlock+1] = 3;
				blockStatus[vBlock-3][hBlock+1] = 3;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-2][hBlock] = 0;
				blockStatus[vBlock-3][hBlock-1] = 0;
				hBlock +=1;
			}
			if((pieceType == 2) && (pieceRotation == 3) && (hBlock < xSize-1) && (blockStatus[vBlock-1][hBlock] == 0) && (blockStatus[vBlock-2][hBlock+2] == 0))
			{
				//|-
				blockStatus[vBlock-1][hBlock] = 3;
				blockStatus[vBlock-2][hBlock+2] = 3;
				blockStatus[vBlock-1][hBlock-1] = 0;
				blockStatus[vBlock-2][hBlock-1] = 0;
				hBlock +=1;
			}
			if((pieceType == 4) && (pieceRotation == 0) && (hBlock < xSize-1) && (blockStatus[vBlock-1][hBlock+3] == 0) && (blockStatus[vBlock-2][hBlock+3] == 0) && (blockStatus[vBlock-2][hBlock+1] == 0))
			{
				//U
				blockStatus[vBlock-1][hBlock+3] = 5;
				blockStatus[vBlock-2][hBlock+3] = 5;
				blockStatus[vBlock-2][hBlock+1] = 5;
				blockStatus[vBlock-2][hBlock+2] = 0;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-2][hBlock] = 0;
				hBlock +=1;
			}
			if((pieceType == 4) && (pieceRotation == 1) && (hBlock < xSize-1) && (blockStatus[vBlock-1][hBlock+2] == 0) && (blockStatus[vBlock-2][hBlock+2] == 0) && (blockStatus[vBlock-3][hBlock+2] == 0))
			{
				//codigo U
				blockStatus[vBlock-1][hBlock+2] = 5;
				blockStatus[vBlock-2][hBlock+2] = 5;
				blockStatus[vBlock-3][hBlock+2] = 5;
				blockStatus[vBlock-1][hBlock] = 0;
				blockStatus[vBlock-3][hBlock] = 0;
				blockStatus[vBlock-2][hBlock+1] = 0;
				hBlock +=1;
			}
			if((pieceType == 4) && (pieceRotation == 2) && (hBlock < xSize-1) && (blockStatus[vBlock-2][hBlock+2] == 0) && (blockStatus[vBlock-1][hBlock] == 0) && (blockStatus[vBlock-1][hBlock+2] == 0))
			{
				//codigo U
				blockStatus[vBlock-1][hBlock] = 5;
				blockStatus[vBlock-2][hBlock+2] = 5;
				blockStatus[vBlock-1][hBlock+2] = 5;
				blockStatus[vBlock-1][hBlock-1] = 0;
				blockStatus[vBlock-1][hBlock+1] = 0;
				blockStatus[vBlock-2][hBlock-1] = 0;
				hBlock +=1;
			}
			if((pieceType == 4) && (pieceRotation == 3) && (hBlock < xSize-1) && (blockStatus[vBlock][hBlock+3] == 0) && (blockStatus[vBlock-1][hBlock+2] == 0) && (blockStatus[vBlock-2][hBlock+3] == 0))
			{
				//codigo U
				blockStatus[vBlock][hBlock+3] = 5;
				blockStatus[vBlock-1][hBlock+2] = 5;
				blockStatus[vBlock-2][hBlock+3] = 5;
				blockStatus[vBlock][hBlock+1] = 0;
				blockStatus[vBlock-1][hBlock+1] = 0;
				blockStatus[vBlock-2][hBlock+1] = 0;
				hBlock +=1;
			}
			if(pieceType == 3 && pieceRotation==0 && blockStatus[vBlock-1][hBlock+2]==0 && blockStatus[vBlock-2][hBlock+2]==0 && blockStatus[vBlock-3][hBlock+2]==0)
			{
				blockStatus[vBlock-1][hBlock+2]=4;
				blockStatus[vBlock-2][hBlock+2]=4;
				blockStatus[vBlock-3][hBlock+2]=4;	
				blockStatus[vBlock-1][hBlock]=0;
				blockStatus[vBlock-2][hBlock+1]=0;
				blockStatus[vBlock-3][hBlock+1]=0;
				hBlock+=1;
			}
			if(pieceType == 3 && pieceRotation==1 && blockStatus[vBlock][hBlock+3]==0 && blockStatus[vBlock-1][hBlock+3]==0 )
			{
				blockStatus[vBlock][hBlock+3]=4;
				blockStatus[vBlock-1][hBlock+3]=4;	
				blockStatus[vBlock-1][hBlock]=0;
				blockStatus[vBlock][hBlock+2]=0;
				hBlock+=1;
			}
			if(pieceType == 3 && pieceRotation==2 && blockStatus[vBlock-3][hBlock+2]==0 && blockStatus[vBlock-2][hBlock+1]==0 && blockStatus[vBlock-1][hBlock+1]==0)
			{
				blockStatus[vBlock-3][hBlock+2]=4;
				blockStatus[vBlock-2][hBlock+1]=4;
				blockStatus[vBlock-1][hBlock+1]=4;	
				blockStatus[vBlock-1][hBlock]=0;
				blockStatus[vBlock-2][hBlock]=0;
				blockStatus[vBlock-3][hBlock]=0;
				hBlock+=1;
			}
			if(pieceType == 3 && pieceRotation==3 && blockStatus[vBlock-1][hBlock+3]==0 && blockStatus[vBlock-2][hBlock+1]==0 )
			{
				blockStatus[vBlock-1][hBlock+3]=4;
				blockStatus[vBlock-2][hBlock+1]=4;
				blockStatus[vBlock-1][hBlock]=0;
				blockStatus[vBlock-2][hBlock]=0;
				hBlock+=1;
			}
            break;
        case 40:
			dropPiece();
			clickOnce++;
            break;
    }
	updateStatus();
	}
};

/*	ATUALIZAR STYLE DO BLOCKSTATUS	*/
function updateStatus()
{
	if (xSize == 22 && ySize == 44)
	{
		bord = "border-radius: 0.1em;";
	}
	else
	{
		bord = "border-radius: 0.3em;";
	}
	if(gameMode == 0)
	{
		td = "border: 0.1em solid rgba(0,0,0,0.1);"+bord;
	}
	if(gameMode == 1)
	{
		td = "border: 0.1em solid rgba(255,255,255,0.7);"+bord;
	}
	if(gameMode == 2)
	{
		td = "border: 0.1em solid rgba(255,255,255,0.3);"+bord;
	}
	for (var y = 0; y < ySize; y++)
	{
		for (var x = 0; x < xSize; x++)
		{
			switch(blockStatus[y][x])
			{
				case 0:
					document.getElementById(y+"-"+x).setAttribute("style","background-color: none;"+td);
					break;
				case 1:
					document.getElementById(y+"-"+x).setAttribute("style","background-color: red;"+td);
					break;
				case 2:
					document.getElementById(y+"-"+x).setAttribute("style","background-color: yellow;"+td);
					break;
				case 3:
					document.getElementById(y+"-"+x).setAttribute("style","background-color: royalblue;"+td);
					break;
				case 4:
					document.getElementById(y+"-"+x).setAttribute("style","background-color: hotpink;"+td);
					break;
				case 5:
					document.getElementById(y+"-"+x).setAttribute("style","background-color: orange;"+td);
					break;
				case 6:
					document.getElementById(y+"-"+x).setAttribute("style","background-color: lime;"+td);
					break;
				case 7:
					document.getElementById(y+"-"+x).setAttribute("style","background-color: darkslategray;"+td);
					break;
				case 8:
					document.getElementById(y+"-"+x).setAttribute("style","background-color: darkblue;"+td);
					break;
				case 9:
					document.getElementById(y+"-"+x).setAttribute("style","background-color: black;"+td+"background-image: url('_images/pixel-skull.gif'); background-size: contain; background-repeat: no-repeat; background-position: center;");
					break;
			}
		}
	}
};

/*	DESABILITAR PADRÃO PARA AS ARROW KEYS	*/
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);