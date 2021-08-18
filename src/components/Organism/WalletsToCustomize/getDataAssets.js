import equity from "../../../TestData/walletsCustomize-DataTest.json"

async function getDataDefaultAssets(codeWallet){
    const tableData = {
        totalEquity:equity.totalEquity,
        assets:equity.assets
    }
    return tableData
}

export{
    getDataDefaultAssets
}