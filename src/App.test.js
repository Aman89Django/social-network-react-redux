import React from 'react';
import { render } from '@testing-library/react';
import SocialApp from './App';
import * as ReactDOM from "react-dom";


test('renders without crashing', ()=>{
  const div = document.createElement('div');
  ReactDOM.render(<SocialApp />, div);
  ReactDOM.unmountComponentAtNode(div);



})


// test('renders learn react link', () => {
//   const { getByText } = render(<SocialApp />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
