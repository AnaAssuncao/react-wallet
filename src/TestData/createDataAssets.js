import assetsTest from "./tableAssets-DataTest"

function modifyTest(){
    const amount = (Math.random() * 10000000) 
    assetsTest.totalEquity.amount =  amount
    assetsTest.totalEquity.cost = amount * 0.80
    assetsTest.totalEquity.result = amount * 0.20
    assetsTest.totalEquity.percentResult = 20

    const arrayAssets = Object.keys(assetsTest.assets)

    arrayAssets.forEach((nameAsset)=>{
        const objAsset= assetsTest.assets[nameAsset]
        const amountAssets = amount*objAsset.totalEquity.percentage
        objAsset.rows=addValueRows(objAsset.rows,amountAssets)
        objAsset.totalEquity.amount = amountAssets
        objAsset.totalEquity.cost = amountAssets*0.80
        objAsset.totalEquity.result = amountAssets*0.20
        objAsset.totalEquity.percentResult = 20
    })

    return assetsTest
}

function addValueRows(rowsAsset,amountAssets){
    rowsAsset.forEach((data)=>{
        const amount = amountAssets*data.percentage
    
        data.cost = amount*0.80
        data.result = amount*0.20
        data.amount = amount
        data.percentResult = 20
    })
    return rowsAsset
}   

export {
    modifyTest
}
