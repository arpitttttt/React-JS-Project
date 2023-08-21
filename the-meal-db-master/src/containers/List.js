/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { Component } from 'react';
import axios from 'axios';

import ListItem from '../components/ListItem';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };

        this.filterOnClick = this.filterOnClick.bind(this);
    }

    componentDidMount() {
        const request = axios.get('https://www.themealdb.com/api/json/v1/1/latest.php');
        request.then((response) => {
            this.setState({
                isLoaded: true,
                items: response.data.meals,
            });
        })
            .catch((error) => {
                this.setState({
                    isLoaded: true,
                    error,
                });
            });
    }

    filterOnClick(event) {
        event.preventDefault();

        const request = axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?${event.target.name}`);
        request.then((response) => {
            this.setState({
                isLoaded: true,
                items: response.data.meals,
            });
        })
            .catch((error) => {
                this.setState({
                    isLoaded: true,
                    error,
                });
            });
    }

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return (
                <div>
                    Error:
                    {error.message}
                </div>
            );
        } if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (
            <div role='main' className='list-container'>
                <div aria-label='Filter by type of meal' className='ui container margin-bottom'>
                    <h3>Filter by:</h3>
                    <button className='margin-right ui button' type='submit' name='i=chicken%20breast' onClick={this.filterOnClick}>Chicken</button>
                    <button className='margin-right ui button' type='submit' name='c=Seafood' onClick={this.filterOnClick}>Seafood</button>
                    <button className='margin-right ui button' type='submit' name='a=Canadian' onClick={this.filterOnClick}>Canadian</button>
                </div>
                <ul tabIndex='0' aria-label='list of meals' className='ui four column doubling grid container'>
                    {items && items.map(item => (
                        <ListItem
                            image={item.strMealThumb}
                            title={item.strMeal}
                            key={item.idMeal}
                            category={item.strCategory}
                            instructions={item.strInstructions}
                            id={item.idMeal}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;
