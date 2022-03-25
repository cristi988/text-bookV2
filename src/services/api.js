import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json';

 class Api  {

    basePath = 'http://localhost:3000';

    delete(endpoint, id){
      return axios.delete(`${this.basePath}/${endpoint}/${id}`)
    }

    get(endpoint){
      return axios.get(`${this.basePath}/${endpoint}`)
    }

    update(endpoint, id, payload){
      return axios.put( `${this.basePath}/${endpoint}/${id}` , payload)
    }

    add(endpoint, payload){
      return axios.post(`${this.basePath}/${endpoint}`, payload)
    }

}


export const api = new Api()