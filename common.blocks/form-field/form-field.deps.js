[{
    mustDeps : [
        { block : 'i-bem', elems : ['dom'] }
    ],
    shouldDeps : [
        { block : 'validation' },
        { block : 'vow' }
    ]
}, {
    tech : 'spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'form-field' },
        { tech : 'bemhtml', block : 'form-field', mods : { message : ['text', 'popup'] } },
        { tech : 'bemhtml', block : 'form-field', mods : { type : 'input' } }
    ]
}]
