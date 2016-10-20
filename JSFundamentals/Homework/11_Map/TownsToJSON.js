function townsToJSON (towns) {
    let townsArr = [];
    for (let town of towns.splice(1)) {
      let [name, lat, lng] = town.split('|')
                         .map(x => x.trim())
                         .filter(x => x !== '');
      let townObj = {
          Town: name,
          Latitude: Number(lat),
          Longitude: Number(lng)
      };
      townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr));
}

townsToJSON(['| Town | Latitude | Longitude |',
             '| Sofia | 42.696552 | 23.32601 |',
             '| Beijing | 39.913818 | 116.363625 |']);
