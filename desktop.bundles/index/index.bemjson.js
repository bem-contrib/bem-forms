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
                            id : 'first_name',
                            mods : { type : 'input', message : 'text', theme : 'islands' },
                            attrs : { id : 'input' },
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
                            mods : { type : 'checkbox', message : 'popup', theme : 'islands' },
                            attrs : { id : 'checkbox' },
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
                            mods : { type : 'checkbox-group', message : 'text', theme : 'islands' },
                            attrs : { id : 'checkbox_group' },
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
                            mods : { type : 'radio', theme : 'islands' },
                            attrs : { id : 'radio' },
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
                            mods : { type : 'radio-group', message : 'text', theme : 'islands' },
                            attrs : { id : 'radio_group' },
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
