$(document).ready(function () {
  const starContainer = $(".stars");

  for (let i = 0; i < 100; i++) {
    let star = $("<div></div>")
      .addClass("star")
      .css({
        top: Math.random() * 1024 + "px",
        left: Math.random() * 100 + "vw",
      });
    starContainer.append(star);
  }
});

$(document).ready(function () {
  const footerStarContainer = $(".footer-section .star");

  for (let i = 0; i < 100; i++) {
    let dot = $("<div></div>")
      .addClass("star")
      .css({
        top: Math.random() * 368 + "px",
        left: Math.random() * 100 + "vw",
      });
    footerStarContainer.append(dot);
  }
});

$(document).ready(function () {
  $(".category-nav a").click(function (e) {
    e.preventDefault();
    $(".category-nav a").removeClass("active");
    $(this).addClass("active");

    var category = $(this).data("category");
    $(".product-card").hide();
    $(".product-card[data-category='" + category + "']").show();
  });

  $(".product-card").not("[data-category='new-in']").hide();
});

$(document).ready(function () {
  $(".categories-nav li").click(function (e) {
    e.preventDefault();

    $(".categories-nav li").removeClass("active").css("border-bottom", "none");

    $(this).addClass("active").css("border-bottom", "2px solid #FBDA0C");

    const category = $(this).data("category");

    $(".product-card").hide();
    $(`.product-card[data-category='${category}']`).show();
  });

  $(".categories-nav li[data-category='new-in']")
    .addClass("active")
    .css("border-bottom", "2px solid #FBDA0C");
  $(".product-card").not("[data-category='new-in']").hide();
});

$(document).ready(function () {
  $(".faq-section-question").click(function () {
    const parentItem = $(this).closest(".faq-section-item");
    parentItem.toggleClass("open");
    parentItem.find(".faq-section-answer").slideToggle();
  });
});

const faqItems = document.querySelectorAll(".faq-section-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-section-question");

  question.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

$(document).ready(function () {
  const productList = $(".products-list");
  let isDragging = false;
  let startX, scrollLeft;

  productList.on("mousedown", function (e) {
    isDragging = true;
    productList.addClass("dragging");
    startX = e.pageX - productList.offset().left;
    scrollLeft = productList.scrollLeft();
  });

  productList.on("mouseleave mouseup", function () {
    isDragging = false;
    productList.removeClass("dragging");
  });

  productList.on("mousemove", function (e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - productList.offset().left;
    const walk = (x - startX) * 2;
    productList.scrollLeft(scrollLeft - walk);
  });
});
