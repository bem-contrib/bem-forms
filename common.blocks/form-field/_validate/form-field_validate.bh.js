module.exports = function(bh) {

    bh.match([
        'form-field_validate_card',
        'form-field_validate_email'
    ], function(ctx) {
        ctx.mix({ mods : { 'has-validation' : true } });
    });

};
