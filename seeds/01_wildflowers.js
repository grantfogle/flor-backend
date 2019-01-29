
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('wildflowers').del()
    .then(function () {
      // Inserts seed entries
      return knex('wildflowers').insert([
        {
          name: 'Columbine',
          family: 'Buttercup Family',
          description: 'Colorado\'s queenly state flower speaks for itself. Composed of 5 sepals and 5 petals, alternately arranged and all of them showy. The sepals are deep blue or sometimes quite pale forming a wide saucer-like star 3 inches across. Plants are 2 feet or more high of several delicate stems, usually carrying at their tops numerous flowers. Grows in rich soil in montane zone, but extends into foothills and up to timberline. Blooms June-July.',
          image: 'https://s22409.pcdn.co/wp-content/uploads/2014/06/A1.jpg'
        },
        {
          name: 'Bush Cinquefoil',
          family: 'Rose Family',
          description: 'This thornless yellow rose is one of the most widespread and most ornamental shrubs of the mountain states. Individual clumps are rarely fully covered with bloom at any one time. Flowers are an inch in diameter, composed of 5 broad, golden petals surrounding 20 or more stamesns. Plant is a dense shrub about 3 to 4 feet high with many dark, wood, feely-branching stems. Grows in moist parts of the montae zone, also in the upper foothills and the lower sub-alpine zones. Blooms continuously May to September.',
          image: 'https://ak8.picdn.net/shutterstock/videos/1008584278/thumb/1.jpg'
        },
        {
          name: 'Indian Paintbrush',
          family: 'Figwort Family',
          description: 'These flowers are found all over the place. Little red petals.',
          image: 'https://i.pinimg.com/originals/7e/15/d3/7e15d37bf0fab0ea5d7b76b4c43a69e9.jpg'
        },
        {
          name: 'Alpine Sunflower',
          family: 'Composite Family',
          description: 'These beauties are small 2inch wide flowers that look just like sunflowers.',
          image: 'http://www.ramblincameras.com/Oldman10j.jpg'
        },
        {
          name: 'Nelson\'s Larkspur',
          family: 'Buttercup Family',
          description: 'This small blue flower is awesome.',
          image: 'http://2.bp.blogspot.com/-iZRJjP6td1c/TbhpMLHZD3I/AAAAAAAAAoI/zIAvEik2vn8/s1600/IMG_5012.JPG'
        },
      ]);
    });
};
