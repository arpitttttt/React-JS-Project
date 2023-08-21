import React from 'react';
import { mount } from 'enzyme';

import ListItem from '../ListItem';

let wrapped;

beforeEach(() => {
    wrapped = mount(<ListItem
        title=''
        image=''
        id=''
    />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a list item and a buttton', () => {
    expect(wrapped.find('li').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});
