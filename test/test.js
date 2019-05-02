var expect = require('chai').expect;
var postModel = require('../models/postSOModel');

describe('post model', function() {
  it('should be invalid if question is empty', function(done) {
      var post = new postModel();

      post.validate(function(err) {
          expect(err.errors.question).to.exist;
          done();
      });
  });
});