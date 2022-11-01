import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import IllustrationWorking from '../components/IllustrationWorking';

describe('IllustrationWorking component', () => {
  it('should render a header', () => {
    render(<IllustrationWorking />);
    const headerEl = screen.getByRole('heading', {
      level: 1
    });
    expect(headerEl).toBeInTheDocument();
  });

  it('should render a paragraph', () => {
    render(<IllustrationWorking />);
    const subtitleEl = screen.getByText(/Build your brand's recognition and get detailed insights on how your links are performing./i);
    expect(subtitleEl).toBeInTheDocument();
  });

  it('should render a button', () => {
    render(<IllustrationWorking />);
    const getStartedBtn = screen.getByRole('button', {
      name: /Get Started/i
    });
    expect(getStartedBtn).toBeInTheDocument();
  });

  it('should render an image', () => {
    render(<IllustrationWorking />);
    const illustrationImg = screen.getByRole('img', {
      name: /illustration working/i
    });
    expect(illustrationImg).toBeInTheDocument();
  });
});