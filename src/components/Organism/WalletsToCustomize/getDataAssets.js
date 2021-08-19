import equity from "../../../TestData/walletsCustomize-DataTest.json"

async function getDataDefaultAssets(codeWallet){
    const tableData = {
        totalEquity:equity.totalEquity,
        assets:equity.assets
    }
    return tableData
}

function sendChanges(codeWallet,changes){
    return true
}

export{
    getDataDefaultAssets,
    sendChanges
}