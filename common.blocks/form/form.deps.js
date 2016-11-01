([{
    mustDeps : [
        { block : 'i-bem-dom' },
        { block : 'button' }
    ],
    shouldDeps : [
        { block : 'objects' },
        { block : 'next-tick' },
        { block : 'form-field' },
        { block : 'validation' },
        { block : 'vow' }
    ]
},
{
    tech : 'spec.js',
    mustDeps : [
        { tech : 'js', block : 'i-bem' },
        { tech : 'js', block : 'i-bem-dom' },
        { tech : 'js', block : 'form' },
        { tech : 'js', block : 'input' },
        { tech : 'js', block : 'form-field' },
        { tech : 'js', block : 'form-field', mods : { type : 'input' } },
        { tech : 'bemhtml', block : 'i-bem' },
        { tech : 'bemhtml', block : 'i-bem-dom' },
        { tech : 'bemhtml', block : 'form' },
        { tech : 'bemhtml', block : 'input' },
        { tech : 'bemhtml', block : 'form-field' },
        { tech : 'bemhtml', block : 'form-field', mods : { type : 'input' } }
    ]
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { block : 'form', mods : { message : ['text', 'popup'] } },
        { block : 'message' }
    ]
}]);
