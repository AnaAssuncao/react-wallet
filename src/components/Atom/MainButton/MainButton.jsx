import React from "react";
import { makeStyles , emphasize} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { getColors } from "../../../utils/colors"
import PropTypes from "prop-types"
import "./mainButton.scss"

const MainButton = ({children,color, fontSize, ...others}) => {
  const colors = getColors(color)
  const useStyles = makeStyles({
    root: {
      background:colors.background,
      borderRadius: 3,
      border:"none",  
      color: colors.color,
      fontSize:fontSize,
      minWidth: "2rem",
      minHeight: "1.5rem",
      lineHeight: "1rem",
    },
    label:{
      "&:hover": {
        backgroundColor: emphasize(colors.background, 0.2),
      '&:active': {
        boxShadow: 'none',
        backgroundColor: emphasize(colors.background, 0.9),
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
  color: PropTypes.string
}

MainButton.defaultProps = {
  onClick: ()=>{},
}

export default MainButton