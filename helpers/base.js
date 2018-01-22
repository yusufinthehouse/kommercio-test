module.exports = {
    setSucceededResponse: function(response, header_code = 200, data = null) {
        var body = {};

        if (data != null) { body.data = data; }

        response.status(header_code).send(body);
    },

    setFailedResponse: function(response, message) {
        var body = {
            "status": "ERROR",
            "message": message
        };

        response.status(500).send(body);
    }
}