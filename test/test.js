import request  from 'supertest'
import {expect} from 'chai'
import app from "../app.js";


describe('GET', () => {
  it('returns HTTP 200', async () => {
    const response = await request(app).get('/')
    expect(response.status).to.equal(200);
  });
  it('returns expected greeting', async () => {
    const response = await request(app).get('/');
    expect(response.text).to.equal('Hello, Github Actions!');
  })
})

describe("GET", () => {
  it("returns HTTP 200", async () => {
    const response = await request(app).get("/health");
    expect(response.status).to.equal(200);
  });
  it("returns expected greeting", async () => {
    const response = await request(app).get("/health");
    expect(response.text).to.equal("Hello, Health check");
  });
});
