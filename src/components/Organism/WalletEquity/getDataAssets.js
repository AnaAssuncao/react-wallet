import {modifyTest} from "../../../TestData/createDataAssets"
const assets = modifyTest()

 function getAllAssets(){
    const data = {
        totalEquity: assets.totalEquity.total,
        directTreasure: assets.directTreasure.total,
        stocks: assets.stocks.total,
        realEstateFund: assets.realEstateFund.total,
    }
    return data
}

 function getInfAssetsDirectTreasure(){
    const tableData = assets.directTreasure
    return tableData
}

 function getInfAssetsStocks(){
    const tableData = assets.stocks
    return tableData
}

 function getInfAssetsRealEstateFund(){
    const tableData = assets.realEstateFund
    return tableData
}

 function getDataTreemap(){
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
    for(let i =0;i<objAsset.rows.length;i++){
    
        const dataAsset = {
            x:objAsset.rows[i].code,
            y: objAsset.rows[i].amount
         }
        seriesAsset.data.push(dataAsset)
    }
    return seriesAsset  
}

export{
    getAllAssets,
    getInfAssetsStocks,
    getInfAssetsDirectTreasure,
    getInfAssetsRealEstateFund,
    getDataTreemap
}