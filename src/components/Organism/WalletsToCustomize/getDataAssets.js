import equity from "../../../TestData/walletsCustomize-DataTest.json"

async function getDataDefaultAssets(codeWallet){
    if(codeWallet){
        const tableData = {
            totalEquity:equity[codeWallet].totalEquity,
            assets:equity[codeWallet].assets
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