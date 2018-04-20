/*
 Version: 1.0.0
 Author: lemehovskiy
 Website: http://lemehovskiy.github.io
 Repo: https://github.com/lemehovskiy/background_element
 */

'use strict';

(function ($) {

    class BackgroundElement {

        constructor(element, options) {

            let self = this;
            
            //extend by function call
            self.settings = $.extend(true, {
                ratio_x: 16,
                ratio_y: 9,
                background_element: 'video',
                window_relative: false
                
            }, options);

            self.$element = $(element);

            self.$background_element = self.$element.find(self.settings.background_element);

            //extend by data options
            self.data_options = self.$element.data('background-element');
            self.settings = $.extend(true, self.settings, self.data_options);


            self.$element.css({
                overflow: 'hidden'
            })

            self.$background_element.css({
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            })

            self.init();
        }

        init(){
            let self = this;

            self.resize();

            $(window).on('resize', function () {
                self.resize();
            });
        }

        resize(){
            let self = this;

            let width = 0;
            let height = 0;

            if (self.settings.window_relative){
                width = $(window).width();
                height = $(window).height();
            }
            else {
                width = self.$element.outerWidth();
                height = self.$element.outerHeight();
            }

            if (width / height > self.settings.ratio_x / self.settings.ratio_y) {
                self.$background_element.css({
                    "width": width,
                    "height": width / self.settings.ratio_x * self.settings.ratio_y
                });
            } else {
                self.$background_element.css({
                    "width": height / self.settings.ratio_y * self.settings.ratio_x,
                    "height": height
                });
            }
        }
    }


    $.fn.backgroundElement = function() {
        let $this = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            length = $this.length,
            i,
            ret;
        for (i = 0; i < length; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                $this[i].background_element = new BackgroundElement($this[i], opt);
        else
            ret = $this[i].background_element[opt].apply($this[i].background_element, args);
            if (typeof ret != 'undefined') return ret;
        }
        return $this;
    };

})(jQuery);