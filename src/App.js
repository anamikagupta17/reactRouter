import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class App extends Component {
   render() {
      return (
         <div>
         <ul className="menu">
          <li><Link to="/">App</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
         </ul>

        
         </div>
      )
   }
}
export default App;





