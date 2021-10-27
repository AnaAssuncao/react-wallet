import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AsideButton } from "."
import '@testing-library/jest-dom/extend-expect'

describe ("AsideButton Component", ()=>{
    const onClick = jest.fn()
    const asideButton = <AsideButton onClick={onClick}><p>Test</p></AsideButton>

    it("should render component properly", ()=>{
        render (asideButton)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
    })

    it("should render children", ()=>{
        render (asideButton)
        const childrenText = screen.getByText("Test")
        expect(childrenText).toBeInTheDocument()
    })
    
    it("should execute click function", ()=>{
        render (asideButton)
        userEvent.click(screen.getByRole("button"))
        expect(onClick.mock.calls.length).toBe(1)
    })
})