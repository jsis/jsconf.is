// eslint-disable-next-line
'use strict'

const description =
  '<p>Check out the speaker lineup <a href="/speakers/">' +
  ' here</a>.</p>'

const conferenceDays = [
  {
    date: 'Wednesday February 28, 2018',
    slots: [
      {
        time: '20:00 23:59',
        unified: {
          title: 'Welcome Reception at Hard Rock',
          description: '<p>Come to the welcome reception, meet fellow attendees and pick-up your badge at Hard Rock. The reception is situated on the famous Lækjargata, in the heart of Reykjavik City. Hard Rock Cafe Reykjavik contains three floors, each with its own distinctive vibe.</p>' +
            '<p>We look forward to seeing you!</p>',
        },
      },
    ],
  },
  {
    date: 'Thursday March 1, 2018',
    slots: [
      {
        time: '08:00 09:15',
        unified: {
          grayed: true,
          title: 'Breakfast and badge pick-up',
        },
      },
      {
        time: '09:15 09:45',
        unified: {
          grayed: true,
          title: 'Opening JSConf Iceland 2018',
        },
      },
      {
        time: '09:45 10:45',
        unified: {
          title: 'Talks [TBA]',
          description,
        },
      },
      {
        time: '10:45 11:15',
        unified: {
          grayed: true,
          title: 'Break',
        },
      },
      {
        time: '11:15 12:30',
        unified: {
          title: 'Talks [TBA]',
          description,
        },
      },
      {
        time: '12:30 13:30',
        unified: {
          grayed: true,
          title: 'Lunch',
        },
      },
      {
        time: '13:30 15:30',
        unified: {
          title: 'Talks [TBA]',
          description,
        },
      },
      {
        time: '15:30 16:00',
        unified: {
          grayed: true,
          title: 'Break',
        },
      },
      {
        time: '16:00 18:00',
        unified: {
          title: 'Talks [TBA]',
          description,
        },
      },
      {
        time: '19:00 23:00',
        unified: {
          grayed: true,
          title: 'Party, details TBA',
        },
      },
    ],
  },
  {
    date: 'Friday March 2, 2018',
    slots: [
      {
        time: '08:45 09:45',
        unified: {
          grayed: true,
          title: 'Breakfast',
        },
      },
      {
        time: '09:45 12:30',
        unified: {
          title: 'Talks [TBA]',
          description,
        },
      },
      {
        time: '12:30 13:30',
        unified: {
          grayed: true,
          title: 'Lunch',
        },
      },
      {
        time: '13:30 15:30',
        unified: {
          title: 'Talks [TBA]',
          description,
        },
      },
      {
        time: '15:30 16:00',
        unified: {
          grayed: true,
          title: 'Break',
        },
      },
      {
        time: '16:00 17:30',
        unified: {
          title: 'Talks [TBA]',
          description,
        },
      },
      {
        time: '17:30 18:00',
        unified: {
          grayed: true,
          title: 'Closing remarks',
        },
      },
      {
        time: '19:00 23:00',
        unified: {
          grayed: true,
          title: 'Party, details TBA',
        },
      },
    ],
  },
  {
    date: 'Saturday March 3, 2018',
    slots: [
      {
        time: '10:00 19:00',
        unified: {
          title: 'South Shore Adventure',
          description:
          '<p><img src="/assets/south-coast.jpg" alt="The south shore adventure"/></p>'+
          '<p>This tour is ideal for nature lovers of all kinds. We take you along the south coast of Iceland, one of the country’s most scenic regions, as far as Vík, a charming village surrounded by high beautiful bird cliffs.</p>' +
          '<p>South Iceland is special for that it is one of the flattest regions on the island. Because of that, most of all grain farming in Iceland is done there. The high mountains to the north, shield the area from the harshest winds from the north.</p>' +
          '<p>Among the stops on this tour are at the gorgeous Seljalandsfoss and Skógafoss waterfalls. Seljalandsfoss is part of the Seljandsá river, which has its origins in Eyjafjallajökull glacier. What makes Seljalandsfoss so famous and interesting is that you can walk behind it. We recommend you bring either a raincoat or a waterproof coat along if you want to walk behind it. Skógafoss, another famous Icelandic waterfall, is the starting point of the Fimmvörðuháls walk over to Þórsmörk. The waterfall was also used in the films <em>Thor: The Dark World</em> and <em>The Secret Life of Walter Mitty</em>.</p>' +
          '<p>We will also stop at Reynisfjara black sand beach, with the Reynisdrangar rock formations and columnar basalt. It is one of the most spectacular beaches in Iceland but can be dangerous, and we kindly ask our guests not to go too close to the ocean and go by guidelines.</p>' +
          '<p>Tour duration: 10:00 – 19:00</p>' +
          '<p>On this tour you will see:<br>• Sólheimajökull<br>• Vík<br>• Reynisfjara<br>• Reynisdrangar<br>• Skógafoss<br>• Seljalandsfoss</p>' +
          '<p>Tickets are sold separately for both attendees and SOs. Attendees will receive a link via email to buy tickets.</p>',
        },
      },
    ],
  },
  {
    date: 'Sunday March 4, 2018',
    slots: [
      {
        time: '09:00 14:00',
        unified: {
          title: 'Brunch at the Blue Lagoon',
          description:
          '<p>Enjoy brunch at the Blue Lagoon as a final gathering after the conference. Then relax in the lagoon as long as you like. Includes transportation from city center, brunch buffet, and access to the lagoon.</p>' +
          '<p>The buses leave at 9am, the brunch starts at 10am and access to the lagoon starts at 11am.</p>' +
          '<p>Tickets are sold separately for both attendees and SOs. Attendees will receive a link via email to buy tickets.</p>',
        },
      },
    ],
  },
]


const soDays = [
  {
    date: 'Thursday March 1, 2018',
    noTracks: true,
    slots: [
      {
        time: '09:00 09:30',
        unified: {
          grayed: true,
          title: 'Grab your bus, meal and pool tickets at Harpa.',
        },
      },
      {
        time: '09:30 12:00',
        unified: {
          grayed: true,
          title: 'Tour the city.',
        },
      },
      {
        time: '12:00 13:00',
        unified: {
          grayed: true,
          title: 'Grab some lunch.',
        },
      },
      {
        time: '13:00 15:00',
        unified: {
          grayed: true,
          title: 'Tour the city.',
        },
      },
      {
        time: '15:00 17:00',
        unified: {
          grayed: true,
          title: 'Take a dip in <a class="u-base-link" href="http://icelandictimes.com/laugardalslaug-the-most-popular-swimming-pool-in-reykjavik/">Laugardalslaug swimming pool</a>.',
        },
      },
      {
        time: '17:00 17:30',
        unified: {
          grayed: true,
          title: 'Arrive back to Harpa.',
        },
      },
    ],
  },
  {
    date: 'Friday March 2, 2016',
    noTracks: true,
    slots: [
      {
        time: '09:30 9:45',
        unified: {
          grayed: true,
          title: 'Please arrive early, bus leaves at 9:45.',
        },
      },
      {
        time: '9:45 18:00',
        unified: {
          grayed: true,
          title: 'The Golden Circle day trip. See Geysir, Gullfoss and Þingvellir.',
        },
      },
      {
        time: '17:30 18:00',
        unified: {
          grayed: true,
          title: 'Arrive back to Harpa.',
        },
      },
    ],
  },
]

/*
function trackFor(slug) {
  return {
    ...speaker,
    name: speaker.name,
    title: speaker.title,
    link: `/speakers/${speaker.slug}/`,
  }
}
*/

function speakerToSlot (slot) {
  const timeSlot = slot
  const keys = Object.keys(slot).filter(
    x => ['unified', 'Hekla', 'Katla'].indexOf(x) !== -1
  )

  timeSlot.tracks = keys.map(type => slot[type])

  return timeSlot
}

function mapDays (days) {
  return days.map(day_ => {
    const day = day_
    day.slots = day.slots.map(speakerToSlot)
    return day
  })
}

export const conference = mapDays(conferenceDays)
export const so = mapDays(soDays)
