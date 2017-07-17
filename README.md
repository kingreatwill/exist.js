# exist.js
How can I check the existence of an element in jQuery?

1. jQuery.fn.exists = function(){return ($(this).length > 0);}
if ($(selector).exists()) { }
2. jQuery.exists = function(selector) {return ($(selector).length > 0);}
if ($.exists(selector)) { }

#Example Uses

if ($.exist('#eleID')) {    /*    DO WORK    */ }        //    param as STRING
if ($.exist($('#eleID'))) { /*    DO WORK    */ }        //    param as jQuery OBJECT
if ($('#eleID').exist()) {  /*    DO WORK    */ }        //    enduced on jQuery OBJECT

$.exist('#eleID', function() {            //    param is STRING && CALLBACK METHOD
    /*    DO WORK    */
    /*    This will ONLY fire if the element EXIST    */
}, function() {            //    param is STRING && CALLBACK METHOD
    /*    DO WORK    */
    /*    This will ONLY fire if the element DOES NOT EXIST    */
})

$('#eleID').exist(function() {            //    enduced on jQuery OBJECT with CALLBACK METHOD
    /*    DO WORK    */
    /*    This will ONLY fire if the element EXIST    */
})

$.exist({                        //    param is OBJECT containing 2 key|value pairs: element = STRING, callback = METHOD
    element: '#eleID',
    callback: function() {
        /*    DO WORK    */
        /*    This will ONLY fire if the element EXIST    */
    }
})
