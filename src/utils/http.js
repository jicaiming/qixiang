import axios from 'axios'
import qs from 'qs';
// import qs from 'querystring'
export default {
    get : (url)=>{
        return fetch(url).then(response => response.json()).then(result => {return result})
    },
    post : ({method,url,data}) => {
        return axios({
            method,
            url,
            // data:data?qs.stringify(data):'',
            data,
            header:{
                'Content-Type':'application/json'
            }
        }).then(result=>result.data)
    },
    http:({method,url,data})=>{
        return axios({
            method,
            url,
            data:data?qs.stringify(data):'',
            // data,
            // header:{
            //     'Content-Type':'application/json'
            // }
        }).then(result=>result.data)
        
    }
}