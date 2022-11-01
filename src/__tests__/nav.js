import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Navbar from "../components/Nav";

describe('Navbar compoenent', () => {
  it('should render correctly', () => {
    render(<Navbar />);
    const menuList = screen.getByRole('list');
    expect(menuList).toBeInTheDocument();
  });

  it('should render 3 list item', () => {
    render(<Navbar />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
});