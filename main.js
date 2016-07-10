

  function initAds() {
    if (admob) {
      var adPublisherIds = {
        ios : {
          banner : "ca-app-pub-5231842333475288/1159723459"
        },
        android : {
          banner : "ca-app-pub-5231842333475288/1159723459",
          interstitial : "ca-app-pub-5231842333475288/4113189854",
        }
      };

      var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;

      admob.setOptions({
        publisherId:      admobid.banner,
        interstitialAdId: admobid.interstitial,
      });

      registerAdEvents();

    } else {
      alert('AdMobAds plugin not ready');
    }
  }

  function onAdLoaded(e) {
    if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
      admob.showInterstitialAd();
      showNextInterstitial = setTimeout(function() {
        admob.requestInterstitialAd();
      }, 40 * 1000); // 2 minutes
    }
  }

  // optional, in case respond to events
  function registerAdEvents() {
    document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
    document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
    document.addEventListener(admob.events.onAdOpened, function (e) {});
    document.addEventListener(admob.events.onAdClosed, function (e) {});
    document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
    document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});
  }

  function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);
    initAds();

    // display a banner at startup
    admob.createBannerView();

    // request an interstitial
    admob.requestInterstitialAd();
  }
document.addEventListener("deviceready", onDeviceReady, false);

function get_remote_action(){
	$.ajax({
	  url: "http://apps.coding-labs.com/getAction.php?app=com.coding_labs.Guides_Pokemon_full",
	  context: document.body
	}).done(function(data) {
	  $("#remote").html(data);
	  console.log(data)
	});

}
get_remote_action();
//////////////::

$(".home").click(function(){
	document.location = "../main.html";
});
$(".options").click(function(){
	document.location = "Guides/0.html";
});
    
$(".Guides").click(function(){
	id = $(this).attr("data_id");
	url = "Guides/"+id+".html";
	document.location = url;
});
$(document).ready(function(){
	
});