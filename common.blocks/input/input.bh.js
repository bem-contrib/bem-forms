module.exports = function (bh) {

    bh.match('input', function (ctx) {
        var _form_field = ctx.tParam('_form_field');

        if (_form_field) {
            ctx.mod('disabled', _form_field.mods.disabled);
        }
    });

};
