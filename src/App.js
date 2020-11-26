import React, { Component } from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import { fetchData} from './api/index'
export default class App extends Component {

  state ={
    data:{},
  }

  async componentDidMount(){
    const FetchedData = await fetchData();
    this.setState({data:FetchedData})
  }
  render() {
    const {data} = this.state
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}
