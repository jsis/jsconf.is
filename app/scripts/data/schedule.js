// eslint-disable-next-line
'use strict';

const speakers = require('./speakers');

const days = [
  {
    date: 'Wednesday August 24, 2016',
    noTracks: true,
    slots: [
      {
        time: '09:00 17:00',
        unified: {
          title: 'Full day workshops with <a class="u-base-link" href="/speakers/brian-holt">Brian Holt</a> &amp; <a class="u-base-link" href="/speakers/vitaly-friedman">Vitaly Friedman</a> - <a class="u-base-link" href="https://ti.to/svef/2016-workshops" target="_blank">Buy workshop tickets</a>',
        },
      },
      {
        time: '20:00 23:00',
        unified: {
          title: 'Welcome reception and badge pick-up',
        },
      },
    ],
  },
  {
    date: 'Thursday August 25, 2016',
    slots: [
      {
        time: '08:00 09:30',
        unified: {
          title: 'Breakfast and badge pick-up',
        },
      },
      {
        time: '09:30 10:00',
        unified: {
          title: 'Opening JSConf Iceland 2016',
        },
      },
      {
        time: '10:00 10:30',
        unified: 'myles-borins',
      },
      {
        time: '10:30 11:00',
        unified: 'liv-erickson',
      },
      {
        time: '11:15 11:45',
        trackA: 'lin-clark',
        trackB: 'alex-kaminsky',
      },
      {
        time: '12:30 13:30',
        trackA: 'david-khourshid',
        trackB: 'brian-holt',
      },
      {
        time: '12:30 13:30',
        unified: {
          title: 'Lunch',
        },
      },
      {
        time: '13:30 14:00',
        trackA: 'max-goodman',
        trackB: 'tilde-ann-thurium',
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
          title: 'Party!',
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
          title: 'Breakfast',
        },
      },
      {
        time: '09:45 10:15',
        trackA: 'nick-doiron',
        trackB: { title: 'Awesome community talk: TBA.' },
      },
      {
        time: '10:30 11:00',
        trackA: 'raquel-velez',
        trackB: { title: 'Awesome community talk: TBA.' },
      },
      {
        time: '11:15 11:45',
        trackA: 'felipe-ribeiro',
        trackB: { title: 'Awesome community talk: TBA.' },
      },
      {
        time: '12:00 11:30',
        trackA: 'mariko-kosaka',
        trackB: { title: 'Awesome community talk: TBA.' },
      },
      {
        time: '12:30 13:30',
        unified: {
          title: 'Lunch',
        },
      },
      {
        time: '13:30 14:00',
        trackA: 'denis-rechkunov',
        trackB: { title: 'Awesome community talk: TBA.' },
      },
      {
        time: '14:15 14:45',
        trackA: 'david-luecke',
        trackB: { title: 'Awesome community talk: TBA.' },
      },
      {
        time: '15:00 15:30',
        trackA: 'katrina-uychaco',
        trackB: { title: 'Awesome community talk: TBA.' },
      },
      {
        time: '15:30 16:00',
        unified: {
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
          title: 'Closing remarks',
        },
      },
      {
        time: '19:00 23:00',
        unified: {
          title: 'Closing Party!',
        },
      },
    ],
  },
  {
    date: 'Saturday August 27, 2016',
    noTracks: true,
    slots: [
      {
        time: '10:00',
        unified: {
          title: 'Experience Iceland with friends and family',
        },
      },
    ],
  },
];

function trackFor(slug) {
  const speaker = speakers.find(x => x.slug === slug);
  return {
    name: speaker.name,
    title: speaker.title,
    link: `/speakers/${speaker.slug}`,
  };
}

function speakerToSlot(slot) {
  const timeSlot = slot;

  if (timeSlot.unified && typeof timeSlot.unified === 'string') {
    timeSlot.unified = trackFor(timeSlot.unified);
  }

  if (timeSlot.trackA && typeof timeSlot.trackA === 'string') {
    timeSlot.trackA = trackFor(timeSlot.trackA);
  }

  if (timeSlot.trackB && typeof timeSlot.trackB === 'string') {
    timeSlot.trackB = trackFor(timeSlot.trackB);
  }

  return timeSlot;
}

module.exports = days.map(day_ => {
  const day = day_;
  day.slots = day.slots.map(speakerToSlot);
  return day;
});
