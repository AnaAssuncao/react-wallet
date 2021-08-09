
import PropTypes from "prop-types"

import { AsideMenuItem } from "../../Atom/AsideMenuItem"

import "./selectWalletToBalance.scss"

const SelectWalletToBalance = ({summaryWallet, listWallets,selectCode,handleSelectCodeWallet}) =>{
    const listWallet = listWallets.map(
        (codeWallet) =>{
            const classSelect = selectCode===codeWallet?"aside-menu-item__select":""
            const keyList = codeWallet
            const nameWallet = summaryWallet.balanceWallets[codeWallet].name
            const percentageWallet = summaryWallet.balanceWallets[codeWallet].percentEquity*100

            return (   
            <AsideMenuItem
                key={keyList}
                classSelect={classSelect} 
                handleSelectCodeWallet={handleSelectCodeWallet}
                codeWallet={codeWallet}>
                <p className="aside-menu-item__name">{nameWallet}</p>
                <p className="aside-menu-item__percentage">({percentageWallet}% P)</p>
            </AsideMenuItem>)
    })

    return (
        <div className="select-wallet-to-balance">
            <ul className="select-wallet-to-balance__list">
                {listWallet}
            </ul>
        </div>
    )
}

SelectWalletToBalance.propTypes={
    infoWallets: PropTypes.object,
    select:PropTypes.string,
    handleSelectCodeWallet:PropTypes.func
}

export default SelectWalletToBalance

