module.exports = function (bh) {

    bh.match('textarea', function (ctx, json) {
        var _form_field = ctx.tParam('_form_field');

        if(_form_field) {
            json.id = json.id || _form_field.id;
            json.name = json.name || _form_field.name;
            ctx.mod('disabled', _form_field.mods.disabled);
        }
    });

};
