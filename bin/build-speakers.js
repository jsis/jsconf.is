#!/usr/bin/env node
'use strict' // eslint-disable-line

const fs = require('fs')
const speakers = require('../data/speakers')

function generateHeader (speaker) {
  const props = [
    `title: "${speaker.name}"`,
    `talk: "${speaker.title}"`,
    `path: "/speakers/${speaker.slug}"`,
    'type: "speaker"',
  ]
  let key

  for (key of Object.keys(speaker)) {
    if (speaker[key] && ['title', 'name', 'description'].indexOf(key) === -1) {
      props.push(`${key}: "${speaker[key]}"`)
    }
  }

  return props.join('\n')
}

speakers.forEach(speaker => {
  const file = `${process.cwd()}/pages/speakers/${speaker.slug}.md`
  const md = `---\n${generateHeader(speaker)}\n---\n\n${speaker.description}`
  fs.writeFile(file, md, (err) => !err && console.log(`Build success: ${file}`))
})
