import axios from 'axios'
import qs from 'querystring'

export default {
    get : (url)=>{
        return fetch(url).then(response => response.json()).then(result => {return result})
    },
    post : ({url,data}) => {
       return axios({
            url,
            method:'POST',
            data,
            
        }).then((result)=>{
            return result
        })
    },
    http:({method,url,data})=>{
        return axios({
            method,
            url,
            // data:data?qs.stringify(data):'',
            params:data
        }).then(result=>result.data)
        
    }
}