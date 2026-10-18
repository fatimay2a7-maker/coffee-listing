
$(document).ready(function () {
  const $filterButtons = $(".filter-btn");
  const $products = $(".product-card");

  $filterButtons.on("click", function () {
    const filter = $(this).data("filter");

    $filterButtons.removeClass("active");
    $(this).addClass("active");

    $products.each(function () {
      const available =
        $(this).attr("data-available") === "true";

      const shouldShow =
        filter === "all" ||
        (filter === "available" && available);

      if (shouldShow) {
        $(this).stop(true, true).fadeIn(200);
      } else {
        $(this).stop(true, true).fadeOut(200);
      }
    });
  });
});
