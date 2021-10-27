import { makeStyles } from "@material-ui/core/styles"
import Alert from "@material-ui/lab/Alert"
import Button from "@material-ui/core/Button"
import { getMessages } from "./../../../utils/messages"
import PropTypes from "prop-types"
import "./alertToConfirm.scss"

// Severity=error(red),warning(yellow),info(blue),success(green)

const useStyles = makeStyles((theme) => ({
  container:{
    width:"100%",
    height:"5rem",
    padding:"1rem", 
    display:"flex", 
    alignItems:"center",
    fontSize:"0.9rem"}
}))

const AlertToConfirm =({typeMessage,severity,handleAlert})=> {
  const classes = useStyles()
  const message = getMessages(typeMessage)
  const handleCloseAlert=()=>{
    handleAlert()
  }

  return (
    <div className="alert-to-confirm">
      <Alert severity={severity} 
            className={classes.container} 
            onClose={handleCloseAlert}
            action={
            <Button color="inherit" size="small" variant="outlined" onClick={handleCloseAlert}>
              Ok
            </Button>
          }>{message}</Alert>
    </div>
  )
}

AlertToConfirm.propTypes={
  severity:PropTypes.string, 
  handleAlert:PropTypes.func,
  typeMessage:PropTypes.string
}

export default AlertToConfirm