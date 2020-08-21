// eslint-disable-next-line no-extend-native
Number.prototype.between = function(a, b, inclusive = true) {
    const min = Math.min(a, b), max = Math.max(a, b);

    if (inclusive) {
        return this >= min && this <= max;
    }

    return this > min && this < max;
};
// eslint-disable-next-line no-extend-native
String.prototype.truncate = String.prototype.truncate || 
    function ( n, useWordBoundary ){
        if (this.length <= n) { return this; }
        const subString = this.substr(0, n-1);
        return (useWordBoundary 
            ? subString.substr(0, subString.lastIndexOf(" ")) 
            : subString) + "&hellip;";
    };