/***********************************************/
// redirect
/***********************************************/
function gotoW() {
  window.location.href = 'https://google.com';
}

/***********************************************/
// to show/hide modals
/***********************************************/

function hidemodal01() {
  $('#modal01').removeClass('visible');
  $('.sweet-overlay').css('display', 'none');
  $('#spinBG').addClass('spinAround');
  setTimeout(function () {
    $('#modal02').addClass('visible');
    $('.sweet-overlay').css('display', 'block');
    setTimeout(function () {
      $('#success02').addClass('animate');
      $('#successtip02').addClass('animateSuccessTip');
      $('#successlong02').addClass('animateSuccessLong');
    }, 500);
  }, 7500);
}

function hidemodal02() {
  $('#modal02').removeClass('visible');
  $('.sweet-overlay').css('display', 'none');
  $('#spinBG').addClass('spinAround2');
  setTimeout(function () {
    $('#modal03').addClass('visible');
    $('.sweet-overlay').css('display', 'block');
    setTimeout(function () {
      $('#success03').addClass('animate');
      $('#successtip03').addClass('animateSuccessTip');
      $('#successlong03').addClass('animateSuccessLong');
    }, 500);
  }, 7700);
}

function hidemodal03() {
  $('#modal03').removeClass('visible');
  $('.sweet-overlay').css('display', 'none');
  $('#spinBG').addClass('spinAround3');

  setTimeout(function () {
    $('#modal04').addClass('visible');
    $('.sweet-overlay').css('display', 'block');

    setTimeout(function () {
      $('#success04').addClass('animate');
      $('#successtip04').addClass('animateSuccessTip');
      $('#successlong04').addClass('animateSuccessLong');
    }, 500);
  }, 7700);
}

/***********************************************/
// get week day
/***********************************************/
/*
function getWeekDay(){

    const weekDay = document.getElementById('weekDay');

    let dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    let now = new Date();


    today = dayNames[now.getDay()];
    weekDay.innerText = today;
} */

/***********************************************/
// timer
/***********************************************/

function countdown() {
  let mins = parseInt(document.getElementById('mins').innerHTML);
  let secs = parseInt(document.getElementById('hsecs').innerHTML);

  let nmins;
  let nsecs;

  if (mins != 0 && secs == 0) {
    nmins = mins - 1;
    nsecs = 59;
  } else if (mins != 0 || secs != 0) {
    nmins = mins;
    nsecs = secs - 1;
  } else if (mins == 0 && secs == 0) {
    nmins = mins;
    nsecs = secs;
  }

  document.getElementById('mins').innerHTML = nmins;
  document.getElementById('hsecs').innerHTML = nsecs;

  if (nsecs < 10) nsecs = '0' + nsecs;
  document.getElementById('hsecs').innerHTML = nsecs;
}

/***********************************************/
// events
/***********************************************/

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const modalButtonFirst = document.getElementById('modalButtonFirst');
  const modalButtonSecond = document.getElementById('modalButtonSecond');
  const modalButtonThird = document.getElementById('modalButtonThird');
  //   setInterval('countdown()', 1000);

  function clickListener(event) {
    const target = event.target;

    if (target === modalButtonFirst) {
      hidemodal01();
    }

    if (target === modalButtonSecond) {
      hidemodal02();
    }

    if (target === modalButtonThird) {
      hidemodal03();
    }
  }

  body.addEventListener('click', clickListener);
});
document.addEventListener('DOMContentLoaded', () => {
  const osTypeElement = document.getElementById('typeOS');
  if (!osTypeElement) return;

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    osTypeElement.textContent = 'Google Play';
  } else if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
    osTypeElement.textContent = 'App Store';
  } else {
    osTypeElement.textContent = 'App Store';
  }
});
