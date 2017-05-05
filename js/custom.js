 $(document).ready(function(){
    $('.mob_menu_btn').click(function(){
        $(".mob_menu_btn_menu").addClass("active").show();
        });
        $('.close_mob_menu').click(function(){
           $(".mob_menu_btn_menu").addClass("no_active").hide();
      });
});
jQuery(document).ready(function(){
          $(window).scroll(function(){
              if($(this).scrollTop()>155){
                  $('.top_menu').addClass('fixed').removeClass('overfl');
                  $('.top_menu');
                  $('.menu').addClass('fixed_menu');
                  $('.tel_top').addClass('fixed_tel_top');
                  $('.logo').addClass('logo_2');
                  $('.search').addClass('scroll_search');
                  $('.header_btn').addClass('scroll_header_btn');
                  

              }
              else if ($(this).scrollTop()<155){
                  $('.logo').removeClass('logo_2');
                  $('.tel_top').removeClass('fixed_tel_top');
                  $('.menu').removeClass('fixed_menu');
                  $('.top_menu').removeClass('fixed').addClass('overfl');
                  $('.header_btn').removeClass('scroll_header_btn');
                  $('.search').removeClass('scroll_search');

                  
              }
          });
      });

/*slider*/

/*read_more link*/  
jQuery(document).ready(function(){
    var text_height = $('.show_more_text').outerHeight();
    var max_height = parseInt($('.show_more_text').css('max-height'));
    if(text_height < max_height){
        $('.show_more, .hide_content').hide();
    }
    $('.show_more').click(function(){
        $(this).hide();
        $(this).siblings('.show_more_text').animate({'max-height':'2000px'}, 500);
        $(this).siblings('.show_more_text').find('.hide_content').animate({'bottom':'-35px'}, 500);
        return false;
    });
}); 
 $(document).ready(function(){
    $('.open_search_panel').click(function(){
        $(".search_panel").addClass("active").show();
        });
        $('.close_search').click(function(){
           $(".search_panel").addClass("no_active").hide();
      });
});
 
 $(document).ready(function(){
    $( ".lang_panel" ).click(function() {
        $(".lang_panel").toggleClass("open_lang_panel");//.show();
        $( ".lang_sel" ).toggle(  );
         return false;
    });
    $( ".lang_sel li a" ).click(function() {
        var htmlString = $(this).html();
        $( ".selected_lang").text( htmlString );
        $(".lang_panel").toggleClass("open_lang_panel");
        $( ".lang_sel" ).toggle( );
        return false;
    });
});
/*$(document).ready(function(){
    $( ".dd_b" ).hover(
      function() {
        $(".menu-hover").toggleClass("active_dd_b").show();
      }, function() {
        $( this ).find( "span:last" ).remove();
      }
    );
});*/
/*modal*/
jQuery(document).ready(function(){
    $('.modal_close, .modal_overlay').click(function(){
        $('.modal_overlay, .modal').fadeOut(300);                
    });
     
    $('.modal_open').click(function(){
        var modal_id = $(this).attr('data-modal');
        $('.modal_overlay, #' + modal_id).fadeIn(300);
    });
});

jQuery(document).ready(function(){
    function htmSlider(){
        var slideWrap = jQuery('.slide_wrap');       
        var nextLink = jQuery('.next_slide');
        var prevLink = jQuery('.prev_slide');   
        var playLink = jQuery('.auto');    
        var is_animate = false;          
        var slideWidth = jQuery('.slide_item').outerWidth();
        var newLeftPos = slideWrap.position().left - slideWidth;
        nextLink.click(function(){
            if(!slideWrap.is(':animated')) {
                slideWrap.animate({left: newLeftPos}, 500, function(){
                    slideWrap
                        .find('.slide_item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({'left': 0});
                });
            }
        });                                             
        prevLink.click(function(){
            if(!slideWrap.is(':animated')) {
                slideWrap
                    .css({'left': newLeftPos})
                    .find('.slide_item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({left: 0}, 500);
            }
        });                                                   
        function autoplay(){
            if(!is_animate){
                is_animate = true;
                slideWrap.animate({left: newLeftPos}, 500, function(){
                    slideWrap
                        .find('.slide_item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({'left': 0});
                    is_animate = false;
                });
            }
        }                                       
        playLink.click(function(){
            if(playLink.hasClass('play')){
                playLink.removeClass('play').addClass('pause');
                jQuery('.navy').addClass('disable');
                timer = setInterval(autoplay, 1000);
            } else {
                playLink.removeClass('pause').addClass('play');
                jQuery('.navy').removeClass('disable');
                clearInterval(timer);
            }
        });
 
    }                                     
    htmSlider();
});