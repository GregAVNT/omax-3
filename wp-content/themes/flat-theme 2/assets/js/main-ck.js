jQuery(function(e){e(function(){e("#main-slider.carousel").carousel({interval:8e3})});e(".centered").each(function(t){e(this).css("margin-top",(e("#main-slider").height()-e(this).height())/2)});e(window).resize(function(){e(".centered").each(function(t){e(this).css("margin-top",(e("#main-slider").height()-e(this).height())/2)})});e(window).load(function(){$portfolio_selectors=e(".portfolio-filter >li>a");if($portfolio_selectors!="undefined"){$portfolio=e(".portfolio-items");$portfolio.isotope({itemSelector:"li",layoutMode:"fitRows"});$portfolio_selectors.on("click",function(){$portfolio_selectors.removeClass("active");e(this).addClass("active");var t=e(this).attr("data-filter");$portfolio.isotope({filter:t});return!1})}});var t=e(".contact-form");t.submit(function(){$this=e(this);e.post(e(this).attr("action"),function(e){$this.prev().text(e.message).fadeIn().delay(3e3).fadeOut()},"json");return!1});e(".gototop").click(function(t){t.preventDefault();e("html, body").animate({scrollTop:e("body").offset().top},500)});e("a[rel^='prettyPhoto']").prettyPhoto({social_tools:!1})});