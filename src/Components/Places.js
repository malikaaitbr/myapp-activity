import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, CardActionArea, Grid, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


class Places extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: null
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

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    return (
      <>
        <h2>Places that you may like to visite : </h2>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <SwipeableTextMobileStepper />
          </Container>
        </React.Fragment>
        
      </>);
  }
}
export default Places;