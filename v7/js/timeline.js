(function ($) {
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item-active",
      img: ".timeline-img"
    };

    // Inicializa o primeiro item como ativo
    selectors.item.eq(0).addClass(selectors.activeClass);

    var itemLength = selectors.item.length;

    $(window).scroll(function () {
      var pos = $(this).scrollTop();

      selectors.item.each(function (i) {
        var min = $(this).offset().top;
        var max = $(this).height() + $(this).offset().top;

        // Atualiza quando o item está visível no scroll
        if (pos <= max - 40 && pos >= min) {
          // Remove todas as classes ativas
          selectors.item.removeClass(selectors.activeClass);

          // Ativa o item atual e o próximo
          $(this).addClass(selectors.activeClass);
          if (i + 1 < itemLength) {
            selectors.item.eq(i + 1).addClass(selectors.activeClass);
          }
        }

        // Caso específico para o final da timeline
        if (i === itemLength - 1 && pos > min) {
          selectors.item.eq(i - 1).addClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

// Ativa o plugin na timeline
$("#timeline-1").timeline();
