const axios = require('axios');
const fs = require('fs');
const fetchData = async() => {
    try{
        const url = "http://jsonplaceholder.typicode.com/posts"
        const res = await axios.get(url)
        const result = JSON.stringify(res.data, null, 2);
        fs.writeFile('./result/posts.json', result, (err) => {
            if (err) throw err;
            console.log('code written successfully');
        })
    } catch (error){
        console.log(error)
    }
}
fetchData();
