const form = require('./form/lib');

module.exports = function (app) {
    app.post('/saveForm', form.saveForm);
};