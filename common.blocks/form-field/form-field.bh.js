module.exports = function(bh) {

    bh.match('form-field', function(ctx) {

        ctx.js(true);

        var _form_field = ctx.json();

        _form_field.id = _form_field.id || ctx.generateId();

        _form_field.mods.name = _form_field.name;

        ctx.tParam('_form_field', _form_field);

    });

};
