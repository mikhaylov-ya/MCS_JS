let newSchool = [
  [
    ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
    ['Sonny Digital', 'Metro Boomin', '12Hunna']
  ],
  [
    ['Yung Lean', 'Ecco2K', 'Bladee'],
    ['Whitearmor', 'PJ Beats', 'Yung Gud']
  ]
];

let rappers = [];
let producers = [];

for (items of newSchool) {
  for (item in items[0])
     rappers += ' ' + items[0][item]
  for (item in items[1])
    producers += ' ' + items[1][item]
};

console.log(rappers);
console.log(producers);