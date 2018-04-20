require("./sass/style.scss");

require ("jquery");

require('../build/background_element.js');


$(document).ready(function () {


    $('.background-element-demo').backgroundElement({
        ratio_x: 1375,
        ratio_y: 404,
        background_element: 'svg',
        relative_body: true
    });
});