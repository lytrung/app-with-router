import React, {Component} from 'react';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="app">


          <div class="header">
            <span>Welcome Peter</span> <i class="fas fa-bars"></i>
            <ul class="menu">
              <li><a href="">All projects</a></li>
              <li><a href="">Add a project</a></li>
              <li><a href="">Login</a></li>
              <li><a href="">Signup</a></li>
            </ul>
          </div>

          <div class="main">
            <h3>All projects</h3>
            <div class="card project">
              <img class="card-img-top" src="project.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title</p>
                <p>
                  <i class="fas fa-heart"></i>
                  <i class="fas fa-edit"></i>
                  <i class="fas fa-trash"></i>
                </p>
              </div>
            </div>
          </div>

          <div class="main">
            <h3>Add a project</h3>
            <form>
              <div class="form-group">
                <label for="name-input">Name</label>
                <input type="text" class="form-control" name="name-input" id="name-input" placeholder="Enter project name"/>
              </div>
              <div class="form-group">
                <label for="name-input">Description</label>
                <input type="text" class="form-control" name="description-input" id="description-input" placeholder="Enter project description"/>
              </div>

              <div class="form-group">
                <label for="name-input">Photo</label>
                <input type="text" class="form-control" name="photo-input" id="photo-input" value="project.jpg"/>
              </div>

              <div class="form-group">
                <label for="type-input">Type</label>
                <select class="form-control" name="type-input" id="type-input">
                  <option value="1">Painting</option>
                  <option value="2">Sculpture</option>
                  <option value="3">Digital</option>
                </select>
              </div>

              <button type="submit" class="btn btn-primary">Add</button>
            </form>
          </div>

        
      </div>
    );
  }
}

export default App;
