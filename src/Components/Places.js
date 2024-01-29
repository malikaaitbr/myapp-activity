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
import Activities from './Activities';


class Places extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
     selectedActivity:props.selectedActivity,
     location:props.location, 
      places: {}
    }
  }

  componentDidMount() {

    const headers = {
      'Access-Control-Allow-Origin': '*'
    };

    const  key="AIzaSyCMlrQFX-Pf4adFh3AYKUHetvxEWU7huNQ";
   const urldirection=`https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${this.state.selectedActivity}&location=${this.state.location.latitude},${this.state.location.longitude}&radius=10000&key=${key}`;
  


   fetch(urldirection, {
    method: 'GET',
    headers: headers,
    }).then(res=>res.json())
    .then(data=>this.setState({places:data.candidates}))
    .catch(err=>console.log(err));

    
    const data = {
      "candidates":[ {
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
        "name": "Le Bois du Roi",
        "icon": "https://cdt14.media.tourinsoft.eu/upload/le-bois-du-roi.jpg?width=730&height=560&crop=1",
        "opening_hours": {
          "open_now": false
        },
        "rating": 4.4
      },
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
        "name": "Raidillon de Montboulin",
        "icon": "https://d2exd72xrrp1s7.cloudfront.net/www/000/1k6/2v/2vdwek629usnbk7yfbm5p5tb4a83nwye-uhi53507869/0?width=3072&height=2304&crop=false&q=70",
        "opening_hours": {
          "open_now": false
        },
        "rating": 4.4
      },
      {
        "place_id": "ChIJgUbEo8cfqokR5lP9_Wh_DaY",
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
        "name": " la route du Clocher d'Achères",
        "icon": "https://www.montsdulyonnaistourisme.fr/cache/images/9001991_apidae-fiche-header-big.jpg",
        "opening_hours": {
          "open_now": false
        },
        "rating": 4.4
      },
      {
        "place_id": "ChIJgUbEo8cfqokR5lP9_Wh_DaZ",
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
        "name": "ILE DE BOULANCOURT",
        "icon": "https://www.campingfrance.com/asset/cms/700x455/163838/config/115270/image.jpg",
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
  
    const placesGoogle = [
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
        "name": "Le Bois du Roi",
        "icon": "https://cdt14.media.tourinsoft.eu/upload/le-bois-du-roi.jpg?width=730&height=560&crop=1",
        "opening_hours": {
          "open_now": false
        },
        "rating": 4.4
      },
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
        "name": "Raidillon de Montboulin",
        "icon": "https://d2exd72xrrp1s7.cloudfront.net/www/000/1k6/2v/2vdwek629usnbk7yfbm5p5tb4a83nwye-uhi53507869/0?width=3072&height=2304&crop=false&q=70",
        "opening_hours": {
          "open_now": false
        },
        "rating": 4.4
      },
      {
        "place_id": "ChIJgUbEo8cfqokR5lP9_Wh_DaY",
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
        "name": " la route du Clocher d'Achères",
        "icon": "https://www.montsdulyonnaistourisme.fr/cache/images/9001991_apidae-fiche-header-big.jpg",
        "opening_hours": {
          "open_now": false
        },
        "rating": 4.4
      },
      {
        "place_id": "ChIJgUbEo8cfqokR5lP9_Wh_DaZ",
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
        "name": "ILE DE BOULANCOURT",
        "icon": "https://www.campingfrance.com/asset/cms/700x455/163838/config/115270/image.jpg",
        "opening_hours": {
          "open_now": false
        },
        "rating": 4.4
      }
    ];

    return (
      <>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <SwipeableTextMobileStepper places={placesGoogle}  />
          </Container>
        </React.Fragment>
        
      </>);
  }
}
export default Places;