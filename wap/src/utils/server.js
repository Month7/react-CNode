import axios from 'axios';

export const getApi = (url,method,success,data={}) =>{
    axios({
        url:`https://cnodejs.org/api/v1${url}`,
        method:method,
        data:data
    }).then((response)=>{
        if(response.data.success === true){
            success.call(this,response.data);
        }
    }).catch((error)=>{
        console.log(error);
    })
}