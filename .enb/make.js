module.exports = function(config) {
    config.mode('development', function() {
        config.node('bundles/index', function(nodeConfig) {
            nodeConfig.addTechs([
                [ require('enb/techs/file-copy'), { sourceTarget: '?.css', destTarget: '_?.css' } ],
                [ require('enb/techs/borschik'), { sourceTarget: '?.js', destTarget: '?.borschik.js', minify: false, freeze: false } ],
                [ require('enb/techs/file-copy'), { sourceTarget: '?.borschik.js', destTarget: '_?.js' } ],
            ]);
        });
    });
    config.mode('production', function() {
        config.node('bundles/index', function(nodeConfig) {
            nodeConfig.addTechs([
                [ require('enb/techs/borschik'), { sourceTarget: '?.js', destTarget: '_?.js', minify: true, freeze: false } ],
                [ require('enb/techs/borschik'), { sourceTarget: '?.css', destTarget: '_?.css', minify: true, freeze: false } ]
            ]);
        });
    });

    config.node('bundles/index', function(nodeConfig) {
        nodeConfig.addTechs([
            [ require('enb/techs/levels'), { levels: getLevels() } ],
            [ require('enb/techs/file-provider'), { target: '?.bemjson.js' } ],
            require('enb/techs/bemdecl-from-bemjson'),
            [ require('enb-modules/techs/deps-with-modules'), { sourceSuffixes: ['js', 'vanilla.js'] } ],
            require('enb/techs/files'),
            require('enb-bemxjst/techs/bemhtml'),
            require('enb/techs/html-from-bemjson'),
            [ require('enb/techs/js'), { sourceSuffixes: ['js', 'vanilla.js', 'browser.js'], target: '?.pre.js' } ],
            [ require('enb-modules/techs/prepend-modules'), { source: '?.pre.js', target: '?.js' } ],
            require('enb-stylus/techs/css-stylus')
        ]);
        nodeConfig.addTargets(['?.html', '_?.js', '_?.css']);

        function getLevels() {
            return [
                { path: 'libs/bem-core/common.blocks', check: false },
                { path: 'libs/bem-core/desktop.blocks', check: false },
                { path: 'libs/bem-components/common.blocks', check: false },
                { path: 'libs/bem-components/desktop.blocks', check: false },
                { path: 'libs/bem-components/design/common.blocks', check: false },
                { path: 'libs/bem-components/design/desktop.blocks', check: false },
                { path: 'common.blocks' },
                { path: 'design/common.blocks' }
            ].map(function(l) { return config.resolvePath(l); });
        }
    });
}