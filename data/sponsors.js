const companies = {
  'kosmos-og-kaos': {
    name: 'Kosmos & Kaos',
    description: '<p>Kosmos & Kaos is a quality digital agency that' +
    ' approaches all of its projects with heart and soul. With a keen eye for design, clear goals, good craftsmanship and  exceptional knowledge in the field, we have continuously brought our clients beautiful designed & developed digital products with splendid end results.</p><p>Founded in March 2010, Kosmos & Kaos went from operating on a kitchen table, to opening two offices in less than one year. One in Reykjanesbær, and another one in Reykjavik.</p><p>Having multiple honourable mentions and awards for its work, Kosmos & Kaos have also been recognised for being a family-friendly workplace and having an impressive employee policy which keeps being improved.</p><p>We want our customers to succeed and excel. Without fluff and complicated words, we create award-winning user-friendly digital experiences. Our success speaks for itself.</p>',
    website: 'https://kosmosogkaos.is/',
    image: 'kosmos-og-kaos.svg'
  },
  'tempo': {
    name: 'Tempo',
    description: null,
    website: 'https://tempo.io/',
    image: 'tempo.png'
  },
  'icelandair': {
    name: 'Icelandair',
    description: null,
    website: 'http://www.icelandair.com/',
    image: 'icelandair.svg'
  },
  'wuxi-nextcode': {
    name: 'WuXi NextCODE',
    description: null,
    website: 'https://www.wuxinextcode.com/',
    image: 'wuxi-nextcode.svg'
  }
}

module.exports = {
  companies,
  sponsors: [{
    name: 'Platinum',
    ids: [],
  },{
    name: 'Silver',
    ids: [
      'kosmos-og-kaos'
    ],
  },{
    name: 'Bronze',
    ids: [
      'icelandair',
      'tempo',
      'wuxi-nextcode',
    ],
  }],
}
