// eslint-disable-next-line
'use strict'

import speakers from './speakers'

const conferenceDays = [
  {
    date: 'Wednesday August 24, 2016',
    noTracks: true,
    slots: [
      {
        time: '20:00 23:00',
        unified: {
          grayed: true,
          title: 'Welcome reception and badge pick-up at <a class="u-base-link" href="http://bryggjanbrugghus.is/?lang=en" target="_blank">Bryggjan Brugghús</a>',
        },
      },
    ],
  },
  {
    date: 'Thursday August 25, 2016',
    slots: [
      {
        time: '08:00 09:00',
        unified: {
          grayed: true,
          title: 'Breakfast and badge pick-up',
        },
      },
      {
        time: '09:00 09:45',
        unified: {
          grayed: true,
          title: 'Opening JSConf Iceland 2016',
        },
      },
      {
        time: '09:45 10:15',
        unified: 'myles-borins',
      },
      {
        time: '10:15 10:45',
        unified: 'liv-erickson',
      },
      {
        time: '10:45 11:15',
        unified: {
          grayed: true,
          title: 'Break',
        },
      },
      {
        time: '11:15 11:45',
        trackA: 'lin-clark',
        trackB: 'alex-kaminsky',
      },
      {
        time: '12:00 12:30',
        trackA: 'david-khourshid',
        trackB: 'brian-holt',
      },
      {
        time: '12:30 13:30',
        unified: {
          grayed: true,
          title: 'Lunch',
        },
      },
      {
        time: '13:30 14:00',
        trackA: 'max-goodman',
        trackB: 'katrina-uychaco',
      },
      {
        time: '14:15 14:45',
        trackA: 'dan-callahan',
        trackB: 'alejandro-oviedo',
      },
      {
        time: '15:00 15:30',
        trackA: 'dag-inge-aas',
        trackB: 'justin-falcone',
      },
      {
        time: '15:30 16:00',
        unified: {
          grayed: true,
          title: 'Break',
        },
      },
      {
        time: '16:00 16:30',
        trackA: 'amy-cheng',
        trackB: 'tsubomi-imamura',
      },
      {
        time: '16:45 17:15',
        trackA: 'vitaly-friedman',
        trackB: 'azat-mardan',
      },
      {
        time: '17:30 18:00',
        trackA: 'seth-samuel',
        trackB: 'mihai-cirlanaru',
      },
      {
        time: '19:00 23:00',
        unified: {
          grayed: true,
          title: 'Hacker party in Harpa by Mozilla!',
        },
      },
    ],
  },
  {
    date: 'Friday August 26, 2016',
    slots: [
      {
        time: '08:45 09:45',
        unified: {
          grayed: true,
          title: 'Breakfast',
        },
      },
      {
        time: '09:45 10:15',
        trackA: 'nick-doiron',
        trackB: 'heiko-behrens',
      },
      {
        time: '10:30 11:00',
        trackA: 'raquel-velez',
        trackB: 'johannes-ewald',
      },
      {
        time: '11:15 11:45',
        trackA: 'felipe-ribeiro',
        trackB: 'visnu-pitiyanuvath',
      },
      {
        time: '12:00 12:30',
        trackA: 'mariko-kosaka',
        trackB: 'tryggvi-gylfason',
      },
      {
        time: '12:30 13:30',
        unified: {
          grayed: true,
          title: 'Lunch',
        },
      },
      {
        time: '13:30 14:00',
        trackA: 'denis-rechkunov',
        trackB: {
          grayed: true,
          title: 'TBA',
        },
      },
      {
        time: '14:15 14:45',
        trackA: 'david-luecke',
        trackB: 'malte-ubl',
      },
      {
        time: '15:00 15:30',
        trackA: 'tilde-ann-thurium',
        trackB: 'berglind-osk',
      },
      {
        time: '15:30 16:00',
        unified: {
          grayed: true,
          title: 'Break',
        },
      },
      {
        time: '16:00 16:30',
        unified: 'jenna-zeigen',
      },
      {
        time: '16:45 17:15',
        unified: 'jan-lehnardt',
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
          title: 'Viking party in "Gamla bíó" by Bloomberg',
        },
      },
    ],
  },
  {
    date: 'Saturday August 27, 2016',
    noTracks: true,
    slots: [
      {
        time: '10:00 17:00',
        unified: {
          grayed: true,
          title: 'Experience Iceland by Highcharts! Four special JSConf trips to choose from. - <a class="u-base-link" href="http://jsconf.whatson.is">Buy tickets</a>',
        },
      },
      {
        time: '18:00 22:00',
        unified: {
          grayed: true,
          title: 'Blue Lagoon Farewell Dinner - <a class="u-base-link" href="https://ti.to/jsconf-is/2016">RSVP</a>',
        },
      },
    ],
  },
]

const soDays = [
  {
    date: 'Thursday August 25, 2016',
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
    date: 'Friday August 26, 2016',
    noTracks: true,
    slots: [
      {
        time: '08:45 09:00',
        unified: {
          grayed: true,
          title: 'Please arrive early, bus leaves at 09:00.',
        },
      },
      {
        time: '09:00 17:00',
        unified: {
          grayed: true,
          title: 'The Golden Circle day trip. See Geysir, Gullfoss and Þingvellir.',
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
]

function trackFor (slug) {
  const speaker = speakers.find(x => x.slug === slug)
  if (!speaker) {
    throw new Error(`Can\'t find speaker ${slug}`)
  }
  return {
    ...speaker,
    name: speaker.name,
    title: speaker.title,
    link: `/speakers/${speaker.slug}`,
  }
}

function speakerToSlot (slot) {
  const timeSlot = slot
  const keys = Object.keys(slot).filter(x => ['unified', 'trackA', 'trackB'].includes(x))

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
