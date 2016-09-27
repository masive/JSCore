function nowPlay (args) {
  let track = args[0]
  let artist = args[1]
  let duration = args[2]
  console.log(`Now Playing: ${artist} - ${track} [${duration}]`)
}

nowPlay(['Number One', 'Nelly', '4:09'])
