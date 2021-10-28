import { useState, Fragment} from "react"
import moment from 'moment'
import PropTypes from "prop-types"
import { Loading } from'../../Atom/Loading'
import { DatePickers } from "../../Atom/DatePickers"
import { RangeSlider } from "../../Atom/RangeSlider"
import "./filterByDate.scss"

const getMonthSlider = (date,previousDate)=>{
    return date.diff(previousDate,"months")
}
const getQtMonths = (startingYear,endYear)=>{
    return ((endYear - startingYear) + 1 )*12
}

const FilterByDate = ({startDate, endDate,handleMsgAlert}) =>{  
    const [defaultDate,setDefaultDate]= useState({startDate:moment(startDate), endDate:moment(endDate)}) 
    const [minDate, setMinDate] = useState({date: moment(startDate), dateString: startDate})
    const [maxDate, setMaxDate] = useState({date: moment(endDate), dateString: endDate})

    const startDateObject= defaultDate.startDate.toObject()
    const endDateObject = defaultDate.endDate.toObject()
    const qtMonths = getQtMonths(startDateObject.years,endDateObject.years )
    const rangeSlider = [1,(qtMonths +1)]
    const startMarkSlider = startDateObject.months +1   
    const endMarkSlider = qtMonths - (12-endDateObject.months) +1
    const [rangeMonth, setRangeMonth]= useState([startMarkSlider,endMarkSlider])

    const changeDate = (newValue,pastValue,date, fistDay=true)=>{
        const differenceValues= newValue-pastValue
        date.add(differenceValues, 'months')
        const day = fistDay===true ? 1: date.daysInMonth()
        date.date(day)
        return date.format('YYYY-MM-DD')
    }
    const handleInferiorLimit =(dateString)=>{
        setMinDate({date: moment(dateString), dateString: dateString})
    }
    const handleUpperLimit =(dateString)=>{
        setMaxDate({date: moment(dateString), dateString: dateString})
    }
    const handleValuesSlider = (newValue)=>{
        const marks = rangeMonth
        if(newValue[0]!==rangeMonth[0]){
            if(newValue[0]>=startMarkSlider){
                const dateString = changeDate(newValue[0],rangeMonth[0],minDate.date)
                handleInferiorLimit(dateString)
                marks[0]=newValue[0]
            }
            else{
                handleMsgAlert("dateLimit","error")
                handleInferiorLimit(startDate)
                marks[0]= startMarkSlider
            }
        }
        if(newValue[1]!==rangeMonth[1]){
            if(newValue[1]<=endMarkSlider){
                const dateString = changeDate(newValue[1],rangeMonth[1],maxDate.date,false)
                handleUpperLimit(dateString)
                marks[1]=newValue[1]
            }
            else{
                handleMsgAlert("dateLimit","error")
                handleUpperLimit(endDate)
                marks[1]= endMarkSlider
            }
        }
        setRangeMonth(marks)
    }
    const handleDateValueStart = (newValueDate)=>{
        let newDate = moment(newValueDate)
        if(defaultDate.startDate<=newDate){
            if(newDate<maxDate.date){
                handleInferiorLimit(newValueDate)
                const valueInferiorRange = getMonthSlider(newDate,minDate.date)
                setRangeMonth([rangeMonth[0]+valueInferiorRange,rangeMonth[1]])
            }
            else{
                handleInferiorLimit(maxDate.dateString)
                setRangeMonth([rangeMonth[1],rangeMonth[1]])
            }
        }
        else{
            handleMsgAlert("dateLimit","error")
            handleInferiorLimit(startDate)
            setRangeMonth([startMarkSlider,rangeMonth[1]])
        }
    }   
    const handleDateValueEnd = (newValueDate)=>{
        let newDate = moment(newValueDate)
        if(defaultDate.endDate>=newDate){
            if(newDate>minDate.date){
                handleUpperLimit(newValueDate)
                const valueUpperRange = getMonthSlider(newDate,maxDate.date)
                setRangeMonth([rangeMonth[0],rangeMonth[1]+valueUpperRange])
            }
            else{
                handleUpperLimit(minDate.dateString)
                setRangeMonth([rangeMonth[0],rangeMonth[0]])
            }
        }
        else{
            handleMsgAlert("dateLimit","error")
            handleUpperLimit(endDate)
            setRangeMonth([rangeMonth[0],endMarkSlider])
        }   
    }

    return (
        <div className="filter-by-date">
            { minDate && maxDate && rangeMonth?
                <Fragment>
                    <div className="filter-by-date__date-pickers">
                        <DatePickers labelName="Data Inicial" 
                            dateValue={minDate.dateString} 
                            handleDateValue={handleDateValueStart}/>
                        <DatePickers labelName="Data Final"
                            dateValue={maxDate.dateString} 
                            handleDateValue={handleDateValueEnd}/>
                    </div>
                    <RangeSlider startingYear={startDateObject.years} 
                                initialValues ={rangeSlider}
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
    endDate: PropTypes.string,
    handleMsgAlert: PropTypes.func
}

export default FilterByDate