---
title: "Maja Wichrowska"
talk: "Do the Right (to Left) Thing: Directional Content in React"
path: "/speakers/maja-wichrowska"
type: "speaker"
slug: "maja-wichrowska"
twitter: "majapw"
github: "majapw"
companyWebsite: "https://www.airbnb.com/"
company: "Airbnb"
sponsor: "airbnb"
bio: "Maja is a frontend software engineer at Airbnb. Her focus is on shared UI systems and writing sustainable code, and she maintains Airbnb's react-dates library and contributes to many other open-source repos as well."
---

<p>In 2017, Airbnb supported 27 languages and had developed robust translation tools that made it easy to add more. We launched Croatian in May with little overhead beyond setting up the new domain and translating phrases. However, this was not true for all new languages; our next most requested language, Hebrew, posed a unique challenge. Because it reads right-to-left, the entire Hebrew UI must be flipped. Browsers only handle reversing the DOM structure, but styling and interactions must be coded manually.</p><p>This talk covers the journey of enabling right-to-left languages on airbnb.com. Recently, Airbnb has moved to a React frontend and away from Sass to a CSS-in-JS paradigm. We developed a performant and cross-browser solution for RTL that leveraged a CSS-in-JS abstraction layer to isolate the logic from our codebase. Our efforts led us most of the way to launching in Arabic and Hebrew while requiring little effort from our product engineers and with minimal disruption to their work.</p>