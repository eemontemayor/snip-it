import config from '../config'

const TranslationServices={
    getTranslations(x){
        return fetch(`${config.API_ENDPOINT}?text=${x}`,{
            method:'GET',
            headers:{
              'content-type':'application/json',
            },
            
          })
          .then((res) => 
          {
          
            console.log('from TranServ', res)
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
             
          })
          .catch(error => {
            console.error({error})
          })
       
        
    }
    }

export default TranslationServices