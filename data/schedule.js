// eslint-disable-next-line
'use strict'

import speakers from './speakers'

const description =
  '<p>We are inviting the JavaScript community to submit talks for JSConf Iceland 2018.</p><p>For more information <a target="_blank" href="http://cfp.jsconf.is/events/jsconf-iceland-2018">click' +
  ' here</a>.</p>'

const conferenceDays = [
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
]

const soDays = []

function trackFor(slug) {
  return {
    ...speaker,
    name: speaker.name,
    title: speaker.title,
    link: `/speakers/${speaker.slug}/`,
  }
}

function speakerToSlot(slot) {
  const timeSlot = slot
  const keys = Object.keys(slot).filter(
    x => ['unified', 'Hekla', 'Katla'].indexOf(x) !== -1
  )

  timeSlot.tracks = keys.map(type => {
    /*
    if (typeof slot[type] === 'string') {
      const track = trackFor(slot[type])
      track.track = type
      return track
    }
    */
    return slot[type]
  })

  return timeSlot
}

function mapDays(days) {
  return days.map(day_ => {
    const day = day_
    day.slots = day.slots.map(speakerToSlot)
    return day
  })
}

export const conference = mapDays(conferenceDays)
export const so = mapDays(soDays)
