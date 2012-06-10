

var SHORT_NAME_GLOBAL_VARIABLE = (function($){

	
	var SHORT_NAME_GLOBAL_VARIABLE = {}, // Shortname use application name followed by a C, like for Twitter, use TC.
	
	
	/* 
	-------------------------------------------------------
	Private variables 
	-------------------------------------------------------
	*/

	// Current list that is showing in slide show
	YOUR_FIRST_VARIABLE = null

	

	/* 
	-------------------------------------------------------
	Public variables 
	-------------------------------------------------------
	*/

	// Ticket text show in slide show
	SC.your_first_public_variable;

	/**
	 *  @object 
	 * 	  Example object, this is an example project
	 *  @method
	 */
	SC.example_object = {
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
	SC.constructor = function () {
	
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
	SC.example_of_public_function () {

	}
	

	// Execute constructor
	SC.constructor();

	// Return object
	return SC;
	

})(jQuery);



