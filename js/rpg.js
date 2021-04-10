var character1 = {
    class: "fighter",
    name: "Arata",
    race: "Human",
    level: 1,
    proficiencyBonus: 2,
    strength: 18,
    strengthBonus: 4,
    dexterity: 14,
    constitution: 16,
    hitPoints: 13,
    armor: "Chain Mail",
    shield: true,
    armorClass: 18,
    weapon: "Longsword",
    minDamage: 1,
    maxDamage: 8,
    attack: function(enemy) {
        var damageRange = this.maxDamage - this.minDamage;
        var attackRoll = Math.floor(Math.random() * 20) + this.proficiencyBonus + this.strengthBonus;
        if (attackRoll >= enemy.armorClass) {
            var damage = Math.floor(Math.random() * damageRange) + this.strengthBonus + this.minDamage;
            enemy.hitPoints = enemy.hitPoints - damage;
            console.log(this.name + " hit the " + enemy.type + " with their " + this.weapon + " for " + damage + " points. The " + enemy.type + " has " + enemy.hitPoints + " hit points left");
        } else {
            console.log(this.name + " missed!");
        }
    }
}



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

var monster = {
    type: "orc",
    strength: 16,
    strengthBonus: 3,
    hitPoints: 15,
    armorClass: 13,
    weapon: "Greataxe",
    attackBonus: 5,
    minDamage: 1,
    maxDamage: 12,
    attack: function(enemy) {
        var damageRange = this.maxDamage - this.minDamage;
        var attackRoll = Math.floor(Math.random() * 20) + this.strengthBonus;
        if (attackRoll >= enemy.armorClass) {
            var damage = Math.floor(Math.random() * damageRange) + this.strengthBonus + this.minDamage;
            enemy.hitPoints = enemy.hitPoints - damage;
            console.log(this.type + " hit " + character1.name + " with their " + this.weapon + " for " + damage + " points. " + character1.name + " has " + character1.hitPoints + " hit points left");
        } else {
            console.log(this.type + " missed!");
        }
    }
}

var weakMonster = {
    type: "kobold",
    strength: 8,
    strengthBonus: -1,
    hitPoints: 8,
    armorClass: 15,
    weapon: "Dagger",
    attackBonus: 1,
    minDamage: 1,
    maxDamage: 3,
    attack: function(enemy) {
        var damageRange = this.maxDamage - this.minDamage;
        var attackRoll = Math.floor(Math.random() * 20) + this.strengthBonus;
        if (attackRoll >= enemy.armorClass) {
            var damage = Math.floor(Math.random() * damageRange) + this.strengthBonus + this.minDamage;
            enemy.hitPoints = enemy.hitPoints - damage;
            console.log(this.type + " hit " + character1.name + " with their " + this.weapon + " for " + damage + " points. " + character1.name + " has " + character1.hitPoints + " hit points left");
        } else {
            console.log(this.type + " missed!");
        }
    }
}

var character2= {
    class: "barbarian",
    name: "galgazor",
    race: "half-orc",
    level: 18,
    proficiencyBonus: 5,
    strength: 20,
    strengthBonus: 5,
    dexterity: 18,
    constitution: 18,
    hitPoints: 240,
    armor: 20,
    shield: 0,
    armorClass: 20,
    weapon: "greataxe",
    minDamage: 1,
    maxDamage: 12,
    attack: function(enemy) {
        var damageRange = this.maxDamage - this.minDamage;
        var attackRoll = Math.floor(Math.random() * 20) + this.strengthBonus;
        if (attackRoll >= enemy.armorClass) {
            var damage = Math.floor(Math.random() * damageRange) + this.strengthBonus + this.minDamage;
            enemy.hitPoints = enemy.hitPoints - damage;
            console.log(this.name + " hit " + enemy.type + " with their " + this.weapon + " for " + damage + " points. " + enemy.type + " has " + enemy.hitPoints + " hit points left");
        } else {
            console.log(this.name + " missed!");
        }
    }
}





do {
    // weakMonster.attack(character2)
    monster.attack(character2);
    character2.attack(monster);
    // character2.attack(weakMonster);
} while (character2.hitPoints > 0 && monster.hitPoints > 0)


