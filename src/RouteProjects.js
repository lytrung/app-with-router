import React, {Component} from 'react';
import Project from './Project';
import {getProjects} from './API';

class RouteProjects extends Component {

  constructor(props){
    super(props)
    this.state = {
      projects:[]
    }
  }
  routeGetProjects = () => {
     getProjects().then(res => {
      this.setState({projects:res.data})
    })
  }
  componentDidMount(){
   this.routeGetProjects();
  }
  render(){
    return (
      <div class="main">
        <h3>All projects</h3>
        {
          this.state.projects.map((project) => {

            var projectProps = {
              ...project,
              key: project.id,
              refreshData:this.routeGetProjects,
              currentUser: this.props.currentUser
    
            };
            return (<Project {...projectProps} />)
          })
        }
      </div>
    );
  }
}

export default RouteProjects;
