"use strict";

var $ = require("jquery");

var ajax = function(url, data, type="POST") {
    return $.ajax({
        url: "http://localhost:9005" + url,
        datatype: "json",
        contentType: "applicationn/json",
        type: type,
        data: JSON.stringify(data)
    });
}