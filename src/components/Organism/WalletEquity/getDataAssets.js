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

export{
    getAllAssets,
    getInfAssetsStocks,
    getInfAssetsDirectTreasure,
    getInfAssetsRealEstateFund
}