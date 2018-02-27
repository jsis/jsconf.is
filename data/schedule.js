// eslint-disable-next-line
'use strict'

import speakers from './speakers'

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
        time: '08:00 09:00',
        unified: {
          grayed: true,
          title: 'Coffee and badge pick-up',
        },
      },
      {
        time: '09:00 09:30',
        unified: {
          grayed: true,
          title: 'Opening JSConf Iceland 2018',
        },
      },
      {
        time: '09:30 10:00',
        unified: 'anna-henningsen',
      },
      {
        time: '10:00 10:30',
        unified: 'dan-abramov',
      },
      {
        time: '10:30 11:10',
        unified: {
          grayed: true,
          title: 'Break',
        },
      },
      {
        time: '11:10 11:40',
        Hekla: 'michael-henretty',
        Katla: 'david-khourshid',
      },
      {
        time: '11:50 12:20',
        Hekla: 'bryan-hughes',
        Katla: 'will-klein',
      },
      {
        time: '12:20 13:30',
        unified: {
          grayed: true,
          title: 'Lunch',
        },
      },
      {
        time: '13:30 14:00',
        Hekla: 'nicole-chung',
        Katla: 'raisa-cuevas',
      },
      {
        time: '14:10 14:40',
        Hekla: 'carolyn-stransky',
        Katla: 'halldor-and-thordur',
      },
      {
        time: '14:50 15:20',
        Hekla: 'kate-compton',
        Katla: 'dominik-kundel',
      },
      {
        time: '15:20 15:50',
        unified: {
          grayed: true,
          title: 'Break',
        },
      },
      {
        time: '15:50 16:20',
        Hekla: 'dan-gebhardt',
        Katla: {
          grayed: true,
          title: 'Lightning talks ⚡️',
        },
      },
      {
        time: '16:30 17:00',
        Hekla: 'maja-wichrowska',
        Katla: {
          grayed: true,
          title: 'Lightning talks ⚡️',
        },
      },
      {
        time: '18:00 23:00',
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
        time: '09:00 10:00',
        unified: {
          grayed: true,
          title: 'Coffee',
        },
      },
      {
        time: '10:00 10:30',
        Hekla: 'sarrah-vesselov',
        Katla: 'opher-vishnia',
      },
      {
        time: '10:40 11:10',
        Hekla: 'catherine-meade',
        Katla: 'john-feminella',
      },
      {
        time: '11:20 11:50',
        Hekla: 'arun-michael-dsouza',
        Katla: 'abhinav-rastogi',
      },
      {
        time: '11:50 13:00',
        unified: {
          grayed: true,
          title: 'Lunch',
        },
      },
      {
        time: '13:00 13:30',
        Hekla: 'jean-yves-perrier',
        Katla: 'armagan-amcalar',
      },
      {
        time: '13:40 14:10',
        Hekla: 'madlaina-kalunder',
        Katla: 'nara-kasbergen',
      },
      {
        time: '14:10 14:50',
        unified: {
          grayed: true,
          title: 'Break',
        },
      },
      {
        time: '14:50 15:20',
        unified: 'martin-kleppe',
      },
      {
        time: '15:20 15:50',
        unified: 'sean-larkin',
      },
      {
        time: '15:50 16:20',
        unified: 'sarah-drasner',
      },
      {
        time: '16:20 17:00',
        unified: {
          grayed: true,
          title: 'TBA',
        },
      },
      {
        time: '17:00 17:30',
        unified: {
          grayed: true,
          title: 'Closing remarks and family photograph',
        },
      },
      {
        time: '18:00 23:00',
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
          title: 'Arrive back at Harpa.',
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
    noTracks: true,
    slots: [
      {
        time: '09:30 09:45',
        unified: {
          grayed: true,
          title: 'Please arrive early, bus leaves at 9:45.',
        },
      },
      {
        time: '09:45 18:00',
        unified: {
          grayed: true,
          title: 'The Golden Circle day trip. See Geysir, Gullfoss and Þingvellir.',
        },
      },
      {
        time: '17:30 18:00',
        unified: {
          grayed: true,
          title: 'Arrive back at Harpa.',
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

function trackFor(slug) {
  const speaker = speakers.find(x => x.slug === slug)
  if (!speaker) {
    throw new Error(`Can\'t find speaker ${slug}`)
  }
  return {
    ...speaker,
    name: speaker.name,
    title: speaker.title,
    link: `/speakers/${speaker.slug}/`,
  }
}

function speakerToSlot (slot) {
  const timeSlot = slot
  const keys = Object
    .keys(slot)
    .filter(x => ['unified', 'Hekla', 'Katla'].includes(x))

  timeSlot.tracks = keys.map(type => {
    if (typeof slot[type] === 'string') {
      const track = trackFor(slot[type])
      track.track = type
      return track
    }

    return slot[type]
  })

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
