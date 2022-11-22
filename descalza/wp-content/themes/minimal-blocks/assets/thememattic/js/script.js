(function (e) {
    "use strict";
    var n = window.MINIMAL_JS || {};
    var iScrollPos = 0;
    var blocks;
    /*Used for ajax loading posts*/
    var loadType, loadButton, loader, pageNo, loading, morePost, scrollHandling;
    
    function minimal_blocks_is_on_scrn(elem) {
        // if the element doesn't exist, abort
        if (elem.length == 0) {
            return;
        }
        var tmtwindow = jQuery(window);
        var viewport_top = tmtwindow.scrollTop();
        var viewport_height = tmtwindow.height();
        var viewport_bottom = viewport_top + viewport_height;
        var tmtelem = jQuery(elem);
        var top = tmtelem.offset().top;
        var height = tmtelem.height();
        var bottom = top + height;
        return (top >= viewport_top && top < viewport_bottom) ||
            (bottom > viewport_top && bottom <= viewport_bottom) ||
            (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom);
    }

    n.mobileMenu = {
        init: function () {
            this.toggleMenu();
        },
        toggleMenu: function () {
            e('.nav-toogle').on('click', function (event) {
                e('body').toggleClass('extended-menu');
            });
            e('.main-navigation').on('click', 'ul.menu li button', function (event) {
                event.preventDefault();
                var ethis = e(this),
                    eparent = ethis.closest('li'),
                    esub_menu = eparent.find('> .sub-menu');
                if (esub_menu.css('display') == 'none') {
                    esub_menu.slideDown('300');
                    ethis.addClass('active');
                } else {
                    esub_menu.slideUp('300');
                    ethis.removeClass('active');
                }
                return false;
            });
        },
    };
    n.ThemematticPreloader = function () {
            e("body").addClass("page-loaded");
    };
    n.ThemematticSlider = function () {
        e('.main-slider').slick({
            slidesToShow: 1,
            fade: true,
            dots: true,
            prevArrow: e('.slide-prev-1'),
            nextArrow: e('.slide-next-1'),
            infinite: true,
            arrows: true
        });
        e('.main-carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            prevArrow: e('.slide-prev-2'),
            nextArrow: e('.slide-next-2'),
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        e('.recommended-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 8000,
            nextArrow: '<i class="navcontrol-icon slide-next ion-ios-arrow-right"></i>',
            prevArrow: '<i class="navcontrol-icon slide-prev ion-ios-arrow-left"></i>',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        arrows: true
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        arrows: true
                    }
                }
            ]
        });

        /*Single Column Gallery*/
        e(".gallery-columns-1, ul.wp-block-gallery.columns-1, .wp-block-gallery.columns-1 .blocks-gallery-grid").each(function () {
            e(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                autoplay: true,
                autoplaySpeed: 8000,
                infinite: true,
                dots: false,
                nextArrow: '<i class="navcontrol-icon slide-next ion-ios-arrow-right"></i>',
                prevArrow: '<i class="navcontrol-icon slide-prev ion-ios-arrow-left"></i>'
            });
        });
        /**/
    };
    n.SingleColGallery = function (gal_selector) {
        if (e.isArray(gal_selector)) {
            e.each(gal_selector, function (index, value) {
                e("#" + value).find('.gallery-columns-1, ul.wp-block-gallery.columns-1, .wp-block-gallery.columns-1 .blocks-gallery-grid').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: false,
                    nextArrow: '<i class="navcontrol-icon slide-next ion-ios-arrow-right"></i>',
                    prevArrow: '<i class="navcontrol-icon slide-prev ion-ios-arrow-left"></i>'
                });
            });
        } else {
            e("." + gal_selector).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: false,
                nextArrow: '<i class="navcontrol-icon slide-next ion-ios-arrow-right"></i>',
                prevArrow: '<i class="navcontrol-icon slide-prev ion-ios-arrow-left"></i>'
            });
        }
    };
    n.MagnificPopup = function () {
        e('.gallery, .wp-block-gallery').each(function () {
            e(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    opener: function (element) {
                        return element.find('img');
                    }
                }
            });
        });
    };

    n.DataBackground = function () {
        var pageSection = e(".data-bg");
        pageSection.each(function (indx) {
            if (e(this).attr("data-background")) {
                e(this).css("background-image", "url(" + e(this).data("background") + ")");
            }
        });
        e('.bg-image').each(function () {
            var src = e(this).children('img').attr('src');
            e(this).css('background-image', 'url(' + src + ')').children('img').hide();
        });
    };
    n.show_hide_scroll_top = function () {
        if (e(window).scrollTop() > e(window).height() / 2) {
            e("#scroll-up").fadeIn(300);
        } else {
            e("#scroll-up").fadeOut(300);
        }
    };
    n.scroll_up = function () {
        e("#scroll-up").on("click", function () {
            e("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    };
    n.toogle_minicart = function () {
        if (e("body").hasClass("rtl")) {
            e('.minicart-title-handle').sidr({
                side: 'right',
                displace: false,
            });
        } else {
            e('.minicart-title-handle').sidr({
                side: 'left',
                displace: false,
            });
        }
        e('.sidr-class-sidr-button-close').click(function () {
            e.sidr('close', 'sidr');
        });
    };
    n.ms_masonry = function () {
        if (e('.masonry-blocks').length > 0) {
            /*Default masonry animation*/
            var hidden = 'scale(0.5)';
            var visible = 'scale(1)';
            /**/
            /*Get masonry animation*/
            if (minimalBlocksVal.masonry_animation === 'none') {
                hidden = 'translateY(0)';
                visible = 'translateY(0)';
            }
            if (minimalBlocksVal.masonry_animation === 'slide-up') {
                hidden = 'translateY(50px)';
                visible = 'translateY(0)';
            }
            if (minimalBlocksVal.masonry_animation === 'slide-down') {
                hidden = 'translateY(-50px)';
                visible = 'translateY(0)';
            }
            if (minimalBlocksVal.masonry_animation === 'zoom-out') {
                hidden = 'translateY(-20px) scale(1.25)';
                visible = 'translateY(0) scale(1)';
            }
            /**/
            blocks = e('.masonry-blocks').imagesLoaded(function () {
                //e('.masonry-blocks article').fadeIn();
                blocks.masonry({
                    itemSelector: 'article',
                    hiddenStyle: {
                        transform: hidden,
                        opacity: 0
                    },
                    visibleStyle: {
                        transform: visible,
                        opacity: 1
                    }
                });
            });
        }
    };
    n.thememattic_matchheight = function () {
        e('.widget-area').theiaStickySidebar({
            additionalMarginTop: 30
        });
        e(function () {
            e('.woocommerce ul.products li .wrapper').matchHeight({property: 'min-height'});
        });
    };
    n.tmsticky_sidebar = function () {
        e('.widget-area').theiaStickySidebar({
            additionalMarginTop: 30
        });
    };
    n.setLoadPostDefaults = function () {
        if (e('.load-more-posts').length > 0) {
            loadButton = e('.load-more-posts');
            loader = e('.load-more-posts .ajax-loader');
            loadType = loadButton.attr('data-load-type');
            pageNo = 2;
            loading = false;
            morePost = true;
            scrollHandling = {
                allow: true,
                reallow: function () {
                    scrollHandling.allow = true;
                },
                delay: 400
            };
        }
    };
    n.fetchPostsOnScroll = function () {
         e(window).scroll(function () {
            if ( !e('.load-more-posts').hasClass('tmt-no-post') && !e('.load-more-posts').hasClass('tmt-post-loding') && e('.load-more-posts').hasClass('scroll') && minimal_blocks_is_on_scrn('.load-more-posts')) {

                e('.load-more-posts').addClass('tmt-post-loding');
                n.ShowPostsAjax();

            }
        });
    };
    n.fetchPostsOnClick = function () {
        if (e('.load-more-posts').length > 0 && 'click' === loadType) {
            e('.load-more-posts a').on('click', function (event) {
                event.preventDefault();
                n.ShowPostsAjax();
            });
        }
    };
    n.masonryOnClickUpdate = function () {
        setTimeout(function () {
            e('.masonry-blocks').masonry();
        }, 150);
    };
    n.onClickSlideUpdate = function () {
        setTimeout(function () {
            e('.widget-area').theiaStickySidebar('resize');
            e('.main-slider').slick('refresh');
            e('.main-carousel').slick('refresh');
            e('.recommended-slider').slick('refresh');
            e('.gallery-columns-1').slick('refresh');
            e('.columns-1').slick('refresh');
        }, 120);
    };
    n.fetchPostsOnMenuClick = function () {
        e('.trigger-icon-wraper').on('click', function (event) {
            event.preventDefault();
            blocks = e('.masonry-blocks');
            n.masonryOnClickUpdate();
            n.onClickSlideUpdate();
        });
    };
    n.ShowPostsAjax = function () {
        e.ajax({
            type: 'GET',
            url: minimalBlocksVal.ajaxurl,
            data: {
                action: 'minimal_blocks_load_more',
                nonce: minimalBlocksVal.nonce,
                page: pageNo,
                post_type: minimalBlocksVal.post_type,
                search: minimalBlocksVal.search,
                cat: minimalBlocksVal.cat,
                taxonomy: minimalBlocksVal.taxonomy,
                author: minimalBlocksVal.author,
                year: minimalBlocksVal.year,
                month: minimalBlocksVal.month,
                day: minimalBlocksVal.day
            },
            dataType: 'json',
            beforeSend: function () {
                loader.addClass('ajax-loader-enabled');
            },
            success: function (response) {

                e('.load-more-posts').removeClass('tmt-post-loding');
                if (response.success) {
                    var gallery = false;
                    var gal_selectors_1 = [];
                    var gal_selectors_2 = [];
                    var content_join = response.data.content.join('');
                    if (content_join.indexOf("gallery-columns-1") >= 0 ||
                        content_join.indexOf("wp-block-gallery") >= 0 ||
                        content_join.indexOf("blocks-gallery-grid") >= 0) {
                        gallery = true;
                        /*Push the post ids having galleries so that new gallery instance can be created*/
                        e(content_join).find('.entry-gallery').each(function () {
                            gal_selectors_1.push(e(this).closest('article').attr('id'));
                        });
                    }
                    if (content_join.indexOf("columns-1") >= 0) {
                        gallery = true;
                        /*Push the post ids having galleries so that new gallery instance can be created*/
                        e(content_join).find('.entry-gallery').each(function () {
                            gal_selectors_2.push(e(this).closest('article').attr('id'));
                        });
                    }
                    if (e('.masonry-blocks').length > 0) {
                        var econtent = e(content_join);
                        econtent.hide();
                        blocks = e('.masonry-blocks');
                        blocks.append(econtent);
                        blocks.imagesLoaded(function () {
                            econtent.show();
                            /*Init new Gallery*/
                            if (true === gallery) {
                                n.SingleColGallery(gal_selectors_1);
                            }
                            /**/
                            var winwidth = e(window).width();
                            e(window).resize(function() {
                                winwidth = e(window).width();
                            });

                            if( winwidth > 990 ){
                                blocks.masonry('appended', econtent).masonry();
                            }else{
                                blocks.masonry('appended', econtent);
                            }
                            loader.removeClass('ajax-loader-enabled');
                        });
                    }
                    pageNo++;
                    loading = false;
                    if (!response.data.more_post) {
                        morePost = false;
                        loadButton.fadeOut();
                    }
                    /*For audio and video to work properly after ajax load*/
                    e('video, audio').mediaelementplayer({alwaysShowControls: true});
                    /**/
                    /*For Gallery to work*/
                    n.MagnificPopup();
                    /**/
                    loader.removeClass('ajax-loader-enabled');
                } else {
                    e('.load-more-posts').addClass('tmt-no-post');
                    loadButton.fadeOut();
                }
            }
        });
    };
	
	e(window).load(function () {
		n.ThemematticPreloader();
	});
	
    e(document).ready(function () {
        n.mobileMenu.init();
        n.ThemematticSlider();
        n.MagnificPopup();
        n.DataBackground();
        n.scroll_up();
        n.thememattic_matchheight();
        n.tmsticky_sidebar();
        n.toogle_minicart();
        n.ms_masonry();
        n.setLoadPostDefaults();
        n.fetchPostsOnClick();
        n.fetchPostsOnMenuClick();
    });
    e(window).scroll(function () {
        n.show_hide_scroll_top();
        n.fetchPostsOnScroll();
    });
})(jQuery);