import {modifyTest} from "../../../TestData/createDataAssets"
const assets = modifyTest()

async function getAllAssets(){
    const data = {
        totalEquity: assets.totalEquity.total,
        directTreasure: assets.directTreasure.total,
        stocks: assets.stocks.total,
        realEstateFund: assets.realEstateFund.total,
    }
    return data
}

function getDataTreasureTable(){
    const tableData = assets.directTreasure
    return tableData
}

 function getDataStocksTable(){
    const tableData = assets.stocks
    return tableData
}

 function  getDataRealEstateFundTable(){
    const tableData = assets.realEstateFund
    return tableData
}

async function getDataTreemap(){
    const treemapChart = []
    treemapChart[0]=createDataTreemap(assets.directTreasure)
    treemapChart[1]=createDataTreemap(assets.stocks)
    treemapChart[2]=createDataTreemap(assets.realEstateFund)
    return treemapChart
}

function createDataTreemap(objAsset){
    const seriesAsset = {
        name:objAsset.total.name,
        data:[]
    }
    objAsset.rows.forEach(rows => {
        const dataAsset = {
            x:rows.code,
            y: rows.amount
         }
        seriesAsset.data.push(dataAsset)
    });
    return seriesAsset  
}

export{
    getAllAssets,
    getDataTreasureTable,
    getDataStocksTable,
    getDataRealEstateFundTable,
    getDataTreemap
}