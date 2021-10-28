const messages={
    noSaveWallet: "Não foi possível salvar a carteira, complete 100% no total geral.",
    dateLimit:"Data fora do limite das operações."
}

  function getMessages(messageCodes){
    return messages[messageCodes]
} 

export {getMessages}