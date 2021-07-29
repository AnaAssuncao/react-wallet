import assetsDataTest from "./tableAssets-DataTest"

function modifyTest(){
    const assets = assetsDataTest
    const amount = (Math.random() * 10000000) 
    assets.totalEquity.total.amount =  amount
    assets.totalEquity.total.cost = amount * 0.80
    assets.totalEquity.total.result = amount * 0.20
    assets.totalEquity.total.percentResult = 20

    for(let i in assets){
        if(assets[i].rows){
            const amountAssets = amount*(assets[i].total.percentage/100)
            assets[i]=addValueRows(assets[i],amountAssets)
            assets[i].total.amount = amountAssets
            assets[i].total.cost = amountAssets*0.80
            assets[i].total.result = amountAssets*0.20
            assets[i].total.percentResult = 20
        }
    }
    return assets
}

function addValueRows(infoAssets,amountAssets){
    infoAssets.rows.forEach((data)=>{
        const amount = amountAssets*(data.percentage/100)
    
        data.cost = amount*0.80
        data.result = amount*0.20
        data.amount = amount
        data.percentResult = 20

        data.percentage = data.percentage + "%"
    })
    return infoAssets
}   

export {
    modifyTest
}
