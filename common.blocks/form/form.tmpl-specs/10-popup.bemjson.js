({
    block : 'form',
    mods :  { 'has-validate' : true, message : 'popup' },
    mix :  { block : 'another-block' },
    attrs :  { 'data-form' : 'custom form data' },
    action : '/parse-form-data-on-back-end',
    method : 'POST',
    enctype : 'multipart/form-data',
    content : []
});
