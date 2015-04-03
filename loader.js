loader = (function() {
    
    function _getHead() {
        var head = document.getElementsByTagName('head');
        if (head && head.length > 0) {
            return head[0];
        }
        throw new Error('The \'<head>\' tag is not found');
    };

    function _createCss(name) {
        if (link = document.createElement('link')) {
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = name + '.css';

            return link;
        }
    };

    function _createJs(name) {
        if (script = document.createElement('script')) {
            script.type = 'text/javascript';
            script.src = name + '.js';

            return script;
        }
    };

    function _appendToHead(child) {
        var head = _getHead();
        head.appendChild(child);
    };

    return {

        loadCss: function(name) {
            _appendToHead(_createCss(name));
        },

        loadJs: function(name) {
            _appendToHead(_createJs(name));
        }

    };

})();
