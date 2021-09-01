import { makeStyles } from "@material-ui/core/styles"
import Alert from "@material-ui/lab/Alert"
import Button from "@material-ui/core/Button"
import PropTypes from "prop-types"
import "./alertToConfirm.scss"

const messages={
  noSaveWallet: "Não foi possível salvar a carteira, complete 100% no total geral"
}

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
          }>{messages[typeMessage]}</Alert>
    </div>
  )
}

AlertToConfirm.propTypes={
  severity:PropTypes.string, 
  handleAlert:PropTypes.func,
  typeMessage:PropTypes.string
}

export default AlertToConfirm