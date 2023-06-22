const path = require('path')

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

const path1 = "./abc/cba"
const path2 = "../nba/abc.txt/"

console.log(path.join(path1, path2))
console.log(path.resolve(path1, path2))
console.log(path.resolve())
