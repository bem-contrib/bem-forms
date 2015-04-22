module.exports = function(bh) {

    bh.match('form-field_validate_card', function(ctx) {
        ctx.mix({ mods : { 'has-validation' : true } });
    });

};
