// const jokes = require('../api/server.js');
// const request = require('supertest');
// describe('jokes', () => {
//     it('runs the tests', () => {
//         expect(true).toBe(true);
//     })
//     describe('GET /jokes', () => {
//         it('returns status 200', async() => {
//             const res = await request(jokes)
//                 .get('/api/auth/login')
//                 .send({
//                     username: 'robbie',
//                     password: 'password'
//                 });
//             const users = await request(jokes)
//                 .get('/api/jokes')
//                 .set('token', [res.body.token])
//             expect(users.token)
//         })

//         it('Obtains JSON', async() => {
//             const res = await request(jokes).get('/api/jokes')
//             expect(res.type).toMatch(/json/i);
//         })
//     })
// })