[{
    mustDeps : [
        { block : 'i-bem-dom' }
    ],
    shouldDeps : [
        { block : 'popup' },
        { block : 'popup', mods : { target : 'anchor' } }
    ]
}, {
    tech : 'spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'message' },
        { tech : 'js', block : 'message' },
        { tech : 'bemhtml', block : 'popup' },
        { tech : 'js', block : 'popup' },
        { tech : 'bemhtml', block : 'popup', mods : { target : 'anchor' } },
        { tech : 'js', block : 'popup', mods : { target : 'anchor' } }
    ]
}];
