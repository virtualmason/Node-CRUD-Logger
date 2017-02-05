module.exports = function(request,response, next) {
    

    
    var url = request.url;
    var stream = process.stdout;
    var method = request.method;
    var start = +new Date();
    response.on("finish", finishHandler);
    function finishHandler(){
        var duration = +new Date - start;
        var message = `${url} on ${method} it took ${duration} mill secs`;
        stream.write(message);
    }
    next();
}