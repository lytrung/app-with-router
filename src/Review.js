import React, {Component} from 'react'
// import {Link, navigate} from '@reach/router'
import {deleteReviews} from './API';

class  Review extends Component {

	handleTrashClick = (e) => {
		var {refreshData} = this.props

		var reviewId = e.target.dataset.reviewid
		deleteReviews(reviewId).then(res => refreshData())
	}

  	render(){

	  	var {review,currentUser} = this.props

	    return (
	      	<div className="card review">
                <div className="card-body">
                  	<p className="card-text">{review.comment}</p>
                  	<p className="card-text">Rating: {review.rating}</p>
                  	<p className="card-text">Review by: {review.user ? review.user.name : 'anonymous'}</p>
                  	<p>
		            {	
		             	(currentUser && currentUser.id == review.user_id) ? (
		                	<i data-reviewid={review.id} onClick={this.handleTrashClick} className="fas fa-trash"></i>
		              	) : null
	    			}
		            </p>
                </div>
            </div>
	    );
  	}
}

export default Review;
