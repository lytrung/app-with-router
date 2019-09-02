import React, {Component} from 'react';
import Review from './Review';
import {Link} from '@reach/router'
import {addReviews,getSingleProject} from './API';

class RouteSingleProject extends Component {

  constructor(props){
    super(props)
    this.state = {
      project:null
    }
  }

  routeGetProject = (id) => {
    getSingleProject(id).then(res => this.setState({project:res.data}))
  }

  componentDidMount(){
    var {id} = this.props
    this.routeGetProject(id)
  }

  // componentDidUpdate(prevProps, prevState){
  //   var {id} = this.props

  //   if(id != prevProps.id){
  //     this.routeGetType(id)
  //   }
  // }

  handleReviewFormSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData(this.reviewForm);

    var project_id = this.props.id;

    var data = {
      comment:formData.get('comment-input'),
      rating:formData.get('rating-input'),
      project_id: project_id,
      user_id: this.props.currentUser.id
    }
    addReviews(data).then(res => this.routeGetProject(project_id))
  }

  handleTrashClick = () => {}

  render(){
    var {project} = this.state
    var {currentUser} = this.props
    return project ? (
      <div class="main">
        <h3>{project.name}</h3>

        <div className="card project">
          <img className="card-img-top" src="/project.jpg" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">{project.description}</p>
            <p className="card-text">Created by: {project.user ? project.user.name : 'anonymous'}</p>
            <p>
              <i className="fas fa-heart"></i>
              { (currentUser && currentUser.id == project.user_id)? (
          
                <>
                <Link to={'/projects/'+project.id+'/edit'}><i className="fas fa-edit"></i></Link>
                <i onClick={this.handleTrashClick} className="fas fa-trash"></i>
                </>

              ) : null}
              
            </p>
          </div>
        </div>

        {
          project.reviews.map(review => {
            var reviewProps = {
              review:review,
              currentUser:currentUser
            }
            return <Review {...reviewProps} />
          })
        }

        { currentUser ? (
    
          <div className="card review">
            <div className="card-body">
              <h3>Add a review</h3>
              <form onSubmit={this.handleReviewFormSubmit} ref={(el) => {this.reviewForm = el}}>
                <div className="form-group">
                  <label htmlFor="comment-input">Comment</label>
                  <input type="text" className="form-control" name="comment-input" id="comment-input" placeholder="Enter comment"/>
                </div>
                <div className="form-group">
                  <label htmlFor="rating-input">Rating</label>
                  <input type="number" className="form-control" name="rating-input" id="rating-input" placeholder="Enter rating"/>
                </div>

                <button type="submit" className="btn btn-primary">Add Review</button>
              </form>
            </div>
          </div>
        ) : null}

       

      </div>
    ) : null

  }
}

export default RouteSingleProject;
