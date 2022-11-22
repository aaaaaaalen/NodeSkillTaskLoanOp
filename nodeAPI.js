
const axios = require('axios')
const arg = process.argv.slice(2);
//read arguments from command line
const category  = arg[0];
const limit = Number(arg[1]);
//fetch data from API
const getEntries = () => {
    try {
      return axios.get('https://api.publicapis.org/entries')
    } catch (error) {
      console.error(error)
    }
  }

//Generate the list by input argument
const entriesList = async (category, limit) => {
    const responseList = getEntries()
        .then(response => {
            if (response.data) {
                const resultList = response.data.entries;
                const matchList = [];
                //iterate the list from API, add to matchlist if the value match the condition
                for(const i in resultList){
                    if(resultList[i].Category === category){
                        //chcek the limitation of the matchlist, break the loop once it reach the limit
                        if(matchList.length < limit){
                            matchList.push(resultList[i]);
                        }else{
                            break;
                        }
                    }
                }
                
                if(matchList.length === 0){
                    console.log('No results');  
                }else{
                    //sort list decreasing alphabetically 
                    matchList.sort((a, b) => a.API.localeCompare(b.API)).reverse();     
                    console.log(matchList);  
                }
                      
            }
        })
        .catch(error => {
        console.log(error)
        })
}

 
entriesList(category, limit)