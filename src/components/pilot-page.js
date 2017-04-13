// Ships class extends Component
  // render
    // return 
      // div
class Ships extends React.Component {
  render(){
    return(
      <div></div>
    );
  }
}

// ShipNames class extends Component
  // render
    // return 
      // div
class ShipNames extends React.Component {
  render(){
    return(
      <div></div>
    );
  }
}

// Hangar class extends Component
  // render
    // variable to store rows array
    // iterate through props.ships and push each to rows
    // return 
      // table
        // table head
          // tr
            // th to hold name
            // th to hold shipID
        // tbody
          // {rows}

class Hangar extends React.Component {
   render(){
    var rows = [];
    //
    return(
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>  
        <tbody>
          {rows}
        </tbody>
      </table>
    )
   }
}