// ==UserScript==
// @name      Fuckbook
// @namespace    http://userscripts.org/scripts/show/74547
// @description    Replacing facebook logos and title + removing all the ads and makes navigation menu 'Always on Top'
// @resource    jQuery    http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @resource    Facebox    http://www.yourjavascript.com/0432123015/facebox.js
// @include      http://facebook.com/*
// @include      http://*.facebook.com/*
// @include      https://facebook.com/*
// @include      https://*.facebook.com/*
// @version      2.7
// ==/UserScript==
saveDefaultSettings();
(function () {
  var css = document.FUCKBOOK.css[0];
  if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css)
  } else {
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
      var node = document.createElement("style");
      node.type = "text/css";
      node.appendChild(document.createTextNode(css));
      heads[0].appendChild(node)
    }
  }
})();
(function () {
  var css = document.FUCKBOOK.css[1];
  if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css)
  } else {
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
      var node = document.createElement("style");
      node.type = "text/css";
      node.appendChild(document.createTextNode(css));
      heads[0].appendChild(node)
    }
  }
})();
if (GM_getValue('logoFuckbook') == 'checked') {
  (function () {
    var css = document.FUCKBOOK.css[2];
    if (typeof GM_addStyle != "undefined") {
      GM_addStyle(css)
    } else {
      var heads = document.getElementsByTagName("head");
      if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node)
      }
    }
  })();
  if (GM_getValue('titleSameAsLogo') == 'checked') {
    function titleFuckbook() {
      document.title = document.title.replace("Facebook", "Fuckbook")
    }
    setTimeout(titleFuckbook, 25);
    setTimeout(titleFuckbook, 50);
    setTimeout(titleFuckbook, 75);
    setTimeout(titleFuckbook, 100);
    setTimeout(titleFuckbook, 125);
    setTimeout(titleFuckbook, 150);
    setTimeout(titleFuckbook, 175);
    setTimeout(titleFuckbook, 200);
    setTimeout(titleFuckbook, 225);
    setTimeout(titleFuckbook, 250);
    setTimeout(titleFuckbook, 275);
    setTimeout(titleFuckbook, 300);
    setTimeout(titleFuckbook, 325);
    setTimeout(titleFuckbook, 350);
    setTimeout(titleFuckbook, 375);
    setTimeout(titleFuckbook, 400);
    setTimeout(titleFuckbook, 425);
    setTimeout(titleFuckbook, 450);
    setTimeout(titleFuckbook, 475);
    setTimeout(titleFuckbook, 500);
    setTimeout(titleFuckbook, 525);
    setTimeout(titleFuckbook, 550);
    setTimeout(titleFuckbook, 575);
    setTimeout(titleFuckbook, 600);
    setTimeout(titleFuckbook, 625);
    setTimeout(titleFuckbook, 650);
    setTimeout(titleFuckbook, 675);
    setTimeout(titleFuckbook, 700);
    setTimeout(titleFuckbook, 725);
    setTimeout(titleFuckbook, 750);
    setTimeout(titleFuckbook, 775);
    setTimeout(titleFuckbook, 800);
    setTimeout(titleFuckbook, 825);
    setTimeout(titleFuckbook, 850);
    setTimeout(titleFuckbook, 875);
    setTimeout(titleFuckbook, 900);
    setTimeout(titleFuckbook, 925);
    setTimeout(titleFuckbook, 950);
    setTimeout(titleFuckbook, 975);
    setTimeout(titleFuckbook, 1000);
    setTimeout(titleFuckbook, 1250);
    setTimeout(titleFuckbook, 1500);
    setTimeout(titleFuckbook, 1750);
    setTimeout(titleFuckbook, 2000);
    setTimeout(titleFuckbook, 2250);
    setTimeout(titleFuckbook, 2500);
    setTimeout(titleFuckbook, 2750);
    setInterval(titleFuckbook, 3000)
  }
}
if (GM_getValue('logoFakebook') == 'checked') {
  (function () {
    var css = document.FUCKBOOK.css[3];
    if (typeof GM_addStyle != "undefined") {
      GM_addStyle(css)
    } else {
      var heads = document.getElementsByTagName("head");
      if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node)
      }
    }
  })();
  if (GM_getValue('titleSameAsLogo') == 'checked') {
    function titleFakebook() {
      document.title = document.title.replace("Facebook", "Fakebook")
    }
    setTimeout(titleFakebook, 25);
    setTimeout(titleFakebook, 50);
    setTimeout(titleFakebook, 75);
    setTimeout(titleFakebook, 100);
    setTimeout(titleFakebook, 125);
    setTimeout(titleFakebook, 150);
    setTimeout(titleFakebook, 175);
    setTimeout(titleFakebook, 200);
    setTimeout(titleFakebook, 225);
    setTimeout(titleFakebook, 250);
    setTimeout(titleFakebook, 275);
    setTimeout(titleFakebook, 300);
    setTimeout(titleFakebook, 325);
    setTimeout(titleFakebook, 350);
    setTimeout(titleFakebook, 375);
    setTimeout(titleFakebook, 400);
    setTimeout(titleFakebook, 425);
    setTimeout(titleFakebook, 450);
    setTimeout(titleFakebook, 475);
    setTimeout(titleFakebook, 500);
    setTimeout(titleFakebook, 525);
    setTimeout(titleFakebook, 550);
    setTimeout(titleFakebook, 575);
    setTimeout(titleFakebook, 600);
    setTimeout(titleFakebook, 625);
    setTimeout(titleFakebook, 650);
    setTimeout(titleFakebook, 675);
    setTimeout(titleFakebook, 700);
    setTimeout(titleFakebook, 725);
    setTimeout(titleFakebook, 750);
    setTimeout(titleFakebook, 775);
    setTimeout(titleFakebook, 800);
    setTimeout(titleFakebook, 825);
    setTimeout(titleFakebook, 850);
    setTimeout(titleFakebook, 875);
    setTimeout(titleFakebook, 900);
    setTimeout(titleFakebook, 925);
    setTimeout(titleFakebook, 950);
    setTimeout(titleFakebook, 975);
    setTimeout(titleFakebook, 1000);
    setTimeout(titleFakebook, 1250);
    setTimeout(titleFakebook, 1500);
    setTimeout(titleFakebook, 1750);
    setTimeout(titleFakebook, 2000);
    setTimeout(titleFakebook, 2250);
    setTimeout(titleFakebook, 2500);
    setTimeout(titleFakebook, 2750);
    setInterval(titleFakebook, 3000)
  }
}
if (GM_getValue('logoFailbook') == 'checked') {
  (function () {
    var css = document.FUCKBOOK.css[4];
    if (typeof GM_addStyle != "undefined") {
      GM_addStyle(css)
    } else {
      var heads = document.getElementsByTagName("head");
      if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node)
      }
    }
  })();
  if (GM_getValue('titleSameAsLogo') == 'checked') {
    function titleFailbook() {
      document.title = document.title.replace("Facebook", "Failbook")
    }
    setTimeout(titleFailbook, 25);
    setTimeout(titleFailbook, 50);
    setTimeout(titleFailbook, 75);
    setTimeout(titleFailbook, 100);
    setTimeout(titleFailbook, 125);
    setTimeout(titleFailbook, 150);
    setTimeout(titleFailbook, 175);
    setTimeout(titleFailbook, 200);
    setTimeout(titleFailbook, 225);
    setTimeout(titleFailbook, 250);
    setTimeout(titleFailbook, 275);
    setTimeout(titleFailbook, 300);
    setTimeout(titleFailbook, 325);
    setTimeout(titleFailbook, 350);
    setTimeout(titleFailbook, 375);
    setTimeout(titleFailbook, 400);
    setTimeout(titleFailbook, 425);
    setTimeout(titleFailbook, 450);
    setTimeout(titleFailbook, 475);
    setTimeout(titleFailbook, 500);
    setTimeout(titleFailbook, 525);
    setTimeout(titleFailbook, 550);
    setTimeout(titleFailbook, 575);
    setTimeout(titleFailbook, 600);
    setTimeout(titleFailbook, 625);
    setTimeout(titleFailbook, 650);
    setTimeout(titleFailbook, 675);
    setTimeout(titleFailbook, 700);
    setTimeout(titleFailbook, 725);
    setTimeout(titleFailbook, 750);
    setTimeout(titleFailbook, 775);
    setTimeout(titleFailbook, 800);
    setTimeout(titleFailbook, 825);
    setTimeout(titleFailbook, 850);
    setTimeout(titleFailbook, 875);
    setTimeout(titleFailbook, 900);
    setTimeout(titleFailbook, 925);
    setTimeout(titleFailbook, 950);
    setTimeout(titleFailbook, 975);
    setTimeout(titleFailbook, 1000);
    setTimeout(titleFailbook, 1250);
    setTimeout(titleFailbook, 1500);
    setTimeout(titleFailbook, 1750);
    setTimeout(titleFailbook, 2000);
    setTimeout(titleFailbook, 2250);
    setTimeout(titleFailbook, 2500);
    setTimeout(titleFailbook, 2750);
    setInterval(titleFailbook, 3000)
  }
}
if (GM_getValue('logoF337book') == 'checked') {
  (function () {
    var css = document.FUCKBOOK.css[5];
    if (typeof GM_addStyle != "undefined") {
      GM_addStyle(css)
    } else {
      var heads = document.getElementsByTagName("head");
      if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node)
      }
    }
  })();
  if (GM_getValue('titleSameAsLogo') == 'checked') {
    function titleF337book() {
      document.title = document.title.replace("Facebook", "F337book")
    }
    setTimeout(titleF337book, 25);
    setTimeout(titleF337book, 50);
    setTimeout(titleF337book, 75);
    setTimeout(titleF337book, 100);
    setTimeout(titleF337book, 125);
    setTimeout(titleF337book, 150);
    setTimeout(titleF337book, 175);
    setTimeout(titleF337book, 200);
    setTimeout(titleF337book, 225);
    setTimeout(titleF337book, 250);
    setTimeout(titleF337book, 275);
    setTimeout(titleF337book, 300);
    setTimeout(titleF337book, 325);
    setTimeout(titleF337book, 350);
    setTimeout(titleF337book, 375);
    setTimeout(titleF337book, 400);
    setTimeout(titleF337book, 425);
    setTimeout(titleF337book, 450);
    setTimeout(titleF337book, 475);
    setTimeout(titleF337book, 500);
    setTimeout(titleF337book, 525);
    setTimeout(titleF337book, 550);
    setTimeout(titleF337book, 575);
    setTimeout(titleF337book, 600);
    setTimeout(titleF337book, 625);
    setTimeout(titleF337book, 650);
    setTimeout(titleF337book, 675);
    setTimeout(titleF337book, 700);
    setTimeout(titleF337book, 725);
    setTimeout(titleF337book, 750);
    setTimeout(titleF337book, 775);
    setTimeout(titleF337book, 800);
    setTimeout(titleF337book, 825);
    setTimeout(titleF337book, 850);
    setTimeout(titleF337book, 875);
    setTimeout(titleF337book, 900);
    setTimeout(titleF337book, 925);
    setTimeout(titleF337book, 950);
    setTimeout(titleF337book, 975);
    setTimeout(titleF337book, 1000);
    setTimeout(titleF337book, 1250);
    setTimeout(titleF337book, 1500);
    setTimeout(titleF337book, 1750);
    setTimeout(titleF337book, 2000);
    setTimeout(titleF337book, 2250);
    setTimeout(titleF337book, 2500);
    setTimeout(titleF337book, 2750);
    setInterval(titleF337book, 3000)
  }
}
if (GM_getValue('logoFacebutt') == 'checked') {
  (function () {
    var css = document.FUCKBOOK.css[6];
    if (typeof GM_addStyle != "undefined") {
      GM_addStyle(css)
    } else {
      var heads = document.getElementsByTagName("head");
      if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node)
      }
    }
  })();
  if (GM_getValue('titleSameAsLogo') == 'checked') {
    function titleFacebutt() {
      document.title = document.title.replace("Facebook", "Facebutt")
    }
    setTimeout(titleFacebutt, 25);
    setTimeout(titleFacebutt, 50);
    setTimeout(titleFacebutt, 75);
    setTimeout(titleFacebutt, 100);
    setTimeout(titleFacebutt, 125);
    setTimeout(titleFacebutt, 150);
    setTimeout(titleFacebutt, 175);
    setTimeout(titleFacebutt, 200);
    setTimeout(titleFacebutt, 225);
    setTimeout(titleFacebutt, 250);
    setTimeout(titleFacebutt, 275);
    setTimeout(titleFacebutt, 300);
    setTimeout(titleFacebutt, 325);
    setTimeout(titleFacebutt, 350);
    setTimeout(titleFacebutt, 375);
    setTimeout(titleFacebutt, 400);
    setTimeout(titleFacebutt, 425);
    setTimeout(titleFacebutt, 450);
    setTimeout(titleFacebutt, 475);
    setTimeout(titleFacebutt, 500);
    setTimeout(titleFacebutt, 525);
    setTimeout(titleFacebutt, 550);
    setTimeout(titleFacebutt, 575);
    setTimeout(titleFacebutt, 600);
    setTimeout(titleFacebutt, 625);
    setTimeout(titleFacebutt, 650);
    setTimeout(titleFacebutt, 675);
    setTimeout(titleFacebutt, 700);
    setTimeout(titleFacebutt, 725);
    setTimeout(titleFacebutt, 750);
    setTimeout(titleFacebutt, 775);
    setTimeout(titleFacebutt, 800);
    setTimeout(titleFacebutt, 825);
    setTimeout(titleFacebutt, 850);
    setTimeout(titleFacebutt, 875);
    setTimeout(titleFacebutt, 900);
    setTimeout(titleFacebutt, 925);
    setTimeout(titleFacebutt, 950);
    setTimeout(titleFacebutt, 975);
    setTimeout(titleFacebutt, 1000);
    setTimeout(titleFacebutt, 1250);
    setTimeout(titleFacebutt, 1500);
    setTimeout(titleFacebutt, 1750);
    setTimeout(titleFacebutt, 2000);
    setTimeout(titleFacebutt, 2250);
    setTimeout(titleFacebutt, 2500);
    setTimeout(titleFacebutt, 2750);
    setInterval(titleFacebutt, 3000)
  }
}
if (GM_getValue('titleCustom') == 'checked') {
  function titleCustom() {
    document.title = document.title.replace("Facebook", GM_getValue('titleCustomValue'))
  }
  setTimeout(titleCustom, 25);
  setTimeout(titleCustom, 50);
  setTimeout(titleCustom, 75);
  setTimeout(titleCustom, 100);
  setTimeout(titleCustom, 125);
  setTimeout(titleCustom, 150);
  setTimeout(titleCustom, 175);
  setTimeout(titleCustom, 200);
  setTimeout(titleCustom, 225);
  setTimeout(titleCustom, 250);
  setTimeout(titleCustom, 275);
  setTimeout(titleCustom, 300);
  setTimeout(titleCustom, 325);
  setTimeout(titleCustom, 350);
  setTimeout(titleCustom, 375);
  setTimeout(titleCustom, 400);
  setTimeout(titleCustom, 425);
  setTimeout(titleCustom, 450);
  setTimeout(titleCustom, 475);
  setTimeout(titleCustom, 500);
  setTimeout(titleCustom, 525);
  setTimeout(titleCustom, 550);
  setTimeout(titleCustom, 575);
  setTimeout(titleCustom, 600);
  setTimeout(titleCustom, 625);
  setTimeout(titleCustom, 650);
  setTimeout(titleCustom, 675);
  setTimeout(titleCustom, 700);
  setTimeout(titleCustom, 725);
  setTimeout(titleCustom, 750);
  setTimeout(titleCustom, 775);
  setTimeout(titleCustom, 800);
  setTimeout(titleCustom, 825);
  setTimeout(titleCustom, 850);
  setTimeout(titleCustom, 875);
  setTimeout(titleCustom, 900);
  setTimeout(titleCustom, 925);
  setTimeout(titleCustom, 950);
  setTimeout(titleCustom, 975);
  setTimeout(titleCustom, 1000);
  setTimeout(titleCustom, 1250);
  setTimeout(titleCustom, 1500);
  setTimeout(titleCustom, 1750);
  setTimeout(titleCustom, 2000);
  setTimeout(titleCustom, 2250);
  setTimeout(titleCustom, 2500);
  setTimeout(titleCustom, 2750);
  setInterval(titleCustom, 3000)
}
if (GM_getValue('removeAds') == 'checked') {
  (function () {
    var css = document.FUCKBOOK.css[7];
    if (typeof GM_addStyle != "undefined") {
      GM_addStyle(css)
    } else {
      var heads = document.getElementsByTagName("head");
      if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node)
      }
    }
  })();
  var allAds, thisAd;
  var logging = true;
  allAds = document.evaluate("//iframe[contains(@src, 'http://ads.')] | //iframe[contains(@src, 'http://ad.')] | //iframe[contains(@src, '/ad.php?')] | //iframe[contains(@src, '/banner')] | //div[contains(@id, 'sponsor')]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < allAds.snapshotLength; i++) {
    thisAd = allAds.snapshotItem(i);
    thisAd.style.display = "none";
    thisAd.parentNode.removeChild(thisAd)
  }
}
if (GM_getValue('fixedHeader') == 'checked') {
  (function () {
    var css = document.FUCKBOOK.css[8];
    if (typeof GM_addStyle != "undefined") {
      GM_addStyle(css)
    } else {
      var heads = document.getElementsByTagName("head");
      if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node)
      }
    }
  })()
}
if (GM_getValue('hideChatBar') == 'checked') {
  (function () {
    var css = document.FUCKBOOK.css[9];
    if (typeof GM_addStyle != "undefined") {
      GM_addStyle(css)
    } else {
      var heads = document.getElementsByTagName("head");
      if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node)
      }
    }
  })()
}(function () {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  var jQuery = GM_getResourceText('jQuery');
  var Facebox = GM_getResourceText('Facebox');
  script.innerHTML = jQuery + Facebox;
  head.appendChild(script);
  unsafeWindow.jQuery.noConflict();
  $ = unsafeWindow.jQuery
})();

function GM_wait() {
  if (typeof unsafeWindow.jQuery == 'undefined') {
    window.setTimeout(GM_wait, 100)
  } else {
    unsafeWindow.jQuery.noConflict();
    jQuery = unsafeWindow.jQuery;
    letsJQuery()
  }
}
GM_wait();

function letsJQuery() {
  if (GM_getValue('logoFuckbook') == 'checked') {
    $("div.loggedout_menubar_container div.clearfix.loggedout_menubar a.lfloat").html(document.FUCKBOOK.html[0]);
  }
  if (GM_getValue('logoFakebook') == 'checked') {
    $("div.loggedout_menubar_container div.clearfix.loggedout_menubar a.lfloat").html(document.FUCKBOOK.html[1]);
  }
  if (GM_getValue('logoFailbook') == 'checked') {
    $("div.loggedout_menubar_container div.clearfix.loggedout_menubar a.lfloat").html(document.FUCKBOOK.html[2]);
  }
  if (GM_getValue('logoF337book') == 'checked') {
    $("div.loggedout_menubar_container div.clearfix.loggedout_menubar a.lfloat").html(document.FUCKBOOK.html[3]);
  }
  if (GM_getValue('logoFacebutt') == 'checked') {
    $("div.loggedout_menubar_container div.clearfix.loggedout_menubar a.lfloat").html(document.FUCKBOOK.html[4]);
  }
  $(document).ready(function () {
    $('a[rel*=facebox]').facebox()
  });

  function saveSettings() {
    if ($("#facebox #logoFuckbook").is(':checked')) {
      GM_setValue('logoFuckbook', 'checked');
      GM_setValue('logoFakebook', 0);
      GM_setValue('logoFailbook', 0);
      GM_setValue('logoF337book', 0);
      GM_setValue('logoFacebutt', 0);
      GM_setValue('logoFacebook', 0)
    }
    if ($("#facebox #logoFakebook").is(':checked')) {
      GM_setValue('logoFuckbook', 0);
      GM_setValue('logoFakebook', 'checked');
      GM_setValue('logoFailbook', 0);
      GM_setValue('logoF337book', 0);
      GM_setValue('logoFacebutt', 0);
      GM_setValue('logoFacebook', 0)
    }
    if ($("#facebox #logoFailbook").is(':checked')) {
      GM_setValue('logoFuckbook', 0);
      GM_setValue('logoFakebook', 0);
      GM_setValue('logoFailbook', 'checked');
      GM_setValue('logoF337book', 0);
      GM_setValue('logoFacebutt', 0);
      GM_setValue('logoFacebook', 0)
    }
    if ($("#facebox #logoF337book").is(':checked')) {
      GM_setValue('logoFuckbook', 0);
      GM_setValue('logoFakebook', 0);
      GM_setValue('logoFailbook', 0);
      GM_setValue('logoF337book', 'checked');
      GM_setValue('logoFacebutt', 0);
      GM_setValue('logoFacebook', 0)
    }
    if ($("#facebox #logoFacebutt").is(':checked')) {
      GM_setValue('logoFuckbook', 0);
      GM_setValue('logoFakebook', 0);
      GM_setValue('logoFailbook', 0);
      GM_setValue('logoF337book', 0);
      GM_setValue('logoFacebutt', 'checked');
      GM_setValue('logoFacebook', 0)
    }
    if ($("#facebox #logoFacebook").is(':checked')) {
      GM_setValue('logoFuckbook', 0);
      GM_setValue('logoFakebook', 0);
      GM_setValue('logoFailbook', 0);
      GM_setValue('logoF337book', 0);
      GM_setValue('logoFacebutt', 0);
      GM_setValue('logoFacebook', 'checked')
    }
    if ($("#facebox #titleSameAsLogo").is(':checked')) {
      GM_setValue('titleSameAsLogo', 'checked');
      GM_setValue('titleCustom', 0)
    }
    if ($("#facebox #titleCustom").is(':checked')) {
      GM_setValue('titleSameAsLogo', 0);
      GM_setValue('titleCustom', 'checked')
    }
    if ($("#facebox #removeAds").is(':checked')) {
      GM_setValue('removeAds', 'checked')
    } else {
      GM_setValue('removeAds', 0)
    }
    if ($("#facebox #fixedHeader").is(':checked')) {
      GM_setValue('fixedHeader', 'checked')
    } else {
      GM_setValue('fixedHeader', 0)
    }
    if ($("#facebox #hideChatBar").is(':checked')) {
      GM_setValue('hideChatBar', 'checked')
    } else {
      GM_setValue('hideChatBar', 0)
    }
  }
  $("#options_button").live('hover', function () {
    if ($("#facebox #titleCustom").is(':checked')) {
      $("#facebox #titleCustomValue").removeAttr('disabled')
    }
  });
  $("#facebox #titleCustom").live('click', function () {
    $("#facebox #titleCustomValue").removeAttr('disabled')
  });
  $("#facebox #titleSameAsLogo").live('click', function () {
    $("#facebox #titleCustomValue").attr('disabled', true)
  });
  $("#options_button").live('hover', function () {
    setTimeout(function () {
      $("#facebox #titleCustomValue").val(GM_getValue('titleCustomValue'))
    }, 0)
  });
  $('#facebox #titleCustomValue').live('change', function () {
    setTimeout(function () {
      GM_setValue('titleCustomValue', $('#facebox #titleCustomValue').val())
    }, 0)
  });
  $("#facebox #fuckbookCancel").live('click', function () {
    $('#options_button').fadeIn(1000);
    $.facebox.close()
  });
  $("#facebox #fuckbookSaveSettings").live('click', function () {
    setTimeout(function () {
      saveSettings()
    }, 0);
    location.reload()
  });
  $("#headNav").append(document.FUCKBOOK.html[5]);

  function hideOptionsButton() {
    $('#options_button').hide(0)
  }
  document.getElementById('options_button').addEventListener('click', hideOptionsButton, false);
  $("body").append(document.FUCKBOOK.html[6]);
  $("#fuckbook_options_wrap").append(document.FUCKBOOK.html[7]);
  $("#fuckbook_options_wrap").append(document.FUCKBOOK.html[8]);
  $("#fuckbook_options_wrap").append(document.FUCKBOOK.html[9]);
  $("#footer").append(document.FUCKBOOK.html[10]);
  $("#fuckbook_options_container").append(document.FUCKBOOK.html[11]);
  if (GM_getValue('logoFuckbook') == 'checked') {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[12]);
  } else {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[13]);
  }
  if (GM_getValue('logoFakebook') == 'checked') {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[14]);
  } else {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[15]);
  }
  if (GM_getValue('logoFailbook') == 'checked') {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[16]);
  } else {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[17]);
  }
  if (GM_getValue('logoF337book') == 'checked') {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[18]);
  } else {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[19]);
  }
  if (GM_getValue('logoFacebutt') == 'checked') {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[20]);
  } else {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[21]);
  }
  if (GM_getValue('logoFacebook') == 'checked') {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[22]);
  } else {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[23]);
  }
  $("#fuckbook_options_container").append(document.FUCKBOOK.html[24]);

  if (GM_getValue('titleSameAsLogo') == 'checked') {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[25]);
  } else {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[26]);
  }
  if (GM_getValue('titleCustom') == 'checked') {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[27]);
  } else {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[28]);
  }
  $("#fuckbook_options_container").append(document.FUCKBOOK.html[29]);
  $("#fuckbook_options_container").append(document.FUCKBOOK.html[30]);

  if (GM_getValue('removeAds') == 'checked') {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[31]);
  } else {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[32]);
  }
  if (GM_getValue('fixedHeader') == 'checked') {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[33]);
  } else {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[34]);
  }
  if (GM_getValue('hideChatBar') == 'checked') {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[35]);
  } else {
    $("#fuckbook_options_container").append(document.FUCKBOOK.html[36]);
  }
}
function saveDefaultSettings() {
  if (GM_getValue('logoFuckbook') == undefined) {
    GM_setValue('logoFuckbook', 'checked');
    GM_setValue('logoFakebook', 0);
    GM_setValue('logoFailbook', 0);
    GM_setValue('logoF337book', 0);
    GM_setValue('logoFacebutt', 0);
    GM_setValue('logoFacebook', 0);
    GM_setValue('titleSameAsLogo', 'checked');
    GM_setValue('titleCustom', 0);
    GM_setValue('titleCustomValue', 'Custom');
    GM_setValue('removeAds', 'checked');
    GM_setValue('fixedHeader', 'checked');
    GM_setValue('hideChatBar', 0)
  }
}
