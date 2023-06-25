export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
  let allPoints:number[] = [...classPoints, yourPoints]
  let average = allPoints.reduce((a, b) => a + b) / allPoints.length;
  
  return yourPoints >= average
}

const studentResult:number = 75
const allStudentsResults:number[] = [100, 40, 34, 57, 29, 72, 57, 88]

console.log(betterThanAverage(allStudentsResults, studentResult))
