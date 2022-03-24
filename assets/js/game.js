var playerMoney = 10;

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// you can also log multiple values at one lik this
// console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//function expression
var fight = function(enemyName) {
    //Alert players that they are starting the round
    while (playerHealth>0 && enemyHealth>0){

    //ask play to fight or run
    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player picks skip confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (True), leave fight
        if (confirmSkip){            
            window.alert(playerName +" has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
        }
    }
        //remove enemy's health by substracting the amount set in the playerAttack variable        
        //Subtract the value of 'playerAttact' from the value of 'enemyHealth' and sue that result to update value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName +" now has " + enemyHealth +" health remaining."
        );

        //check enemy's health
        if (enemyHealth<=0) {
        window.alert(enemyName + " has died!");
        //award player money for winning
        playerMoney = playerMoney+20;
        break;
        }
        else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attached " + playerName  + ". " + playerName + " now has " + playerHealth + " health remaining."
        )

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has dead!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    } //end while loop      

}//end while funciton
 

//function to start a new game
var startGame = function(){
    //reset player stats
    playerHealth=100;
    playerAttack =10;
    playerMoney = 10;
/* for loop*/
    for(var i = 0; i <= enemyNames.length; i++) {
        if (playerHealth>0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth=50;
        //call fight function with enemy-robot
            fight(pickedEnemyName);  
            if (playerHealth>0 && i<enemyNames.length -1){
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
    if (playerHealth>0){
        window.alert("Great job, you've survived the game! You now have a score of "+playerMoney+".")
    } else{
        window.alert("You've lost your robot in battle.");   
    };

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?")

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
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    //use switch to carry out action
    switch(shopOptionPrompt){
        case "REFILL":
        case "refill":
            if (playerMoney>7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            playerHealth=playerHealth+20;
            playerMoney=playerMoney-7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney>7) {
            window.alert("Upgrading player's attach by 6 for 7 dollars.");
            playerAttack=playerAttack+6;
            playerMoney=playerMoney-7;
            } 
            else{
                window.alert("You don't have enough money!")
            }
            break;
        case "LEAVE":
        case "leave":
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


//Game status
//"win" - player robot has defeated all enemy-robot
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
//"lose" - player robot's health is zero or less


//fight();


/*for(var i=0; i<enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i]+" is at " +i+" index");*/


/* for([initial expression]; [condition]; [increment expression]) {
   statement
}
*/