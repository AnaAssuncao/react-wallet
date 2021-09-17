import { useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import PropTypes from "prop-types"
import { useEffect } from "react"

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

const DatePickers = ({labelName, dateValue, handleDateValue}) => {
  const classes = useStyles()
  const refDate = useRef()

  const handleBlurValue = ()=>{
      handleDateValue(refDate.current.value)
  }

  useEffect(()=>{
    refDate.current.value=dateValue
    },[dateValue])

  return (
    <TextField
      inputRef={refDate} 
      onBlur={handleBlurValue}
      id= {"date" + labelName}
      label={labelName}
      type="date"
      defaultValue={dateValue}
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }
    }
  />
  )
}

DatePickers.propTypes={
  labelName:PropTypes.string,
  dateValue:PropTypes.string, 
  handleDateValue:PropTypes.func
}

export default DatePickers