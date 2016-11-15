(function($) {

  $.fn.quickselect = function() {

    return this.each(function() {

      var field = $(this);

      // avoid multiple inits
      if(field.data('quickselect')) {
        return true;
      } else {
        field.data('quickselect', true);
      }

      if (field.find("select").attr("required") == "required") {
        var clear = false;
      }
      else {
        var clear = true;
      }

      var noresults = field.find("select").attr("data-noresults");

      field.find("select").select2({
        language: {
          noResults: function (params) {
            return noresults;
          }
        }
      });

      if (field.find(".select2-results__options li").first().text() == "") {
        field.find(".select2-results__options li").first().hide();
      }

      if (clear == false || field.find("select").val() == "") {
        field.find("i.x").hide();
      }

      $('select').on('select2:select', function (evt) {
        if (clear == true) {
          field.find("i.x").show();
        }
      });

      field.find("i.x").on("click", function() {
        field.find("select").val('').change();
        field.find("i.x").hide();
      });


    });

  };

})(jQuery);
