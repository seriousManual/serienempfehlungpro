const fetch = require('node-fetch')
const express = require('express')

const port = process.env.PORT || 3001;

express()
  .use(express.static('build'))
  .get('/shows', async (req, res, next) => res.json(await getShows()))
  .listen(port, '0.0.0.0', () => {
    console.log('running on ' + port);
  });

async function getShows() {
  const showsResult = await fetch('http://serienempfehlung.de', {headers: {'User-Agent': 'serienempfehlung-pro'}});
  const shows = await showsResult.text();

  return shows.split('\n')
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