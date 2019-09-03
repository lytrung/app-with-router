import axios from 'axios';

var urlPrefix = 'http://localhost:3001/api'
var serverUrl = 'http://localhost:3001/'

var getProjects = () => {
    return axios.get(urlPrefix+'/projects')
   
}
var getSingleProject = (id) => {
    return axios.get(urlPrefix+'/projects/'+id) 
}

var getTypes = () => {
    return axios.get(urlPrefix+'/types')
}
var getSingleType = (id) => {
    return axios.get(urlPrefix+'/types/'+id)
}

var addProjects = (data) => {
    return axios.post(urlPrefix+'/projects',data)
}


var updateProjects = (id,data) => {
    return axios.put(urlPrefix+'/projects/'+id,data)
}

var deleteProjects = (id) => {
    return axios.delete(urlPrefix+'/projects/'+id)

}

var addReviews = (data) => {
    return axios.post(urlPrefix+'/reviews',data)
}

var deleteReviews = (id) => {
    return axios.delete(urlPrefix+'/reviews/'+id)

}

var  authenticate = (data) => {
    return axios.post(urlPrefix+'/authenticate',data)          
}

var addUsers = (data) => {
    return axios.post(urlPrefix+'/users',data)
}

var  getSingleUser = (id) => {
    return axios.get(urlPrefix+'/users/'+id)
}

export {serverUrl,getProjects,getSingleProject, getTypes, addProjects,updateProjects,deleteProjects, getSingleType,authenticate,getSingleUser,addUsers,addReviews,deleteReviews}




