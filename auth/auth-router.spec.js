// const request = require('supertest');
// const server = require('../api/server.js');
// const db = require('../database/dbConfig.js');


// describe('register and login', () => {


//     describe('register with username and password', () => {
//         beforeEach(async() => {
//             return db('users').truncate();
//         })
//         test('returns true', () => {
//             expect(true).toBe(true);
//           });
          
//         it('should return 201 message', () => {

//             return request(server)
//                 .post('/api/auth/register')
//                 .send({
//                     username: 'tanilo',
//                     password: 'password'
//                 })
//                 .then(res => {
//                     expect(res.status).toBe(201)
//                 })
//         })
        
//         it("should return a 500 error for inputing an incomplete password", () => {
//             return request(server)
//                 .post("/api/auth/register")
//                 .send({ username: 'tanilo', password: 2311 })
//                 .then(res => {
//                 expect(res.status).toBe(500);
//             });
//         });

//         it("should test the login", async() => {
//             const credential = { username: "tanilo", password: "password" };
//             const res = await request(server)
//                 .post("/api/auth/login")
//                 .send(credential);
//             expect(res.status).toBe(401); //fail with 201
//         });
//     })
//     describe('POST /login', () => {
//         it('should return 401 when missing username and password', () => {
//             return request(server)
//                 .post('/api/auth/login')
//                 .send({ username: '', password: '' })
//                 .then(res => {
//                     expect(res.status).toBe(401)
//                 })
//         })
//         it("should return 500 to invalid password", () => {
//             return request(server)
//             .post("/api/auth/register")
//             .send({ username: 'username', password: 2311 })//should fail with correct password
//             .then(res => {
//             expect(res.status).toBe(500);
//             });
//         });
//     })
    
// })