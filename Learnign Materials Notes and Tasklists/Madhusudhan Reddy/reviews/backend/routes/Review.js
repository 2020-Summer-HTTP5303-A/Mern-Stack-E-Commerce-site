const router =require('express').Router();
let Review =require('../models/review.model');

router.route('/').get((req,res) => {
    Review.find()
        .then(review => res.json(review))
        .catch(err =>res.status(400).json('Error:'+err));
});

router.route('/add').post((req ,res) => {
    const userreview  = req.body.userreview;
    const newUserreview =new Review({userreview});

    newUserreview.save()
        .then(() => res.json('review added added!'))
        .catch (err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req, res) => {
    Review.findById(req.params.id)
      .then(review => res.json(review))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Review.findByIdAndDelete(req.params.id)
      .then(() => res.json('Review deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Review.findById(req.params.id)
      .then(review => {
        review.userreview = req.body.userreview;
       
  
        review.save()
          .then(() => res.json('Review updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports =router;