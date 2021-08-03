import data from "../../TestData/wallets-DataTest.json"

async function getAllWallets(){
    await delay(1000)
    return data
}

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