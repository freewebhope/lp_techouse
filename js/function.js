$(function () {
  let hasError = 0;

  //next
  $(".btn_next").click(function () {
    $(this)
      .parents(".step_form")
      .find(".required")
      .each(function () {
        if ($(this).val() == "") {
          hasError++;
        }
      });
    if (hasError == 0) {
      let target = $(this).data("next");
      $(this).parents(".step_form").hide();
      $(this).parents(".step_form").find(".error").hide();
      $(this).parents(".from_wrap").find(target).fadeIn();
      $("html,body").animate({ scrollTop: $(this).parents(".from_wrap").offset().top });
    } else {
      $(this).parents(".step_form").find(".error").show();
      $("html,body").animate({ scrollTop: $(this).parents(".from_wrap").offset().top });
    }
    hasError = 0;
  });

  //back
  $(".btn_back").click(function () {
    let target = $(this).data("back");
    $(this).parents(".step_form").hide();
    $(this).parents(".step_form").find(".error").hide();
    $(this).parents(".from_wrap").find(target).fadeIn();
    $("html,body").animate({ scrollTop: $(this).parents(".from_wrap").offset().top });
    hasError = 0;
  });

  //submit
  $("form").submit(function () {
    if (hasError !== 0) {
      return false;
    }
  });
  $(".submit").click(function () {
    hasError = 0;
    $(this)
      .parents(".step_form")
      .find(".required")
      .each(function () {
        if ($(this).val() == "") {
          hasError++;
        }
      });
    if (hasError == 0) {
      $(this).parents("form").submit();
    } else {
      $(this).parents(".step_form").find(".error").show();
      $("html,body").animate({ scrollTop: $(this).parents(".from_wrap").offset().top });
    }
  });

  // radio
  $("input[name='お持ちの資格を選択してください[]']").click(function () {
    value = $("input[name='お持ちの資格を選択してください[]']:checked").val();
    $(this).parent("label").toggleClass("checked");
  });
  $("input[name='いつ転職を希望していますか？[]']").click(function () {
    value = $("input[name='いつ転職を希望していますか？[]']:checked").val();
    $(this).parent("label").toggleClass("checked");
  });
  $("input[name='最終学歴を教えてください[]']").click(function () {
    value = $("input[name='最終学歴を教えてください[]']:checked").val();
    $(this).parent("label").toggleClass("checked");
  });
});

// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

//　アコーディオン
$(function () {
  $(".sec05 .ac_parent").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("open");
  });
});
