import '../App.css';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



function test1() {





  return (
    <div className="App">
      <header className="App-header">
      <Link to="/test" className="btn btn-primary">Sign up</Link>


      </header>
    </div>
  );
}

export default withAuthenticator(test1);