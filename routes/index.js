(() => {
  'use strict';

  module.exports = (app) => {

    app.get('/', (req, res) => {
      try {
        res.render('index', { 
        });
      } catch (e) {
        console.error(e);
        res.status(500).send(e);
      }
    });
    
  };

})();
