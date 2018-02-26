var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');

var michelin = fs.readFileSync("D:/Documents/ESILV/4A/WebApplication/top-chef/modules/michelin/michelin_data.json", "utf8");
var michelin_info = michelin.split("\n");
var michelin_info2 = [];
// var url1 = "https://m.lafourchette.com/api/restaurant-prediction?name=" //+nom du restaurant
// var url2 = "https://m.lafourchette.com/api/restaurant/" //+ id du restaurant
var url3 = "https://m.lafourchette.com/api/restaurant/" //+id/sale-type
var url_id = [];
var url_moreinfo=[];
var url_deal = [];
var resultat = [];
var zipcode = [];
// var id_restaurant = [];

for (var i = 0; i < michelin_info.length - 1; i++) {
  michelin_info2[i] = JSON.parse(michelin_info[i]);
  // console.log(michelin_info2.name);
}
// API 1
for (var i=0; i<michelin_info2.length;i++){
  var url1 = "https://m.lafourchette.com/api/restaurant-prediction?name=";
  var name = michelin_info2[i].name;
  // var city = michelin_info2[i].city;
  var zipcode = michelin_info2[i].zipcode;
  url1 = url1+encodeURIComponent(name);
  url_id.push(url1);
}

var id = {
  lafourchette: []
};

function get_ID_restaurant(){
  for (var i = 0; i < url_id.length; i++) {
    request(url_id[i],function(error, response, html){
      if (!error){
        var $ = cheerio.load(html);
        resultat = JSON.parse($.text().trim());
        for (var j = 0; j < resultat.length; j++) {
          for (var i = 0; i < michelin_info2.length; i++) {
            var name = michelin_info2[i].name;
            var zipcode=michelin_info2[i].zipcode;
            if (resultat[j].address.postal_code==zipcode && resultat[j].name==name) {
              // id_restaurant = resultat[j].id;
              michelin_info2[i].id=resultat[j].id;
              // console.log("PC API"+resultat[j].address.postal_code);
              // console.log("PC MICHELIN"+zipcode);
              id.lafourchette.push(michelin_info2[i]);
              var json = JSON.stringify(id);
              fs.writeFile('idrestaurant.json', json, 'utf8');
            }
          }
        }
      }
    })
  }
}

// get_ID_restaurant();

var idrestau_lafourchette = fs.readFileSync("D:/Documents/ESILV/4A/WebApplication/top-chef/modules/lafourchette/idrestaurant.json", "utf8");
var idrestau_lafourchette1 = idrestau_lafourchette.split("\n");
var idrestau_lafourchette2 = [];

for (var i = 0; i < idrestau_lafourchette1.length - 1; i++) {
  idrestau_lafourchette2[i] = JSON.parse(idrestau_lafourchette1[i]);
  // console.log(michelin_info2.name);
}

//API 2
for (var i=0; i<idrestau_lafourchette2.length;i++){
  var url2 = "https://m.lafourchette.com/api/restaurant/";
  var id = idrestau_lafourchette2[i].id;
  // var city = michelin_info2[i].city;
  url2 = url2+encodeURIComponent(id)+"/sale-type";
  url_moreinfo.push(url2);
}
// console.log(url_moreinfo);

var moreinfo = {
  lafourchette: []
};


function get_MoreInfo_restaurant(){
  for (var i = 0; i < url_moreinfo.length; i++) {
    request(url_moreinfo[i],function(error, response, html){
      if (!error){
        var $ = cheerio.load(html);
        resultat = JSON.parse($.text().trim());
           // console.log("ID "+idrestau_lafourchette2[j].id);
            var special = []
            for(var j = 0; j < resultat.length; j++){
              console.log(resultat[j].is_special_offer);
              special.push(resultat[j].is_special_offer);
              for (var i = 0; i < idrestau_lafourchette2.length; i++) {
                // console.log(idrestau_lafourchette2[i].id);
                idrestau_lafourchette2[i].special = special;
              }
            //idrestau_lafourchette2[j].special_offer=special;
            //console.log(idrestau_lafourchette2[j].special_offer);
          }
          // console.log(special);
          // console.log(idrestau_lafourchette2[i].id);
          moreinfo.lafourchette.push(idrestau_lafourchette2);
          var json = JSON.stringify(moreinfo);
          fs.writeFile('moreinforestaurant.json', json, 'utf8');

        // for (var j = 0; j < resultat.length; j++) {
        //   for (var i = 0; i < idrestau_lafourchette2.length; i++) {
        //       idrestau_lafourchette2[i].is_special_offer=resultat[j].is_special_offer;
        //       console.log("YES");
        //
        //
        //     // idrestau_lafourchette2[i].phone=resultat[j].phone;
        //     // idrestau_lafourchette2[i].description=resultat[j].description;
        //     // idrestau_lafourchette2[i].chef_name=resultat[j].chef_name;
        //     // idrestau_lafourchette2[i].distinction=resultat[j].aggregate_rating.distinction;
        //     // idrestau_lafourchette2[i].hour_open=resultat[j].card.hour_open;
        //       // console.log("PC API"+resultat[j].address.postal_code);
        //       // console.log("PC MICHELIN"+zipcode);
        //     moreinfo.lafourchette.push(idrestau_lafourchette2[i]);
        //
        //
        //   }
        //
        // }

      }
    })
  }
}
get_MoreInfo_restaurant();
