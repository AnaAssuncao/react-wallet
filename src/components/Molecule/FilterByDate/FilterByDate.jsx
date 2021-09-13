import { useState, Fragment} from "react"
import PropTypes from "prop-types"
import { Loading } from'../../Atom/Loading'
import { DatePickers } from "../../Atom/DatePickers"
import { RangeSlider } from "../../Atom/RangeSlider"
import { AlertToConfirm } from "../../Atom/AlertToConfirm"
import "./filterByDate.scss"

const formatDateString = (dateReference) =>{
    const year = dateReference.getUTCFullYear()
    let month = dateReference.getUTCMonth() 
    month=month===0?1:month+1
    month=month<10?"0"+month:month
    let day = dateReference.getUTCDate()
    day=day<10?"0"+day:day
    return year + "-" + month + "-" + day
    // toISOString().slice(0,10)
}
const getMonthSlider = (date,previousDate)=>{
    const diff = date.getTime() - previousDate.getTime() // Subtrai uma data pela outra
    const month = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30));
    return month
}

const FilterByDate = ({startDate, endDate}) =>{
    const [defaultDate,setDefaultDate]= useState({startDateObject:new Date(startDate), endDateObject:new Date(endDate)}) 
    const [minDate, setMinDate] = useState({dateObject: new Date(startDate), dateString: startDate})
    const [maxDate, setMaxDate] = useState({dateObject: new Date(endDate), dateString: endDate})
    const [alert,setAlert]=useState(false)

    const startingYear = defaultDate.startDateObject.getUTCFullYear()
    const endYear = defaultDate.endDateObject.getUTCFullYear()
    const numberAllMonth = ((endYear - startingYear) + 1 )*12
    const startRangeMonth = [1,(numberAllMonth +1)]
    const startRange = defaultDate.startDateObject.getUTCMonth() + 1 //marcadores
    const endMonth = defaultDate.endDateObject.getUTCMonth() 
    const endRange = numberAllMonth - (12-endMonth) +1

    const [rangeMonth, setRangeMonth]= useState([startRange,endRange])

    const handleAlertClosure = () =>{
        setAlert(false)
    }
    const displayAlert = () =>{
        setAlert(true)
        setTimeout(()=>{
            handleAlertClosure()
        },10000)
    }
    const changeDate = (newValue,pastValue,dateRelatedObject)=>{
        const differenceBetweenNumbers= newValue-pastValue
        dateRelatedObject.dateObject.setUTCDate(1)
        dateRelatedObject.dateObject.setUTCMonth(dateRelatedObject.dateObject.getUTCMonth() + (differenceBetweenNumbers))
        const dateString = formatDateString(dateRelatedObject.dateObject)
        return dateString
    }
    const handleInferiorLimit =(dateString)=>{
        const newDate = new Date(dateString)
        setMinDate({dateObject: newDate, dateString: dateString})
    }
    const handleUpperLimit =(dateString)=>{
        const newDate = new Date(dateString)
        setMaxDate({dateObject: newDate, dateString: dateString})
    }
    const handleValuesSlider = (newValue)=>{
        const marks = rangeMonth
        if(newValue[0]!==rangeMonth[0]){
            if(newValue[0]>=startRange){
                const dateString = changeDate(newValue[0],rangeMonth[0],minDate)
                handleInferiorLimit(dateString)
                marks[0]=newValue[0]
            }
            else{
                displayAlert()
                handleInferiorLimit(startDate)
                marks[0]= startRange
            }
        }
        if(newValue[1]!==rangeMonth[1]){
            if(newValue[1]<=endRange){
                const dateString = changeDate(newValue[1],rangeMonth[1],maxDate)
                handleUpperLimit(dateString)
                marks[1]=newValue[1]
            }
            else{
                displayAlert()
                handleUpperLimit(endDate)
                marks[1]= endRange
            }
        }
        setRangeMonth(marks)
    }
    const handleDateValueStart = (newValueDate)=>{
        let newDate = new Date(newValueDate)
        if(defaultDate.startDateObject<newDate){
            handleInferiorLimit(newValueDate)
            const valueInferiorRange = getMonthSlider(newDate,minDate.dateObject)
            setRangeMonth([rangeMonth[0]+valueInferiorRange,rangeMonth[1]])
        }
        else{
            displayAlert()
            handleInferiorLimit(startDate)
            setRangeMonth([startRange,rangeMonth[1]])
        }
    }   
    const handleDateValueEnd = (newValueDate)=>{
        let newDate = new Date(newValueDate)
        if(defaultDate.startDateObject>newDate){
            handleUpperLimit(newValueDate)
            const valueUpperRange = getMonthSlider(newDate,maxDate.dateObject)
            setRangeMonth([rangeMonth[0],rangeMonth[1]+valueUpperRange])
        }
        else{
            displayAlert()
            handleUpperLimit(endDate)
            setRangeMonth([rangeMonth[0],endRange])
        }   
    }

    return (
        <div className="filter-by-date">
            { minDate && maxDate && rangeMonth?
                <Fragment>
                    { alert === true &&  
                        <AlertToConfirm handleAlert={handleAlertClosure} typeMessage="dateLimit" severity="error"/>
                    }     
                    <div className="filter-by-date__date-pickers">
                        <DatePickers labelName="Data Inicial" 
                            dateValue={minDate.dateString} 
                            handleDateValue={handleDateValueStart}/>
                        <DatePickers labelName="Data Final"
                            dateValue={maxDate.dateString} 
                            handleDateValue={handleDateValueEnd}/>
                    </div>
                    <RangeSlider startingYear={startingYear} 
                                initialValues ={startRangeMonth}
                                valueMarks = {rangeMonth}
                                handleValuesSlider = {handleValuesSlider} />
                </Fragment>
            :
                <Loading className="filter-by-date__loading"></Loading>
            }
        </div>
    )
}

FilterByDate.propTypes={
    startDate: PropTypes.string,
    endDate: PropTypes.string
}

export default FilterByDate