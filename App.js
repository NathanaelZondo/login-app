import React,{Component} from 'react';
import './App.css';

import{Button, Form, FormGroup, Label, Input} from 'reactstrap';

  class App extends Component {
    render(){
  return (
    <body>
    <Form className="login-form">
    
      <h3 className="text-center">Login</h3>
<pre>   </pre>
      <FormGroup className="text-center">
        
        <input type="email" placeholder="Email"></input>
      </FormGroup>
      
      <FormGroup className="text-center">
        
        <input type="password" placeholder="Password">
        </input>

      </FormGroup>

      <div className="text-center">
      <Button ClassName="btn-lg btn-dark btn-block">Login</Button>
      </div>

      <div className="text-center pt-3">Not Registered?<br></br>
      <a href="#">Register</a></div>
    </Form>
    </body>
  );
}
  }
export default App;
