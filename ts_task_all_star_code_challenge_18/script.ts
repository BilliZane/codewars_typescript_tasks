export function strCount(str: string, letter: string): number {
  const arrStr = str.split('')
  let counter = 0

  arrStr.forEach((el) => (el === letter ? counter++ : false))

  return counter
}

console.log(strCount('Hello', 'o'))
