'use strict';$(document).ready(function() {    $('form').submit(function(event) {        event.preventDefault(); // this prevents the text from vanishing and being sent to a server        console.log($(this));//this logs the item selected        var todoText = $(this).find('#todo').val()        console.log(todoText);//this logs the todo text        $('ul#todo-list').append('<li>' + todoText + '</li>').sortable();})// end of submit handler});//end of document.ready