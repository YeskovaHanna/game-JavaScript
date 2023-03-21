window .addEventListener('load',function ()
 {

    let countUser = document.querySelector('.count-user'),
        countComp = document.querySelector('.count-comp'),
        userField = document.querySelector('.user-field'),
        compField = document.querySelector('.comp-field'),
        sound = document.querySelector('.sound'),
        play = document.querySelector('.play'),
        fields= document.querySelectorAll('.field'),
        userStep, compStep, countU = 0,countC = 0, bloked = false;

    function choiceUser(e) {
        if (bloked) return;
        let target = e.target;
        if (target.classList.contains('field')){
            userStep = target.dataset.field;
            fields.forEach(item =>item.classList.remove('active','error'));
            target.class.List.add('active');
            choiceComp();
        }   
    }

    function choiceComp(){
        bloked = true;
        let rand = Math.floor(Math.random()*3);
        compField.classList.add('blink');
        let compField = compField.querySelectorAll('.field');
    
        setTimeout(() => {
            compField.classList.remove('blink');
            compStep = compFields[rand].dataset.field;
            compFields[rand].classList.add ('active');
            ServiceWorkerContainer();
        },3000);
    }

    function winner(){
        blocked = false;
        let comb = userStep + compStep;
        switch (comb){
            case 'rr':
            case 'ss':
            case 'pp':
                res.innerText = 'Ничья!';
                sound.setAttribute('src','audio/draw.mp3');
                sound.play();
                break;
            
            case 'rs':
            case 'sp':
            case 'pr':
                res.innerText = 'Победили вы!';
                sound.setAttribute('src','audio/win.mp3');
                sound.play();
                countU++;
                countUser.innerText = countU;
                compField.querySelector('[data-field = '+compStep+']').classList.add('error');
                break;

            case 'sr':
            case 'ps':
            case 'rp':
                res.innerText = 'Победил компьютер!';
                sound.setAttribute('src','audio/loss.mp3');
                sound.play();
                countC++;
                countComp.innerText = countC;
                userField.querySelector('[data-field = '+userStep+']').classList.add('error');
                break;
        }
    }

   function playGame() {
    countU = countC = 0;
    res.innerText = 'Сделай выбор';
    countUser.innerText = '0';
    countComp.innerText = '0';
    fields.forEach(item =>item.classList.remove('active','error'));
   } 

   play.addEventListener('click', playGame);
   userField.addEventListener('click', choiceUser);

 })



                        
                
        
    







