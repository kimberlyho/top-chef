var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');

var michelin_info = JSON.parse(fs.readFileSync("D:/Documents/ESILV/4A/WebApplication/top-chef/modules/michelin/michelin_data.json", "utf8"));
var id_lafourchette = [];
var deal_restaurant = [];


for (var i = 0; i < michelin_info.length; i++) {
  // get_ID_restaurant(michelin_info[i]);
}


function get_ID_restaurant(restaurant){
    request({method: 'GET',url:'https://m.lafourchette.com/api/restaurant-prediction?name=' + encodeURIComponent(restaurant.name)},function(error, response, html){
      if (!error){
        var resultat = JSON.parse(html);
        resultat.forEach(function(restaurant2){
          if (restaurant.zipcode == restaurant2.address.postal_code && restaurant.name == restaurant2.name) {
            restaurant.id = restaurant2.id;
            id_lafourchette.push(restaurant);
          }
        })
        var json = JSON.stringify(id_lafourchette);
        fs.writeFile('idrestaurant.json', json, 'utf8');
      }
    })
}

var idrestau_lafourchette = JSON.parse(fs.readFileSync("D:/Documents/ESILV/4A/WebApplication/top-chef/modules/lafourchette/idrestaurant.json", "utf8"));

for (var i = 0; i < idrestau_lafourchette.length; i++) {
  get_deal_restaurant(idrestau_lafourchette[i]);
}

function get_deal_restaurant(restaurant) {
  request({method: 'GET',url:'https://m.lafourchette.com/api/restaurant/' + restaurant.id + '/sale-type'},function(error, response, html){
    if (!error){
      var resultat = JSON.parse(html);

      restaurant.deal = [];
      resultat.forEach(function(deal){

        if (deal.title != 'Simple booking' ) {
            if ('exclusions' in deal) {
              restaurant.deal.push({
                title: deal.title,
                exclusions: deal.exclusions ,
                is_menu: deal.is_menu,
                is_special_offer: deal.is_special_offer,
                discount_amount: deal.discount_amount

              });
            } else {
              restaurant.deal.push({
                title: deal.title,
                is_menu: deal.is_menu,
                is_special_offer: deal.is_special_offer,
                discount_amount: deal.discount_amount
              });
            }
          } else {
            restaurant.deal.push({
              title: deal.title,
              is_menu: deal.is_menu,
              is_special_offer: deal.is_special_offer
            });
          }
      })
      deal_restaurant.push(restaurant)
      var json = JSON.stringify(deal_restaurant);
      fs.writeFile('dealrestaurant.json', json, 'utf8');
    }
  })
}
