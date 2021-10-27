import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AsideMenuItem } from "."
import '@testing-library/jest-dom/extend-expect'

describe ("AsideMenuItem Component", ()=>{
    const onClick = jest.fn()
    const selectedItemClass = "aside-menu-item__selected"
    const asideMenuItem = <AsideMenuItem selectedItemClass= "" codeWallet="" handleSelectCodeWallet={onClick}>
                            <p className="aside-menu-item__name">Test</p>,
                        </AsideMenuItem>

    it("should render component properly", ()=>{
        render(asideMenuItem)
        const aside = screen.getByRole("listitem")
        expect(aside).toBeInTheDocument()
    })

    it("should render children", ()=>{
        render (asideMenuItem)
        const childrenText = screen.getByText("Test")
        expect(childrenText).toBeInTheDocument()
    })

    it("should execute click function", ()=>{
        render (asideMenuItem)
        userEvent.click(screen.getByText("Test"))
        expect(onClick.mock.calls.length).toBe(1)
    })

    it("should not contain the class of the selected item", ()=>{
        render (asideMenuItem)
        const aside = screen.getByRole("listitem")
        expect(aside).not.toHaveClass(selectedItemClass);
    })

    const asideMenuSelectedItem = <AsideMenuItem selectedItemClass={selectedItemClass} codeWallet="" handleSelectCodeWallet={onClick}>
                        <p className="aside-menu-item__name">Test</p>,
                    </AsideMenuItem>
    
    it("should contain the class of the selected item", ()=>{
        render (asideMenuSelectedItem)
        const aside = screen.getByRole("listitem")
        expect(aside).toHaveClass(selectedItemClass);
    })
})