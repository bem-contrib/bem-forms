({
    block : 'page',
    title : 'form',
    styles : [{ elem : 'css', url : 'examples.min.css' }],
    scripts : [{ elem : 'js', url : 'examples.min.js' }],
    content : [
        {
            block : 'message',
            mods : { type : 'popup' },
            mix :  { block : 'another-block' },
            attrs :  { 'data-message' : 'custom message data' },
            content : []
        }
    ]
})
