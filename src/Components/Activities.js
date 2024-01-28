import React, { Component } from 'react';
import SinglePlace from './SinglePlace';
import { Card } from './WeatherCard';
import { Avatar, Box, Button, CardActions, CardHeader, CardMedia, Grid, IconButton, Paper, styled } from '@mui/material';
import { red } from '@mui/material/colors';


class Activities extends Component {


  constructor(props) {
    super(props);
    this.state = {
      activitiesTodo: []
    }
  }

  componentDidMount() {
    this.setState({activitiesTodo:this.props.activities});
    /*fetch('https://api.myjson.com/bins/87ohp')
    .then(res=>res.json())
    .then(data=>this.setState({places:data.places}))
    .catch(err=>console.log(err));*/
  }

  onActivityClickListner(){
    this.props.showPlaceDetailsFunction();
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
      <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {this.state.activitiesTodo.map(activity => {
                return (<Grid item xs={4} md={4}><Item><div>{activity}</div><div><Button  onClick={() => { this.onActivityClickListner() }}  variant="text">Decouvrir</Button></div></Item></Grid>);
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
export default Activities;