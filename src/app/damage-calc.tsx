function damageCalc() {
    const attackStat: number = 0;
    const skill: number = 0;
    const flatDmg: number = 0;
    const elementalDmg: number = 0;
    const bonusDmg: number = 0;
    const characterLevel: number = 90;
    const enemyLevel: number = 100;
    const defenseDown: number = 0;
    const enemyResist: number = 0;

    var damage = (attackStat * skill + flatDmg) * 
                    (1 + elementalDmg + bonusDmg) * 
                    ((characterLevel + 100) / 
                    ((enemyLevel + 100) * (1 - defenseDown) + (characterLevel + 100))) * 
                    (1 - enemyResist);
}