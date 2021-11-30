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

$(document).ready(function () {
    $.fn.dataTable.defaults.aaSorting = [[0, 'desc']];
    $.fn.dataTable.defaults.column.asSorting = ['desc', 'asc'];
    $.fn.dataTable.defaults.bPaginate = false;
    $.fn.dataTable.defaults.bFilter = false;
    $.fn.dataTable.defaults.bInfo = false;
    $.fn.dataTable.defaults.bSortCellsTop = true;
    $('table.table').DataTable({
    });
    $('.dataTables_length').addClass('bs-select');
});