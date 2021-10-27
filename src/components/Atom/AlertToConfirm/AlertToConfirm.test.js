import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AlertToConfirm } from "."
import { getMessages } from "./../../../utils/messages"
import '@testing-library/jest-dom/extend-expect'

describe ("AlertToConfirm Component", ()=>{
    const typeMessage = "dateLimit"
    const messages = getMessages(typeMessage)
    const onClick = jest.fn()
    const alertToConfirm = <AlertToConfirm typeMessage={typeMessage} severity={"error"} handleAlert={onClick}/>

    it("should render component properly", ()=>{
        render (alertToConfirm)
        const alert = screen.getByRole("alert")
        expect(alert).toBeInTheDocument()
    })

    it("should render alert message", ()=>{
        render (alertToConfirm)
        expect(screen.getByText(messages)).toBeInTheDocument()
    })

    it("should render render button", ()=>{
        render (alertToConfirm)
        expect(screen.getByRole("button")).toBeInTheDocument()
    })
    
    it("should execute click function", ()=>{
        render (alertToConfirm)
        userEvent.click(screen.getByRole("button"))
        expect(onClick.mock.calls.length).toBe(1)
    })
})