import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App Component', () => {
  render (<App/>);
  const header = screen.getByText(/react test session/i);
  expect(header).toBeInTheDocument();

});
test('renders Signin Component', () => {
  const component = render (<App/>);
  const emailField = component.getByPlaceholderText("Email Address")
  expect(emailField).toBeInTheDocument();

});

