# Method

This contains a single class that represents a method, whose this-argument is
saved at construction-time.

    import Method from 'parsegraph-method';

    const method = new Method();

    class Object {
    _onUpdate: Method;

    constructor() {
        this._onUpdate = new Method();
    }

    onUpdate(listener: ()=>void, listenerObj?: object) {
        // Listener this-object is optional.
        this._onUpdate.set(listener, listenerObj);
    }

    update() {
        // Safe to call even if unset.
        this._onUpdate.call();
    }
