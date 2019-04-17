const Form = require('../../schema/formSchema');

function saveForm(req, res) {
    if (!req.body.name || !req.body.email || !req.body.message) {
        res.status(400).json({
            success: false,
            error: "Requête invalide"
        });
    } else {
        try {
            Form.create(req.body);
            res.status(201).json({
                success: true
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                success: false,
                message: 'Could not save new form.'
            });
        }
    }
}

exports.saveForm = saveForm;