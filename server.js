const fetch = require('node-fetch')
const express = require('express')

express()
  .get('/shows', async (req, res, next) => res.json(await getShows()))
  .listen(3001)

async function getShows() {
  const showsText = await fetch('http://serienempfehlung.de', {
    // headers: {'User-Agent': 'serienempfehlungPRO.de'}
  }).then(res => res.text())

  return showsText.split('\n')
    .slice(1)
    .filter(Boolean)
    .map((entry, index) => {
      let title = entry.trim()
      let faved = false

      if (title[title.length -1] === '*') {
        title = title.slice(0, title.length - 2)
        faved = true
      }

      return {id: index, title, faved}
    })
}