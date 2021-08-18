import React from 'react'
import './autocompleteInput.scss'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AutocompleteInput = ({style,dataInput, nameLabel, inputValue,handleAutocomplete}) => {
  // debugger
  return (
      <Autocomplete
        id={nameLabel}
        options={dataInput}
        onChange={(event, newValue) => {
            handleAutocomplete(newValue)
        }}
        inputValue={inputValue}
        getOptionLabel={(option) => option.title}
        style={style}
        renderInput={(params) => <TextField {...params} label={nameLabel}/>}
      />
  )
}

export default AutocompleteInput