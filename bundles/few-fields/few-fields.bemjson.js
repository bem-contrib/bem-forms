({
    block: 'page',
    title: 'form',
    styles: [{ elem: 'css', url: '_index.css' }],
    scripts: [{ elem: 'js', url: '_index.js' }],
    content: {
        block: 'form',
        method: 'GET',
        /* val : {
            id : 42,
            title : 'Title',
            checkboxes : [1, 3],
            radios : 2
        }, */
        content: [
            {
                // { elem : 'field', type : 'static', name : 'id', label : '#' },
                elem : 'field',
                content : [{
                    elem : 'label',
                    content : '#'
                }, {
                    block: 'input', // ?
                    attrs: { readonly: 'readonly' }, // it makes readonly attribute for wrapper ;-(
                    mods: { theme: 'islands', size: 'l' },
                    name: 'text',
                    val: 42
                }]
            }, {
                // { elem : 'field', type : 'text', name : 'title', label : 'Title' },
                elem : 'field',
                content : [{
                    elem : 'label',
                    content : 'Title'
                }, {
                    block: 'input',
                    mix: { block: 'form', elem: 'control' },
                    mods: { theme: 'islands', size: 'l' },
                    name: 'title',
                    val: 'Title'
                }]
            }, {
                // { elem : 'field', type : 'checkbox-group', name : 'checkboxes', label : 'Flags', options: ... },
                elem : 'field',
                content : [{
                    elem : 'label',
                    content : 'Flags'
                }, {
                    block: 'checkbox-group',
                    mix: { block: 'form', elem: 'control' },
                    mods: { theme: 'islands', size: 'l' },
                    name: 'flags',
                    val : [1, 3],
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second' },
                        { val : 3, text : 'third' }
                    ]
                }]
            }, {
                // { elem : 'field', type : 'radio-group', name : 'radios', label : 'Radios', options : ... }
                elem : 'field',
                content : [{
                    elem : 'label',
                    content : 'Switcher'
                }, {
                    block: 'checkbox-group',
                    mix: { block: 'form', elem: 'control' },
                    mods: { theme: 'islands', size: 'l' },
                    name: 'switcher',
                    val : ['2'],
                    options : [
                        { val : '1', text : 'uno' },
                        { val : '2', text : 'dos' },
                        { val : '3', text : 'tres' }
                    ]
                }]
            }, {
                block: 'button',
                mix: { block: 'form', elem: 'submit' },
                mods: { theme: 'islands', size: 'l' , type: 'submit' },
                text: 'Найти'
            }
        ]
    }
})
