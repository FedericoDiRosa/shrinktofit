/**
 *  ShrinkToFit.js
 *
 *  Author: Federico Di Rosa
 *  Website: federicodirosa.com
 *  Repo: github.com/FedericoDiRosa/shrinktofit
 *  Version: 1.0
 *  License: MIT
 *
 */

(function ( $ ) {

    $.fn.ShrinkToFit = function( options ) {

    	var _ = this;

    	function shrink() {

    		_.each(function() {

    			var $this = $(this);

    			if ($this.data('ShrinkToFit_s') === undefined)
    				$this.data('ShrinkToFit_s', $this.css('font-size'));

    			var defaults = {
    				min: '0px',
    				wrap: true
    			};

    			var settings = $.extend(defaults, options);

				if (!settings.wrap) {
					$this.css('white-space','nowrap');
				}

    			function getElementWidth(){
    				var width = $this.css('display','inline-block').width();
    				$this.css('display','');
    				return width;
    			}

    			function getParentWidth(){
    				var width = $this.parent().css('display','block').width();
    				$this.parent().css('display','');
    				return width;
    			}

    			$this.e = getElementWidth();
    			$this.p = getParentWidth();

				if ($this.e < $this.p) {
					$this.css('font-size', '');
					$this.e = getElementWidth();
					$this.p = getParentWidth();
				}

    			while ($this.e > $this.p) {
    				if ($this.css('font-size') == settings.min) break;
    				$this.css('font-size', parseInt($this.css('font-size')) - 1 + 'px');
    				$this.e = getElementWidth();
    				$this.p = getParentWidth();
    			}

    		});

    	}

    	$(window).on('resize', shrink());
    	$(document).on('ready', shrink());

    };

}( jQuery ));
