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
    window.alert("Welcome to Robot Galadiators!");

    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    
    //if player choses to fight, then fight
    if(promptFight === "fight" || promptFight === "FIGHT"){
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
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (True), leave fight
        if (confirmSkip){
            window.alert(playerName +" has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by running fight() again
        else{
            fight();
            };
            
        
    } else{
        window.alert("You need to choose a valid option. Try again!")
    }
};


console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
};

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