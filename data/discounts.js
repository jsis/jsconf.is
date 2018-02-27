const discounts = [
  {
    company: 'satt',
    discount: '15% off food',
    description:
      'Satt breakfast buffet from 6:30-10:00, lunch buffet from 11:30-14:30 and dinner buffet from 18:00-22:00. Satt also has a brunch on weekends between 11:30 and 14:00. Happy Hour at Satt, everyday between 16:00 and 18:00.',
  },
  {
    company: 'austur',
    discount: 'Drinks: 2 for 1',
    description:
      '2 for 1 of almost everything from 23:00 on Thursday, Friday and Saturday.',
  },
  {
    company: 'islenski-barinn',
    discount: '15% off food and a large beer for 800kr.',
    description: '15% off menu - doesn’t apply to other offers.',
  },
  {
    company: 'subway',
    discount: '10% off food',
    description: null,
  },
  {
    company: 'matarkjallarinn',
    discount: '15% off food',
    description: 'These days we offer a 4 course Food & Fun festival menu.',
  },
  {
    company: 'sjavargrillid',
    discount: '20% off food',
    description: 'Applies both for lunch and dinner menu.',
  },
  {
    company: 'fiskfelagid',
    discount: '10% off food and drinks',
    description: null,
  },
  {
    company: 'xo-food',
    discount: '15% off food and drinks',
    description: null,
  },
  {
    company: 'js-watch',
    discount: '15% off ARC-TIC',
    description: '15% off Iceland ARC-TIC watches. See www.arc-tic.com',
  },
  {
    company: 'tales-from-iceland',
    discount: '25% off',
    description: null,
  },
  {
    company: 'handprjonasambandid',
    discount: '7.5% off',
    description: null,
  },
  {
    company: 'lemon',
    discount: '2 for 1',
    description: null,
  },
  {
    company: 'dominos',
    discount: '30% off',
    description: 'Only applies if ordered online, or through the app, using the code: jsconf',
  },
  {
    company: 'slippbarinn',
    discount: '15% off drinks',
    description: null,
  },
  {
    company: 'zo-on',
    discount: '30% off',
    description: null,
  },
  {
    company: 'hard-rock',
    discount: '20% off',
    description: null,
  },
]

export default discounts.sort((a, b) => {
  const companyA = a.company
  const companyB = b.company

  if (companyA < companyB) {
    return -1
  }

  if (companyA > companyB) {
    return 1
  }

  return 0
})
