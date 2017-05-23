
(function(compName , data) {
	window.Vue.component (compName , {
		template:"<div class='list-item' v-for='item in articles'>"+
					"<div class='item-top'>"+
						"<span class='flag'>{{item.flag}}</span>"+
						"<h3>{{item.title}}</h3>"+
						"<span class='author'>{{item.author}}</span>"+
					"</div>"+
					"<div class='item-content'>"+
						"<img class='img-thumbnail'>"+
						"<span>{{item.summary}}<span>"+
					"</div>"+
					"<div class='item-bottom'>"+
						"<span>喜欢{{item.like}}</span>"+
						"<span>评论{{item.comment}}</span>"+
						"<span>浏览{{item.browse}}</span>"+
						"<span>{{item.time}}</span>"+
					"</div>"+
				"</div>",
		data:function () {
			return data ;
		}
	}) 
}(window , compName , data ))