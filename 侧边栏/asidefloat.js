//侧边栏
$(function(){
  var asidefun={
    init:function(){
      this.popup(".aside .webchat","img");
    },
    popup:function(fselector,eselector){
      var f=$(fselector),
          e=f.find(eselector),
          ewidth=e.width(),
          fwidth=f.width();
      if(ewidth==0){
        e.load(function(){
          ewidth=e.width();  
        });  
      }
      
      f.hover(function(){
        e.animate({
          "right":fwidth+"px"
        },300); 
      },function(){
        e.animate({
          "right":"-"+ewidth+"px"
        },300);
      });
    }  
  }
  asidefun.init();
})

还有纯 css  hover 实现
/*  
.aside .webchat img{
  position: absolute;
  right:-128px;
  top:0;
  transition:all 0.5s ease-in-out 0.1s;
}
.aside .webchat a:hover img{
  right:52px;
}
*/