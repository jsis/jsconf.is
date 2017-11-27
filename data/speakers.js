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
  {
    name: 'Catherine Meade',
    slug: 'catherine-meade',
    twitter: 'catheraaine',
    github: 'catheraaine',
    website: 'http://catheraaine.com',
    companyWebsite: 'https://seesparkbox.com',
    company: 'Sparkbox',
    title: 'GitHub Pull Requests for Everyone',
    description: `
    <p>Reviewing a pull request can feel like a chore. If done poorly, PR reviews can mean a few hours of attempting to understand both the problem and the solution, then checking that the result matches the design. Sure, many of us have the luxury of walking to our coworker’s desk and getting a walk through. But what if the other dev isn’t free? What if they live in another time zone? What if you need a project manager or designer to look at your work, and they don’t have a local setup or much dev experience? </p>
    <p>In this session, we’ll go over some tips and technologies to make your pull request process a bit smoother. We’ll discuss:<br>
    - Writing clear issues/stories to build a good foundation<br>
    - Tools you can use for reviewing work with remote coworkers<br>
    - Keeping design reviews from turning into blockers<br>
    - Adding testing instructions to your PR description<br>
    - Leaving positive feedback so no one goes home grumpy</p>
    `.trim(),
    bio: `Catherine builds responsive websites up and down the stack with Sparkbox, focusing recently on a single enterprise level design system. Catherine has a strong passion for education; she spends her free time volunteering with Girl Develop It, sitting on the local leadership team and teaching code classes. Her other hobbies include reading, video and tabletop games, and making cat jokes. Twitter (and all the other things) as @catheraaine.`,
  },
  {
    name: 'Dan Gebhardt',
    slug: 'dan-gebhardt',
    twitter: 'dgeb',
    github: 'dgeb',
    website: '',
    companyWebsite: 'http://cerebris.com',
    company: 'Cerebris',
    title: 'Give Apps Online Superpowers by Optimizing them for Offline',
    description: `
    <p>Applications that are able to operate offline require a certain level of rigor for storing state and tracking mutations. It turns out that an application built with this rigor can also provide a better online user experience, by applying and tracking changes optimistically yet deterministically.</p>
    <p>This talk will provide an overview of the engineering required to build a successful offline web application. It will discuss how to track mutations and synchronize them using an approach inspired by git, as well as how to develop a natural UX that clearly represents the state of data in transition.</p>
    `.trim(),
    bio: `Dan has been developing web applications since the dark ages of the web (i.e. the late 90s). He's on the Ember.js and Glimmer.js core teams, an editor of the JSON:API spec, and the creator of Orbit.js. He loves to travel and hike with his family and fluffy dog.`,
  },
  {
    name: 'John Feminella',
    slug: 'john-feminella',
    twitter: 'jxxf',
    github: 'fj',
    website: 'http://jxf.me/',
    companyWebsite: 'https://pivotal.io/',
    company: 'Pivotal',
    title: 'Building with Blockchains: Better Distributed Applications',
    description: `
    <p>Blockchains are a new kind of data structure with many interesting applications, and are perhaps most notable for their use in cryptocurrencies like Bitcoin. In this talk, we’ll explore what a blockchain is, where and how you might use them (and when you shouldn't, despite what the hype might tell you!), and show how we might build our own in JS.</p>
    `.trim(),
    bio: `John Feminella is an avid technologist, occasional public speaker, and curiosity advocate. He serves as an advisor to Pivotal, where he works on helping enterprises transform the way they write, operate, and deploy software. He's also the cofounder of a tiny analytics monitoring and reporting startup named UpHex. John lives in Charlottesville, VA and likes meta-jokes, milkshakes, and referring to himself in the third person in speaker bios.`,
  },
  {
    name: 'Will Klein',
    slug: 'will-klein',
    twitter: 'willslab',
    github: 'willklein',
    website: 'http://willkle.in/',
    companyWebsite: '',
    company: 'Ecliptic',
    title: 'End to End Testing: The Game Has Changed',
    description: `<p>Testing our JavaScript apps has come a long way. For years we relied on Selenium Webdriver to automate browser testing from outside the browser. Now we can use tools like Cypress to interact from the same JavaScript runtime as our app, without relying on remote APIs, language bindings, or browser-specific drivers.</p><p>Let's explore how Cypress created a new testing platform to enable an awesome developer experience. This includes "native" debugging and time travel capabilities. We'll walkthrough using Cypress and how it all works, so we can deliver better, well-tested software.</p>`.trim(),
    bio: `Will is a developer and consultant at Ecliptic.io. He co-organizes ReactJS Denver, and enjoys sharing what he's learned at meetups and conferences. He is also a proud father and avid board gamer.`,
  },
  {
    name: 'Maja Wichrowska',
    slug: 'maja-wichrowska',
    twitter: 'majapw',
    github: 'majapw',
    website: '',
    companyWebsite: 'https://www.airbnb.com/',
    company: 'Airbnb',
    title: 'Do the Right (to Left) Thing: Directional Content in React',
    description: `<p>In 2017, Airbnb supported 27 languages and had developed robust translation tools that made it easy to add more. We launched Croatian in May with little overhead beyond setting up the new domain and translating phrases. However, this was not true for all new languages; our next most requested language, Hebrew, posed a unique challenge. Because it reads right-to-left, the entire Hebrew UI must be flipped. Browsers only handle reversing the DOM structure, but styling and interactions must be coded manually.</p><p>This talk covers the journey of enabling right-to-left languages on airbnb.com. Recently, Airbnb has moved to a React frontend and away from Sass to a CSS-in-JS paradigm. We developed a performant and cross-browser solution for RTL that leveraged a CSS-in-JS abstraction layer to isolate the logic from our codebase. Our efforts led us most of the way to launching in Arabic and Hebrew while requiring little effort from our product engineers and with minimal disruption to their work.</p>`.trim(),
    bio: `Maja is a frontend software engineer at Airbnb. Her focus is on shared UI systems and writing sustainable code, and she maintains Airbnb's react-dates library and contributes to many other open-source repos as well.`,
  },
  {
    name: 'Nicole Chung',
    slug: 'nicole-chung',
    twitter: 'redconservatory',
    github: 'nicolechung',
    website: 'http://www.redconservatory.com/',
    companyWebsite: '',
    company: '',
    title: 'Sharing is Caring: build a peer-to-peer network with WebRTC',
    description: `<p>Yes, it’s still experimental, but you can build a peer-to-peer real-time connection using WebRTC - a connection that shares audio, video, files in a fast, highly secure, decentralized manner.</p><p>In this talk, we will cover how to open up a peer connection using JavaScript, and how to transmit data via a data channel.</p><p>We will demystify the underlying technologies of the WebRTC protocols (STUN and TURN for example) and show you that it’s possible to store files in a safe, highly secure and decentralized way.</p>`.trim(),
    bio: `As a Software Engineer at Toronto-based product studio TWG, Nicole Chung works with Node, React, and Redux to build fast and efficient user interfaces. She is also an occasional lead instructor at Canada Learning Code, a non-profit dedicated to building technical skills for all Canadians, and has mentored at HackerYou for their part-time JavaScript courses.`,
  },
]

// Sort them by name
speakers.sort((speakerA, speakerB) =>
  speakerA.name.localeCompare(speakerB.name)
)

module.exports = speakers
