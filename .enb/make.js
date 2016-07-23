var techs = {
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),
        borschik: require('enb-borschik/techs/borschik'),
        stylus: require('enb-stylus/techs/stylus'),
        browserJs: require('enb-js/techs/browser-js'),
        bemhtml: require('enb-bemxjst/techs/bemhtml'),
        bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html'),
        bem : require('enb-bem-techs')
    },
    enbBemTechs = require('enb-bem-techs'),
    libs = [
        { path : 'libs/bem-core/common.blocks', check: false },
        { path : 'libs/bem-core/desktop.blocks', check: false },
        { path : 'libs/bem-components/common.blocks', check: false },
        { path : 'libs/bem-components/desktop.blocks', check: false },
        { path : 'libs/bem-components/design/common.blocks', check: false },
        { path : 'libs/bem-components/design/desktop.blocks', check: false },
    ],
    specs = [{ path : 'libs/bem-pr/spec.blocks', check : false }],
    project = ['common.blocks'],
    examples = ['example.blocks'];

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.includeConfig('enb-bem-specs');
    config.module('enb-bem-specs').createConfigurator('specs').configure({
        destPath       : 'common.specs',
        levels         : [].concat(project),
        sourceLevels   : [].concat(specs, libs, project),
        jsSuffixes : ['vanilla.js', 'browser.js', 'js'],
        depsTech : techs.bem.depsOld,
        scripts : ['https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js'],
        templateEngine : {
            bemtreeTemplateTech : require('enb-bemxjst/techs/bemtree'),
            templateTech : require('enb-bemxjst/techs/bemhtml'),
            templateOptions : {
                sourceSuffixes : ['bemhtml', 'bemhtml.js'],
                engineOptions : { elemJsInstances : true }
            },
            htmlTech : require('enb-bemxjst/techs/bemjson-to-html'),
            htmlTechOptionNames : { bemjsonFile : 'bemjsonFile', templateFile : 'bemhtmlFile' }
        }
    });

    config.includeConfig('enb-bem-docs');
    config.module('enb-bem-docs').createConfigurator('docs').configure({
        destPath : 'common.docs',
        levels : project,
        langs : ['ru', 'en'],
        jsdoc : { suffixes : ['vanilla.js', 'browser.js', 'js'] }
    });

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [enbBemTechs.levels, { levels: [].concat(libs, project, examples) }],
            [techs.fileProvider, { target: '?.bemjson.js' }],
            [enbBemTechs.bemjsonToBemdecl],
            [enbBemTechs.deps],
            [enbBemTechs.files],
            [techs.stylus, {
                target: '?.css',
                sourcemap: false,
                autoprefixer: {
                    browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
                }
            }],

            [techs.bemhtml, { sourceSuffixes: ['bemhtml', 'bemhtml.js'] }],
            [techs.bemjsonToHtml],
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bemhtml.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                target: '?.bemhtml.deps.js',
                bemdeclFile: '?.bemhtml.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bemhtml.deps.js',
                filesTarget: '?.bemhtml.files',
                dirsTarget: '?.bemhtml.dirs'
            }],
            [techs.bemhtml, {
                target: '?.browser.bemhtml.js',
                filesTarget: '?.bemhtml.files',
                sourceSuffixes: ['bemhtml', 'bemhtml.js']
            }],
            [techs.browserJs, { includeYM: true }],
            [techs.fileMerge, {
                target: '?.js',
                sources: ['?.browser.js', '?.browser.bemhtml.js']
            }],
            [techs.borschik, { source: '?.js', target: '?.min.js', minify: isProd }],
            [techs.borschik, { source: '?.css', target: '?.min.css', tech: 'cleancss', minify: isProd }]
        ]);

        nodeConfig.addTargets(['?.html', '?.min.css', '?.min.js']);
    });
};
