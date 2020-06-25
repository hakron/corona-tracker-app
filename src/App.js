import React from 'react'

import {CardsContainer, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'

export default class App extends React.Component {
    state = {
        data: {}
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

    render() {
        const {data} = this.state
        return (
            <div className={styles.container}>
            <CardsContainer data={data}/>
            <CountryPicker />
            <Chart />
        </div>
        )
    }
}
