/**
 * bandage: [시전 시간, 초당 회복량, 추가 회복량] [number, number, number]
 * health : 최대 체력 number
 * attacks: 몬스터의 공격 시간과 피해량 [number, number][] [공격 시간, 피해량][]
 *
 * @return 모든 공격이 끝난 직후 남은 체력 (체력이 0 이하인 경우 -1)
 */
function solution(bandage, health, attacks) {
    const [skillTime] = bandage;
    const maxHealth = health;
    let preAttackTime = attacks[0][0];
    
    for (attack of attacks) {
        const [attackTime, damage] = attack;
        
        const timeDiff = attackTime - preAttackTime - 1;
        
        if (timeDiff > 0)
            health = Math.min(maxHealth, health + calculateHealthing(bandage, Math.floor(timeDiff / skillTime), timeDiff % skillTime));
        
        health -= damage;
        
        if (health <= 0) return -1;
        
        preAttackTime = attackTime;
    }
    
    return health;
}

function calculateHealthing(bandage, skillCount, remain) {
    const [skillTime, healthingPerSec, additionalHealthing] = bandage;
    
    return (skillTime * healthingPerSec + additionalHealthing) * skillCount + (remain * healthingPerSec);
}
