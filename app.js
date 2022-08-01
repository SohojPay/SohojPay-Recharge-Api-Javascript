var apiaccount = "013XXXXXXX";
var apikey = "XXXXX";
var number = "013XXXXXXX";
var amount = "XX";
var type = "Prepaid";

var url = "https://sohojpaybd.com/app/api/topup.php?access_id="+apiaccount+"&access_key="+apikey+"&number="+number+"&amount="+amount+"&type="+type+"";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();
