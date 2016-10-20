function extractLinks (input) { 
  let regex = new RegExp(/(www.[\w\s-]+\.[a-z].+\b)/, 'g')
  let result = []
  let found = str.match(regex)
  while (found) {
    found = str.match(regex)
    result.push(found)
  }
  for (let i = 0; i < result.length - 1; i++) {
    console.log(result[i][0])
  }
}

extractLinks(['Join WebStars now for free, at www.web-stars.com',
              'You can also support our partners:',
              'Internet - www.internet.com',
              'WebSpiders - www.webspiders101.com',
              'Sentinel - www.sentinel.-ko'])
