
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Component } from 'react';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component{
  pageSize= 5;
  apiKey= process.env.REACT_APP_NEWS_API
  state ={
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <NavBar/>
      <Switch>
          <Route exact path="/"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="general"  pageSize={this.pageSize} conuntry="us" category="general"/></Route>
          <Route exact path="/Business"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="Business" pageSize={this.pageSize} conuntry="us" category="Business"/></Route>
          <Route exact path="/entertainment"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} conuntry="us" category="entertainment"/></Route>
          <Route exact path="/health"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} conuntry="us" category="health"/></Route>
          <Route exact path="/science"> <News setProgress={this.setProgress} apiKey={this.apiKey}  key="science"pageSize={this.pageSize} conuntry="us" category="science"/></Route>
          <Route exact path="/sports"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} conuntry="us" category="sports"/></Route>
          <Route exact path="/technology"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} conuntry="us" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

