/**
 * 网络请求类
 */
(function (window) {

	var Http = function () {
		/**
		 * 网络请求
		 * @params url    请求url
		 * @params data   请求参数 {key:value}
		 */
		function request (url , data) {
	        var def = $.Deferred();
	        var type = typeof data === 'undefined' ? 'GET':'POST' ;
	        $.ajax({
	            url:url,
	            type:type ,
	            data:data || {},
	            timeout:5000,
	            dataType:'json',
	            success:function (result , textStatus , xhr) {
	                def.resolve(result);
	            },
	            error:function(xhr, status , error) {
	                def.reject(error);
	            },
	            complete:function(xhr , status) {
	                def.always();
	            }
	        })
	        return def.promise() ;
    	}

    	return {
    		request:request
    	}
	}
	
	if(typeof window.api === 'undefined') window.api = new Http();

})(window);