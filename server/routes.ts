import * as express from 'express';

import EmployeeCtrl from './controllers/employee';
import UserCtrl from './controllers/user';
import Employee from './models/employee';
import User from './models/user';

export default function setRoutes(app) {
    
    const router = express.Router();

    const employeeCtrl = new EmployeeCtrl();
    const userCtrl = new UserCtrl();

// Pracownicy
router.route('/employees').get(employeeCtrl.getAll);
router.route('/employees/count').get(employeeCtrl.count);
router.route('/employee').post(employeeCtrl.insert);
router.route('/employee/:id').get(employeeCtrl.get);
router.route('/employee/:id').put(employeeCtrl.update);
router.route('/employee/:id').delete(employeeCtrl.delete);

// Użytkownicy
router.route('/login').post(userCtrl.login);
router.route('/users').get(userCtrl.getAll);
router.route('/users/count').get(userCtrl.count);
router.route('/user').post(userCtrl.insert);
router.route('/user/:id').get(userCtrl.get);
router.route('/user/:id').put(userCtrl.update);
router.route('/user/:id').delete(userCtrl.delete);

// Dodanie do aplikacji routingu pod prefixem /api
app.use('/api', router);

}