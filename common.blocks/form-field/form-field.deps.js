[{
    mustDeps : [
        { block : 'i-bem-dom' }
    ],
    shouldDeps : [
        { block : 'validation' },
        { block : 'label' },
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
