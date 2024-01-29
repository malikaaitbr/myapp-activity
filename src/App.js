import React from "react";
import "./App.css";
import { API_KEY } from "./config";
import TodaysCard from "./Components/TodaysCard";
import City from "./Components/LocCity";
import { hasGeolocationSupport } from "./Geoloc";
import Emoji from "./Components/WatherEmoji";
import Presenter from "./Components/Presenter";
import generateActivitySuggestions from "./Components/Gpt3";
import openai from 'openai';
import { Server, createServer } from "miragejs";
import Places from "./Components/Places";
import { Box, Button, Grid, Paper, styled } from "@mui/material";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Activities from "./Components/Activities";
import { light } from "@mui/material/styles/createPalette";
import { lightBlue } from "@mui/material/colors";




const PERMISSION_DENIED = "Permission denied. Can't show weather information.";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixCity: false,
      geoAccess: null,
      result: '',
      activitiesTodo: [],
      showPlaceDetails: false,
      selectedActivity: ''
    };
    this.coords = null;
    this.activityPage = null;
  }

  componentDidMount() {
    if (hasGeolocationSupport()) {
      this.fetchTodaysWeather();

    }
  }


  showPlaceDetailsSection(activity){
    this.setState({ showPlaceDetails: true ,selectedActivity:activity});
  }


  callNodeService = async () => {
    try {

      const activities = await generateActivitySuggestions(this.state.current, this.coords);
      // Mise à jour de l'état avec la réponse de GPT-3
      this.activityPage = <Activities activities={activities}  showPlaceDetailsFunction={this.showPlaceDetailsSection.bind(this)} />
      this.setState({ activitiesTodo: activities });

    } catch (error) {
      console.error('Erreur lors de l\'appel de GPT-3', error.message);
    }
  };


  fetchTodaysWeather = () => {
    navigator.geolocation.getCurrentPosition((c) => {
      this.coords = { longitude: c.coords.longitude, latitude: c.coords.latitude };
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.coords.latitude}&lon=${this.coords.longitude}&units=metric&APPID=${API_KEY}`)
        .then(weather => weather.json())
        .then(data => this.setState({ current: data, geoAccess: true }));
    }, () => alert(PERMISSION_DENIED));
  };



  fixCityBar = () => {
    const { fixCity } = this.state;
    if (window.scrollY > 70 && !fixCity) {
      this.setState({ fixCity: true });
    } else if (window.scrollY <= 70 && fixCity) {
      this.setState({ fixCity: false });
    }
  };


  render() {
    //const { activitySuggestions } = this.state;
    const { geoAccess, current, fixCity, result } = this.state;
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    if (geoAccess && current && !!API_KEY) {
      return (
        <>
        <div  className= "container" >
          <City current={current} fix={fixCity} />
          <TodaysCard  
            emoji={current.weather[0]}
            main={current.main}
            city={current.name}
          /> 
        
          <div  >
            <Button style={{color:'black'}} onClick={() => { this.callNodeService() }}>What activity can I DO Today ??</Button>
          
         <div style={{marginTop: '20px'}}>
          {this.activityPage}
          </div>
          

          {this.state.showPlaceDetails && (
            <Places  selectedActivity={this.state.selectedActivity} location={this.coords} />
          )}
          </div>
          </div>
           
          {/*
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {this.state.activitiesTodo.map(activity => {
                  return (<Grid item xs={4} md={4}><Item><div>{activity}</div><div ><Button variant="text">Decouvrir</Button></div></Item></Grid>)
                })}
              </Grid>
            </Box>
              </div>*/}

          {/* <div>
        <button onClick={this.handleActivityRequest}>Ask for activities</button>
        {activitySuggestions && (
          <div>
            <h3>Activity Suggestions:</h3>
            <ul>
              {activitySuggestions.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        )}
      </div> */}

        </>
      );
    } else {
      return (
        <>
          {!API_KEY && (
            <h1 className="text-center">
              No API-Key given in <i>src\config.js</i>
            </h1>
          )}
         
        </>
      );
    }
  }
}


export default App;
