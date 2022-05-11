export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10+DnDCharacter.getModifierFor(this.constitution)    
  }

  static randomNumber() {
    return Math.ceil(Math.random() * 6);
  }

  static topThreeDiceRolls() {
    const diceRolls: number[] = [];
    while (diceRolls.length < 4) {
      diceRolls.push(this.randomNumber());
    }
    const lowestDice = Math.min(...diceRolls);
    return diceRolls.filter((roll) => roll !== lowestDice);
  }

  static generateAbilityScore() {
    const topThree = this.topThreeDiceRolls();
    return topThree.reduce(
      (runningTotal: number, nextNumber: number) => runningTotal + nextNumber, 0);
  }

  static getModifierFor(constitution: number) {
      return Math.floor((constitution - 10) / 2)
  }
}
