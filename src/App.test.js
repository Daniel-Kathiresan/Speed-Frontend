import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

class showBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      clickrate: '',
    }
  }
}



  
  
    describe('Testing sum', () => {)
  function sum(a, b) {
     return a + b;
  }

    it('should equal 4',()=>{
       expect(sum(2,2)).toBe(4);
      })
  
    test('also should equal 4', () => {
        expect(sum(2,2)).toBe(4);
      })                     