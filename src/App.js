import React from 'react'

import {CardsContainer, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
import coronaImage from './images/covid_image.png'
export default class App extends React.Component {
    state = {
        data: {},
        country: ''
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }
    
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country})
    }

    render() {
        const {data, country} = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='covid 19'/>
            <CardsContainer data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
        )
    }
}
