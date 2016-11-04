block('form-field')(

    def()(function() {
        var _form_field = this.ctx;

        _form_field.id = _form_field.id || this.generateId();
        _form_field.mods = _form_field.mods || {};

        return applyNext({ _form_field : _form_field });
    }),

    js()(function() {
        return this.extend(applyNext(), { id : this._form_field.id });
    }),

    attrs()(function () {
        return {
            'data-name' : this.ctx.name
        };
    }),

    match(function() { return this.ctx.label !== undefined; }).content()(function() {
        return [
            {
                block : 'label',
                content : this.ctx.label
            },
            applyNext()
        ];
    }),

    match(function() { return this.ctx.control !== undefined; }).content()(function() {
        return [
            applyNext(),
            this.ctx.control
        ];
    })

);
