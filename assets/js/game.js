var randomNumber = function(min, max){
    var value = Math.floor(Math.random()*(max-min+1))+min;
    return value;
}

//function to set name
var getPlayerName = function(){
    var name = "";
    while (name==="" || name === null){
        name = prompt("What's your robot's name?")
    }
    console.log("Your robot's name is " + name);
    return name;
}

var playerInfo={
    name:getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset:function(){
        this.health = 100;
        this.money=10;
        this.attack = 10;
    },
    refillHealth:function(){
        if (this.money>7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health +=20;
            this.money -=7;
        }
        else{
            window.alert("You don't have enough money!");
        }
        
    },
    upgradeAttack:function(){
        if(this.money>7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.money -=7;
            this.attack +=6;
        }
        else {
            window.alert("You don't have enough money!");
        }       
    }
};

// you can also log multiple values at one lik this
// console.log(playerInfo.name, playerInfo.health, playerInfo.attack);

var enemyInfo= [
    {
        name:"Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name:"Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

var fightOrSkip = function(){
    //ask player if  they'd like to fight or skip using fightOrSkip function
    var promptFight= window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    //Enter the conditional recursive function call here
    if (promptFight === "" || promptFight === null){
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight=promptFight.toLowerCase();

    //if player picks 'skip' confim and then stop the loop
    if(promptFight === 'skip'){
        //confirm player wants to skip
        var confirmSkip=window.confirm("Are you sure you'd like to quit?");

        //if yes(true), leave fight
            if (confirmSkip){
                window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerInfo.money = playerInfo.money - 10;

                //return true if player wants to leave
                return true;          
            }
    }
    else{
        return false;
            
    }
}




//function expression
var fight = function(enemy) {
    //keep track of who goes first
    var isPlayerTurn = true;
    if (Math.random()>0.5){
        isPlayerTurn = false;
    }

    //Alert players that they are starting the round
    while (playerInfo.health>0 && enemy.health>0){
        if (isPlayerTurn) {
            // ask player if they'd like to fight or skip using fightOrSkip function
            if (fightOrSkip()){
                //if true, leave fight by breaking loop
                break;
            };

            var damage=randomNumber(playerInfo.attack-3, playerInfo.attack)
            //remove enemy's health by substracting the amount set in the playerInfo.attack variable        
            //Subtract the value of 'playerAttact' from the value of 'enemy.health' and sue that result to update value in the 'enemy.health' variable
            enemy.health = Math.max(0, enemy.health-damage);
            // Log a resulting message to the console so we know that it worked.
            console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name +" now has " + enemy.health +" health remaining."
            );

            //check enemy's health
            if (enemy.health<=0) {
            window.alert(enemy.name + " has died!");
            //award player money for winning
            playerInfo.money = playerInfo.money+20;
            break;
            }
            else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
        }
        else{

            var damage=randomNumber(enemy.attack -3, enemy.attack);

            // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
            playerInfo.health = Math.max(0, playerInfo.health - damage);

            // Log a resulting message to the console so we know that it worked.
            console.log(
                enemy.name + " attached " + playerInfo.name  + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            )

            //check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has dead!");
                break;
            }
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }// end ifplayerturn loop
        //switch turn order for next round
        isPlayerTurn = !isPlayerTurn;
    } //end while loop   
};//end while funciton 


//function to start a new game
var startGame = function(){
    //reset player stats
    playerInfo.reset()
/* for loop*/
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health>0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));    
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health= randomNumber(40,60);
        //call fight function with enemy-robot
            fight(pickedEnemyObj);  
            if (playerInfo.health>0 && i<enemyInfo.length -1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm){
                shop();
                }
            }      
        }
        else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    };    
    endGame();
};


//function to end the entire game
var endGame= function(){
    // if palyer is still alive, player wins!
    if (playerInfo.health>0){
        window.alert("Great job, you've survived the game! You now have a score of "+playerInfo.money+".")
        //check localStorage for high score, if it's not there, use 0
        var highScore = localStorage.getItem("highscore");
        if (highScore === null){
            highScore = 0;
        }
        //if player has more money than the high score, player has new high score!
        if (playerInfo.money > highScore){
            localStorage.setItem("highscore", playerInfo.money);
            localStorage.setItem("name", playerInfo.name);
            alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");           
        } 
        else{
            alert(playerInfo.name + "did not beat the high score of " + highScore +". Maybe next time!");

        }

    };

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm){
        //restart the game        
        startGame();
    } 
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};



var shop = function(){
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );  
    shopOptionPrompt = parseInt(shopOptionPrompt);
    //use switch to carry out action
    switch(shopOptionPrompt){
     
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.")
            shop();
            break;
    }
};

//start the game when the page loads
startGame();

//function to generate a random numeric value








//Game status
//"win" - player robot has defeated all enemy-robot
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
//"lose" - player robot's health is zero or less


//fight();


/*for(var i=0; i<enemy.names.length; i++){
    console.log(enemy.names[i]);
    console.log(i);
    console.log(enemy.names[i]+" is at " +i+" index");*/


/* for([initial expression]; [condition]; [increment expression]) {
   statement
}
*/

