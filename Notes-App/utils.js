validator = require('validator');
module.exports = {
    validator,
    add : function(a,b){
        if(!validator.isNumeric(a.toString()) || !validator.isNumeric(b.toString())){
            return 'Error: one of these two given parameters ( ' + a +' and '+b+' ) or both are not a number.'
        }
        return a+b;
    },
};
    