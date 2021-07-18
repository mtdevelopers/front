import axios from "axios";


const instance = axios.create({
    baseURL: 'http://127.0.0.1:4000/crm/v1',
    
  });

//   headers: {'Authorization': `Bearer ${this.token}`}
//global configuration for axios

export default instance;