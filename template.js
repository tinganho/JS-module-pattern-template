var SHORT_NAME_GLOBAL_VARIABLE = (function($){

	
	var C = {}, // Object variable that is used globally accross application specific code
	
	
	/* 
	-------------------------------------------------------
	Private variables 
	-------------------------------------------------------
	*/

	// Description of your variable
	YOUR_FIRST_VARIABLE = null

	

	/* 
	-------------------------------------------------------
	Public variables 
	-------------------------------------------------------
	*/

	// Description of your variable
	C.your_first_public_variable;

	/**
	 *  @object 
	 * 	  Example object, this is an example project
	 *  @method
	 */
	C.example_object = {
		method1: function () {

		}
	}


	/* 
	-------------------------------------------------------
	Constructor
	-------------------------------------------------------
	*/


	/**
	 *	@constructor
	 */
	C.constructor = function () {
	
	}

	/* 
	-------------------------------------------------------
	Private methods 
	-------------------------------------------------------
	*/
	function example_of_private_function () {

	}

	/* 
	-------------------------------------------------------
	Public methods 
	-------------------------------------------------------
	*/
	C.example_of_public_function () {

	}
	

	// Execute constructor
	C.constructor();

	// Return object
	return C;
	

})(jQuery);



