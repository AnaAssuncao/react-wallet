const messages={
    noSaveWallet: "Não foi possível salvar a carteira, complete 100% no total geral.",
    dateLimit:"Data fora do limite das operações."
}

  function getMessages(typeMessages){
    return messages[typeMessages]
} 

export {getMessages}