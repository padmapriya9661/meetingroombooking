import { render, screen } from '@testing-library/react';
import SignIn from '../SignIn';
import { BrowserRouter } from 'react-router-dom';

describe("testing signin component", ()=>{
    test("test rendering of login form",()=>{
        const SignInComponent = render(
            <BrowserRouter>
            <SignIn />
            </BrowserRouter>
        )
            
        const emailField = SignInComponent.getByPlaceholderText("email address")
        const password = SignInComponent.getByPlaceholderText("email address")
        const buttonList = SignInComponent.findAllByRole("email address")
        expect(emailField)
        expect(password)
        expect(buttonList).toHaveLength(2)

    })
})