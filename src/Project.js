import React, {Component} from 'react'
import {Link, navigate} from '@reach/router'
import {deleteProjects} from './API';

class  Project extends Component {

	handleTrashClick = () => {
		var {id,refreshData} = this.props;

		deleteProjects(id).then(res => refreshData())
	}

  	render(){

	  	var {name,description,id,user_id, currentUser} = this.props

	    return (
	      <div className="card project">
	        <img className="card-img-top" src="/project.jpg" alt="Card image cap" />
	        <div className="card-body">
	          <h5 className="card-title">
	          	<Link to={'/projects/'+id}>{name}</Link>
	          </h5>
	          <p className="card-text">{description}</p>
	          <p>
	            <i className="fas fa-heart"></i>
	            { (currentUser && currentUser.id == user_id)? (
					
					<>
	            	<Link to={'/projects/'+id+'/edit'}><i className="fas fa-edit"></i></Link>
	            	<i onClick={this.handleTrashClick} className="fas fa-trash"></i>
					</>

	            ) : null}
	            
	          </p>
	        </div>
	      </div>
	    );
  	}
}

export default Project;
