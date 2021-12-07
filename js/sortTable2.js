require('jsdom-global')();
require( 'datatables.net-buttons' );
require( 'datatables.net-responsive' );
require('datatables.net-responsive-bs4');

var $ = require( "jquery" );
var DataTable = require( 'datatables.net' )( window, $ );

$.fn.dataTable = DataTable;
$.fn.dataTableSettings = DataTable.settings;
$.fn.dataTableExt = DataTable.ext;
DataTable.$ = $;
 
$.fn.DataTable = function ( opts ) {
    return $(this).dataTable( opts ).api();
};


function validateForm(form) {
    start_year = form["start_year"].value;
    end_year = form["end_year"].value;
    if (end_year < start_year) {
        alert("Invalid date range");
        return false;
    }
    return true;
}
$(document).ready(function () {
    $("#excoauthors").DataTable({
        paging: false, searching: true, info: false,
        "order": [],
        "aoColumnDefs": [
            { "sType": "author-name", "aTargets": [0] },
        ],
    });
    $(".dataTables_length").addClass("bs-select");
});
function reverseNumber(str) {
    var new_str = str
    for (var i = 0; i < 10; i++) {
        if (str.indexOf(i) != -1) {
            new_str = new_str.replace(str.charAt(str.indexOf(i)), 9 - i)
        }
    }
    return new_str;
}
$.extend($.fn.dataTableExt.oSort, {
    "author-name-pre": function (a) {
        var x = String(a).replace(/<[\s\S]*?>/g, "");
        x = x.split(' ')
        console.log(reverseNumber(x[x.length - 1]));
        return reverseNumber(x[x.length - 1].toLowerCase());
    },

    "author-name-asc": function (a, b) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },

    "author-name-desc": function (a, b) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});
