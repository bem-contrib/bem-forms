({
    block : 'page',
    title : 'form',
    styles : [{ elem : 'css', url : 'index.min.css' }],
    scripts : [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
            block : 'form',
            mix : { block : 'test', js : true },
            content : {
                block : 'button',
                mods : { theme : 'islands', size : 'l', type : 'submit' },
                text : 'init'
            }
        },
        {
            block : 'app',
            js : true,
            content : [
                {
                    block : 'form',
                    mods : { theme : 'islands', message : 'popup' },
                    directions : ['right-top'],
                    method : 'GET',
                    content : [
                        {
                            elem : 'header',
                            content : 'Simple form example'
                        },
                        {
                            elem : 'content',
                            content : [
                                {
                                    block : 'form-field',
                                    name : 'attach',
                                    mods : {
                                        theme : 'islands',
                                        type : 'attach',
                                        required : true,
                                        message : 'text'
                                    },
                                    js : {
                                        required : {
                                            message : 'Shit!'
                                        }
                                    },
                                    content : [
                                        {
                                            elem : 'label',
                                            content : [
                                                {
                                                    block : 'label',
                                                    content : 'File'
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'control',
                                            content : [
                                                {
                                                    block : 'attach',
                                                    mods : { theme : 'islands', size : 'l' },
                                                    button : 'Choose file',
                                                    noFileText : 'No file'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'form-field',
                                    name : 'input',
                                    mods : {
                                        theme : 'islands',
                                        type : 'input',
                                        required : true,
                                        message : 'popup'
                                    },
                                    directions : ['top-left'],
                                    js : {
                                        required : {
                                            message : 'Super required input!'
                                        }
                                    },
                                    content : [
                                        {
                                            elem : 'label',
                                            content : [
                                                {
                                                    block : 'label',
                                                    content : 'Input'
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'control',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'islands', size : 'l' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'form-field',
                                    name : 'inputWithCustom',
                                    mods : {
                                        theme : 'islands',
                                        type : 'input',
                                        validate : 'custom',
                                        message : 'popup'
                                    },
                                    directions : ['top-left'],
                                    content : [
                                        {
                                            elem : 'label',
                                            content : [
                                                {
                                                    block : 'label',
                                                    content : 'Input with custom validator'
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'control',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'islands', size : 'l' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'form-field',
                                    name : 'select',
                                    mods : {
                                        type : 'select',
                                        required : true,
                                        message : 'text'
                                    },
                                    js : {
                                        required : {
                                            message : 'Super required select!'
                                        }
                                    },
                                    content : [
                                        {
                                            elem : 'label',
                                            content : [
                                                {
                                                    block : 'label',
                                                    content : 'Select'
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'control',
                                            content : [
                                                {
                                                    block : 'select',
                                                    mods : {
                                                        mode : 'check',
                                                        theme : 'islands',
                                                        size : 'l'
                                                    },
                                                    text : 'Программа конференции',
                                                    options : [
                                                        { text : '1', val : 1 },
                                                        { text : '2', val : 2 }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'form-field',
                                    name : 'textarea',
                                    mods : {
                                        type : 'textarea',
                                        required : true,
                                        message : 'text'
                                    },
                                    content : [
                                        {
                                            elem : 'label',
                                            content : [
                                                {
                                                    block : 'label',
                                                    mods : { theme : 'islands' },
                                                    content : 'Textarea'
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'control',
                                            content : [
                                                {
                                                    block : 'textarea',
                                                    name : 'BIO',
                                                    mods : { theme : 'islands', size : 'l' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'form-field',
                                    name : 'checkbox',
                                    mods : {
                                        type : 'checkbox',
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
                                    name : 'checkboxGroup',
                                    mods : {
                                        type : 'checkbox-group',
                                        required : true,
                                        message : 'text'
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
                                        required : true,
                                        message : 'text'
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
                                    name : 'radioGroup',
                                    mods : {
                                        type : 'radio-group',
                                        required : true,
                                        message : 'text'
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
                                },
                                {
                                    block : 'fieldset',
                                    legend : {
                                        tag : 'h4',
                                        content : 'form part'
                                    },
                                    content : [
                                        {
                                            block : 'form-field',
                                            name : 'input',
                                            mods : {
                                                theme : 'islands',
                                                type : 'input'
                                            },
                                            content : [
                                                {
                                                    elem : 'label',
                                                    content : [
                                                        {
                                                            block : 'label',
                                                            content : 'Input'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem : 'control',
                                                    content : [
                                                        {
                                                            block : 'input',
                                                            mods : { theme : 'islands', size : 'l' }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'footer',
                            content : [
                                {
                                    block : 'button',
                                    mods : {
                                        theme : 'islands',
                                        size : 'l',
                                        type : 'submit',
                                        view : 'action'
                                    },
                                    text : 'Submit'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
