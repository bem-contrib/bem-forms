module.exports = function(bh) {

    bh.match('form-field_type_hidden', function(ctx, json) {

        ctx.js(function() {
            return { name : json.name, value : json.val };
        });

        ctx.content([
            {
                tag : 'input',
                attrs : {
                    type : 'hidden',
                    name : json.name,
                    id : json.id,
                    value : json.val
                }
            }
        ]);
    });

};
