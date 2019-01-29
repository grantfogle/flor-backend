
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
          description: 'In the early summer, this spectacular plant may be seen in the prairie stretches along the highway between Denver and Colorado Springs, or a bit later in the season, literally carpeting the drier areas of South Park. In higher altitudes, particuarlyu in the well-watered vales of Engelmann spruce, there are other species with bracts of brilliant shades of rose and maroon. Grows in foothill and higher plains, blooms June-July.',
          image: 'https://i.pinimg.com/originals/7e/15/d3/7e15d37bf0fab0ea5d7b76b4c43a69e9.jpg'
        },
        {
          name: 'Alpine Sunflower',
          family: 'Composite Family',
          description: 'This woolly-stemmed, dwarf sunflower, sometimes referred to as old-man-of-the-moutains, or sun-god, is a startling surprise for the newocmer to our above-timberline tundras. Flower head is 3 to 4 inches across, the central disk, an inch in diameter, made up of over a hundred tiny, tubular, golden florets, surrounded by about 30 bright yellow rays which are flat and notched at the outer end. Plant is 5 to 15 inches tallof one or several woolly stems, with leaves divided into several narrow lobes. Grows on alpine slopes. June-July.',
          image: 'http://www.ramblincameras.com/Oldman10j.jpg'
        },
        {
          name: 'Nelson\'s Larkspur',
          family: 'Buttercup Family',
          description: 'This small larkspur of the early spring looks much like the single larkspur of an old-fashioned garden. Its favorite location is near the base of a clump of scrub oak where a little snow has drifted in the winter giving that spot a bit of extra water. Flowers, 1/2 inch or more wide, are formed of 5 showy, dark blue, irregularly shaped sepals, enclosing at their base 4 much smaller petals of lighter colo. Plant is 10-15 inches tall and bears rater few leaves each sub-divided into linear segments. Grows in the foothill zone. Blooms late April to early June.',
          image: 'http://2.bp.blogspot.com/-iZRJjP6td1c/TbhpMLHZD3I/AAAAAAAAAoI/zIAvEik2vn8/s1600/IMG_5012.JPG'
        },
        {
          name: 'Showy Fleabane',
          family: 'Composite Family',
          description: 'As the season advances, these aster-like flowers become the most conspicuous color notes in our high-altitude aspen groves. The come after early flowers are gone and bloom with a profusion unknown to most shade-loving plants.Grows in shady places, rich moist soil, montane and sub-alpine zones. Blooms late July-September.',
          image: 'https://ak2.picdn.net/shutterstock/videos/4660382/thumb/1.jpg'
        },
        {
          name: 'Alpine Forget-Me-Not',
          family: 'Borage Family',
          description: 'Commonly found at high elevations mixed with lichen, sedum, polemonium and mountain rock. the woody base of the forget-me-not is built to stand the long, cold winters at these altitudes. Blooms late June to early July.',
          image: 'http://evergreen.expert/wp-content/uploads/2015/07/Alpine-forget-me-not.jpg'
        },
        {
          name: 'Wood Lily',
          family: 'Lily Family',
          description: 'This is one of the most sought-after and breathtaking of our mountain flowers. It used to grow in abundance, then almost disappeared due to excessive picking. Picking the flower usually kills the bulb. Grows in rich soil in partial shade near streams, montane zone. Blooms July.',
          image: 'https://i.pinimg.com/originals/99/58/8b/99588b8c882af36cf80dd82f95657f42.jpg'
        },
        {
          name: 'Easter Daisy',
          family: 'Composite Family',
          description: 'These are among the earliest plains flowers. Their typical occurrence is as isolated plants, one here and on e there between grass turfs in areas of rather tight prairie sod. Grows on grassy plains, and foothills. Blooms April-May.',
          image: 'http://boulderhg.com/wp-content/uploads/2016/03/Townsendia-hookeri-Easter-daisy.jpg'
        },
      ]);
    });
};
