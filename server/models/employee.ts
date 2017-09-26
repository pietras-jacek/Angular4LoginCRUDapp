import * as mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    street: String,
    city: String,
    postcode: String,
    birthdate: Date,
    telephone: String
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;