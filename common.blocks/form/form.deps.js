[{
    mustDeps : [
        { block : 'i-bem' }
    ],
    shouldDeps : [
        { block : 'objects' },
        { block : 'form-field' },
        { block : 'validation' },
        { block : 'vow' }
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'form' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { block : 'form', mods : { message : ['text', 'popup'] } },
        { block : 'message' }
    ]
}]
