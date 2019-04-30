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
  bodyFilter.intitle = req.params.pergunta;
  postRequest.question = req.params.pergunta;
  postRequest.answer = [];

  request('https://api.stackexchange.com/2.2/search?site=stackoverflow',
  {
    gzip: true,
    json: true,
    body: bodyFilter
  }, (err, res2, body) => {
  if (err) { return console.log(err); }

  for (i in body.items){
    postRequest.answer.push({
      "title": body.items[i].title,
      "link": body.items[i].link
    });
  }
  var postSO = new PostSO(postRequest);
  postSO.save(function (err, res2) {
      if (err) {
        res.send(err);
      }
      res.json({
          message: 'Nova dúvida criada!',
          data: postSO
      });
  });
});
  // postSO.save();
}
