import axios from 'axios'
export default function ajax(url,data={},method='get') {
  return new Promise((resolve,reject)=>{
    let promise;
    if(method==='get'){
      let dataString='';
      Object.keys(data).forEach((key)=>{
       const value=data[key];
       dataString+=key+'='+value+'&'
      });
      if(dataString){
        dataString=dataString.substring(0,dataString.length-1);
        url+='?'+dataString;
      }

      promise=axios.get(url)
    }else{
      promise=axios.post(url,data)
    };
    promise.then(response=>{
      resolve(response.data)
    }).catch(error=>{
      reject(error)
    })

  })

}
