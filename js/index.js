/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-20 00:10:12
 * @version $Id$
 */

if(/Android (\d+\.\d+)/.test(navigator.userAgent)){
    var version = parseFloat(RegExp.$1);
    if(version>2.3){
        var phoneScale = parseInt(window.screen.width)/640;
        document.write('<meta name="viewport" content="width=640, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', target-densitydpi=device-dpi">');
    }else{
        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
    }
}else{
    document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}
//
$(function(){

    var aToggleBtn=$('.toggle-btn li');
    var aToggleBox=$('.header-toggle div')
    var aTitle=$('.header-toggle div h3');
    var aTText=$('.header-toggle div p');
    var aTBtn=$('.header-toggle div a');
    var n=0;
 
    aToggleBtn.each(function(index){
        //轮播图切换效果
        aToggleBtn.eq(index).click(function(){
            n=index;
           chick(index)
        })
    })
      //两边箭头隐藏显示
        var headerBox=$('.header-box');
        var oLeftBtn=$('.tleft');
        var oRightBtn=$('#TrightBtn');

       headerBox.mouseover(function(){
            oLeftBtn.stop().animate({opacity:0.4});
            oRightBtn.stop().animate({opacity:0.4});
       })
        headerBox.mouseout(function(){
             oLeftBtn.stop().animate({opacity:0});
            oRightBtn.stop().animate({opacity:0});
       })

        oLeftBtn.mouseover(function(){
            $(this).stop().animate({opacity:1});
        })




//左点击轮播图    
    

    chick(n)

    oRightBtn.click(function(){
        n++;  
        if(n>=4)n=0;
         chick(n);
    })
//右点击轮播图
    oLeftBtn.click(function(){
         n--;  
        if(n<0)n=3;
         chick(n);
     })
//自动播放
    var timer=null;
    clearInterval(timer);
    timer=setInterval(function(){
        n++;  
        
        if(n>=4)n=0;
        chick(n);
    },3000)

    headerBox.mouseover(function(){
        clearInterval(timer)
    })
    headerBox.mouseout(function(){
        clearInterval(timer)
        timer=setInterval(function(){
            n++;  
            if(n>=4)n=0;
            chick(n)
        },3000)
    })
    //z左右封装函数
    function chick(num)
    {
         aToggleBox.stop().animate({opacity:0},{duration:30});
        aToggleBox.css({'transform':'scale(1.5)',zIndex:0});

        aTitle.css({transform:'translate(0,-40px)',opacity:0});
        aTText.css({transform:'translate(0,-40px)',opacity:0});
        aTBtn.css({transform:'translate(0,-40px)',opacity:0});

        aToggleBtn.removeClass('active');
         aToggleBtn.eq(num).addClass('active');
        aToggleBox.eq(num).stop().animate({opacity:1},{duration:200});
        aToggleBox.eq(num).css({'transform':'scale(1)',zIndex:10});

        aTitle.eq(num).css({transform:'translate(0,0)'});
         aTitle.eq(num).stop().animate({opacity:1},{complete:function(){
             aTText.eq(num).stop().animate({opacity:1},{complete:function(){
                 aTBtn.eq(num).stop().animate({opacity:1});
             }})
         }})

        aTText.eq(num).css({transform:'translate(0,0)'});

        aTBtn.eq(num).css({transform:'translate(0,0)'});
    };

    //顶部导航条
    var oNavTitle=$('.header-navbox');
    var oNavMenu=$('.header-menu');
    oNavTitle.stop().animate({top:30,opacity:1},{complete:function(){
        oNavMenu.addClass('animated tada');
    }})

    //鼠标向下箭头指示
    var mouseSerch=$('#mouse-serch');
    headerBox.mouseover(function(){
        mouseSerch.stop().animate({opacity:1},{duration:2000})
    })
    headerBox.mouseout(function(){
        mouseSerch.stop().animate({opacity:0})
    })


    //自我介绍部分
    var selfTitle=$('.self-int-title');
    var selfText=$('.self-int-text');
    var selfPhoto=$('.self-int-photo');
    var selfJavaSc=$('.sele-int-javascript');
    var selfCss=$('.sele-int-css3');

    //作品展示
    var htmlList=$('.pre-html');
    var javaList=$('.pre-javascript');
    var cssList=$('.pre-css');


    //设置透明度的函数
    setOpacity([selfTitle,selfText,selfPhoto,selfJavaSc,selfCss,htmlList,javaList,cssList]);
    
   

    //物体滚动距离的函数
    $(window).scroll(function(){
       scroll([selfTitle,selfText,selfPhoto,selfJavaSc,selfCss,htmlList,javaList,cssList]);
    })

    //  $(window).scroll(function(){
    //    leavescroll([selfTitle,selfText,selfPhoto])
       
    // })
    //测量物体滚动距离的函数
    function scroll(arr)
    {
        for(var i=0;i<arr.length;i++)
        {
            var top=arr[i].offset().top-$(window).height();
            var scroll=$(document).scrollTop();
             if(scroll>top)
            {
                // arr[i].removeClass('fadeout')
                arr[i].addClass('fadein');
            }
         } 
    };

   
    //离开隐藏
    //  function leavescroll(arr)
    // {
    //     for(var i=0;i<arr.length;i++)
    //     {
    //         var top=arr[i].offset().top-$(window).height();
    //         var scroll=$(document).scrollTop();
    //          if(scroll<=top-40)
    //         {
    //             arr[i].removeClass('fadein')
    //             arr[i].addClass('fadeout')
    //         }
    //      } 
    // };
    //群组设置透明度
      function setOpacity(arr){
        for(var i=0;i<arr.length;i++)
        {
            arr[i].css({opacity:0})
            arr[i].addClass('tranlate');
        }
      };

      //作品展示
      
      var html=$('.pre-opacity');
      var htmlBack=$('.pre-html-back');
      var javaBack=$('.pre-javascript-back');
      var cssBack=$('.pre-css-back');
      html.eq(0).mouseover(function(){
        htmlBack.css({backgroundPosition:'0 -100px'});
      })
      html.eq(1).mouseover(function(){
        javaBack.css({backgroundPosition:'0 -100px'});
      })
       html.eq(2).mouseover(function(){
        cssBack.css({backgroundPosition:'0 -300px'});
      })

        html.eq(0).mouseout(function(){
        htmlBack.css({backgroundPosition:'0 0'});
      })
      html.eq(1).mouseout(function(){
        javaBack.css({backgroundPosition:'0 0'});
      })
       html.eq(2).mouseout(function(){
        cssBack.css({backgroundPosition:'0 -200px'});
      })


      //技能学习模块

       function scrL(arr)
        {
            for(var i=0;i<arr.length;i++)
            {
                var top=arr[i].offset().top-$(window).height();
                var scroll=$(document).scrollTop();
                 if(scroll>top)
                {
                    // arr[i].removeClass('fadeout')
                    arr[i].addClass('fadeinl');
                }
             } 
        };
      var faBox=$('.fa-list div');
      var faIcon=$('.fa-list div span');
      var faTitle=$('.fa-list div h3');
      var faText=$('.fa-list div p');
      faBox.each(function(index){
            faBox.eq(index).mouseenter(function(){
                faIcon.eq(index).css({transform: 'translate(0,-120px)'});
                faTitle.eq(index).css({transform: 'translate(0,-80px)'});
                faText.eq(index).css({transform: 'translate(0,-40px) scale(1)',opacity:1});
            })


            faBox.eq(index).mouseleave(function(){
                faIcon.eq(index).css({transform: 'translate(0,0)'});
                faTitle.eq(index).css({transform: 'translate(0,0)'});
                faText.eq(index).css({transform: 'translate(0,0) scale(0.1)',opacity:0});
            })

            $(window).scroll(function(){
                scrL([faBox.eq(index)])
            })

      })

      //个人爱好
      
      function scrBig(arr)
        {
            for(var i=0;i<arr.length;i++)
            {
                var top=arr[i].offset().top-$(window).height();
                var scroll=$(document).scrollTop();
                 if(scroll>top)
                {
                    // arr[i].removeClass('fadeout')
                    arr[i].addClass('fadeinBig');
                }
             } 
        };
      
      var aHobLi=$('.hobby-list li');

      aHobLi.each(function(index){
         $(window).scroll(function(){
            scrBig([aHobLi.eq(index)])
        })
      })

      //回到顶部
      var topBtn=$('.to-top');
      var timerT=null;
      var userScroll=false;
      
       $(window).scroll(function(){
        if (userScroll)
        {
          clearInterval(timerT);
        }
        
        userScroll=true;
     })
      

      topBtn.click(function(){
        var start=$(document).scrollTop();
       
        var dis=0-start;
        var count=Math.floor(900/30);
        var n=0;
        
        clearInterval(timer);
        timerT=setInterval(function (){
          n++;
          
          userScroll=false;
          var cur=start+dis*n/count;
          $(document).scrollTop(cur)

          
          if (n == count)
          {
            clearInterval(timerT);
          }
        }, 30);
      })
       

      // 移入有声音
        var oUl=document.getElementById('pr-ul');
            var aLi=oUl.children;

            for(var i=0; i<aLi.length; i++){
                aLi[i].dataset.index=i;
                aLi[i].onmouseout=function(){
                    var oA=new Audio();
                    oA.src=oggSound['sound'+(49+parseInt(this.dataset.index))];
                    oA.play();
                };
            }
     
   })   
