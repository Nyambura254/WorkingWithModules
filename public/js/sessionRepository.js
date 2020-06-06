const sessionURL = 'sessions.json'

function getSessions() {
    return new Promise(function(resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function(e) {
            sessinList = e.target.response;
            resolve(sessionList);
        };
        oReq.open('GET', sessionURL, true);
        oReq.responseType = 'json';
        oReq.send();
    })
}
export { getSessions };
/*export default
------export {getSessions as default};

or on line 3 you can export default function*/

//aggregating modules
export { sessionTemplate }
from './sessionTemplate.js'