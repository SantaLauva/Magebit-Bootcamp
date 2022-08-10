const cookie = document.querySelector('.cookie');
const money = document.querySelector('.money');
const upgradeButton = document.querySelector('.update');
const upgradeCostContainer = document.querySelector('.upgrade-cost');
const upgradeSpeed = document.querySelector('.speed');

let speed = 400;
let moneyCount = 10;
let upgradeCost = 10;
let currentCookieMul = 1;

cookie.addEventListener('click', function () {
    moneyCount += currentCookieMul;
    money.textContent = moneyCount;
});

upgradeButton.addEventListener('click', function () {
    if (moneyCount >= upgradeCost) {
        currentCookieMul *= 2;
        moneyCount = moneyCount - upgradeCost;
        upgradeCost *= 3;
        upgradeCostContainer.textContent = upgradeCost;
        money.textContent = moneyCount;
    }
});

var interval = null;

upgradeSpeed.addEventListener('click',function(){
    speed *= 0.5;
    clearInterval(interval);
    interval = setInterval(function(){
        console.log(speed);
        cookie.click();
    },speed); 
});