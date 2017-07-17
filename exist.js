;;(function($) {
    if (!$.exist) {
        $.extend({
            exist: function() {
                var ele, cbmExist, cbmNotExist;
                if (arguments.length) {
                    for (x in arguments) {
                        switch (typeof arguments[x]) {
                            case 'function':
                                if (typeof cbmExist == "undefined") cbmExist = arguments[x];
                                else cbmNotExist = arguments[x];
                                break;
                            case 'object':
                                if (arguments[x] instanceof jQuery) ele = arguments[x];
                                else {
                                    var obj = arguments[x];
                                    for (y in obj) {
                                        if (typeof obj[y] == 'function') {
                                            if (typeof cbmExist == "undefined") cbmExist = obj[y];
                                            else cbmNotExist = obj[y];
                                        }
                                        if (typeof obj[y] == 'object' && obj[y] instanceof jQuery) ele = obj[y];
                                        if (typeof obj[y] == 'string') ele = $(obj[y]);
                                    }
                                }
                                break;
                            case 'string':
                                ele = $(arguments[x]);
                                break;
                        }
                    }
                }

                if (typeof cbmExist == 'function') {
                    var exist =  ele.length > 0 ? true : false;
                    if (exist) {
                        return ele.each(function(i) { cbmExist.apply(this, [exist, ele, i]); });
                    }
                    else if (typeof cbmNotExist == 'function') {
                        cbmNotExist.apply(ele, [exist, ele]);
                        return ele;
                    }
                    else {
                        if (ele.length <= 1) return ele.length > 0 ? true : false;
                        else return ele.length;
                    }
                }
                else {
                    if (ele.length <= 1) return ele.length > 0 ? true : false;
                    else return ele.length;
                }

                return false;
            }
        });
        $.fn.extend({
            exist: function() {
                var args = [$(this)];
                if (arguments.length) for (x in arguments) args.push(arguments[x]);
                return $.exist.apply($, args);
            }
        });
    }
})(jQuery);
