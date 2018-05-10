block('textarea')(

    match(function() { return this._form_field; }).def()(function() {
        this.ctx = this.extend({
            name : this._form_field.name,
            val : this._form_field.val,
            id : this._form_field.id
        }, this.ctx);

        this.mods.disabled = this._form_field.mods.disabled;

        return applyNext();
    })

);
