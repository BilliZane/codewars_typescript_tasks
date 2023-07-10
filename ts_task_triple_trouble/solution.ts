export function tripleTrouble(one: string, two: string, three: string): string {
  let res = ''

  one.split('').forEach((el, idx) => {
    res += one[idx] + two[idx] + three[idx]
  })
  
  return res
}