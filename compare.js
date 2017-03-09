const _ = require('lodash');

module.exports = compare => {
    const startDate = new Date();
    const comparePromises = _.range(100).map(compare);
    Promise.all(comparePromises).then(() => {
        const endDate = new Date();
        console.log('Time:', endDate - startDate);
    });
}