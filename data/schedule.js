// eslint-disable-next-line
'use strict'

const description =
  '<p>Check out the speaker lineup <a href="/speakers/">' +
  ' here</a>.</p>'

const southShore = {
  time: '10:00 19:00',
  unified: {
    title: 'Community Trip',
    description:
    '<p><img src="/assets/south-coast.jpg" alt="The south shore adventure"/></p>'+
    '<p>South Coast Adventure. Waterfalls and black sand beaches on an amazing day.</p>' +
    '<p>In a single day you can see the famous waterfalls Seljalandsfoss & Skógafoss, visit Reynisfjara, the dramatic black sand beach near Vík.</p>' +
    '<p>Tour duration: 10:00 – 20:00</p>' +
    '<p>On this tour you will see:<br>• Sólheimajökull<br>• Vík<br>• Reynisfjara<br>• Reynisdrangar<br>• Skógafoss<br>• Seljalandsfoss</p>' +
    '<p>Tickets are sold separately for both attendees and SOs. Attendees will receive a link via email to buy tickets.</p>',
  },
}

const blueLagoon = {
  time: '09:00 14:00',
  unified: {
    title: 'Blue Lagoon Farewell Brunch',
    description:
    '<p>Enjoy brunch at the Blue Lagoon as a final gathering after the conference. Then relax in the lagoon as long as you like. Includes transportation from city center, brunch buffet, and access to the lagoon.</p>' +
    '<p>The buses leave at 9am, the brunch starts at 10am and access to the lagoon starts at 11am.</p>' +
    '<p>Tickets are sold separately for both attendees and SOs. Attendees will receive a link via email to buy tickets.</p>',
  },
}

const conferenceDays = [
  {
    date: new Date('Wednesday February 28, 2018'),
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
    date: new Date('Thursday March 1, 2018'),
    slots: [
      {
        time: '08:00 09:15',
        unified: {
          grayed: true,
          title: 'Coffee and badge pick-up',
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
    date: new Date('Friday March 2, 2018'),
    slots: [
      {
        time: '08:45 09:45',
        unified: {
          grayed: true,
          title: 'Coffee',
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
    date: new Date('Saturday March 3, 2018'),
    slots: [
      southShore,
    ],
  },
  {
    date: new Date('Sunday March 4, 2018'),
    slots: [
      blueLagoon,
    ],
  },
]


const soDays = [
  {
    date: new Date('Wednesday February 28, 2018'),
    slots: [
      {
        time: '20:00 23:59',
        unified: {
          title: 'Welcome Reception at Hard Rock',
          description: '<p>Come to the welcome reception, meet conference attendees and other' +
          ' SOs at Hard Rock. The reception is situated on the famous Lækjargata, in the heart' +
          ' of Reykjavik City. Hard Rock Cafe Reykjavik contains three floors, each with its own distinctive vibe.</p>' +
          '<p>We look forward to seeing you!</p>',
        },
      },
    ],
  },
  {
    date: new Date('Thursday March 1, 2018'),
    slots: [
      {
        time: '09:00 09:30',
        unified: {
          grayed: true,
          title: 'Grab your Hop-On, Hop-Off bus tickets at Harpa.',
        },
      },
      {
        time: '09:30 17:00',
        unified: {
          grayed: true,
          title: 'Tour the city.',
        },
      },
      {
        time: '17:00 17:30',
        unified: {
          grayed: true,
          title: 'Arrive back to Harpa.',
        },
      },
      {
        time: '19:00 23:00',
        unified: {
          grayed: true,
          title: 'Party at Ægisgarður',
        },
      },
    ],
  },
  {
    date: new Date('Friday March 2, 2018'),
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
    date: new Date('Saturday March 3, 2018'),
    slots: [
      southShore,
    ],
  },
  {
    date: new Date('Sunday March 4, 2018'),
    slots: [
      blueLagoon,
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
