import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../Header';
import List from '../../containers/List';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows a header component', () => {
    expect(wrapped.find(List).length).toEqual(1);
});

it('shows a list of items', () => {
    expect(wrapped.find(Header).length).toEqual(1);
});
