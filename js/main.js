$(function () {
  /* Adaptive Blocks Changing */
  $(window).resize(function () {
    adaptive();
  })
  
  adaptive();
  
  function adaptive () {
    prependAdaptiveItem(768, '.services__item:first-child', '.services__item:first-child .services__img');
    prependAdaptiveItem(768, '.services__item:last-child', '.services__item:last-child .services__img');
    prependAdaptiveItem(768, '.process__item:first-child', '.process__item:first-child .process__title');
    prependAdaptiveItem(768, '.process__item:nth-child(3)', '.process__item:nth-child(3) .process__title');
  };

  function prependAdaptiveItem(breakpoint, block, item, ) {
    let width = $(window).width();
    if (width <= breakpoint) {
      $($(block)).prepend($(item));
    } else {
      $($(block)).append($(item));
    }
  }
});

$(function () {
  // init Isotope
  const $worksBlock = $('.portfolio-works').isotope({
    itemSelector: '.portfolio-works__item',
    layoutMode: 'fitRows'
  });
  // filter items on button click
  $('.portfolio-menu').on('click', '.portfolio-menu__btn', function () {
    const filterValue = $(this).attr('data-filter');
    $worksBlock.isotope({
      filter: filterValue
    });
  });

  // change is-checked class on buttons
  $('.portfolio-menu').each(function (i, buttonGroup) {
    $(buttonGroup).on('click', '.portfolio-menu__btn', function () {
      $(buttonGroup).find('.portfolio-menu__btn_active').removeClass('portfolio-menu__btn_active');
      $(this).addClass('portfolio-menu__btn_active');
    });
  });
});