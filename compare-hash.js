const computeFileHash = require('./compute-file-hash');
const compare = require('./compare');
compare(() => computeFileHash('./refImage-1.png'));
