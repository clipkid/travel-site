import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class ScrollReveal {
   constructor(els, offset) {
      this.itemsToReveal = els;
      this.offsetperc = offset;
      this.hideInitially();
      this.createWaypoints();
   }
   
   hideInitially() {
      this.itemsToReveal.addClass("reveal-item");
   }
   
   createWaypoints() {
      var that = this;
      this.itemsToReveal.each(function() {
         var currentItem = this;
         new Waypoint({
            element: currentItem,
            handler: function() {
               $(currentItem).addClass('reveal-item--is-visible');
            },
            offset: that.offsetperc
         });
      });
   }
}

export default ScrollReveal;