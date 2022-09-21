
const middleWare = (req, res, next) => {
    console.log('Another Middle ware running!');
    next();
}

module.exports = middleWare;