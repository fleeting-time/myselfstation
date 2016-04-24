/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-02 16:14:24
 * @version $Id$
 */

/*欢迎字幕*/
// window.onload=function(){
//         var eyeL=document.getElementById('eyeL');
//         var eyeR=document.getElementById('eyeR');

//         var n=0;
//         setInterval(function(){
//             n++;

//             if(n==2)
//             {
//                 eyeR.className='star';
//                 eyeL.className='star';
//             }
//             else
//             {
//                 eyeR.className='';
//                 eyeL.className='';
//             }

//             if(n>2)
//             {
//                 n=0;
//             }
//         },2000)
//     };

   
    
 // Welcome tomy website
    $(function(){
        //进入文字
        var we=$('#we');
        var ws=$('#ws');

        we.animate({top:-35,opacity:1},{duration:500}).animate({left:[-100,'easeOutQuint']},{duration:500}).animate({left:[-70,'easeOutQuint']})
        ws.animate({bottom:30,opacity:1},{duration:500}).animate({right:[-100,'easeOutQuint']},{durattion:500}).animate({right:[-70,'easeOutQuint']})
        //nav导航盒子
        var navBox=$('#navbox');

        navBox.animate({top:0},{duration:500})



         setTimeout(function(){
            var lone=$('#lone');
            var ltwo=$('#ltwo');
            var lthree=$('#lthree');
            var lfour=$('#lfour');

            var rone=$('#rone');
            var rtwo=$('#rtwo');
            lone.animate({left:0},{duration:70,complete:function(){
                 ltwo.animate({left:0},{duration:80,complete:function(){
                     lthree.animate({left:0},{duration:100,complete:function(){
                         lfour.animate({left:0});
                     }});
                 }});
            }});

            rone.animate({top:0});
             rtwo.animate({top:40});
         },800)

         //导航按钮切换
         var navBox=$('#nav_box');
         var aNavBtn=$('#nav_box div');
         var aNavImg=$('#nav_box div img');
         var aLink=$('#nav_box div a');

        aNavBtn.each(function(index){
            aNavBtn.animate({opacity:1},{duration:1000})
            aNavBtn.eq(index).mouseover(function(){
                aNavImg.eq(index).stop().animate({opacity:0})
                aLink.eq(index).stop().animate({opacity:1})
               // $(this)[0].style.transform='perspective(800px) rotateX(-360deg)';
               $(this).css({transform:'perspective(100px) rotateX(360deg)',transition:'.5s all ease'});
            })

             aNavBtn.eq(index).mouseout(function(){
                aNavImg.eq(index).stop().animate({opacity:1})
                aLink.eq(index).stop().animate({opacity:0.5})
            })
        })
        var timer=null;
        var imgN=0;
        clearInterval(timer)
        timer=setInterval(function(){
            imgN++;

            if(imgN%2==0)
            {
                aNavImg.eq(3).stop().animate({opacity:0});
                aLink.eq(3).stop().animate({opacity:1})
            }
            else
            {   
                aNavImg.eq(3).stop().animate({opacity:1});
                aLink.eq(3).stop().animate({opacity:0.5})
            }
            },1000)

        //技能模块
        var oSLone=$('#ski_lone');
        var oSLtwo=$('#ski_ltwo');
        var oSRone=$('#ski_rone');
        var oSRtwo=$('#ski_rtwo');
        //导航条positionq
        var oNavTopPosition=$('#navbox');
        var oSKBoxTop=$('#skillbox').offset().top-$(window).height();
        $(window).scroll(function(){
            var scrollTop=$(document).scrollTop();
            if(scrollTop>=50)
            {
                //oNavTopPosition.css({position:'fixed',left:0,top:0})
            }
            if(scrollTop>=oSKBoxTop)
            {
                oSLone.animate({left:0,opacity:1})
                oSLtwo.animate({top:0,opacity:1})
                oSRone.animate({right:0,opacity:1})
                oSRtwo.animate({bottom:0,opacity:1})
            }
        })
        //时钟
        var oDiv=document.querySelector('.timebox');
            var oH=document.querySelector('.hour');
            var oM=document.querySelector('.min');
            var oS=document.querySelector('.sec');

            function tick(){
                var oDate=new Date();
                var h=oDate.getHours();
                var m=oDate.getMinutes();
                var s=oDate.getSeconds();
                var ms=oDate.getMilliseconds();

                oH.style.transform='rotate('+(h*30+m/60*30)+'deg)';
                oM.style.transform='rotate('+(m*6+s/60*6)+'deg)';
                oS.style.transform='rotate('+(s*6+ms/1000*6)+'deg)';
            }
            tick();
            setInterval(tick,30);


            //魔方
           
            // var magicBox=document.querySelector('#marginbox');
            // function rnd(n,m)
            // {
            //     return Math.random()*(m-n)+n;
            // }
            // var width=0;
            // var height=0;
            // setInterval(function(){
            //    width=rnd(400,500);
            //    height=rnd(400,500);
            // },100)
            //  magicBox.style.width=width+'px';
            //  magicBox.style.height=height+'px'; 
          
    })