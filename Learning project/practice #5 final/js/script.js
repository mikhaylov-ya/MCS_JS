const crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
];

/*const bitcoin = document.querySelectorAll('.bit > p, .bit > div');
const ethereum = document.querySelectorAll('.eth > p, .eth > div');
const litecoin = document.querySelectorAll('.lite > p, .lite > div');

bitcoin[0].innerText = crypto[0].name;
ethereum[0].innerText = crypto[1].name;
litecoin[0].innerText = crypto[2].name;

bitcoin[1].innerText = crypto[0].price;
ethereum[1].innerText = crypto[1].price;
litecoin[1].innerText = crypto[2].price;


bitcoin[2].style.width = `${crypto[0].price / 5}px`;
ethereum[2].style.width = `${crypto[1].price / 5}px`;
litecoin[2].style.width = `${crypto[2].price / 5}px`;*/



const container = document.getElementById('items')

crypto.forEach(currency => {
  const wrapCrypto = document.createElement('div');
  wrapCrypto.className = 'wrap'
  const title = document.createElement('h2');
  title.textContent = currency.name;
  const price = document.createElement('h3');
  price.textContent = currency.price;
  const graph = document.createElement('div');
  graph.style.width = `${currency.price / 5}px`;
  graph.style.height = '20px';
  graph.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
  container.append(wrapCrypto);
  wrapCrypto.append(title,price,graph);

});