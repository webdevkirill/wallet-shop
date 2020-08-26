$(document).ready(function() {
  
  $('.main-form__button').click(function() {
    yaCounter48942302.reachGoal('materials');
    return true;
  });

  $('.treatment-link').click(function() {
    $(".treatment-wrap").css("display", "block"); 
  });

  $('.popup-close-treatment').click(function() {
    $(".treatment-wrap").css("display", "none"); 
  });

  $('.overlay-link').click(function() {
    $(".overlay-wrap").css("display", "block"); 
  });

  $('.popup-close-overlay').click(function() {
    $(".overlay-wrap").css("display", "none"); 
  });

  $('.popup-close-question-overlay').click(function() {
    $(".question-overlay-wrap").css("display", "none"); 
  });

  $('.popup-close-thanks').click(function() {
    $(".thanks-wrap").css("display", "none"); 
  });

  $('.question-overlay-link').click(function() {
    $(".question-overlay-wrap").css("display", "block"); 
  });

  $('.popup-close-question').click(function() {
    $(".question-overlay-wrap").css("display", "none"); 
  });

  var navButton = $('.nav-button');
  var navButtonActive = $('.nav-button-active');

  var navButtonHide = $('.nav-button-hide');
  var navButtonHideActive = $('.nav-button-hide-active');

  var bool = false;
  var boolHide = false;
  var hideLink = $('.nav-hide-link');

  hideLink.click(function() {
    $('.nav-hide').css("display", "none");
    if (boolHide == true) {
      navButtonHide.toggleClass('nav-button-hide-active');
      $('.nav-hide').css("display", "none");
      boolHide = false;
      $('.nav-button-hide').removeAttr('style');
      $(".nav-button-hide").css("display", "inline-block"); 
    };

    if (bool == true) {
      navButton.toggleClass('nav-button-active');
      $('.nav-hide').css("display", "none");
      bool = false;
      $('.nav-button').removeAttr('style');
    };
  });

  navButtonHide.click(function() {
    if (boolHide == false) {
      navButtonHide.toggleClass('nav-button-hide-active');
      $('.nav-hide').css("display", "block");
      boolHide = true;
    }
    else {
      navButtonHide.toggleClass('nav-button-hide-active');
      $('.nav-hide').css("display", "none");
      boolHide = false;
      $('.nav-button-hide').removeAttr('style');
      $(".nav-button-hide").css("display", "inline-block"); 
    };
  });

  navButton.click(function() {
    if (bool == false) {
      navButton.toggleClass('nav-button-active');
      $('.nav-hide').css("display", "block");
      $('.nav-button').css("left", "10px");
      $('.nav-button').css("top", "10px");
      bool = true;
    }
    else {
      navButton.toggleClass('nav-button-active');
      $('.nav-hide').css("display", "none");
      bool = false;
      $('.nav-button').removeAttr('style');
    };
  });

  window.onscroll = function() {
    var bo = $(window).scrollTop();
    if ( bo > 20 ) { 
      $(".nav-button").css("display", "none"); 
      $(".nav-button-hide").css("display", "inline-block"); 
    }
    else {
      $(".nav-button").css("display", "inline-block"); 
      $(".nav-button-hide").css("display", "none"); 
    };
  };
});