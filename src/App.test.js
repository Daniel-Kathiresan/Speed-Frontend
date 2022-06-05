import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
// import RatingStars from './components/RatingStars';

// describe('Rating Stars', () => {
//   it("Give a rating", () => {
//     render(<RatingStars />);
//     expect(screen.getByAltText("Give a rating")).toBeInTheDocument();
//     const input = screen.getByAltText("5");
//     fireEvent.click(input);
//     expect(input.textContent).toEqual("5");
//   })
// });

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search Article/i);
  expect(linkElement).toBeInTheDocument();
});

