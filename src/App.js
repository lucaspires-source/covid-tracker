import React, { Component } from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import { fetchData} from './api/index'
import image from './images/image.png';
export default class App extends Component {

  state ={
    data:{},
    country:'',
  }

  async componentDidMount(){
    const FetchedData = await fetchData();
    this.setState({data:FetchedData})
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const {data,country} = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    )
  }
}
