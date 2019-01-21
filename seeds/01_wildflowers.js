
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('wildflowers').del()
    .then(function () {
      // Inserts seed entries
      return knex('wildflowers').insert([
        {
          name: 'Columbine',
          family: 'Buttercup Family',
          description: 'Colorado\'s queenly state flower speaks for itself. The flower if formed of 5 sepals and 5 petals, alternatively arranded all of them showy.',
          image: 'https://s22409.pcdn.co/wp-content/uploads/2014/06/A1.jpg'
        },
        {
          name: 'Bush Cinquefoil',
          family: 'Rose Family',
          description: 'This thornless yellow rose is one of the most widespread and most ornamental shrubs of the mountain states. Flowers are an inch in diamter, 5 broad golden petals surrounding 20 or more stamens.',
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
