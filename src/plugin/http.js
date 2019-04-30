import axios from 'axios'
import Qs from 'qs';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let request = axios.create({
    baseURL:'https://sigu.zihai.cn/',
    transformRequest : [function(data) {
        data = Qs.stringify(data);
        return data;
    }],
});

export default request;