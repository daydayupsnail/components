define(function(){
	function Widget(){
		this.boundingBox = null; //组件最外层容器
	}
	Widget.prototype = {
		on : function(type,handler){
			if(!this.handers[type]){
			  this.handers[type]=[];
			}
			this.handers[type].push(handler);
			return this;
		},
		fire : function(type,data){
			if(!(this.handers[type] instanceof Array)){
				  return;
				}
				for(var i=0,ti=this.handers[type].length;i<ti;i++){
				  this.handers[type][i](data);
				}
			return this;
		},
		renderUI : function(){}, //接口：添加dom节点
		bindUI : function(){}, //接口：添加事件
		syncUI : function(){}, //接口：初始化组件属性
		destructor : function(){}, //接口：销毁前的处理函数
		render : function(container){ //方法：渲染组件，创建
			this.renderUI();
			this.handers = {};  
			/*
				handers 没有放在widget构造函数里，是因为在那样继承后，
				在remove dom的时候，handers没有从内存清除。
				必须在bindUI 之前，把值清空
			*/
			this.bindUI();
			this.syncUI();
			$(container || document.body).append(this.boundingbox);

		},
		destroy : function(){ //方法：销毁
			this.destructor();
			this.boundingBox.off(); //取消绑定的事件
			this.boundingBox.remove();
		}
		
	}
	return {
		Widget:Widget
	}
})