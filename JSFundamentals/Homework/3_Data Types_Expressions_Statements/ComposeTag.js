function compose (args) {
  let fileLocation = args[0]
  let alt = args[1]
  console.log(`<img src="${fileLocation}" alt="${alt}">`)
}


compose(['smiley.gif', 'Smiley Face'])
