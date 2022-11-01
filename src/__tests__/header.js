import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../components/Header";

describe('Header Component', () => {
  it('should render correctly', () => {
    render(<Header />);
    const logoImg = screen.getByAltText('logo');
    expect(logoImg).toBeInTheDocument();
  });

  it('should render a menu icon in mobile screen', () => {
    render(<Header />);
    const menuIcon = screen.queryByAltText('menuIcon');
    expect(menuIcon).toBeInTheDocument();
  });
});