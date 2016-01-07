$(function() {

  $( "#city" ).autocomplete({
    source: function( request, response ) {
      $.ajax({
        url: "http://gd.geobytes.com/AutoCompleteCity?country='country code'",
        dataType: "jsonp",
        data: {
          q: request.term
        },
        success: function( data ) {
          response( data );

        }
      });
    },
    minLength: 3,
    select: function( event, ui ) {

        var selectedArray = ui.item.label.split(",");
        getWeather(selectedArray);
      }
    });

});
