const path = require('path');

//it will join the parameters passed to it
console.log(path.join('Node','Project1'));

//it will normalize it (compress) and show equivalent path
console.log(path.normalize('../../Node/../Built in Modules fs'));

//it shows the complete path from root directory to passed directory
console.log(path.resolve('../../Node/../Built in Modules fs'))