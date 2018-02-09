const companies = {
  advania: {
    name: 'Advania',
    description: '<p>Advania is a Nordic IT corporation, operating in 22 locations in Iceland, Sweden, Norway, and Denmark. The company focuses on helping customers to improve their performance with innovative use of best available IT platforms and services.  Advania serves thousands of corporate customers, multinational enterprises, governments and public institutions, big, small and medium-sized companies in all aspects of society.</p>' +
    '<p>Advania traces its roots to 1939 when an Icelandic entrepreneur founded an office equipment repair workshop in Reykjavik. In the following decades, three separate branches of IT-companies evolved in three Nordic countries, <a href="https://www.advania.is/" target="_blank">Iceland</a>, <a href="https://www.advania.se/" target="_blank">Sweden</a>, and <a href="https://www.advania.no/" target="_blank">Norway</a>. In 2012 they were braided into one and Advania was formed. For further information, please visit <a href="https://www.advania.com/" target="_blank">www.advania.com</a>.</p>',
    website: 'https://advania.com/',
    image: 'advania.png',
  },
  'kosmos-og-kaos': {
    name: 'Kosmos & Kaos',
    description: '<p>Kosmos & Kaos is a quality digital agency that' +
    ' approaches all of its projects with heart and soul. With a keen eye for design, clear goals, good craftsmanship and  exceptional knowledge in the field, we have continuously brought our clients beautiful designed & developed digital products with splendid end results.</p><p>Founded in March 2010, Kosmos & Kaos went from operating on a kitchen table, to opening two offices in less than one year. One in Reykjanesbær, and another one in Reykjavik.</p><p>Having multiple honourable mentions and awards for its work, Kosmos & Kaos have also been recognised for being a family-friendly workplace and having an impressive employee policy which keeps being improved.</p><p>We want our customers to succeed and excel. Without fluff and complicated words, we create award-winning user-friendly digital experiences. Our success speaks for itself.</p>',
    website: 'https://kosmosogkaos.is/',
    image: 'kosmos-og-kaos.svg',
  },
  tempo: {
    name: 'Tempo',
    description: null,
    website: 'https://tempo.io/',
    image: 'tempo.png',
  },
  icelandair: {
    name: 'Icelandair',
    description: null,
    website: 'http://www.icelandair.com/',
    image: 'icelandair.svg',
  },
  'wuxi-nextcode': {
    name: 'WuXi NextCODE',
    description: null,
    website: 'https://www.wuxinextcode.com/',
    image: 'wuxi-nextcode.svg',
  },
}

module.exports = {
  companies,
  sponsors: [{
    name: 'Platinum',
    ids: [
      'advania'
    ],
  }, {
    name: 'Silver',
    ids: [
      'kosmos-og-kaos',
    ],
  }, {
    name: 'Bronze',
    ids: [
      'icelandair',
      'tempo',
      'wuxi-nextcode',
    ],
  }],
}
