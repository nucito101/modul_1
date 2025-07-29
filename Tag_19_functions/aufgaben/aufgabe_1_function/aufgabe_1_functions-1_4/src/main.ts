function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
  let nameOutput = "Mein:e Lieblingsheld:in ist: " + heroName + ". "
  let powerOutput = "Er:sie hat die Fähigkeit: " + heroPower + ". "
  let enemyOutput = "Sein:ihr größte:r Gegner:in ist: " + heroEnemy + "."

  console.log(nameOutput + powerOutput + enemyOutput)
}

showHero("Spiderman", "einer Spinne", "Green Goblin")
