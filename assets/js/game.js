// Game States
//"WIN" - player robot has defeated ALL enemy robots
//      *Fight all enemy robots
//      *Defeat each enemy robot
//"LOSE" - player robot's health is zero or less


//player info
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy robot's info
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function(enemyName){
    window.alert("Welcome to Robot Gladiators!");

    //ask is player wants to skip the fight or fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

    //if player chooses fight then call fight
    if(promptFight==="FIGHT"|| promptFight==="fight"){

     //subtract value of playerAttack from value of enemyHealth & log new value
     enemyHealth= enemyHealth-playerAttack;
     //log result
     console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining.");
 
     //check enemy health
     if(enemyHealth <= 0){
         window.alert (enemyName + " has died!");
     }
     else {
         window.alert(enemyName + " still has " + enemyHealth + " health remaining");
     }
 
     //subtract value of enemyAttack from the value of playerHealth and log new value
     playerHealth = playerHealth-enemyAttack;
     //log result
     console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining.");
           
     //check player health
     if(playerHealth <= 0){
         window.alert(playerName + " has died!");
     }
     else{
         window.alert(playerName + " still has " + playerHealth + " health remaining");
     }
     //if player chooses skip
    
    } else if (promptFight==="SKIP"|| promptFight==="skip"){
    //confirm skip
    var confirmSkip=window.confirm("Are you sure you'd like to quit?");
    //if yes to skip
    if(confirmSkip){
        window.alert(playerName + " has decided to skip the fight! Goodbye!");
        playerMoney = playerMoney-2;
    }
    //if no
    else{
        fight();
        
        }
    
    //player didn't type a valid option
    } else{
        window.alert("You need to choose a valid option. Try again!");
    }
      
};


//execute function
for (var i = 0; i < enemyNames.length; i++ ){
   fight(enemyNames[i]);
 }

