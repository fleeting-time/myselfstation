/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-23 20:48:17
 * @version $Id$
 */
$(function(){

    var oBox=$('.lagou div');
    var oSpan=$('span');
    
    oBox.each(function(index) {
        $(this).hover(function(ev){
            
            var n=getN(ev,index);
            
            switch(n)
            {
                case 0:
                oSpan.eq(index).css({left:200,top:0})
                break;
                
                case 1:
                oSpan.eq(index).css({top:200,left:0})
                break;
                
                case 2:
                oSpan.eq(index).css({left:-200,top:0})
                break;
                
                case 3:
                oSpan.eq(index).css({top:-200,left:0})
                break;
            }
            //alert(index)
            oSpan.eq(index).stop().animate({left:0,top:0},{duration:600})
        },function(ev){
            var n=getN(ev,index);
            
            switch(n)
            {
                case 0:
                oSpan.eq(index).stop().animate({left:200,top:0},{duration:600})
                break;
                
                case 1:
                oSpan.eq(index).stop().animate({top:200,left:0},{duration:600})
                break;
                
                case 2:
                oSpan.eq(index).stop().animate({left:-200,top:0},{duration:600})
                break;
                
                case 3:
                oSpan.eq(index).stop().animate({left:0,top:-200},{duration:600})
            }
        })
    });
    
    function getN(ev,index)
    {
        var x=oBox.eq(index).width()/2+oBox.eq(index).offset().left-ev.clientX;
        var y=oBox.eq(index).height()/2+oBox.eq(index).offset().top-ev.clientY;
        var a=Math.atan2(y,x)*180/Math.PI;
        var n=Math.round((a+180)/90)%4;
        //alert(n)
        return n;
        
    }

    //日历
    //
    (function(){
         var oSpan=$('#title');
    var oOl=$('#ol');
    
    
    var now=0;
    var leftBtn=$('#left');
    var rightBtn=$('#right');
    create()
    
    
    rightBtn.click(function(){
        now++;
        create()    
    })
    
    leftBtn.click(function(){
        now--;
        create()    
    })
    
    
    
    function create()
    {   
        var oTime=new Date();
        oTime.setMonth(oTime.getMonth()+now)
        var year=oTime.getFullYear();
        
        var month=oTime.getMonth();
        oSpan.html(year+'年'+(month+1)+'月');
    
        //创建空白日期
        oOl.empty();
        var oTime=new Date();
        oTime.setMonth(oTime.getMonth()+now)
        oTime.setDate(1)
        var date=oTime.getDay();
        if(date==0)
        {
            date=7;
        }
        for(var i=0;i<date-1;i++)
        {
            var oLi=$('<li></li>');
            oLi.appendTo(oOl)
        }
        
        //创建日期
        var oTime=new Date();
        oTime.setMonth(oTime.getMonth()+now)
        oTime.setMonth(oTime.getMonth()+1,1);
        oTime.setDate(0);
        var nowDate=oTime.getDate();
        for(var i=0;i<nowDate;i++)
        {
            var oLi=$('<li>'+(i+1)+'</li>');
            
            oLi.appendTo(oOl);
            
        }
    }
    })()


    
   
})
