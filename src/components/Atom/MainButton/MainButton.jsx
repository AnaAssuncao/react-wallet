import React from "react";
import { makeStyles , emphasize} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types"
import "./mainButton.scss"

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
  }
}

const MainButton = ({children,color, ...others}) => {
  debugger
  const useStyles = makeStyles({
    root: {
      background:colorsButton[color].background,
      borderRadius: 3,
      boxShadow: '0px 1px 3px #000',
      color: colorsButton[color].color,
    },
    label:{
      "&:hover": {
        backgroundColor: emphasize(colorsButton[color].background, 0.2),
      '&:active': {
        boxShadow: 'none',
        backgroundColor: emphasize(colorsButton[color].background, 0.9),
      },
      '&:focus': {
        boxShadow: '0px 1px 6px -2 #000',
      },
  }}  
  })
  const classes = useStyles();
  return <Button className={classes.root + " " + classes.label} {...others}>{children}</Button>;
}

MainButton.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
}

MainButton.defaultProps = {
  onClick: ()=>{},
}

export default MainButton