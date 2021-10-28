import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import { MainButton } from "../MainButton"
import PropTypes from "prop-types"

const messages={
  saveWallet:"Deseja salvar esta carteira?",
  deleteWallet:"Deseja deletar esta carteira?",
  cancelWallet: "Deseja cancelar aos alterações?",
  deleteRow: "Deseja deletar esta linha?",
  noSaveWallet: "Carteira não contém 100% do Total Geral"
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "20rem",
    height: "10rem",
    backgroundColor: "rgba(255,255,255,0.9)",
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    fontWeight:"600!important",
    padding: "2rem",
    top: "40%",
    left: "45%",
    display:"flex", 
    flexDirection:"column",
    justifyContent: "space-between",
    alignItems:"center"
  },
  buttonClose:{
    position:"absolute", 
    top:"0.1rem", 
    right:"0.5rem", 
    color:"#c0c0c0",
    cursor:"pointer"
  },
  containerButtons:{
    width:"100%", 
    display:"flex", 
    justifyContent:"space-around"
  }
}))

const ModalAlert =({propsButton,confirmModal,messageCode,children})=> {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleConfirmModal = () => {
    handleClose()
    confirmModal()
  }

  const body = (
    <div className={classes.paper}>
      <div className={classes.buttonClose} onClick={handleClose}> x</div>
      <span>{messages[messageCode]}</span>
      <div className={classes.containerButtons}>
         <MainButton color="save" size="medium" variant="contained" fontSize="1rem" onClick={handleConfirmModal}>
            Sim
        </MainButton>
        <MainButton color="delete" size="medium" variant="contained" fontSize="1rem" onClick={handleClose}>
            Não
        </MainButton>
      </div>
    </div>
  )

  return (
    <React.Fragment>
      <MainButton  onClick={handleOpen} {...propsButton}>
          {children}
      </MainButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </React.Fragment>
  )
}

ModalAlert.propTypes={
  propsButton:PropTypes.object, 
  confirmModal:PropTypes.func,
  messageCode:PropTypes.string
}

export default ModalAlert