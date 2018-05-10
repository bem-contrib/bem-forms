module.exports = {
    options : {
        boss : true,
        eqeqeq : true,
        evil : true,
        expr : true,
        forin : true,
        immed : true,
        loopfunc : true,
        maxdepth : 4,
        maxlen : 120,
        noarg : true,
        noempty : true,
        onecase : true,
        quotmark : 'single',
        sub : true,
        supernew : true,
        trailing : true,
        undef : true,
        unused : true
    },

    groups : {
        browserjs : {
            options : {
                browser : true,
                predef : ['modules']
            },
            includes : ['*.blocks/**/*.js'],
            excludes : [
                '**/*.i18n/*.js',
                '**/*.bem/*.js',
                '**/_*.js',
                '**/*.bh.js',
                '**/*.bemhtml.js',
                '**/*.bemtree.js',
                '**/*.spec.js',
                '**/*.deps.js',
                '**/*.bemjson.js'
            ]
        },

        specjs : {
            options : {
                browser : true,
                maxlen : 150,
                predef : [
                    'modules',
                    'describe',
                    'it',
                    'before',
                    'beforeEach',
                    'after',
                    'afterEach'
                ]
            },
            includes : ['*.blocks/**/*.spec.js']
        },

        bemxjst : {

            options : {
                predef : [
                    'apply',
                    'applyCtx',
                    'applyNext',
                    'attrs',
                    'bem',
                    'block',
                    'cls',
                    'content',
                    'def',
                    'elem',
                    'js',
                    'local',
                    'match',
                    'mix',
                    'mod',
                    'mode',
                    'tag',
                    'wrap',
                    'replace',
                    'extend',
                    'once'
                ]
            },
            includes : [
                '*.blocks/**/*.bemhtml.js',
                '*.blocks/**/*.bemtree.js'
            ]
        },

        bhjs : {
            options : {
                node : true
            },
            includes : [
                '*.blocks/**/*.bh.js',
                'design/*.blocks/**/*.bh.js'
            ]
        },

        bemjsonjs : {
            options : {
                asi : true
            },
            includes : ['*.bundles/**/*.bemjson.js']
        },

        nodejs : {
            options : {
                node : true
            },
            includes : ['**/.bem/**/*.js'],
            excludes : [
                '.bem/cache/**',
                'libs/**',
                '.libs-cache/**',
                '.libs-registry/**',
                '.libs-tmp/**',
                'node_modules/**'
            ]
        }
    }
};
