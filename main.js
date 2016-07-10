
    function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);

      // Set AdMobAds options:
      admob.setOptions({
        publisherId:    "ca-app-pub-5231842333475288/1159723459" ,//"ca-app-pub-5231842333475288~4533822254",  // Required
        interstitialAdId:     "ca-app-pub-5231842333475288/4113189854",  // Optional
		isTesting: true,
      });

      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView();

      // Request interstitial (will present automatically when autoShowInterstitial is set to true)
      admob.requestInterstitial();
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
//get_remote_action();
//////////////::

$(".home").click(function(){
	document.location = "../index.html";
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