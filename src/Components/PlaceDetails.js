import React from 'react';
import PropTypes from 'prop-types';



class PlaceDetails extends Component {
  constructor(props){
      super(props);
      this.state={
          placeData:{}
      }
  }
  componentDidMount(){
     this.setState({placeData:this.props.location.placeData});
  }

  renderPlaceDetails(){
    if(this.props.location.placeData===undefined)
    return <div className="mt-5">No Data is available</div>
    else{
          return ( <div className="container">
          <div className="row mt-5">
              <div className="col-sm">
                  <img src="https://us.123rf.com/450wm/clairev/clairev1103/clairev110300155/9199593-small-family-house-.jpg?ver=6" alt=""/>
              </div>
              <div className="col-sm">
                  <h3>I will represent the details of a place</h3>
              <table className="table table-responsive text-justify">
                  <tbody>
                      <tr>
                      <th scope="row">Buisness Name</th>
                          <td>{this.props.location.placeData.place.name}</td>
                      </tr>
                      <tr>
                      <th scope="row">Address</th>
                          <td>{this.props.location.placeData.place.address}</td>
                      </tr>
                      <tr>
                      <th scope="row">Website</th>
                          <td>{this.props.location.placeData.place.website_url}</td>
                      </tr>
                      <tr>
                      <th scope="row">Hours</th>
                          <td>
                          Monday:{this.props.location.placeData.place.hours.monday}<br />
                          Tuesday:{this.props.location.placeData.place.hours.tuesday}<br />
                          Wednesday:{this.props.location.placeData.place.hours.wednesday}<br />
                          Thrusday:{this.props.location.placeData.place.hours.thursday}<br />
                          Friday:{this.props.location.placeData.place.hours.friday}<br />
                          Saturday:{this.props.location.placeData.place.hours.saturday}<br />
                          Sunday:{this.props.location.placeData.place.hours.sunday}<br />
                          </td>
                      </tr>
                  </tbody>
              </table>
              </div>
          </div>
      </div>)
      }
  }
render() {
 return (<div>
     {this.renderPlaceDetails()}
     </div>)
}
}

export default PlaceDetails;
