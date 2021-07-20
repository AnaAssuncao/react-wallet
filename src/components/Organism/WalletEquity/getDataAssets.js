import assetsDataTest from "../../../TestData/tableAssets-DataTest"
const assets = assetsDataTest
modifyTest()

function modifyTest(){
    const amount = (Math.random() * 10000000)
    assets.totalEquity.total.amount =  numberToCurrenty(amount)
    assets.totalEquity.total.cost = numberToCurrenty(amount * 0.80)
    assets.totalEquity.total.result = numberToCurrenty(amount * 0.20)

    for(let i in assets){
        if(assets[i].rows){
            const amountAssets = amount*(assets[i].total.percentage/100)
            assets[i]=addValueRows(assets[i],amountAssets)
            assets[i].total.amount = numberToCurrenty(amountAssets)
            assets[i].total.cost = numberToCurrenty(amountAssets*0.80)
            assets[i].total.result = numberToCurrenty(amountAssets*0.20)
        }
    }
}

function addValueRows(infoAssets,amountAssets){
    infoAssets.rows.forEach((data)=>{
        const amount = amountAssets*(data.percentage/100)
        const cost = amount*0.80
        const result = amount*0.20
    
        data.cost = numberToCurrenty(cost)
        data.result = numberToCurrenty(result)
        data.amount = numberToCurrenty(amount)

        data.percentage = data.percentage + "%"
    })
    return infoAssets
}   

function numberToCurrenty(number){
    return number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

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