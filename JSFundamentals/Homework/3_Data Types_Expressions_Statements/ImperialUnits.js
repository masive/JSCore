function units (args) {
  let inches = Number(args[0])
  let feet = 0
  let inch = 0
  if (inches % 12 === 0) {
    feet = inches / 12
  } else if (inches < 12) {
    inch = inches % 12
  } else {
    feet = inches / 12
    inch = inches % 12
  }

  console.log(`${parseInt(feet)}'-${inch}"`)
}

units(['36'])
units(['55'])
units(['11'])
units(['12'])

