import { useState, useEffect, Fragment} from "react"
import PropTypes from "prop-types"
import { Loading } from'../../Atom/Loading'
import { DatePickers } from "../../Atom/DatePickers"
import { RangeSlider } from "../../Atom/RangeSlider"
import { getDate } from "./getDate"
import "./filterByDate.scss"

// const dateReceive = {
//     maxDate: "new Date()",
//     minDate: "new Date()",
//     defaultRange: {
//         start: "new Date()",
//         end:"new Date()"
//     }
// }

const getYear = (date) => {
    const regex = /\d{4}/g
    const years = date.match(regex);
    return  Number(years[0])
}

const dateReference = new Date()
const formatDate = () =>{
    const year = dateReference.getUTCFullYear()
    let month = dateReference.getUTCMonth() 
    month=month===0?1:month
    month=month<10?"0"+month:month
    let day = dateReference.getUTCDate()
    day=day<10?"0"+day:day
    return year + "-" + month + "-" + day
}
const getDatePickers = (startingYear,newValue) =>{
    dateReference.setUTCDate(1)
    dateReference.setUTCMonth(0)
    dateReference.setUTCFullYear(startingYear)
    dateReference.setUTCMonth(dateReference.getUTCMonth() + (newValue))
    const date = formatDate()
    return date
}

const getMonthSlider = (startingYear, newDate) =>{
    dateReference.setUTCDate(1)
    dateReference.setUTCMonth(0)
    dateReference.setUTCFullYear(startingYear) // Data inicial
    const past = new Date(newDate); // Nova Data
    const diff = Math.abs(dateReference.getTime() - past.getTime()); // Subtrai uma data pela outra
    const month = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30));
    return month
}

const FilterByDate = () =>{
    const [defaultDate,setDefaultDate]=useState(null)
    const [newDateValues, setNewDateValues] = useState(null)
    // const [dataInicial, setDataInicial] = useState({dataInicial}) (variavel é Date)
    // const [dataFinal, setDataFinal] = useState({dataFinal})
    // const [rangeMeses, setRangeMeses]= useState([1,32])
// [1,32] => [3,32] => [2,0]




    const handleValuesSlider = (newValue)=>{
        if(newValue[0]!==newDateValues.valuesSlider[0]){
            newDateValues.initial=getDatePickers(defaultDate.startingYear,newValue[0])
        }
        if(newValue[1]!==newDateValues.valuesSlider[1]){
            newDateValues.final=getDatePickers(defaultDate.startingYear,newValue[1])
        }
        newDateValues.valuesSlider=newValue
        setNewDateValues({...newDateValues})
    }
    const handleDateValueInitial = (date) =>{
        newDateValues.valuesSlider[0]= getMonthSlider(defaultDate.startingYear,date)
        newDateValues.initial=date
        setNewDateValues({...newDateValues})
    }
    const handleDateValueEnd = (date) =>{
        newDateValues.valuesSlider[1]= getMonthSlider(defaultDate.startingYear,date)
        newDateValues.final=date
        console.log(date)
        setNewDateValues({...newDateValues})
    }

    const handleDefaultValue = ({initialDate, finalDate}) =>{
        const setupDefault = {
            initial:initialDate,
            final:finalDate,
            startingYear:getYear(initialDate),
            finalYear:getYear(finalDate),
            initialSlider:[]
        }
        const numberMounth = ((setupDefault.finalYear - setupDefault.startingYear) + 1 )*12 +1
        setupDefault.initialSlider = [1,numberMounth]
        setDefaultDate(setupDefault)
        handleFistValues(setupDefault)
    }

    const handleFistValues = (setupDefault) =>{
        setNewDateValues({
            valuesSlider:[setupDefault.initialSlider[0],setupDefault.initialSlider[1]],
            initial:setupDefault.initial, 
            final:setupDefault.final
        })
    }

    useEffect(()=>{
        (async () =>{
            const dates= await getDate()
            handleDefaultValue(dates)
        })()
    },[])

    return (
        <div className="filter-by-date">
            {defaultDate && newDateValues?
            <Fragment>
                <div className="filter-by-date__date-pickers">
                    <DatePickers labelName="Data Inicial" 
                        dateValue={newDateValues.initial} 
                        handleDateValue={handleDateValueInitial}/>
                    <DatePickers labelName="Data Final"
                        dateValue={newDateValues.final} 
                        handleDateValue={handleDateValueEnd}/>
                </div>
                <RangeSlider startingYear={defaultDate.startingYear} 
                            finalYear = {defaultDate.finalYear}
                            initialValues ={ defaultDate.initialSlider}
                            valueMarks = {newDateValues.valuesSlider}
                            handleValuesSlider = {handleValuesSlider} />
            </Fragment>
            :
            <Loading className="filter-by-date__loading"></Loading>
            }
        </div>
    )
}

FilterByDate.propTypes={
    code: PropTypes.string
}

export default FilterByDate