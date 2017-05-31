
(function(window) {
	
	if(typeof window.Vue === 'undefined') throw '请在此之前先引入Vue.js' ;
	
	/**
	 * 列表的item组件
	 */
	var ListItem = function (compName) {
		
		window.Vue.component (compName , {
			props:{
				'item':{
					type:Object,
					default:function () {
						return {flag:'',title:'',author:'',summary:'',
					like:'',comment:'',browse:'',time:''}
					}
				}
			},
			template:"<div class='list-item'>"+
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
					"</div>"
		})
	}
	/**
	 * 足迹的item组件
	 */
	var TravelsItem = function (compName) {
		window.Vue.component (compName, {
			props:{
				'travels':{
					type:Object,
					default:function () {
						return {title:'' , time:'' , place:'' , weather:'' , urls:[]}
					}
				}
			},
			template:"<div class='travels'>"+
						"<div class='time-line'>"+
							"<div class='time-line-inner'></div>"+
							"<span class='time-pointer'></span>"+
						"</div>"+
						"<div class='time-content ml-15'>"+
							"<p>{{travels.time + travels.place + travels.weather}}</p>"+
							"<div class='time-content-inner'>"+
								"<h4>{{travels.title}}</h4>"+
								"<div class='img-wrapper'>"+
									"<img class='img-thumbnail'>"+
									"<img class='img-thumbnail img-ml-mr'>"+
									"<img class='img-thumbnail'>"+
								"</div>"+
							"</div>"+
						"</div>"+
					"</div>"
		})
	}

	if(typeof window.ListItem === 'undefined') window.ListItem = ListItem;
	if(typeof window.TravelsItem === 'undefined') window.TravelsItem = TravelsItem;

}(window));