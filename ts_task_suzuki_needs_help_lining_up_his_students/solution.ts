const list = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'

function lineupStudents(students: string): string[] {
  const sortedNames = students.split(' ').sort((a, b) => {
    if (a.length > b.length) {
      return -1
    }
    if (a.length < b.length) {
      return 1
    }
    if (a > b) {
      return -1
    }
    if (a < b) {
      return 1
    }
    return 0
  })

  return sortedNames
}

console.log(lineupStudents(list))
