import React from "react"
import {Cards, Chart, CountryPicker} from "./components/index"
import styles from "./App.module.css"
import coronaImage from "./images/images.png"

import {fetchCountries, fetchData} from "./api"

class App extends React.Component {
    state={
        data:{},
        country:''
    }


    async componentDidMount(){
        const fetchedData= await fetchData();
        this.setState({data:fetchedData});
    }

    handleCountryChange= async(country)=>{
        const fetchedData= await fetchData(country);
        console.log(country);
        console.log(fetchedData);
        this.setState({data:fetchedData,country:country})
    }


    render(){
        const {data, country}=this.state;
        return(
            <div className={styles.container}>
            <img src={coronaImage} className={styles.image} alt="Covid19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;