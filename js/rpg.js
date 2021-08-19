// first design a fighter
// var fighter = {
//     name: "Arata",
//     race: "Human",
//     level: 1,
//     proficiencyBonus: 2,
//     strength: 18,
//     strengthBonus: 4,
//     dexterity: 14,
//     constitution: 16,
//     hitPoints: 13,
//     armor: "Chain Mail",
//     shield: true,
//     armorClass: 20,
//     weapon: "Greatsword",
//     minDamage: 2,
//     maxDamage: 12,
// }
//
// // now design a monster
//
// var monster = {
//     type: "orc",
//     strength: 16,
//     strengthBonus: 3,
//     hitPoints: 15,
//     armorClass: 13,
//     weapon: "Greataxe",
//     attackBonus: 5,
//     minDamage: 1,
//     maxDamage: 12
// }

// now let's make it so the fighter can attack the monster

// fighter.attack  =  function(enemy) {
//         var damageRange = this.maxDamage - this.minDamage;
//         var attackRoll = Math.floor(Math.random() * 20) + this.proficiencyBonus + this.strengthBonus;
//         if (attackRoll > enemy.armorClass) {
//             var damage = Math.floor(Math.random() * damageRange) + this.strengthBonus;
//             enemy.hitPoints = enemy.hitPoints - damage;
//             console.log(this.name + " hit the " + enemy.type + " with their " + this.weapon + " for " + damage + " points. The " + enemy.type + " has " + enemy.hitPoints + " hit points left");
//         } else {
//             console.log(this.name + " missed!");
//         }
//     }

//fighter.attack(monster);

// now we've got an issue. If we add an attack method to the orc, we've basically got duplicate code. That means every time we change the attack method, we have to change it in two places. Not good. We need one attack method. So let's create a new object. We'll call this object the controller. We'll give it an attack method that takes two parameters, a character and a monster.

// var controller = {
//     attack: function(attacker, defender) {
//         var damageRange = attacker.maxDamage - attacker.minDamage;
//
//
//         var calculateAttackBonus = function(combatant) {
//             var bonus = 0;
//             if (combatant.proficiencyBonus) {
//                 bonus = attacker.proficiencyBonus + attacker.strengthBonus;
//             } else {
//                 bonus = attacker.strengthBonus;
//             }
//             return bonus;
//         }
//
//         var attackBonus = calculateAttackBonus(attacker);
//
//         var attackRoll = Math.floor(Math.random() * 20) + attackBonus;
//
//         //console.log(attackRoll);
//         //console.log(defender.armorClass);
//         if (attackRoll > defender.armorClass) {
//
//             var damage = Math.floor(Math.random() * damageRange) + attacker.strengthBonus;
//             defender.hitPoints = defender.hitPoints - damage;
//             if (attacker.name) {
//                 console.log(attacker.name + " hit the " + defender.type + " with their " + attacker.weapon + " for " + damage + " points. The " + defender.type + " has " + defender.hitPoints + " hit points left");
//             } else {
//             console.log("The "  +  attacker.type + " hit " + defender.name + " with their " + attacker.weapon + " for " + damage + " points. " + defender.name + " has " + defender.hitPoints + " hit points left");
//         }
//         } else {
//             if (attacker.name) {
//                 console.log(attacker.name + " missed!");
//             } else {
//                 console.log("The " + attacker.type + " missed!");
//             }
//         }
//     }
// }

// controller.attack(fighter, monster);
// controller.attack(monster, fighter);

// It's working, so I can do
// delete fighter.attack;

// OK, next we need to separate out all this output
// This is clearly not an inherent part of the attack, it's just notifying the human user of the results so the user can view the results.
// Let's create another object called the view that handles displaying results to the user
// and let's have the controller hand over data to the view so the view can display it

// var view = {
//     displayAttackResults: function(attacker, defender, hit, weapon, damage, hitPointsLeft){
//         if (hit) {
//             console.log(attacker + " hit the " + defender + " with their " + weapon + " for " + damage + " points. " + defender + " has " + hitPointsLeft + " hit points left");
//         } else {
//             console.log(attacker + " missed!");
//         }
//     }
// }

// now we can refactor the attack method

// controller.attack = function(attacker, defender) {
//     var damageRange = attacker.maxDamage - attacker.minDamage;
//
//
//     var calculateAttackBonus = function (combatant) {
//         var bonus = 0;
//         if (combatant.proficiencyBonus) {
//             bonus = attacker.proficiencyBonus + attacker.strengthBonus;
//         } else {
//             bonus = attacker.strengthBonus;
//         }
//         return bonus;
//     }
//
//     var attackBonus = calculateAttackBonus(attacker);
//     var hit = false;
//     var attackRoll = Math.floor(Math.random() * 20) + attackBonus;
//     //console.log(attackRoll);
//     //console.log(defender.armorClass);
//     if (attackRoll > defender.armorClass) {
//         hit = true;
//         var damage = Math.floor(Math.random() * damageRange) + attacker.strengthBonus;
//         defender.hitPoints = defender.hitPoints - damage;
//     }
//     view.displayAttackResults(attacker.name? attacker.name : attacker.type, defender.name? defender.name : defender.type, hit, attacker.weapon, damage, defender.hitPoints);
// }

// controller.attack(fighter, monster);
// controller.attack(monster, fighter);
// controller.attack(fighter, monster);
// controller.attack(monster, fighter);
// controller.attack(fighter, monster);
// controller.attack(monster, fighter);

// Now we just have to mark the moment when one or the other dies and either hero or monster emerges victorious

// To do that, let's refactor once more and put everything having to do with the state of the game in a third category called model

var model = {
    fighter: {
        name: "Arata",
        race: "Human",
        level: 1,
        proficiencyBonus: 2,
        strength: 16,
        strengthBonus: 3,
        dexterity: 14,
        constitution: 16,
        hitPoints: 13,
        armor: "Chain Mail",
        shield: true,
        armorClass: 18,
        weapon: "Longsword",
        minDamage: 1,
        maxDamage: 8,
    },

    monster: {
        type: "orc",
        strength: 18,
        strengthBonus: 4,
        hitPoints: 15,
        armorClass: 13,
        weapon: "Greataxe",
        attackBonus: 5,
        minDamage: 1,
        maxDamage: 12
    }
}

// var view = {
//     displayAttackResults: function(attacker, defender, hit, weapon, damage, hitPointsLeft){
//         if (hit) {
//             console.log(attacker + " hit the " + defender + " with their " + weapon + " for " + damage + " points. " + defender + " has " + hitPointsLeft + " hit points left");
//         } else {
//             console.log(attacker + " missed!");
//         }
//     }
// }

// var controller = {
//     attack: function(attacker, defender) {
//         var damageRange = attacker.maxDamage - attacker.minDamage;
//
//
//         var calculateAttackBonus = function (combatant) {
//             var bonus = 0;
//             if (combatant.proficiencyBonus) {
//                 bonus = attacker.proficiencyBonus + attacker.strengthBonus;
//             } else {
//                 bonus = attacker.strengthBonus;
//             }
//             return bonus;
//         }
//
//         var attackBonus = calculateAttackBonus(attacker);
//         var hit = false;
//         var attackRoll = Math.floor(Math.random() * 20) + attackBonus;
//         //console.log(attackRoll);
//         //console.log(defender.armorClass);
//         if (attackRoll > defender.armorClass) {
//             hit = true;
//             var damage = Math.floor(Math.random() * damageRange) + attacker.strengthBonus;
//             defender.hitPoints = defender.hitPoints - damage;
//         }
//         view.displayAttackResults(attacker.name? attacker.name : attacker.type, defender.name? defender.name : defender.type, hit, attacker.weapon, damage, defender.hitPoints);
//     }
// }

// OK. How can we refactor to  display the appropriate output when the defender is no longer alive?

var view = {
    displayAttackResults: function(attacker, defender, hit, weapon, damage, hitPointsLeft){
        if (hit) {
            console.log(attacker + " hit the " + defender + " with their " + weapon + " for " + damage + " points. " + defender + " has " + hitPointsLeft + " hit points left");
        } else {
            console.log(attacker + " missed!");
        }
        if (hitPointsLeft <= 0) {
            console.log(defender + " is dead!");
        }
        // to git or not to git

    }
}

// and we can prevent an attack if either the attacker or defender is dead

var controller = {
    attack: function (attacker, defender) {
        if (attacker.hitPoints > 0 && defender.hitPoints > 0) {
            var damageRange = attacker.maxDamage - attacker.minDamage;
            var calculateAttackBonus = function (combatant) {
                var bonus = 0;
                if (combatant.proficiencyBonus) {
                    bonus = attacker.proficiencyBonus + attacker.strengthBonus;
                } else {
                    bonus = attacker.strengthBonus;
                }
                return bonus;
            }

            var attackBonus = calculateAttackBonus(attacker);
            var hit = false;
            var attackRoll = Math.floor(Math.random() * 20) + attackBonus;
            //console.log(attackRoll);
            //console.log(defender.armorClass);
            if (attackRoll > defender.armorClass) {
                hit = true;
                var damage = Math.floor(Math.random() * damageRange) + attacker.strengthBonus;
                defender.hitPoints = defender.hitPoints - damage;
            }
        }
        view.displayAttackResults(attacker.name ? attacker.name : attacker.type, defender.name ? defender.name : defender.type, hit, attacker.weapon, damage, defender.hitPoints);
    }
}
// controller.attack(model.fighter, model.monster);
// controller.attack(model.monster, model.fighter);
// controller.attack(model.fighter, model.monster);
// controller.attack(model.monster, model.fighter);
// controller.attack(model.fighter, model.monster);
// controller.attack(model.monster, model.fighter);
// controller.attack(model.fighter, model.monster);
// controller.attack(model.monster, model.fighter);

// now we're getting "Orc missed, Arata missed" every time the orc is dead because hit is false, so let's refactor displayAttackResults to take into account if one or the other is dead
// or maybe let's just write a little loop that simulates the combat and doesn't go beyond the point one of them is dead

function simulateCombat(combatant1, combatant2) {
    while(combatant1.hitPoints > 0 && combatant2.hitPoints > 0) {
        controller.attack(combatant1, combatant2);
        if (combatant2.hitPoints > 0) {controller.attack(combatant2, combatant1);}

    }
}

simulateCombat(model.fighter, model.monster);