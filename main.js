var intro = alert("Congratulations! You have been accepted to start an internship at Area 51! WARNING THE INTERNSHIP YOU ARE ABOUT TO ACCEPT (if you do) WILL BE DANGEROUS, IT WILL ALSO CHANGE YOUR LIFE AND THE WAY YOU LOOK AT THE WORLD FOREVER!")

var cont = confirm("Do you accept?")

if (cont) {
    alert("Welcome! Well that was a little too easy to begin a internship at area 51. Colonel Bill will give you a tour of the whole site so you can see all the new exciting technology and all the top secrets they have! (Like they always do!)")
    startGame()
    } else {
    alert("bye")
    
}

function startGame(){
    var text;
    var start = prompt("Walking around the whole site is very interesting but the most important part(the top secret part) is in the secret room where you have to go alone because Colonal Bill has a phone call. You enter alone and you see a alien in a cage. The alien greets you (aliens speak english??) 'Hello my name is Eugene Tucker, you can just call me E.T., can you help me? I need to get back to my home planet and I do not want my species to destroy your planet just to save me!' ...'I need you to steal the Colonels key card and get my brother(Toby) so he can pilot the ship back to the mothership...can you help me?...Will you help lil Eugene[Enter: '1'] or leave him in the cage?[Enter '2']");
    switch(start) {
      case "1":
        meetToby();
        break;
      case "2":
        alert("GAME OVER ...You tell Eugene No. Then go about your day until you see thousands of ships destroying everything in sight, ending everyones lives on Earth (thanks for that!)");
        break;
      default:
        alert("You need to select 1 or 2"), startGame();
        break;
    }
}

function meetToby(){
    var text;
    var meetToby = prompt("Wow you get an internship at area 51, meet an alien, and try to help him escape, all on the first day? You eventually find Toby and something is very odd about him. He is dressed in human clothes, he is walking and talking like a human, and he isnt in a cage. He seems to have a serious case of stockholm syndrome. You try to tell him that you are trying to save him and Eugene, but he is acting like he isnt an alien.... Will you slap some sense into this guy[Enter: '1'] or let him be and live his life?[Enter: '2']");
    switch(meetToby) {
      case "1":
        slapToby();
        break;
      case "2":
        alert("GAME OVER Wow, you really don't care about Earth, huh? Planet Earth gets destroyed by the alien species!");
        break;
      default:
        alert("You need to select 1 or 2"), meetToby();
        break;
    }
}

function slapToby(){
    var text;
    var slapToby = prompt("After backhanding Toby to reality he is aware of the plan and ready to escape with Eugene. You go to Colonel Bills office and start looking around for the keycard. ALL OF A SUDDEN BILL WALKS IN! 'WHAT ARE YOU DOING!' he yells! You reply quickly... Im lost[Enter: 1], Im saving E.T.[Enter: 2], or I came to clean[Enter 3]");
    switch(slapToby) {
      case "1":
        getAccessCard();
        break;
      case "2":
        freeze();
        break;
        case "3":
        janitorIntern()
        break;
      default:
        alert("You need to select 1 2 or 3"), slapToby();
        break;
    }
}


function freeze(){
    var text;
    var meetToby = prompt("'FREEZE' Colonel Bill Yells! 'STEP AWAY FROM THE KEY CARD!' 'YOURE GOING TO PRISON!'... You are in the local area 51 jail and you hear explosions. You assume its the alien species attacking earth but the wall explodes then you see Eugene here to rescue you! He offers you to come with him back to his home planet! Do you go? YES[Enter: 1] No[Enter: 2]");
    switch(meetToby) {
      case "1":
        alert("GAME COMPLETE! You live your life in space and on Eugene's home planet!")
        break;
      case "2":
        alert("GAME COMPLETE! You never go but you escape the jail and tell the world  aliens exist but no one believes you.");
        break;
      default:
        alert("You need to select 1 or 2"), freeze();
        break;
    }
}

function getAccessCard(){
    var text;
    var getAccessCard = prompt("You tell Bill 'Im lost' Colonel Bill replies 'WELL THIS IS MY OFFICE YOU CANT READ THE SIGN!? You secretly locate the keycard, grab it, then leave the office quickly. You bring the keycard to Eugene. He is released from the cage and he is very thankful, he also asks if you want to leave earth and come to his home planet 'Flat Earth'... Go with Eugene[Enter: 1] or stay[Enter: 2]");
    switch(getAccessCard) {
      case "1":
        alert("GAME COMPLETE! You live your life in space and on Eugene's home planet!");
        break;
      case "2":
        alert("GAME OVER! You recieve a big thank you from Eugene, but after the escape, Colonel Bill finally put one and two together, arrests you, then throws you in prison for the rest of your life!");
        break;
      default:
        alert("You need to select 1 or 2"), getAccessCard();
        break;
    }
}

function janitorIntern(){
    var text;
    var janitorIntern = prompt("You tell Colonel Bill 'I came to clean!' Bill replies 'OH! so you were suppose to be the janitors intern! I understand! 10-4 Carry on!' What?? How'd that work?? How did he become a Colonel?? Anyways! You locate the keycard and bring it to Eugene. He is out the cage and he is very thankful, he also asks if you want to leave earth and come to his home planet 'Flat Earth'... Go with Eugene[Enter: 1] or stay[Enter: 2] or maybe you have second thoughts and decide to throw him back in the cage and yell 'Sike!'[Enter: 3]");
    switch(janitorIntern) {
      case "1":
        alert("GAME COMPLETE! You live your life in space and on Eugene's home planet!");
        break;
      case "2":
        alert("YOU WIN! Eugene thanks you, he tells you that he destroyed all evidence proving that you assisted in his escape. Plus he wires one billion dollars into your account!");
        break;
      case "3":
        alert("GAME OVER! Wow! After all that trouble you went through? Earth gets invaded and no one survives!"
        )
      default:
        alert("You need to select 1 2 or 3"), janitorIntern();
        break;
    }
}