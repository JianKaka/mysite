/**
 * 网络请求类
 */
(function (window) {

	var Http = function () {
		$.ajax({
			url:'',
			type:'',
			async:true,
			data:{},
			timeout:5000,
			dataType:'json',
			beforeSend:function (xhr) {},
			success:function (data , textStatus , jqXHR) {},
			error:function() {} , 
			complete:function () {}
		})
	}
	
	if(typeof window.api === 'undefined') window.api = new Http();

})(window);