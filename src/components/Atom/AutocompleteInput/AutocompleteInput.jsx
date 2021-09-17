import './autocompleteInput.scss'
import {useState} from "react"
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const AutocompleteInput = ({style,dataInput, nameLabel,value, handleAutocomplete}) => {
  const [inputValue, setInputValue] = useState("")
  
  return (
      <Autocomplete
        id={nameLabel}
        options={dataInput}
        disableClearable
        value={value}
        onChange={(event, newValue) => {
            handleAutocomplete(newValue)
        }}
        getOptionSelected = {(option, value) => option.value === value.value}
        getOptionLabel={(option) => option.title}
        style={style}
        renderInput={(params) => <TextField {...params} placeholder={nameLabel}/>}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
        }}
      />
  )
}

export default AutocompleteInput