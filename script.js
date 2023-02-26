function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;

    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');
let computerMove = `kamień`;
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = 'papier';
printMessage('Zagralem' + playerMove + '! Jesli Twoj ruch to nozhnicy, to wygrywasz!');





