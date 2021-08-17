const colorsButton={
    save:{
      background:"#34df53",
      color:"#fcfcfc"
    },
    cancel:{
      background:"#1976d2",
      color:"#fcfcfc"
    },
    delete:{
      background:"#c70e50",
      color:"#fcfcfc"
    },
    titleBlue:{
      background:"#2b86bd",
      color:"#fcfcfc"
    },
    dark:{
      background:"#1D2731",
      color:"#fcfcfc"
    }
  }

  function getColors(nameColor){
        return colorsButton[nameColor]
  } 

export {getColors}