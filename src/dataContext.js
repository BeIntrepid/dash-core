export class DataContext {
    _streams = {};

    registerStream(name,stream)
    {
        if(this._streams[name] != null)
        {
            throw "Stream already registered under this name";
        }

        this._streams[name] = stream;
    }
}