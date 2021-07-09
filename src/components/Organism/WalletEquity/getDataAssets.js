import data from "../../../TestData/assets-DataTest.json"
import assets from "../../../TestData/tableAssets-DataTest.json"

function getAllAssets(){
    return data
}

function getInfAssetsDirectTreasure(){
    return assets.directTreasure
}

function getInfAssetsStocks(){
    return assets.stocks
}

function getInfAssetsRealEstateFund(){
    return assets.realEstateFund
}

export{
    getAllAssets,
    getInfAssetsStocks,
    getInfAssetsDirectTreasure,
    getInfAssetsRealEstateFund
}