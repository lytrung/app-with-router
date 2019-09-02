import React, {Component} from 'react'
// import {Link, navigate} from '@reach/router'
// import {deleteProjects} from './API';

class  Review extends Component {

	handleTrashClick = () => {
		// var {id,refreshData} = this.props;

		// deleteProjects(id).then(res => refreshData())
	}

  	render(){

	  	var {review,currentUser} = this.props

	    return (
	      	<div className="card review">
                <div className="card-body">
                  <p className="card-text">{review.comment}</p>
                  <p className="card-text">Rating: {review.rating}</p>
                  <p className="card-text">Review by: {review.user ? review.user.name : 'anonymous'}</p>
                </div>
            </div>
	    );
  	}
}

export default Review;
