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

const bitcoin = document.querySelectorAll('.bit > p, .bit > div');
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
litecoin[2].style.width = `${crypto[2].price / 5}px`;