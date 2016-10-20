function solve (input) {
  let header = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>'
  let footer = '</quiz>'
  function body (input) {
    let n = input.length
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        console.log(`    <question>\n\t${input[i]}\n    </question>`)
      } else {
        console.log(`    <answer>\n\t${input[i]}\n    </answer>`)
      }
    }
  }
  console.log(header)
  body(input)
  console.log(footer)
}

solve(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"])
solve(["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"])
