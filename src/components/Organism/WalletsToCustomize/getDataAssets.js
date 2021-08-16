import equity from "../../../TestData/walletsCustomize-DataTest.json"

async function getDataDefaultAssets(){
    const tableData = {
        totalEquity:equity.totalEquity,
        assets:equity.assets
    }
    return tableData
}

export{
    getDataDefaultAssets
}