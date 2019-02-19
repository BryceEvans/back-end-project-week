const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

// afterEach(async () => {
//   await db('notes').truncate();
// })

describe('get / route handler', () => {
  it('responds with 200', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  })
  it('sends correct response object', async () => {
    const response = await request(server).get('/');
    expect(response.body).toEqual({ server: 'up and running!' });
  })
  it('responds with json', async () => {
    const response = await request(server).get('/');
    expect(response.type).toMatch(/json/i);
  })
})

describe('/get notes', () => {
  
  // afterEach(async () => {
  // await db('notes').truncate();
  // })

  it('responds with 200', async () => {
    const response = await request(server).get('/notes');
    expect(response.status).toBe(200);
  })
  it('responds with json', async () => {
    const response = await request(server).get('/notes');
    expect(response.type).toMatch(/json/i);
  })
  // it('sends correct response object', async () => {
  //   const response = await request(server).get('/notes');
  //   expect(response.body).toEqual([]);
  // })
})