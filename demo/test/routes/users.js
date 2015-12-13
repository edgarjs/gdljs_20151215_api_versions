var assert = require('assert')
  , request = require('supertest');

var app = require('../../app');

describe('users', function () {
  describe('v1', function () {
    it('responds with v1 users structure', function (done) {
      request(app)
        .get('/api/users')
        .set('Accept', 'application/vnd.example.v1')
        .expect('Content-Type', /json/)
        .expect(200, {
          users: [],
          api: 'v1'
        }, done);
    });
  });

  describe('v2', function () {
    it('responds with v2 users structure', function (done) {
      request(app)
        .get('/api/users')
        .set('Accept', 'application/vnd.example.v2')
        .expect('Content-Type', /json/)
        .expect(200, {
          data: [],
          api: 'v2'
        }, done);
    });
  });

  describe('default if no header', function () {
    it('responds with latest version (2)', function (done) {
      request(app)
        .get('/api/users')
        .expect('Content-Type', /json/)
        .expect(200, {
          data: [],
          api: 'v2'
        }, done);
    });
  });
});
