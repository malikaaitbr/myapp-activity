import React, { Component } from 'react';
import Places from './Places';

export default class SinglePlace extends Component {
  render() {
    return (
      <div className="Places">
<div className="row mt-5">
              <div className="col-sm">
              <img src="https://cdn.sortiraparis.com/images/80/102998/934587-les-rives-de-paris-l-unique-camping-du-93-a-neuilly-sur-marne-image00068.jpg" alt=""/>
</div>
   <table className="place">
      <tbody>
          <tr>
            <td>{this.props.place.place_id}</td>
          </tr>
          <tr>
            <td>{this.props.place.name}</td>
         </tr>
         <tr>
            <td>{this.props.place.opening_hours.open_now}</td>  
         </tr>
         </tbody>
    </table>
      </div>
      </div>
      
    )
  }
}
