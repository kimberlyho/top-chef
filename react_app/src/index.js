import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class List extends React.Component {
  render() {
    let item = this.props;
    return (
      <li className="listing__item">
        <div className="listing__details">
          <h1>{ item.name } {item.star} étoiles</h1>
          <h2>{ item.city } { item.zipcode }</h2>
          <p key={item.deal.title, item.deal.exclusions, item.deal.is_menu, item.deal.is_special_offer, item.deal.discount_amount}> PB AFFICHE RIEN {item.deal.title}</p>
        </div>
      </li>
    );
  }
}

class Filters extends React.Component {
  render() {
    const { query } = this.props
    return (
      <center>
        <div className="filters">
          Sort by:
          <select name="sort" value={ query.sort } onChange={ this.props.onChange }>
            <option value="name">Name</option>
            <option value="star">Star</option>
          </select>
          <select name="sortDirection" value={ query.sortDirection } onChange={ this.props.onChange }>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </center>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data : {}, query: {sort:'name', sortDirection:'asc'} };
  }
  
  componentWillMount() {
    this.updateData()
  }

  updateData = () => {
    this.setState ({
      data : {
        listItems : [
          {
            "name": "Maison Rostang",
            "city": "Paris",
            "zipcode": "75017",
            "star": 2,
            "id": "405",
            "deal": [{
              "title": "Menu Prestige 115€ Tout Compris, le midi !",
              "exclusions": "Prix par personne. Un verre de vin par Plat. \nDu mardi au vendredi, le midi.",
              "is_menu": true,
              "is_special_offer": true,
              "discount_amount": 0
            }, {
              "title": "Menu Prestige 195€ Tout Compris, le soir !",
              "exclusions": "Prix par personne. Un verre de vin par plat. \nDu lundi au vendredi, le soir.",
              "is_menu": true,
              "is_special_offer": true,
              "discount_amount": 0
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Passe Temps",
            "city": "Lyon",
            "zipcode": "69006",
            "star": 1,
            "id": "323145",
            "deal": [{
              "title": "Menu 85€",
              "exclusions": "prix par personne",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu  60€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 30€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le France",
            "city": "VILLERS-LE-LAC",
            "zipcode": "25130",
            "star": 1,
            "id": "221",
            "deal": [{
              "title": "-20% off the \"à la carte\" menu!",
              "exclusions": "Set menus and drinks not included. Available on the booked timeslot.",
              "is_menu": false,
              "is_special_offer": true,
              "discount_amount": 20
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Prieuré",
            "city": "Villeneuve-lès-Avignon",
            "zipcode": "30400",
            "star": 1,
            "id": "689",
            "deal": [{
              "title": "Easter Holydays Menu 100€",
              "exclusions": "Prix par personne.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Les Terrasses de Lyon",
            "city": "Lyon 05",
            "zipcode": "69005",
            "star": 1,
            "id": "4697",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Manoir du Lys",
            "city": "Bagnoles-de-l'Orne",
            "zipcode": "61140",
            "star": 1,
            "id": "2740",
            "deal": [{
              "title": "Set Menu 49€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 63€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 99€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Auberge au Boeuf",
            "city": "Sessenheim",
            "zipcode": "67770",
            "star": 1,
            "id": "44361",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Au Crocodile",
            "city": "STRASBOURG",
            "zipcode": "67000",
            "star": 1,
            "id": "71542",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Ze Kitchen Galerie",
            "city": "Paris",
            "zipcode": "75006",
            "star": 1,
            "id": "269053",
            "deal": [{
              "title": "Menu de 41€ à 72€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Découverte 98€",
              "exclusions": "Price per person.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Découverte 85€",
              "exclusions": "Price per person.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Jardin des Remparts",
            "city": "Beaune",
            "zipcode": "21200",
            "star": 1,
            "id": "4988",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Tour des Vents",
            "city": "Monbazillac",
            "zipcode": "24240",
            "star": 1,
            "id": "75533",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Copenhague",
            "city": "PARIS",
            "zipcode": "75008",
            "star": 1,
            "id": "25985",
            "deal": [{
              "title": "Offre Découverte Signature 115€",
              "exclusions": "Prix par personne. \nTous les soirs du lundi au jeudi.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Ken Kawasaki",
            "city": "Paris",
            "zipcode": "75018",
            "star": 1,
            "id": "276169",
            "deal": [{
              "title": "Menu 70€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 45€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 30€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "JY'S",
            "city": "Colmar",
            "zipcode": "68000",
            "star": 2,
            "id": "5603",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Nakatani",
            "city": "PARIS",
            "zipcode": "75007",
            "star": 1,
            "id": "60859",
            "deal": [{
              "title": "Menu 145€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 105€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 68€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 50€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Vague d'Or",
            "city": "Saint-Tropez",
            "zipcode": "83990",
            "star": 3,
            "id": "26660",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "L'Arcane",
            "city": "Paris",
            "zipcode": "75018",
            "star": 1,
            "id": "214579",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Cloître",
            "city": "Mane",
            "zipcode": "04300",
            "star": 1,
            "id": "11050",
            "deal": [{
              "title": "Menu 135€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 115€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 75€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "L'Écrin",
            "city": "Paris",
            "zipcode": "75008",
            "star": 1,
            "id": "326081",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Domaine d'Auriac",
            "city": "Carcassonne",
            "zipcode": "11000",
            "star": 1,
            "id": "3018",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Agapé",
            "city": "Paris",
            "zipcode": "75017",
            "star": 1,
            "id": "1923",
            "deal": [{
              "title": "Menu Prestige 72€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Gourmands 185€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Mascaret",
            "city": "Blainville-sur-Mer",
            "zipcode": "50560",
            "star": 1,
            "id": "387",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Moulin du Roc",
            "city": "Champagnac-de-Belair",
            "zipcode": "24530",
            "star": 1,
            "id": "7133",
            "deal": [{
              "title": "Menu 85€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 125€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 49€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Castellaras",
            "city": "Fayence",
            "zipcode": "83440",
            "star": 1,
            "id": "204609",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Les Climats",
            "city": "Paris 07",
            "zipcode": "75007",
            "star": 1,
            "id": "30315",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Vivier",
            "city": "L'Isle-sur-la-Sorgue",
            "zipcode": "84800",
            "star": 1,
            "id": "1086",
            "deal": [{
              "title": "Menu 85€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 58€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu du \"Marché\" 32€",
              "exclusions": "Menu disponible du mardi au jeudi, le midi uniquement.\nHors jours fériés",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Astrance",
            "city": "Paris",
            "zipcode": "75016",
            "star": 3,
            "id": "344379",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Logis de la Cadène",
            "city": "Saint Emilion",
            "zipcode": "33330",
            "star": 1,
            "id": "44000",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Ithurria",
            "city": "Ainhoa",
            "zipcode": "64250",
            "star": 1,
            "id": "378",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Côte Saint-Jacques",
            "city": "Joigny",
            "zipcode": "89300",
            "star": 2,
            "id": "12792",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Table de l'Alpaga",
            "city": "Megève",
            "zipcode": "74120",
            "star": 1,
            "id": "291883",
            "deal": [{
              "title": "Menu 105€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 135€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 215€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 160€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "1912",
            "city": "Trouville-sur-Mer",
            "zipcode": "14360",
            "star": 1,
            "id": "60777",
            "deal": [{
              "title": "20% off food",
              "exclusions": "Set menu and drinks not included. Valid for all orders of starter + a main or a main + dessert as a minimum per person.",
              "is_menu": false,
              "is_special_offer": true,
              "discount_amount": 20
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Hostellerie de Plaisance",
            "city": "Saint-Emilion",
            "zipcode": "33330",
            "star": 2,
            "id": "4904",
            "deal": [{
              "title": "Menu 68€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Souvenirs 185€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Plaisance 135€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Clair de la Plume",
            "city": "Grignan",
            "zipcode": "26230",
            "star": 1,
            "id": "18271",
            "deal": [{
              "title": "Menu truffe d'hiver en 7 services 175€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Ephémère 39€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 59€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Hostellerie de l'Abbaye de la Celle",
            "city": "La Celle",
            "zipcode": "83170",
            "star": 1,
            "id": "25901",
            "deal": [{
              "title": "Menu 98€",
              "exclusions": "Prix par personne",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Paloma",
            "city": "Mougins",
            "zipcode": "06250",
            "star": 2,
            "id": "38822",
            "deal": [{
              "title": "Easter Lunch - Sunday, April 1st, 2018 Menu 180€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Vieux Logis",
            "city": "Trémolat",
            "zipcode": "24510",
            "star": 1,
            "id": "6018",
            "deal": [{
              "title": "\"Menu \"Balade EstTaxesle\" Accord Mands and Vins 105€\"",
              "exclusions": "Price per person. By reserving this Set Menu, you may choose once at the restaurant to order using the Set Menu or a la carte.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Tapas 49€",
              "exclusions": "Price per person. Menu imposé : Il ne sera pas possible de commander to la carte. Monday to Friday lunch. Non Valid les public holiday.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Loiseau rive Gauche",
            "city": "Paris 07",
            "zipcode": "75007",
            "star": 1,
            "id": "25",
            "deal": [{
              "title": "Menu Ephémère 45€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Plein Champ 75€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Climat de Saison 82€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Plein Champ 105€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Palm Beach",
            "city": "Ajaccio",
            "zipcode": "20000",
            "star": 1,
            "id": "5756",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "L'Auberge de la Pomme",
            "city": "Les Damps",
            "zipcode": "27340",
            "star": 1,
            "id": "32584",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Licorne Royale",
            "city": "Lyons-la-Forêt",
            "zipcode": "27480",
            "star": 1,
            "id": "5632",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Maison Lameloise",
            "city": "Chagny",
            "zipcode": "71150",
            "star": 3,
            "id": "3552",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Jin",
            "city": "Paris",
            "zipcode": "75001",
            "star": 1,
            "id": "30379",
            "deal": [{
              "title": "Menu 95€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 145€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Alain Llorca",
            "city": "La Colle-sur-Loup",
            "zipcode": "06480",
            "star": 1,
            "id": "277471",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Table du Connétable",
            "city": "Chantilly",
            "zipcode": "60500",
            "star": 1,
            "id": "60775",
            "deal": [{
              "title": "Menu 165€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 140€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 95€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 67€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Table du Gourmet",
            "city": "Riquewihr",
            "zipcode": "68340",
            "star": 1,
            "id": "2975",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Marande",
            "city": "Montbellet",
            "zipcode": "71260",
            "star": 1,
            "id": "2889",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Ed.Em",
            "city": "Chassagne-Montrachet",
            "zipcode": "21190",
            "star": 1,
            "id": "209193",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Pierre Orsi",
            "city": "Lyon 06",
            "zipcode": "69006",
            "star": 1,
            "id": "12900",
            "deal": [{
              "title": "Menu Mardis Gourmands 150€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": true,
              "discount_amount": 0
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Passagère",
            "city": "Juan-les-Pins",
            "zipcode": "06160",
            "star": 1,
            "id": "203823",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Park 45",
            "city": "Cannes",
            "zipcode": "06400",
            "star": 1,
            "id": "8628",
            "deal": [{
              "title": "Menu  60€",
              "exclusions": "Prix par personne",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 190€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 95€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 95€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Comice",
            "city": "Paris",
            "zipcode": "75016",
            "star": 1,
            "id": "337449",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Musigny",
            "city": "Valenciennes",
            "zipcode": "59300",
            "star": 1,
            "id": "32118",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Chassagnette",
            "city": "Arles",
            "zipcode": "13200",
            "star": 1,
            "id": "14529",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "L'Aromate",
            "city": "Nice",
            "zipcode": "06000",
            "star": 1,
            "id": "38154",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Maison Clovis",
            "city": "Lyon",
            "zipcode": "69006",
            "star": 1,
            "id": "324443",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Domaine de Clairefontaine",
            "city": "Chonas-l'Amballan",
            "zipcode": "38121",
            "star": 1,
            "id": "22878",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Table d'Eugène",
            "city": "Paris",
            "zipcode": "75018",
            "star": 1,
            "id": "36884",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Frédéric Simonin",
            "city": "Paris",
            "zipcode": "75017",
            "star": 1,
            "id": "23087",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Les Clefs d'Argent",
            "city": "Mont-de-Marsan",
            "zipcode": "40000",
            "star": 1,
            "id": "8933",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "L'Essentiel",
            "city": "DEAUVILLE",
            "zipcode": "14800",
            "star": 1,
            "id": "21632",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Table du 11",
            "city": "Versailles",
            "zipcode": "78000",
            "star": 1,
            "id": "58408",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "L'Archeste",
            "city": "Paris",
            "zipcode": "75116",
            "star": 1,
            "id": "284489",
            "deal": [{
              "title": "Menu autour de la Truffe et Caviar 180€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Carte Blanche le Soir 110€",
              "exclusions": "Prix par personne. Hors boisson.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Carte Blanche le Midi 52€ et 72€",
              "exclusions": "Prix par personne.\nHors boisson.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Miraflores",
            "city": "Lyon",
            "zipcode": "69006",
            "star": 1,
            "id": "44919",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Christopher Coutanceau",
            "city": "La Rochelle",
            "zipcode": "17000",
            "star": 2,
            "id": "2998",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Maison Kieny",
            "city": "Riedisheim",
            "zipcode": "68400",
            "star": 1,
            "id": "2971",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Matelote",
            "city": "BOULOGNE-SUR-MER",
            "zipcode": "62200",
            "star": 1,
            "id": "327881",
            "deal": [{
              "title": "Menu 68€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 40€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 35€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Set Menu 28€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Strasbourg",
            "city": "Bitche",
            "zipcode": "57230",
            "star": 1,
            "id": "10382",
            "deal": [{
              "title": "Menu 75€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Restaurant du Palais Royal",
            "city": "Paris 01",
            "zipcode": "75001",
            "star": 1,
            "id": "21741",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Village",
            "city": "Marly-le-Roi",
            "zipcode": "78160",
            "star": 1,
            "id": "330375",
            "deal": [{
              "title": "Menu 100€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Set Menu 40€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 50€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Maison dans le Parc",
            "city": "Nancy",
            "zipcode": "54000",
            "star": 1,
            "id": "4294",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Garopapilles",
            "city": "Bordeaux",
            "zipcode": "33000",
            "star": 1,
            "id": "276775",
            "deal": [{
              "title": "Menu 69€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Apicius",
            "city": "Paris",
            "zipcode": "75008",
            "star": 1,
            "id": "60418",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Alliance",
            "city": "Paris",
            "zipcode": "75005",
            "star": 1,
            "id": "77626",
            "deal": [{
              "title": "Menu 120€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 175€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Alliance 110€ et Menu Tentation 90€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Ivan Vautier",
            "city": "Caen",
            "zipcode": "14000",
            "star": 1,
            "id": "26460",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Auberge des Templiers",
            "city": "Les Bézards",
            "zipcode": "45290",
            "star": 1,
            "id": "2714",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Château de Mirambeau",
            "city": "Mirambeau",
            "zipcode": "17150",
            "star": 1,
            "id": "5487",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Promenade",
            "city": "Verfeil",
            "zipcode": "31590",
            "star": 1,
            "id": "42187",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Auberge du Cheval Blanc",
            "city": "Lembach",
            "zipcode": "67510",
            "star": 2,
            "id": "2310",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "L'Almandin",
            "city": "Saint-Cyprien",
            "zipcode": "66750",
            "star": 1,
            "id": "566",
            "deal": [{
              "title": "Menu 35€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Domaine des Séquoias",
            "city": "Ruy",
            "zipcode": "38300",
            "star": 1,
            "id": "1009",
            "deal": [{
              "title": "Menu 70€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Affaire 40€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu \"Suite Nº11\"  130€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Ar Men Du",
            "city": "Névez",
            "zipcode": "29920",
            "star": 1,
            "id": "4961",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Château de Sable",
            "city": "Porspoder",
            "zipcode": "29840",
            "star": 1,
            "id": "65607",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Pavillon",
            "city": "Le Touquet-Paris-Plage",
            "zipcode": "62520",
            "star": 1,
            "id": "306505",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Prairial",
            "city": "Lyon",
            "zipcode": "69001",
            "star": 1,
            "id": "75043",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Initial",
            "city": "Caen",
            "zipcode": "14000",
            "star": 1,
            "id": "27058",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Clos des Sens",
            "city": "Annecy",
            "zipcode": "74940",
            "star": 2,
            "id": "7130",
            "deal": [{
              "title": "Menu 70€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu \"Découverte Grande Fête \" en 10 saveurs 190€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu \"Découverte Plein d'Envies\" en 8 saveurs 160€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu \"Découverte Pour Voir...\" en 5 saveurs 120€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Restaurant H",
            "city": "Paris",
            "zipcode": "75004",
            "star": 1,
            "id": "209577",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Renaissance",
            "city": "Argentan",
            "zipcode": "61200",
            "star": 1,
            "id": "2970",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Septime",
            "city": "Paris",
            "zipcode": "75011",
            "star": 1,
            "id": "10889",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Ô Saveurs",
            "city": "ROUFFIAC-TOLOSAN",
            "zipcode": "31180",
            "star": 1,
            "id": "8719",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Les Hautes Roches",
            "city": "Rochecorbon",
            "zipcode": "37210",
            "star": 1,
            "id": "2819",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Chateaubriand",
            "city": "Paris",
            "zipcode": "75011",
            "star": 1,
            "id": "202436",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Bistro des Saveurs",
            "city": "Obernai",
            "zipcode": "67210",
            "star": 1,
            "id": "18939",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Divellec",
            "city": "Paris",
            "zipcode": "75007",
            "star": 1,
            "id": "272053",
            "deal": [{
              "title": "Brunch 65€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Brunch 49€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 49€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 90€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 210€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "L'Orangerie du Château",
            "city": "Blois",
            "zipcode": "41000",
            "star": 1,
            "id": "2728",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Nouvelle Auberge",
            "city": "Wihr-au-Val",
            "zipcode": "68230",
            "star": 1,
            "id": "38024",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Château de Mercuès",
            "city": "Mercuès",
            "zipcode": "46090",
            "star": 1,
            "id": "13311",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Gambetta",
            "city": "Saumur",
            "zipcode": "49400",
            "star": 1,
            "id": "46885",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Mon Plaisir",
            "city": "Chamesol",
            "zipcode": "25190",
            "star": 1,
            "id": "7876",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Clarence",
            "city": "Paris 08",
            "zipcode": "75008",
            "star": 2,
            "id": "74933",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "L'Arôme",
            "city": "Paris 08",
            "zipcode": "75008",
            "star": 1,
            "id": "713",
            "deal": [{
              "title": "Menu Mardis Gourmands 139€",
              "exclusions": "Prix par personne.",
              "is_menu": true,
              "is_special_offer": true,
              "discount_amount": 0
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Henri et Joseph",
            "city": "Lorient",
            "zipcode": "56100",
            "star": 1,
            "id": "8838",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Grignotière",
            "city": "Raismes",
            "zipcode": "59590",
            "star": 1,
            "id": "43399",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Gordon Ramsay au Trianon",
            "city": "Versailles",
            "zipcode": "78000",
            "star": 1,
            "id": "3131",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Alcyone",
            "city": "MARSEILLE",
            "zipcode": "13002",
            "star": 1,
            "id": "31008",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Puits du Trésor",
            "city": "Lastours",
            "zipcode": "11600",
            "star": 1,
            "id": "529",
            "deal": [{
              "title": "Set Menus from 47€ to 93€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Auberge des Saints Pères",
            "city": "Aulnay-sous-Bois",
            "zipcode": "93600",
            "star": 1,
            "id": "4546",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Carrousel",
            "city": "MARINGUES",
            "zipcode": "63350",
            "star": 1,
            "id": "9759",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Quincangrogne",
            "city": "Dampmart",
            "zipcode": "77400",
            "star": 1,
            "id": "78533",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "L'Odas",
            "city": "Rouen",
            "zipcode": "76000",
            "star": 1,
            "id": "212971",
            "deal": [{
              "title": "Menu 65€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 45€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Set Menu 28€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Chez Michèle",
            "city": "Languimberg",
            "zipcode": "57810",
            "star": 1,
            "id": "16363",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Flaveur",
            "city": "Nice",
            "zipcode": "06000",
            "star": 2,
            "id": "38155",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Julien Binz",
            "city": "Ammerschwihr",
            "zipcode": "68770",
            "star": 1,
            "id": "206163",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Moulin de l'Abbaye",
            "city": "BRANTOME",
            "zipcode": "24310",
            "star": 1,
            "id": "26352",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Auberge de la Tour",
            "city": "MARCOLES",
            "zipcode": "15220",
            "star": 1,
            "id": "23255",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Magasin aux Vivres",
            "city": "Metz",
            "zipcode": "57000",
            "star": 1,
            "id": "5109",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Les Rosiers",
            "city": "Biarritz",
            "zipcode": "64200",
            "star": 1,
            "id": "6710",
            "deal": [{
              "title": "Menu 85€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Scène Thélème",
            "city": "PARIS",
            "zipcode": "75017",
            "star": 1,
            "id": "269585",
            "deal": [{
              "title": "-50% off the \"à la carte\" menu!",
              "exclusions": "Set menus and drinks not included. Available on the booked timeslot.",
              "is_menu": false,
              "is_special_offer": true,
              "discount_amount": 50
            }, {
              "title": "-30% off the \"à la carte\" menu!",
              "exclusions": "Set menus and drinks not included. Available on the booked timeslot.",
              "is_menu": false,
              "is_special_offer": true,
              "discount_amount": 30
            }, {
              "title": "-20% off the \"à la carte\" menu!",
              "exclusions": "Set menus and drinks not included. Available on the booked timeslot.",
              "is_menu": false,
              "is_special_offer": true,
              "discount_amount": 20
            }, {
              "title": "Menu du Marché 95€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Promenade 129€",
              "exclusions": "Prix par personne hors boisson.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Mardis Gourmands 99 €",
              "exclusions": "Prix par personne.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Déjeuner 39€ ou 49€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Loiseau des Vignes",
            "city": "Beaune",
            "zipcode": "21200",
            "star": 1,
            "id": "3304",
            "deal": [{
              "title": "Menu 119€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 95€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 75€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 59€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 35€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Set Menu 25€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Auberge du Bon Laboureur",
            "city": "Chenonceaux",
            "zipcode": "37150",
            "star": 1,
            "id": "2934",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Relais Bernard Loiseau",
            "city": "Saulieu",
            "zipcode": "21210",
            "star": 2,
            "id": "3303",
            "deal": [{
              "title": "Menu 250€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 150€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 245€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 195€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 75€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Dominique Bouchet",
            "city": "Paris",
            "zipcode": "75008",
            "star": 1,
            "id": "310829",
            "deal": [{
              "title": "-20% on « MENU AVEC SAKE », or 120,00 € instead of 150,00 €!",
              "is_menu": true,
              "is_special_offer": true,
              "discount_amount": 20
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Grand Cerf",
            "city": "Montchenot",
            "zipcode": "51500",
            "star": 1,
            "id": "5935",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Lasserre",
            "city": "Paris 08",
            "zipcode": "75008",
            "star": 1,
            "id": "250",
            "deal": [{
              "title": "Menu Plaisir 150€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu dégustation 190€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu Mardis Gourmands 150€",
              "exclusions": "Prix par personne.",
              "is_menu": true,
              "is_special_offer": true,
              "discount_amount": 0
            }, {
              "title": "Menu Déjeuner 60€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Bastide de Moustiers",
            "city": "Moustiers-Sainte-Marie",
            "zipcode": "04360",
            "star": 1,
            "id": "57531",
            "deal": [{
              "title": "Menu 98€",
              "exclusions": "Prix par personne. Hors boisson. Menu unique : il ne sera pas possible de commander à la carte.\nValable le 23/03 dîner.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "L'Auberge Basque",
            "city": "Saint-Pée-sur-Nivelle",
            "zipcode": "64310",
            "star": 1,
            "id": "5305",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Refuge des Gourmets",
            "city": "Machilly",
            "zipcode": "74140",
            "star": 1,
            "id": "10332",
            "deal": [{
              "title": "Menu 35€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Loiseau des Ducs",
            "city": "Dijon",
            "zipcode": "21000",
            "star": 1,
            "id": "29826",
            "deal": [{
              "title": "Menu 48€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 48€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 165€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 48€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 48€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 48€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 105€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 75€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 55€",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Menu 35€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Set Menu 25€",
              "exclusions": "By booking this set menu, you will be able to order either this set menu or \"à la carte\" if you change your mind.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Mavrommatis",
            "city": "Paris 05",
            "zipcode": "75005",
            "star": 1,
            "id": "5727",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Pressoir",
            "city": "Saint-Avé",
            "zipcode": "56890",
            "star": 1,
            "id": "18188",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Helen",
            "city": "Paris",
            "zipcode": "75008",
            "star": 1,
            "id": "23454",
            "deal": [{
              "title": "Lunch menu monday to friday 48€",
              "exclusions": "Price per person. By reserving this Set Menu, you may choose once at the restaurant to order using the Set Menu or a la carte.",
              "is_menu": true,
              "is_special_offer": false
            }, {
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "La Palme d'Or",
            "city": "Cannes",
            "zipcode": "06400",
            "star": 2,
            "id": "287357",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }, {
            "name": "Le Relais des Moines",
            "city": "Les Arcs",
            "zipcode": "83460",
            "star": 1,
            "id": "132",
            "deal": [{
              "title": "Simple booking",
              "is_menu": false,
              "is_special_offer": false
            }]
          }
        ],
      // sort:{
      //   name: this.state.query.data
      // },
      // sortDirection:{
      //   asc: (this.state.query.data).sort((a,b)=>(a.name - b.name)),
      //   desc: (this.state.query.data).sort((a,b)=>(b.name - a.name))
      // }
      }
    })
  }
  updateQuery = (e) => {
  this.setState({
    query: {
      ...this.state.query,
      [e.target.name]: e.target.value
    }
  }, () => {
    this.updateData()
  })
}

  render() {
    const { data, query } = this.state
    return (
      <div className="listing">
        <center>RESTAURANTS KIM</center>
        <Filters query={ query } onChange={ this.updateQuery } />
          <div className="listing__list">
          	{data.listItems.map((listItems)=> {
              return <List {...listItems}/>
            })}
          </div>
    	</div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
