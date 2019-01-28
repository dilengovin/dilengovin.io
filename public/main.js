/**
 *  Dilen Govin
 * 
 *  File: service.js
 *  This page implements the service logic for delivering and receiving content
 *  for personal website.
 * 
 *  Updates:
 *      1/12/19: Created backend javascript to communicate with service.js and injects
 *               content into public/index.html
 */

"use strict";

(function () {

    const serviceURL = "http://localhost:3000/"; // Test URL
    // const serviceURL = "https://dilengovin.herokuapp.com/"; // Prod URL

    function startup() {
        fetch(serviceURL) {
            .then()
        }
    }

    /**
     * returns the response text if the status is in the 200s otherwise rejects the
     * promise with a message including the status.
     * @param {Promise} response - Promise to look for response code in
     * @returns {object} - Response text if successful, error otherwise
     */
    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response.text();
        } else if (response.status == 404) {
            // sends back a different error when we have a 404 than when we have
            // a different error
            return Promise.reject(new Error("Sorry, we couldn't find that page"));
        } else {
            return Promise.reject(new Error(response.status + ": " + response.statusText));
        }
    }

    window.addEventListener("load", startup);

})();
