import React from 'react';
import ReactDOM from 'react-dom';
import Stories from './Stories';
var sinon = require('sinon')

describe("with fake server", function() {
  var server;
  var data = [
    '{"__v": 2, "githubMetadata" : {"url": "www.fakeurl.com",  "title": "fakeTitle"} }'
  ]

  beforeEach(function () {
    server = sinon.fakeServer.create();
    server.respondWith("GET", "api.waffle/cards", ["200", {"Content-Type": "application/json"}, data[0]])
  });

  afterEach(function () {
    server.restore()
  });

  it("fetches data", function () {
    let jsonResponse = JSON.parse(server.responses[0].response[2])
    expect(jsonResponse.__v).toEqual(2)
  });

});
