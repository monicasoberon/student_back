const studentController = require('../controllers/studentController');
const httpMocks = require('node-mocks-http');

// Simulamos la base de datos fake
jest.mock('../database/db', () => ({
  getAllStudents: () => [
    { id: 1, name: 'John Doe', final_grade: 7.5, debt: 0 },
    { id: 2, name: 'Jane Smith', final_grade: 7.0, debt: 100 },
    { id: 3, name: 'Mark Brown', final_grade: 6.0, debt: 50 },
    { id: 4, name: 'Lucy Green', final_grade: 5.0, debt: 0 },
  ]
}));

describe('Student Controller', () => {
  test('should return status "Aprobado" for student with grade >= 7 and no debt', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();

    await studentController.getData(req, res);
    const responseData = res._getJSONData();
    const student = responseData.find(s => s.name === 'John Doe');

    expect(student.status).toBe('Aprobado');
  });

  test('should return status "Reestructura" for student with grade >= 7 and debt > 0', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();

    await studentController.getData(req, res);
    const responseData = res._getJSONData();
    const student = responseData.find(s => s.name === 'Jane Smith');

    expect(student.status).toBe('Reestructura');
  });

  test('should return status "Expulsado" for student with grade < 7 and debt > 0', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();

    await studentController.getData(req, res);
    const responseData = res._getJSONData();
    const student = responseData.find(s => s.name === 'Mark Brown');

    expect(student.status).toBe('Expulsado');
  });

  test('should return status "Pendiente" for student with grade < 7 and no debt', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();

    await studentController.getData(req, res);
    const responseData = res._getJSONData();
    const student = responseData.find(s => s.name === 'Lucy Green');

    expect(student.status).toBe('Pendiente');
  });
});