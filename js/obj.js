function cartObj() {
  let rand = randomNumbers(1, 2)

  const priceList = {
    1: {
      'Lavash': {
        info: 'big cheese',
        price: 15000
      },
      'Hot-dog': {
        info: 'mini',
        price: 15000
      },
      'Cola': {
        info: '1.5 L',
        price: 9000
      },
    },
    2: {
      'Sushi': {
        info: 'max-roll',
        price: 32000
      },
      'Soya': {
        info: '200ml',
        price: 5000
      },
    }
  }

  return priceList[rand]
}

function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let obj = cartObj()
let info = 'Sizning buyurtmangiz: '
let price = 9000;

for (const name in obj) {
  console.log(name);
  info += `${name} `
  for (const key in obj[name]) {
    if(key =="price"){
    price += obj[name][key];
  }
    info +=`${key == "info" ? `${obj[name][key]}, `: ''}`;        
  }

}  
console.log(info + " | yetkazib berish xizmati bilan bo`lgan narxi " + price + ' sum yetkazish xaqqi (9000)');
