/**
 * Created by mpereira on 7/30/2014.
 */
regionSelector

.filter('column', function() {
    return function(input,actual,total) {
        var partial = Math.floor(parseInt(input.length)/parseInt(total)) + 1;
        var ini = (actual-1) * partial;
        var fin = ini + partial;
        var result = input.slice(ini, fin);
        return result;
    };
})