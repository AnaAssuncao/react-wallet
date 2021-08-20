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
    backgroundColor: "#fcfcfc",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: "2rem",
    top: "40%",
    left: "45%",
    display:"flex", 
    flexDirection:"column",
    justifyContent: "space-between  "
  }
}))

const ModalAlert =({propsButton,confirmModal,typeMessage,children})=> {
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
      <span>{messages[typeMessage]}</span>
      <div style={{display:"flex", justifyContent: "space-around" }}>
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
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </React.Fragment>
  )
}

ModalAlert.propTypes={
  propsButton:PropTypes.object, 
  confirmModal:PropTypes.func,
  typeMessage:PropTypes.string
}

export default ModalAlert