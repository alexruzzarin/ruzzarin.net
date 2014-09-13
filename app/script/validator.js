function Validator()
{
    "use strict";
    var self = this;
    self.checkName = function(name)
    {
        return (/[^a-z]/i.test(name) === false);
    };
}
