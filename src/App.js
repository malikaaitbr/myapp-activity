import React from "react";
import "./App.css";
import { API_KEY } from "./config";
import TodaysCard from "./Components/TodaysCard";
import City from "./Components/LocCity";
import { hasGeolocationSupport } from "./Geoloc";
import Emoji from "./Components/WatherEmoji";
import Presenter from "./Components/Presenter";
import generateActivitySuggestions from "./Components/Gpt3";
import MapContainer from './Components/maps';
import openai from 'openai';
import { Server, createServer } from "miragejs";
import Places from "./Components/Places";
import { Box, Button, Grid, Paper, styled } from "@mui/material";
import { BrowserRouter as Router } from 'react-router-dom'



const PERMISSION_DENIED = "Permission denied. Can't show weather information.";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixCity: false,
      geoAccess: null,
      result: '',
      activitiesTodo: []
    };
    this.coords = null;
  }

  componentDidMount() {
    if (hasGeolocationSupport()) {
      this.fetchTodaysWeather();

    }
  }

  callNodeService = async () => {
    try {
      const activities = await generateActivitySuggestions(this.state.current, this.coords);
      // Mise à jour de l'état avec la réponse de GPT-3
      
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

          <City current={current} fix={fixCity} />
          <TodaysCard
            emoji={current.weather[0]}
            main={current.main}
            city={current.name}
          />
          <div>
            <Button onClick={() => { this.callNodeService() }}>What activity can I DO Today ??</Button>
          </div>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {this.state.activitiesTodo.map(activity => {
                  return (<Grid item xs={4} md={4}><Item><div>{activity}</div><div ><Button variant="text">Decouvrir</Button></div></Item></Grid>)
                })}
              </Grid>
            </Box>
          </div>

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
          {!geoAccess && (
            <h2 className="text-center heading-location-access">
              Allow location access.
            </h2>
          )}
          <div className="container center-item">
            <h2>
              <Emoji name="Earth Globe" emoji="🌎" /> Weather App build with...{" "}
              <Emoji name="Earth Globe" emoji="🌎" />
            </h2>
            <ul className="no-margin">
              <li>
                <Presenter href="https://reactjs.org" text="React" />
              </li>
              <li>
                <Presenter
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation"
                  text="Geolocation"
                />
              </li>
              <li>
                <Presenter
                  href="https://openweathermap.org"
                  text="openweathermap.org-API"
                />
              </li>

            </ul>
          </div>
        </>
      );
    }
  }


  async run() {
    try {
      // Appeler la méthode pour gérer la demande d'activité
      await this.handleActivityRequest();

      // Générer des suggestions d'activités
      const suggestions = await this.generateActivitySuggestions();

      // Afficher les suggestions dans la console
      console.log('Activity Suggestions:', suggestions);
    } catch (error) {
      // Gérer les erreurs
      console.error('Error:', error.message);
    }
  }

  async handleActivityRequest() {
    try {
      // Obtenez la météo actuelle et l'emplacement (utilisez vos propres fonctions ou méthodes)
      const weather = this.getCurrentWeather();
      const location = this.getUserLocation();

      // Appelez la fonction pour générer des suggestions d'activités en fonction de la météo et de l'emplacement
      const activitySuggestions = await generateActivitySuggestions(weather, location);

      // Affichez les suggestions d'activités ou mettez à jour l'état en conséquence
      console.log('Suggestions d\'activités:', activitySuggestions);

      // Vous pouvez également mettre à jour l'état avec les suggestions pour les afficher dans votre composant
      this.setState({ activitySuggestions });

    } catch (error) {
      console.error('Erreur lors de la gestion de la demande d\'activité:', error.message);
    }
  }

}


export default App;
