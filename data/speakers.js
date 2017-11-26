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
  {
    name: 'David Khourshid',
    slug: 'david-khourshid',
    twitter: 'davidkpiano',
    github: 'davidkpiano',
    website: 'https://www.codepen.io/davidkpiano',
    companyWebsite: 'https://www.microsoft.com/',
    company: 'Microsoft',
    title: 'Simplifying Complex UIs with Finite Automata & Statecharts',
    description: `<p>As the number of possible states in your app grows, developing UIs can become exponentially more complex. With the help of finite automata, or finite state machines (FSMs), you will be able to manage your app's states in a simple, robust way, and even visualize them! In this session, we will discover how FSMs and statecharts can take your UIs to the next level, with innovative techniques for implementing, testing, and visualizing your app's finite states in a robust, automated way, with plenty of use cases, demos, and resources.</p>`,
    bio:
      'David Khourshid is a Florida-based web developer for Microsoft, a tech author, and speaker. Also a fervent open-source contributor, he is passionate about JavaScript, CSS, animation, innovative user interfaces, and cutting-edge front-end technologies. When not behind a computer keyboard, he’s behind a piano keyboard or traveling.',
  },
  {
    name: 'Carolyn Stransky',
    slug: 'carolyn-stransky',
    twitter: 'carolstran',
    github: 'carolstran',
    website: '',
    companyWebsite: 'https://www.contentful.com/',
    company: 'Contentful',
    title: 'Humanizing Your Documentation',
    description: `<p>It’s no secret that most people don’t read technical documentation for pleasure. Users often come to your docs when they are frustrated with your software, disappointed that they haven't been able to solve the problem on their own and generally feeling pretty low. This is a little sad, yeah, but being aware of these feelings is key for developers and technical writers. These emotions frame the reader’s perspective and therefore, should shape the mood of our docs. After all, when you've been stuck on a bug for hours, do you really want to read something saying 'but this is so easy'? In this talk, we’ll discuss how the language we use affects our users and the first steps towards writing accessible, approachable and use case-driven documentation.</p>`,
    bio: `Carolyn is an American journalist and JavaScript developer based in Berlin, Germany. There, she works as a technical writer for Contentful and teaches front end development in the evenings at ReDI School of Digital Integration. Her interests revolve around accessibility and technology—with a focus on online abuse, human-computer and self-care.`,
  },
  {
    name: 'Raisa Cuevas',
    slug: 'raisa-cuevas',
    twitter: 'raisaveuc',
    github: 'raisaveuc',
    website: '',
    companyWebsite: 'https://www.google.com',
    company: 'Google',
    title: 'Augmented Reality: Past, Present, Future',
    description: `<p>Big brands across various industries are starting to realize the potential of augmented reality (AR) for innovation in marketing and in product. But with AR's history dating back to 1968, why has it suddenly become the next big thing? This talk will dive into the rich history of AR to help us understand and appreciate where the technology is now. You will learn some tools to build with AR today, and understand how the technology will open up creative possibilities for our future.</p>`,
    bio: `Raisa is a Creative Engineer at Google, building digital experiences to help users understand the brand. Born and raised in San Francisco, educated in Orange County, and employed in the Silicon Valley, she eventually decided it was time to get out of her California bubble and gain some international experience. Now into her third year in London, Raisa continues to grow more passionate about understanding Google's audiences in Europe, Middle East, and Africa, and their unique needs.`,
  },
]

// Sort them by name
speakers.sort((speakerA, speakerB) =>
  speakerA.name.localeCompare(speakerB.name)
)

module.exports = speakers
