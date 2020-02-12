
	function define(name, value) {
    		Object.defineProperty(exports, name, {
        	value:      value,
        	enumerable: true
	    });
	}	

	define("API", '/api');
	define("V1", '/v1');
	define("RECORDS", this.API + this.V1 + '/records');


