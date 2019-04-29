var PostSO = require('../models/postSOModel');
const request = require('request');

var bodyFilter = {
  pagesize: 5,
  sort: 'activity',
  order: 'desc',
};

var postRequest = {
  "question" : "",
  "answer" : [

  ]
}

// Get results for a different website within the stackexchange network
exports.pesquisa = function (req, res) {
  var postSO = new PostSO(req.body);
  bodyFilter.intitle = req.params.test
  postRequest.question = req.params.test

  request('https://api.stackexchange.com/2.2/search?site=stackoverflow',
  {
    gzip: true,
    json: true,
    body: bodyFilter
  }, (err, res, body) => {
  if (err) { return console.log(err); }

  for (i in body.items){
    postRequest.answer.push({
      "title": body.items[i].title,
      "link": body.items[i].link
    })
  }
  console.log(postRequest);
});
}
