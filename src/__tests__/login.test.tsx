import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import LoginForm from '@/app/login/loginForm'
import { describe } from 'node:test'

const mockLogin = jest.fn();
const mockSignup = jest.fn();

const Login = <LoginForm login={mockLogin} signup={mockSignup} />;

describe('Login', () => {
    it('should disable login button if fields are empty', () => {
        render(Login);
        const button = screen.getByTestId('loginButton');
        expect(button).toBeDisabled();
    });


    it('should enable login button when fields are filled', async () => {
        render(Login);
        const usernameInput = screen.getByTestId('email');
        const passwordInput = screen.getByTestId('password');
        const button = screen.getByTestId('loginButton');

        fireEvent.change(usernameInput, { target: { value: 'testlogin@jest.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });

        await waitFor(() => expect(button).not.toBeDisabled(), {
            timeout: 500,
        });

    });

})