import {modifyTest} from "../../../TestData/createDataAssets"
const equity = modifyTest()

async function getEquity(){
    const data = {
        totalEquity: equity.totalEquity,
        arrayNameAssets: Object.keys(equity.assets)
    }

    data.arrayNameAssets.forEach((nameAssets)=>{
        data[nameAssets] = equity.assets[nameAssets].totalEquity
    })

    return data
}

function getDataTable(nameAssets){
    const tableData = {
        columns:equity.assets[nameAssets].columns,
        rows:equity.assets[nameAssets].rows
    }
    return tableData
}

async function getDataTreemap(){
    const treemapChart = []
    const arrayNameAssets= Object.keys(equity.assets)
    arrayNameAssets.forEach((nameAssets)=>{
        const data = createDataTreemap(equity.assets[nameAssets])
        treemapChart.push(data)
    })
    return treemapChart
}

function createDataTreemap(objAsset){
    const seriesAsset = {
        name:objAsset.totalEquity.name,
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
    getEquity,
    getDataTable,
    getDataTreemap
}