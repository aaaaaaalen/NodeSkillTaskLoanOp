
const axios = require('axios')
const arg = process.argv.slice(2);
 
const category  = arg[0];
const limit = Number(arg[1]);

const getEntries = () => {
    try {
      return axios.get('https://api.publicapis.org/entries')
    } catch (error) {
      console.error(error)
    }
  }

const entriesList = async (category, limit) => {
    const responseList = getEntries()
        .then(response => {
            if (response.data) {
                const resultList = response.data.entries;
                const matchList = [];
                for(const i in resultList){
                    if(resultList[i].Category === category){
                        if(matchList.length <= limit){
                            matchList.push(resultList[i]);
                        }else{
                            break;
                        }
                    }
                }
                if(matchList.length === 0){
                    console.log('No results');  
                }else{
                    console.log(matchList);  
                }
                      
            }
        })
        .catch(error => {
        console.log(error)
        })
}

 
entriesList(category, limit)