const speakers = [{
  name: 'Raquel Vélez',
  slug: 'raquel-velez',
  twitter: 'rockbot',
  github: 'rockbot',
  website: 'https://rckbt.me/',
  companyWebsite: 'https://www.npmjs.com/',
  company: 'npm',
  description: '<p>Senior Software Developer at npm, Inc. She studied Mechanical Engineering at Caltech and worked as a roboticist for 8 years.</p>',
}, {
  name: 'Lin Clark',
  slug: 'lin-clark',
  twitter: 'linclark',
  github: 'linclark',
  website: 'http://lin-clark.com/',
  companyWebsite: 'https://www.mozilla.org',
  company: 'Mozilla',
  title: 'A cartoon guide to performance in React',
  description: '<p>Everyone talks about how performant React is... but why? What makes  people talk about how speedy React is? In this talk, you\'ll learn <strong>why</strong> people talk about React being fast, and what you can do to make it faster.</p>',
}, {
  name: 'Jan Lehnardt',
  slug: 'jan-lehnardt',
  twitter: 'janl',
  github: 'janl',
  website: 'http://writing.jan.io/',
  companyWebsite: 'https://neighbourhood.ie/',
  company: 'Neighbourhoodie Software',
  description: '<p>Co-curator for JSConf EU, the project lead of Apache CouchDB and co-inventor of Hoodie. He lives in Berlin and likes to change the world.</p>',
}, {
  name: 'Brian Holt',
  slug: 'brian-holt',
  twitter: 'holtbt',
  github: 'btholt',
  website: '',
  companyWebsite: 'https://www.netflix.com',
  company: 'Netflix',
  title: 'React: Learn Once Write Anywhere',
  description: `<p>React has set the front end development world on fire. It seems nearly over night that React became the darling of JavaScripts developers everywhere and before you knew it, sites like Netflix, reddit, Khan Academy, Airbnb, and more were rewriting entire front ends to harness that power.</p>
  <p>The React inferno isn’t contained to just the DOM though; other communities have taken notice and are beginning to harness the power of the one-way data flow that React enforces. In this talk we’ll give you a brief overview of why React is so ®evolutionary for user interface development and some other communities that have taken hold of it as well. We’ll talk about seeing React everywhere from the DOM to the terminal, native mobile, game consoles, three dimensional environments, and even virtual reality.</p>

  <h4>Details</h4>
  <p>The talk is done through the media that it talks about. We’ll start in the terminal, using react-blessed to generate the slides. We move to the DOM to talk about React in the browser. We then (through broadcasting iOS via Quicktime) will talk about React Native via an iPhone. As we move to React in embedded environments, we’ll run a PS4 through a Mac to show React run on a TV. We’ll go back to the browser to talk about react-three and show the slides written using react-three.</p>
  <p>Finally, to melt everyone’s mind, we’ll use aframe-react and WebVR to display the slides through an Oculus and show how React can be used in conjunction with WebVR. Very fun and compelling talk!</p>
<div class="workshop">
  <hr>
  <h4><a href="/tickets">WORKSHOP</a></h4>
  <h4>Using ES6 & React</h4>

  <p>You’ve likely have heard of React by now. It’s is a great way to build user interfaces; it promotes clean separation of components and reusable code; and, while it may wax verbose in terms of characters typed, it’s really simple to maintain once you have written it.</p>
  <p>Brian Holt takes attendees from knowing nothing about React to writing React in its most novel format—using all of the ES6 features. Brian covers killer concepts like ES6 classes, arrow functions, let and const, and Promises—the new way of binding context in ES6. Brian also demonstrates Node.js server-side rendering of React (also know as universal rendering). You’ll discover exactly how React works by building several complete React components, including a small app. This workshop is equally appropriate for people with zero knowledge of React and people who have been writing React with the older, ES5-compatible syntax. No knowledge of ES6 is necessary.</p>

  <h5><strong>Intended audience</strong></h5>
  <p>This course is for intermediate JavaScript programmers:</p>
  <ul>
    <li>front-end developers</li>
    <li>back-end developers who want to understand about ES6 and React</li>
    <li>code-savvy web designers</li>
  </ul>
  <p>Prerequisites:</p>
  <ul>
    <li>a good understanding of ES5 JavaScript</li>
    <li>familiarity with working at a command line</li>
    <li>Node.js installed before the course, version 4.2+ is preferred</li>
  </ul>

  <h5><strong>What you’ll learn—and how you can apply it</strong></h5>
  <p>By the end of this training class, you’ll understand:</p>
  <ul>
    <li>what React is, its purpose, and why you may want to use it</li>
    <li>how to bootstrap a new app and get React working for you</li>
    <li>the complete lifecycle of a React component</li>
    <li>some battle-won React best practices from using React code in production</li>
    <li>the weird, cool, new JavaScript dialect called JSX</li>
  </ul>
  <p>Moreover, you will have built several complete React components, including a small app.</p>

  <h5><strong>Materials or downloads needed in advance</strong></h5>
  <p>Please clone <a href="https://github.com/btholt/es6-react-pres" target="_blank">btholt/es6-react-pres</a>, npm install the dependencies, and have Node.js 4.x+ installed</p>
</div>
`,
}, {
  name: 'Liv Erickson',
  slug: 'liv-erickson',
  twitter: 'misslivirose',
  github: 'misslivirose',
  website: 'http://livierickson.com',
  companyWebsite: 'https://www.microsoft.com',
  company: 'Microsoft',
  title: 'Why you should care about the VR Web - and how to build it!',
  description: `<p>The momentum behind the virtual reality industry is growing rapidly as immersive technologies begin to shape endless new experiences in our world. Today's web ecosystem is gearing up for virtual reality, and browser-based VR shows a lot of promise over the coming years. In this talk, we'll cover why the movement to create a VR-enabled web will drive innovation across industries, the state of the VR Web in 2016, and how to get started building VR-enabled applications today in a browser near you.</p>`,
}, {
  name: 'Vitaly Friedman',
  slug: 'vitaly-friedman',
  twitter: 'smashingmag',
  github: '',
  website: '',
  companyWebsite: 'https://www.smashingmagazine.com',
  company: 'Smashing Magazine',
  title: 'Reactive Animations with CSS Variables',
  description: `<p>With HTTP/2, Service Workers, Responsive Images, Flexbox, SVG and Font Loading API now available in browsers, we all are still trying to figure out just the right strategy for designing and buildings responsive websites just in time. We want to use all of these technologies, but how can we use them efficiently, and how do we achieve it within a reasonable amount of time?</p>

  <p>In this talk, Vitaly Friedman, editor-in-chief of Smashing Magazine, will be looking into a strategy for crafting fast, resilient and flexible responsive design systems by utilizing all of those wonderful shiny web technologies we have available today. We'll also talk about dealing with legacy browsers and will cover a few dirty little techniques that might ensure that your responsive websites will stay relevant, flexible and accessible in the years to come.</p>

  <div class="workshop">
    <hr>
    <h4><a href="/tickets">WORKSHOP</a></h4>
    <h4>Smart Responsive Design Patterns: Front-End & Performance</h4>
    <p>With HTTP/2, Service Workers, Responsive Images, Flexbox, SVG, WAI-ARIA roles and Font Loading API now available in browsers, we all are still trying to figure out just the right strategy for designing and buildings responsive websites efficiently. We want to use all of these technologies and smart processes like atomic design, but how can we use them efficiently, and how do we achieve it within a reasonable amount of time?</p>
    <p>In this full-day front-end workshop, Vitaly Friedman, editor-in-chief of Smashing Magazine, will be looking into a strategy for crafting fast, resilient and flexible responsive design systems by utilising all of those wonderful shiny web technologies we have available today. We’ll also talk about dealing with legacy browsers and will cover a few dirty little front-end techniques that might ensure that your responsive websites will stay relevant, flexible and accessible in the years to come.</p>
    <h5><strong>Intended audience</strong></h5>
    <p>The workshop is intended for intermediate/advanced designers and developers who have an understanding of responsive design and how it works. We won’t cover the basics — instead, the workshops covers more advanced techniques used in responsive design.</p>
    <h5><strong>This workshop will cover</strong></h5>
    <ul>
      <li>content choreography, internationalisation and localisation issues</li>
      <li>layout techniques (flexbox)</li>
      <li>resolution independence (SVG)</li>
      <li>compressive images (optimization and techniques)</li>
      <li>responsive images (technical perspective)</li>
      <li>responsive iframes and media: audio, video (incl. subtitles)</li>
      <li>accessibility issues</li>
      <li>performant components (carousels, video etc.)</li>
      <li>deferring and lazy-loading JavaScript (techniques, tools)</li>
      <li>dealing with web fonts (options, strategy)</li>
      <li>performance issues/strategy (best practices + HTTP/2 + HTTPS + prefetching techniques)</li>
      <li>maintenance issues (e.g. dealing with legacy browsers)</li>
      <li>responsive HTML email newsletters</li>
      <li>tooling (performance, frameworks, testing, quality assurance)</li>
      <li>(optionally) offline support/experience + debugging</li>
    </ul>
    <h5><strong>What hardware/software do you need?</strong></h5>
    <p>No laptop needed, just bring lots of creativity!</p>
  </div>
  `,
}, {
  name: 'Mariko Kosaka',
  slug: 'mariko-kosaka',
  twitter: 'kosamari',
  github: 'kosamari',
  website: 'http://kosamari.com',
  companyWebsite: 'http://scripto.org/',
  company: 'Scripto',
  title: 'Making a Robot Eye with JavaScript - or Magic of Computer Vision Unraveled',
  description: `<p>Have you ever wondered how computers "see" images? Do you want to work on an AR (Augmented Reality) project or build a NodeBot that can recognize your face? When you work with an image as your data input, sooner or later you'll encounter the magic term "Computer Vision.</p>
<p>It can be intimidating to some. At first, that led me to choose a powerful library that works like magic in an unfamiliar language (C++). It felt like library was a black box and I had no control. I started wonder, what is so magical about computer vision? After all it is just code someone wrote. Can we unravel it? and reconstruct in JavaScript??</p>
<p>The answer is YES. In this talk, we'll start by getting image data from canvas object, then transform the data to alter an appearance of the image. You will get first insight into what data looks like to a browser (hint: it's just an array of numbers !). Finally, we'll go through simple image analysis process to build your own AR app in vanilla JavaScript!</p>`,
}, {
  name: 'Max Goodman',
  slug: 'max-goodman',
  twitter: 'chromakode',
  github: 'chromakode',
  website: 'http://chromakode.com',
  companyWebsite: '',
  company: '',
  title: 'Bicycle.js',
  description: `<p>Did you know that there’s an experimental Web Bluetooth API under development in Chrome? Let’s explore this brave new world of hardware-accessing offline-accessible web apps together by building a fully functional mobile bike computer. We’ll talk about the BLE protocol and use Web Bluetooth to connect to Bluetooth Smart sensors providing real-time heart rate, speed, and pedaling cadence metrics. Then, we’ll dive into Functional Reactive Programming using the cycle.js library to represent and transform sensor data as observable streams. It’s going to be a wild ride, though be warned: there will be some wheely bad bike puns.</p>`,
}, {
  name: 'Alejandro Oviedo',
  slug: 'alejandro-oviedo',
  twitter: 'a0viedo',
  github: 'a0viedo',
  website: '',
  companyWebsite: 'https://github.com/js-squad',
  company: 'nearForm',
  title: 'Demystifying (JavaScript) engines',
  description: `<p>How a JavaScript engine works? What are its basic components? How to measure its performance? What is JIT compilation? Stigmatization: is JavaScript fast enough? are some of the questions I think we currently fail to answer in a, somewhat, short and direct way.</p>`,
}, {
  name: 'Katrina Uychaco',
  slug: 'katrina-uychaco',
  twitter: 'kuychaco',
  github: 'kuychaco',
  website: '',
  companyWebsite: 'https://github.com',
  company: 'GitHub',
  title: 'Spinning up an Electron App - Desktop Apps in JavaScript',
  description: `<p>Building a compelling desktop app experience doesn’t have to be a major undertaking; Electron is a free and open source framework from GitHub that allows you to build desktop applications using the HTML, CSS, and JavaScript skills you already know.</p>
<p>In this talk, we’ll look at how Electron works, explore some of its most useful APIs, and walk through how you can get started building your own cross-platform desktop apps with ease.</p>`,
}, {
  name: 'Justin Falcone',
  slug: 'justin-falcone',
  twitter: 'modernserf',
  github: 'modernserf',
  website: 'http://justinfalcone.com',
  companyWebsite: '',
  company: '',
  title: 'Why is a Guinea Pig Like a Microservice?',
  description: `<p>Functional state systems like Redux have made web development easier to reason about -- how can we apply these techniques to complex distributed systems? And what lessons from the distributed world can we bring back to web development? This talk explores concurrency models through the lens of a virtual guinea pig colony, and covers topics including actors, sagas, emergent behavior, and the unexpected virtue of object-oriented programming.</p>`,
}, {
  name: 'Amy Cheng',
  slug: 'amy-cheng',
  twitter: 'am3thyst',
  github: 'amycheng',
  website: 'http://amycheng.info',
  companyWebsite: 'https://www.brooklynmuseum.org/',
  company: 'Brooklyn Museum',
  title: 'Recreate Masterpieces of Modern Art with JavaScript!',
  description: `<p>JavaScript is not just for web apps! This talk looks at JavaScript as an artistic and visual programming language and serves as a primer on generative art. The audience will learn how to recreate one of Damien Hirst’s Spot paintings and one of Piet Mondrian’s Composition paintings in the browser. JavaScript is commonly used to manage interactivity, data, and application states. However, we will use masterpieces of modern art to illustrate JavaScript’s potential to manipulate visual space, color and shape.</p>`,
}, {
  name: 'Tilde Ann Thurium',
  slug: 'tilde-ann-thurium',
  twitter: 'annthurium',
  github: 'annthurium',
  website: '',
  companyWebsite: 'https://www.pinterest.com',
  company: 'Pinterest',
  title: 'Pivoting to React, at scale',
  description: `<p>In 2013, Pinterest built an in-house modular component framework on top of Backbone / Django.</p>
<p>In 2016, we pivoted to using React.  Here are some obstacles we overcame to make our app faster and easier to reason about.</p>`,
}, {
  name: 'Tsubomi Imamura',
  slug: 'tsubomi-imamura',
  twitter: '',
  github: 'leitsubomi',
  website: '',
  companyWebsite: 'https://www.netflix.com',
  company: 'Netflix',
  title: 'Breaking the monolith with Node and Docker at Netflix',
  description: `<p>At Netflix, we run Node servers at scale for our website, TV and mobile devices’ UI data API services. In this talk, I will share our journey of how we migrated from data API service monolith to well isolated micro services running in Node Docker containers. Using Docker containers and tooling infrastructure, we provide a Node.js platform as a service, making debugging, testing and deployment easy to perform. Every software releases can be consistently reproduced across the stack. UI engineers can focus on developing core business logic to be more productive.</p>`,
}, {
  name: 'Nick Doiron',
  slug: 'nick-doiron',
  twitter: 'mapmeld',
  github: 'mapmeld',
  website: 'http://mapmeld.com',
  companyWebsite: 'http://asiafoundation.org/',
  company: 'The Asia Foundation',
  title: 'If One Laptop per Child were started today, how JavaScript-y would it be?',
  description: `<p>In 2005, it looked like the future of global education might be a custom laptop and OS for $100. Today you could use that money to buy two Android tablets and access eBooks, courses, and programming tutorials on the web. An OLPC hacker reflects on teaching computing in Uganda, Uruguay, and our new JavaScript world.</p>`,
}, {
  name: 'Alex Kaminsky',
  slug: 'alex-kaminsky',
  twitter: 'alexkaminsky',
  github: 'believeinalex',
  website: 'http://believeinalex.com',
  companyWebsite: 'http://www.reuters.tv/',
  company: 'Reuters TV',
  title: 'The First Engineer\'s Dilemma',
  description: `<p>So you've been hired as the first web engineer to work on a major product and have been given complete freedom as to the frameworks, libraries, and tools you wish to use. How do you begin to choose? With the bevy of options available to you, how to you choose a stack that will stand the test of time? I walk through this dilemma through the lens of my own experience building ReutersTV.</p>`,
}, {
  name: 'David Khourshid',
  slug: 'david-khourshid',
  twitter: 'davidkpiano',
  github: 'davidkpiano',
  website: 'https://codepen.io/davidkpiano',
  companyWebsite: 'https://www.counsyl.com/',
  company: 'Counsyl',
  title: 'Reactive Animations with CSS Variables',
  description: `<p>CSS variables are here, and they're much more powerful than you think. In this presentation, we will explore the many possibilities with mixing RxJS with CSS variables, including how they can be used to bring your web projects to life with dynamic animations that react to user input. And yes, there will be plenty of demos.</p>`,
}, {
  name: 'Jenna Zeigen',
  slug: 'jenna-zeigen',
  twitter: 'zeigenvector',
  github: 'jennazee',
  website: 'http://jenna.is',
  companyWebsite: 'https://www.digitalocean.com/',
  company: 'DigitalOcean',
  title: 'On How Your Brain is Conspiring Against You Making Good Software',
  description: `<p>If there's anything that decades of psychology research have shown us, it's that human cognition is full of bias and fallacy. Even smart software engineers are not immune to being humans. In fact, there's so many things keeping us from being the best developers we could be, preventing us from planning our work effectively to assembling the best teams to being productive in that open office.</p>`,
}, {
  name: 'David Luecke',
  slug: 'david-luecke',
  twitter: 'daffl',
  github: 'daffl',
  website: '',
  companyWebsite: '',
  company: '',
  title: 'Meet MySam - An open AI experiment',
  description: `<p>Apple has Siri, Google has Google Now, Facebook has M. Why can't we have our <strong>own</strong> virtual assistant?</p>
<p>In this talk I'd like you to meet MySam, an open-source "intelligent" assistant that you can train yourself and extend with plugins written in JavaScript and HTML5.</p>`,
}, {
  name: 'Mihai Cîrlănaru',
  slug: 'mihai-cirlanaru',
  twitter: 'mcirlanaru',
  github: 'mihai',
  website: 'http://mihaicirlanaru.com',
  companyWebsite: 'https://www.hudl.com/',
  company: 'Hudl',
  title: 'Speech Recognition on the Web',
  description: `<p>We've all been impressed by the likes of <em>Siri</em>, <em>Google Now</em>, and <em>Cortana</em>, for understanding our spoken words, but is it possible to take advantage of the powerful speech recognition behind such services on the web? This talk will explore the <strong>Web Speech API</strong> and how it can empower web apps for improved <em>accessibility</em> and new ways of <em>user interaction</em>.</p>`,
}, {
  name: 'Felipe Ribeiro',
  slug: 'felipe-ribeiro',
  twitter: 'felipernb',
  github: 'felipernb',
  website: 'https://feliperibeiro.com',
  companyWebsite: 'https://www.spotify.com',
  company: 'Spotify',
  title: 'JavaScript @ Spotify',
  description: `<p>A talk about the architecture of the Spotify Desktop application, which is currently based on Web technologies. How we organize our teams, war stories and lessons learned during our development process.</p>
<p>This is not a talk about one specific framework or tool, but about how we work with JavaScript in an environment that is a bit different from most web-based apps, the experiences we've had and some ideas that can be useful and applicable in different contexts.</p>`,
}, {
  name: 'Dag-Inge Aas',
  slug: 'dag-inge-aas',
  twitter: 'daginge',
  github: 'dagingaa',
  website: 'http://daginge.com',
  companyWebsite: 'https://appear.in',
  company: 'appear.in',
  title: 'User experience is everything',
  description: `<p>This talk will not be about a specific technology or another groundbreaking step forwards for JavaScript. Instead, it will focus on one of the most basic things we, as technologists, so often forget. Because your users, be that developers or the average human being, don't fundamentally care about how things work under the hood. All they care about is that it works, and that's it's easy to use. In this talk I will tell you a story of how I came to realise this, and some of the things I think are important for all of us to keep in mind.</p>`,
}, {
  name: 'Azat Mardan',
  slug: 'azat-mardan',
  twitter: 'azat_co',
  github: 'azat-co',
  website: 'http://webapplog.com',
  companyWebsite: 'https://www.capitalone.com',
  company: 'Capital One Financial Corporation',
  title: 'You Don\'t Know Node.js',
  description: `<p>"Node.js is fast and scalable web-oriented non-blocking I/O built on top of Google Chrome V8 engine. Almost every web developer uses Node or Node-based tools to some extent. However, Node has some really powerful features worth knowing.</p>
<p>This talk dives deep into the core mechanisms of the Node.js platform and some of its most interesting features such as Event Loop, Streams and buffers, Process and global, Event emitters, Clusters, AsyncWrap, Domain and uncaughtException, and C++ addons.</p>`,
}, {
  name: 'Denis Rechkunov',
  slug: 'denis-rechkunov',
  twitter: 'pragmadash',
  github: 'pragmadash',
  website: 'http://catberry.org',
  companyWebsite: 'https://www.amazon.com',
  company: 'Amazon',
  title: 'Progressive Rendering – how to make your app render sooner',
  description: `<p>Time To First Byte (TTFB) is a measurement used for the responsiveness of a web-server. TTFB measures the duration from the user or client making an HTTP request to the first byte of the page being received by the client's browser.</p>
<p>This value has a high impact on the perceived performance of your web application. This makes TTFB an important metric as it directly correlates with your customers happiness and willingness to stay and interact with your application, especially if your app needs much time to request data for building a page.</p>
<p>I'll talk about Node.js streams, the progressive rendering approach and how we can use them to make our web-app look blazing fast.</p>`,
}, {
  name: 'Seth Samuel',
  slug: 'seth-samuel',
  twitter: 'sethfsamuel',
  github: 'sethfsamuel',
  website: '',
  companyWebsite: 'http://www.originate.com',
  company: 'Originate',
  title: 'Arbitrary Computation on the GPU Using WebGL',
  description: `<p>WebGL is already widely in use for 3D graphics and image processing but could be used for much more. We'll learn how to pass arbitrary data to the GPU for parallel processing, how to get that processed data back into Javascript, and all the reasons this doesn't work even when it should.</p>`,
}, {
  name: 'Dan Callahan',
  slug: 'dan-callahan',
  twitter: 'callahad',
  github: 'callahad',
  website: 'http://dancallahan.info',
  companyWebsite: 'https://www.mozilla.org',
  company: 'Mozilla',
  title: 'The New Mobile Web: Service Worker, Push, and App Manifests',
  description: `<p>Compared to native apps, mobile websites have historically been at a disadvantage: no installation, no push notifications, and they only work when you're online. This year, that changed. Browser vendors have worked together to implement open standards that address each of these shortcomings. This session examines how the Service Worker, Push, and App Manifest specifications fill the gap between web and native.</p>`,
}];

// Sort them by name
speakers.sort((speakerA, speakerB) => speakerA.name.localeCompare(speakerB.name));

module.exports = speakers;
