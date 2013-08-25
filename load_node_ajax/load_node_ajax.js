(function($) {
  Drupal.behaviors.node_load_ajax = {
    attach: function(context, settings) {
      $(".overlay-dialog").dialog({
        resizable: false,
        closeOnEscape: false,
        width: 950,
        height: 650,
        modal: true,
        draggable: true,
      }).bind('dialogclose', function(event) {
             $(".overlay-dialog").remove();
             $("body").append("<div id='overlay-product'></div>");
         });;
    },
    detach: function(context, settings, trigger) {
      // Example detach callback.
    }
  }
})(jQuery);