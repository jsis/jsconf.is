/* eslint-disable quotes */
const speakers = [
  {
    name: 'Dan Abramov',
    slug: 'dan-abramov',
    twitter: 'dan_abramov',
    github: 'gaearon',
    website: '',
    companyWebsite: '',
    company: '',
    title: '',
    description: '',
  },
  {
    name: 'Sarah Drasner',
    slug: 'sarah-drasner',
    twitter: 'sarah_edo',
    github: 'sdras',
    website: '',
    companyWebsite: '',
    company: '',
    title: '',
    description: '',
  },
  {
    name: 'Anna Henningsen',
    slug: 'anna-henningsen',
    twitter: 'addaleax',
    github: 'addaleax',
    website: '',
    companyWebsite: '',
    company: '',
    title: '',
    description: '',
  },
]

// Sort them by name
speakers.sort((speakerA, speakerB) =>
  speakerA.name.localeCompare(speakerB.name)
)

module.exports = speakers
