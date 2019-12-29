var request = require('request');
var options = {
    url: 'http://radiko.jp/v3/api/program/search',
    method: 'GET',
    form:{
    'key': '井口',
    'filter': 'past',
    'start_day': '',
    'end_day': '',
    'area_id': 'JP13',
    'region_id': '',
    'cul_area_id': 'JP13',
    'page_idx': '0',
    'uid': 'e3948e8de187bab420a2fb4487f35675',
    'row_limit': '12',
    'app_id': 'pc',
    'action_id': '0',
}
};
export function data(){
     var str = request(options, function (error, response, body) {
 
        console.log(body);
     
    })
    return str
    
}