import React from 'react'
import './autocompleteInput.scss'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AutocompleteInput = ({style,dataInput, nameLabel, handleAutocomplete}) => {
  return (
      <Autocomplete
        id={nameLabel}
        options={dataInput}
        disableClearable
        onChange={(event, newValue) => {
            handleAutocomplete(newValue)
        }}
        getOptionLabel={(option) => option.title}
        style={style}
        renderInput={(params) => <TextField {...params} placeholder={nameLabel}/>}
      />
  )
}

export default AutocompleteInput