import { createContext,useState,useEffect } from 'react';
import { getDataAllAssets }from "./dataAutocomplete"

export const DataAssetsContext = createContext({})

export function DataAssetsProvider({children}){
    const [dataAssets,setDataAssets]=useState(null)
    const [categoriesSelect,setCategories] =useState(null)

    const handleDataAssets = (data)=>{
        setDataAssets(data)
        handleCategoriesSelect(data.categories)
    }
    const handleCategoriesSelect= (dataCategories)=>{
        const namesCategories =Object.keys(dataCategories)
        const categories = namesCategories.map((name)=>{
            return {
                title: dataCategories[name].title,
                value: name
            }
        })
        setCategories(categories)
    }
    const handleCodeSelect= (nameCategory)=>{
        const categoryData = dataAssets.assets[nameCategory]
        const codesAssets  =Object.keys(categoryData)
        const codes = codesAssets.map((code)=>{
            return {
                title: code,
                value: code
            }
        })
        return codes
    }
    useEffect(()=>{
        (async () =>{
            const dataChart= await getDataAllAssets()
            handleDataAssets(dataChart)
        })()
    },[])

    const getDataAssets= ()=>{
        return dataAssets
    }
    const getCategories= ()=>{
        return categoriesSelect
    }
    const getCode= (nameCategory)=>{
       const codes =  handleCodeSelect(nameCategory)
        return codes
    }
    const getDescription= (category,code)=>{
        return dataAssets.assets[category][code].name
    }
    return (
        <DataAssetsContext.Provider value={{
            getDataAssets,
            getCategories,
            getCode,
            getDescription
        }}>
            {children}
        </DataAssetsContext.Provider>
    )
}
