block('select')(

    match(function() { return this._form_field; }).def()(function() {
        var ctx = this.ctx;

        ctx.name || (ctx.name = this._form_field.name);
        this.mods.disabled = this._form_field.mods.disabled;

        return applyNext();
    })

);
