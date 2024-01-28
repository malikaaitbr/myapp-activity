import React, { Component } from 'react';
import SinglePlace from './SinglePlace';
import { Card } from './WeatherCard';
import { Avatar, CardActions, CardHeader, CardMedia, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';


class Activitties extends Component {
  constructor() {
    super();
    this.state = {
      placactivitiesTodo: []
    }
  }

  componentDidMount() {
    /*fetch('https://api.myjson.com/bins/87ohp')
    .then(res=>res.json())
    .then(data=>this.setState({places:data.places}))
    .catch(err=>console.log(err));*/

    const data = {
      "candidates": [
        {
          "place_id": "ChIJgUbEo8cfqokR5lP9_Wh_DaM",
          "formatted_address": "140 George St, The Rocks NSW 2000, Australia",
          "geometry": {
            "location": {
              "lat": -33.8599358,
              "lng": 151.2090295
            },
            "viewport": {
              "northeast": {
                "lat": -33.85824377010728,
                "lng": 151.2104386798927
              },
              "southwest": {
                "lat": -33.86094342989272,
                "lng": 151.2077390201073
              }
            }
          },
          "name": "Museum of Contemporary Art Australia",
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
          "opening_hours": {
            "open_now": false
          },
          "rating": 4.4
        }
      ],
      "status": "OK"
    }

    this.setState({ places: data.candidates })
  }



  render() {
    return (
      <><div>
        <Button onClick={() => { this.callNodeService(); } }>What activity can I DO Today ??</Button>
      </div><div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {this.state.activitiesTodo.map(activity => {
                return (<Grid item xs={4} md={4}><Item><div>{activity}</div><div><button variant="text">Decouvrir</button></div></Item></Grid>);
              })}
            </Grid>
          </Box>
        </div></>
    );
  }


  /*
  
        <div>
          <table className="table table-responsive text-justify">
              <thead>
                  <tr>
                      <th scope="col">Place_Id</th>
                      <th scope="col">Plance_Name</th>
                      <th scope="col">Icone</th>
                      <th scope="col">Opening_hours</th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.places.map(place=>{
                      return (<SinglePlace key={place.place_id} place={place} />)
                  })}
              </tbody>
          </table>
        </div>
      )
    }*/
}
export default Places;