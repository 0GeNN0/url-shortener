import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Login from "../components/Login";

describe('Login component', () => {
  it('should render a Login button', () => {
    render(<Login />);
    const loginBtn = screen.getByRole('button', {
      name: "Login"
    });
    expect(loginBtn).toBeInTheDocument();
  });

  it('should render a Sign up button', () => {
    render(<Login />);
    const signupBtn = screen.getByRole('button', {
      name: 'Sign up'
    });
    expect(signupBtn).toBeInTheDocument();
  });
});