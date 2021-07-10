import data from "../../TestData/wallets-DataTest.json"

async function getAllWallets(){
    return data
}

delay(0)
function delay (ms){
    return new Promise((resolve)=>
        setTimeout(
            resolve
        ,ms)
    )
}

export{
    getAllWallets
}