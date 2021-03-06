import PropTypes from "prop-types"
import {  useState,useEffect }from "react"
import { getDates } from "./getDataAssets"
import { FilterByDate } from "../../Molecule/FilterByDate"
import { Loading } from "../../Atom/Loading"

import "./walletEarnings.scss"

const WalletEarnings = ({handleMsgAlert}) =>{    
        const [dates,setDates] = useState(false)
        const handleDates = (dates)=>{
                setDates(dates)
        }

        useEffect(()=>{
            (async () =>{
                const dates= await getDates()
                handleDates(dates)
            })()
        },[])

   return (
           <div className="earnings">
                {dates?
                        <FilterByDate startDate={dates.startDate} endDate={dates.endDate} handleMsgAlert={handleMsgAlert}/>
                :
                        <Loading/>}
           </div>
   )
}

WalletEarnings.propTypes={
        handleMsgAlert: PropTypes.func
}

export default WalletEarnings