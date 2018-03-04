var cheerio = require('cheerio');
var fs = require('fs');
var through = require('through2');
var fromArray = require('from2-array');
var https = require('https');
var url_page = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-'
var url_michelin = 'https://restaurant.michelin.fr'

var page = []
function page_number(){
  for (i = 1; i < 36; i++) {
    page.push(i);
    // console.log("page  " + i + "  bien push");
  }
  i = 0;
}

page_number()

var url_restaurant = []
var jsonFinal = []

function get_restaurant() {
  fromArray
    .obj(page)
    .pipe(through.obj(get_urlpage))
    .on('finish', () => get_details(url_restaurant))
}

function get_urlpage(buf, _, next) {
  i++
  // console.log(url_page + i)
  https.get(url_page + i, req => {
    req.pipe(through.obj(get_urlrestaurant))
    next()
  });
}

function get_urlrestaurant(buf, _, next) {
  var html = buf.toString()
  var $ = cheerio.load(html);
  $('.poi-card-link') ? $('.poi-card-link').each(function() { url_restaurant.push($(this).attr('href')) }) : '';
  next();
}

var file = fs.createWriteStream('michelin_data.json')

function get_details(url_restaurant) {
  fromArray
   .obj(url_restaurant)
   .pipe(through.obj(join_urlrestaurant))
   .on('finish', () => file.write(JSON.stringify(jsonFinal)))
}

function join_urlrestaurant(link, _, next) {
  // console.log('join_urlrestaurant')
  // console.log(link)
  https.get(url_michelin+link, req => {
    req.pipe(through.obj(get_details2))
    next()
  });
}
function get_details2(buf, _, next) {
  var html = buf.toString()
  var $ = cheerio.load(html);
  var name = $('h1').text().trim()
  console.log(name)
  var city = $('.locality').text()
  var zipcode = $('.postal-code').text()
  var ele = $('.guide').find('span').attr('class');
  var star = stars(ele);
  if(name.length && city.length && zipcode.length) {
  jsonFinal.push({name, city, zipcode, star})
  }
  next();
}

function stars (ele){
  switch (ele) {
    case 'guide-icon icon-mr icon-cotation1etoile':
      return 1 ;
      break;
    case 'guide-icon icon-mr icon-cotation2etoiles':
      return 2;
      break;
    case 'guide-icon icon-mr icon-cotation3etoiles':
      return 3;
      break;

  }
}

get_restaurant()
