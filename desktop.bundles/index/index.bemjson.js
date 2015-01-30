({
    block : 'page',
    title : 'form',
    styles : [{ elem : 'css', url : 'index.min.css' }],
    scripts : [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
            block : 'form',
            mods : { message : 'text', theme : 'islands' },
            method : 'GET',
            content : [
                {
                    elem : 'content',
                    content : [
                        {
                            block : 'form-field',
                            id : 'input',
                            mods : {
                                theme : 'islands',
                                type : 'input',
                                'has-validate' : true,
                                validate : 'card',
                                required : true,
                                message : 'popup'
                            },
                            content : [
                                {
                                    block : 'label',
                                    mods : { theme : 'islands' },
                                    content : 'Input'
                                },
                                {
                                    block : 'input',
                                    name : 'firstName',
                                    mods : { theme : 'islands', size : 'l' }
                                }
                            ]
                        },
                        {
                            block : 'form-field',
                            id : 'checkbox',
                            mods : { type : 'checkbox', message : 'popup', theme : 'islands' },
                            content : [
                                {
                                    block : 'checkbox',
                                    mods : { theme : 'islands', size : 'l' },
                                    text : 'Checkbox 1',
                                    name : 'checkbox'
                                }
                            ]
                        },
                        {
                            block : 'form-field',
                            id : 'checkbox_group',
                            mods : { type : 'checkbox-group', message : 'text', theme : 'islands' },
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
                            id : 'radio',
                            mods : { type : 'radio', theme : 'islands' },
                            content : [
                                {
                                    block : 'radio',
                                    mods : { theme : 'islands', size : 'l' },
                                    text : 'Radio 1',
                                    name : 'radio'
                                }
                            ]
                        },
                        {
                            block : 'form-field',
                            id : 'radio_group',
                            mods : { type : 'radio-group', message : 'text', theme : 'islands' },
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
