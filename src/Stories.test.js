import React from 'react';
import ReactDOM from 'react-dom';
import Stories from './Stories';
import ReactTestUtils from 'react-addons-test-utils'

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

  it("fetches current vote", function () {
    let jsonResponse = JSON.parse(server.responses[0].response[2])
    expect(jsonResponse.__v).toEqual(2)
  });

  it("fetches Github data", function () {
    let jsonResponse = JSON.parse(server.responses[0].response[2])
    expect(jsonResponse.githubMetadata.title).toEqual("fakeTitle")
  });

});

describe("Stories component rendering", function() {
  var stories;

  beforeEach(function(){
     stories = ReactTestUtils.renderIntoDocument(
        <Stories />
      );
  });

  it("state should be empty array on first render", function() {
      expect(stories.state.stories).toEqual([])
  })

  it("rendered html should be unordered list", function() {
      expect(stories._reactInternalInstance._renderedComponent._tag).toEqual("ul")
  })

})

