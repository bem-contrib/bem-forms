({
    block : 'page',
    title : 'form',
    styles : [{ elem : 'css', url : 'index.min.css' }],
    scripts : [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
            block : 'form',
            mods : {
                theme : 'islands',
                'has-validate' : true,
                message : 'text'
            },
            method : 'GET',
            content : [
                {
                    elem : 'content',
                    content : [
                        {
                            block : 'form-field',
                            name : 'firstName',
                            mods : {
                                theme : 'islands',
                                type : 'input',
                                'has-validate' : true,
                                required : true,
                                message : 'text'
                            },
                            js : {
                                message : 'Super required!'
                            },
                            content : [
                                {
                                    block : 'label',
                                    mods : { theme : 'islands' },
                                    content : 'Input'
                                },
                                {
                                    block : 'input',
                                    mods : { theme : 'islands', size : 'l' }
                                }
                            ]
                        },
                        {
                            block : 'form-field',
                            name : 'years',
                            mods : {
                                theme : 'islands',
                                type : 'select',
                                'has-validate' : true,
                                required : true,
                                message : 'text'
                            },
                            content : [
                                {
                                    block : 'label',
                                    mods : { theme : 'islands' },
                                    content : 'Select'
                                },
                                {
                                    block : 'select',
                                    mods : { mode : 'check', theme : 'islands', size : 'l' },
                                    text : 'Программа конференции',
                                    options : [
                                        { text : '1', val : 1 },
                                        { text : '2', val : 2 }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'form-field',
                            id : 'textarea',
                            mods : {
                                theme : 'islands',
                                type : 'textarea',
                                'has-validate' : true,
                                required : true,
                                message : 'text'
                            },
                            content : [
                                {
                                    block : 'label',
                                    mods : { theme : 'islands' },
                                    content : 'Textarea'
                                },
                                {
                                    block : 'textarea',
                                    name : 'BIO',
                                    mods : { theme : 'islands', size : 'l' }
                                }
                            ]
                        },
                        {
                            block : 'form-field',
                            name : 'ololo',
                            mods : {
                                type : 'checkbox',
                                theme : 'islands',
                                'has-validate' : true,
                                required : true,
                                message : 'text'
                            },
                            content : [
                                {
                                    block : 'checkbox',
                                    mods : { theme : 'islands', size : 'l' },
                                    text : 'Checkbox 1'
                                }
                            ]
                        },
                        {
                            block : 'form-field',
                            name : 'checkboxGroupName',
                            mods : {
                                type : 'checkbox-group',
                                theme : 'islands'
                            },
                            content : [
                                {
                                    block : 'checkbox-group',
                                    mods : { theme : 'islands', size : 'l' },
                                    options : [
                                        { text : 'Checkbox 1', val : '1' },
                                        { text : 'Checkbox 2', val : '2' },
                                        { text : 'Checkbox 3', val : '3' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'form-field',
                            name : 'radio',
                            mods : {
                                type : 'radio',
                                theme : 'islands'
                            },
                            content : [
                                {
                                    block : 'radio',
                                    mods : { theme : 'islands', size : 'l' },
                                    text : 'Radio 1'
                                }
                            ]
                        },
                        {
                            block : 'form-field',
                            name : 'radioGroupName',
                            mods : {
                                type : 'radio-group',
                                theme : 'islands'
                            },
                            content : [
                                {
                                    block : 'radio-group',
                                    mods : { theme : 'islands', size : 'l' },
                                    options : [
                                        { text : 'Radio 1', val : '1' },
                                        { text : 'Radio 2', val : '2' },
                                        { text : 'Radio 3', val : '3' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem : 'footer',
                    content : [
                        {
                            block : 'button',
                            mods : { theme : 'islands', size : 'l', type : 'submit', view : 'action' },
                            text : 'Submit'
                        }
                    ]
                }
            ]
        }
    ]
})
