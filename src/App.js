import React, { Component } from 'react'
import NavbarComponent from './component/NavbarComponent';
import JumbrotonComponent from './component/JumbrotonComponent';
import { 
  BrowserRouter, 
  Route 
} from 'react-router-dom';
import CreateUserContainer from './containers/CreateUserContainer';
import DetailUserContainer from './containers/DetailUserContainer';
import EditUserContainer from './containers/EditUserContainer';
import HomeContainer from './containers/HomeContainer';


export default class App extends Component {
  state = {
    title: 'React Crud',
  }

  render() {
    return (
      <div>
        <NavbarComponent/>
        <JumbrotonComponent title={this.state.title}/>
        <BrowserRouter>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route path="/create">
            <CreateUserContainer/>
          </Route>
          <Route path="/detail/:id">
            <DetailUserContainer/>
          </Route>
          <Route path="/edit/:id">
            <EditUserContainer/>
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}
