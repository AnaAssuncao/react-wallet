import equity from "../../../TestData/walletsCustomize-DataTest.json"

async function getDataDefaultAssets(codeWallet){
    if(codeWallet){
        const tableData = {
            totalEquity:equity.totalEquity,
            assets:equity.assets
        }
        return tableData
    }

    const newData = {
            totalEquity:{
                category:"customWallets",
                name:"Nova Carteira",
                percentEquity:1
            },
            assets:{}
    }
    return newData
}

function sendChanges(codeWallet,changes){
    return true
}

export{
    getDataDefaultAssets,
    sendChanges
}