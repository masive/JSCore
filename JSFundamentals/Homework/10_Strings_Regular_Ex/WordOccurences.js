function wordOccurences (input) {
  let sentence = input[0]
  let pattern = `${input[1]}+\\b`
  let regex = new RegExp(pattern, 'gi')
  let count = sentence.match(regex)
  if (count == null) {
    return 0
  } else if (count.length > 0) {
    return count.length
  }
}

console.log(wordOccurences(['The waterfall was so high, that the child couldn’t see its peak.', 'the']))
console.log(wordOccurences(['How do you plan on achieving that? How? How can you even think of that?', 'how']))
console.log(wordOccurences(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there']))
console.log(wordOccurences(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'kaka']))
