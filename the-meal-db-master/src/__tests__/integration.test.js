import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import App from '../components/App';

beforeEach(() => {
    moxios.install();
    // mock response and return two meals
    moxios.stubRequest('https://www.themealdb.com/api/json/v1/1/latest.php', {
        status: 200,
        response: {
            meals: [
                {
                    idMeal: '52958',
                    strMeal: 'Peanut Butter Cookies',
                    strMealThumb: 'https://www.themealdb.com/images/media/meals/1544384070.jpg',
                },
                {
                    idMeal: '5291118',
                    strMeal: 'Peanut Butter Cookies 2',
                    strMealThumb: 'https://www.themealdb.com/images/media/meals/1544384070.jpg',
                },
            ],
        },
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of meals and display two of them', (done) => {
    const wrapped = mount(
        <App />,
    );

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('.list-container').length).toEqual(1);
        expect(wrapped.find('.meal').length).toEqual(2);
        done();
        wrapped.unmount();
    }, 100);
});
