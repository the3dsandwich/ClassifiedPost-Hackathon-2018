var axios = require('axios');

const URL = "http://localhost:5000/api?title=";

module.exports = {
    getViews: function(title) {
        title = title.replace(" ", "_");
        // console.log(axios.get(URL+title));
        return axios.get(URL+title).then(function(res){
            console.log(res.data.response);
            return res.data.response;
        });
    }
};