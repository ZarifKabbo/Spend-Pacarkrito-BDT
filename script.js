let item = Array(45).fill(0);

let money = 11019906853379;
function buy(pro)
{
    let num = pro +1;
    let cost = parseInt(document.getElementById(`pr${num}`).innerHTML)
    if(cost<=money)
        {
            item[pro]++;
            moneyUpdate(-cost)
            document.getElementById(`pa${num}`).innerHTML = item[pro]

        }
}
function sell(pro)
{
    if(item[pro]>=1){ 
    let num = pro +1;
    item[pro]--;
    document.getElementById(`pa${num}`).innerHTML = item[pro]
    let cost = parseInt(document.getElementById(`pr${num}`).innerHTML)
    moneyUpdate(cost)
    }
}
function moneyUpdate(nmoney)
{
    money = money + nmoney;
    let spend = (11019906853379 - money).toLocaleString()
    let balance = money.toLocaleString();
    document.getElementById('balancetext').innerHTML = `Balance: ${balance}`
    document.getElementById('smalltext').innerHTML = balance
    document.getElementById('spend').innerHTML = `TOTAL SPEND: ${spend}`
    if(money==0)
        {
            alert("You have spend all the money")
        }
}