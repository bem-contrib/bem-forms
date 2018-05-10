module.exports = function(bh) {

    bh.match('checkbox', function(ctx, json) {
        var _form_field = ctx.tParam('_form_field');

        if(_form_field) {
            json.name = json.name || _form_field.name;
            json.val = json.val || _form_field.val;
            json.id = json.id || _form_field.id;
            json.checked = json.checked || _form_field.checked;

            ctx.mod('disabled', _form_field.mods.disabled);
        }
    });

};
