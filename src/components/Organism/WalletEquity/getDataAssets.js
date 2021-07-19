import assets from "../../../TestData/assets-DataTest.json"
import tableAssets from "../../../TestData/tableAssets-DataTest.json"

function getAllAssets(){
    const data = assets
    for(let nameAssets in data){
        data[nameAssets].cost = numberToCurrenty(data[nameAssets].cost)
        data[nameAssets].result = numberToCurrenty(data[nameAssets].result)
        data[nameAssets].amount = numberToCurrenty(data[nameAssets].amount)
    }
    return data
}

function getInfAssetsDirectTreasure(){
    const tableData = tableAssets.directTreasure
    tableData.rows.forEach((data)=>{ 
        data.cost = numberToCurrenty(data.cost)
        data.result= numberToCurrenty(data.result)
        data.value= numberToCurrenty(data.value)
    })
    return tableData
}

function getInfAssetsStocks(){
    const tableData = tableAssets.stocks
    tableData.rows.forEach((data)=>{ 
        data.cost = numberToCurrenty(data.cost)
        data.result= numberToCurrenty(data.result)
        data.value= numberToCurrenty(data.value)
    })
    return tableData
}

function getInfAssetsRealEstateFund(){
    const tableData = tableAssets.realEstateFund
    tableData.rows.forEach((data)=>{ 
        data.cost = numberToCurrenty(data.cost)
        data.result= numberToCurrenty(data.result)
        data.value= numberToCurrenty(data.value)
    })
    return tableData
}

export{
    getAllAssets,
    getInfAssetsStocks,
    getInfAssetsDirectTreasure,
    getInfAssetsRealEstateFund
}

function numberToCurrenty(number){
    return number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}