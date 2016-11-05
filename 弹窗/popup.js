/*
	弹窗类
	使用方法，见index.html 直接赋值即可
	注意：alert，prompt，confirm，3个方法不能在一个 对象里用。需要新建对象。
*/
//用jqueryUI实现的拖动
define(["widget","jquery","jqueryUI"],function(widget,$,$UI){
	function PopUp(){
		this.conf={
			width:400,
			height:500,
			title:"温馨提示",
			content:"",
			hasMask:false,
			skinClass:null,
			isDraggable:true,
			dragHandle:".popup_header", //传空，就是拖动全部
			//alert
			textAlertBtn:"确定",
			handlerAlert:null,
			handlerClose:null,
			//confirm
			textConfirmBtn:"确定",
			textConfirmCancleBtn:"取消",
			handlerConfirm:null,
			handlerCancle:null,
			//prompt
			textPromptBtn:"确定",
			textPromptCancleBtn:"取消",
			isPromptInputPassword:false,
			defaultValuePromptInput:"",
			maxlenPromptInput:10,
			handlerPrompt:null,
			//默认选择
			type:"alert"
		}
		
	}
	PopUp.prototype = $.extend({},new widget.Widget(),{
		renderUI:function(){
			var footertext="";
			switch(this.conf.type){
				case "alert":
					footertext='<input class="popup_alertbtn" type="button" value="'+this.conf.textAlertBtn+'"/>';
					break;
				case "confirm":
					footertext='<input class="popup_confirmbtn" type="button" value="'+this.conf.textConfirmBtn+'"/>'+
						'<input class="popup_canclebtn" type="button" value="'+this.conf.textConfirmCancleBtn+'"/>'
					break;
				case "prompt":
					this.conf.content+='<p class="popup_promptinputbox"><input type="'+this.conf.isPromptInputPassword?'password':'text'+'" value="'+this.conf.defaultValuePromptInput+'" maxlength="'+this.conf.maxlenPromptInput+'" class="popup_promptinput"></p>'
					footertext='<input class="popup_promptbtn" type="button" value="'+this.conf.textPromptBtn+'"/>'+
						'<input class="popup_canclebtn" type="button" value="'+this.conf.textPromptCancleBtn+'"/>'
					break;
				default:;
			}
				
			this.boundingBox = $('<div 	class="popup_box">'+
				 '<div class="popup_body">'+this.conf.content+'</div>'+
				 '</div>');
			
			if(this.conf.type!="common"){
				this.boundingBox.prepend( '<h4 class="popup_header">'+this.conf.title+'</h4>');
				this.boundingBox.append( '<div class="popup_footer">'+footertext+'</div>');
			}
			
			this._promptInput = this.boundingBox.find(".popup_promptinput");
			
			if(this.conf.hasMask){
				this._mask=$('<div class="popup_mask"></div>');
				this._mask.appendTo("body");
			}
			
			this.boundingBox.appendTo(document.body);

		},
		bindUI : function(){
			var that = this;
			this.boundingBox.on("click",".popup_alertbtn",function(){
				that.fire("alert");
				that.destroy();
			}).on("click",".popup_closebtn",function(){
				that.fire("close");
				that.destroy();
			}).on("click",".popup_confirmbtn",function(){
				that.fire("confirm");
				that.destroy();
			}).on("click",".popup_canclebtn",function(){  // confirm 和 confirm 都是用这个
				that.fire("cancle");
				that.destroy();
			}).on("click",".popup_promptbtn",function(){
				that.fire("prompt",that._promptInput.val());
				that.destroy();
			});
			
			if(this.conf.handlerAlert){		
				that.on("alert",this.conf.handlerAlert)
			}
			if(this.conf.handlerClose){
				that.on("close",this.conf.handlerClose)
			}
			if(this.conf.handlerConfirm){
				that.on("confirm",this.conf.handlerConfirm)
			}
			if(this.conf.handlerCancle){
				that.on("cancle",this.conf.handlerCancle)
			}
			if(this.conf.handlerPrompt){
				that.on("prompt",this.conf.handlerPrompt)
			}

		},
		syncUI : function(){
			if(this.conf.skinClass){
				this.boundingBox.addClass("this.boundingBox");
			}

			this.boundingBox.css({
				"width":this.conf.width+"px",
				"height":this.conf.height+"px",
				"left":this.conf.left||(window.innerWidth-this.conf.width)/2 + "px",
				"top":this.conf.top||(window.innerHeight-this.conf.height)/2 + "px",
			})
			
			if(this.conf.isDraggable){ 		this.boundingBox.draggable({handle:this.conf.dragHandle});
			}
		},
		destructor :function(){
			this._mask && this._mask.remove();
		},
		alert:function(conf){
			$.extend(this.conf,conf,{type:"alert"});
			this.render();
			return this;
		},
		confirm:function(conf){
			$.extend(this.conf,conf,{type:"confirm"});
			this.render("confirm");
			return this;
		},
		prompt:function(conf){
			$.extend(this.conf,conf,{type:"prompt"});
			this.render("prompt");
			this._promptInput.focus().select();
			return this;
		},
		common:function(conf){
			$.extend(this.conf,conf,{type:"common"});
			this.render("confirm");
			return this;
		}
	});

	return {
		PopUp:PopUp
	}

});