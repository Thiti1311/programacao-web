const registerController = require('../controllers/register.controller');
const loginController = require('../controllers/login.controller');
const informationController = require('../controllers/information.controller');
const userDataController = require('../controllers/userData.controller');
const infoLogController = require('../controllers/infoLog.controller');
const totalsController = require('../controllers/total.controller');

const route = (router) => {
 
    router.post('/register', registerController);
    router.post('/login', loginController);
    router.post('/information', informationController);
    router.post('/update-data', userDataController);
    router.post('/info-log', infoLogController);
    
    router.get('/information/:email', informationController.checkUserData);
    router.get('/get-last-data/:email', userDataController.getLastDataController);
    router.get('/total-count/:email', totalsController);
}

module.exports = route;
