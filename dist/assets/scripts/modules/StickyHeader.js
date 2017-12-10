import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		});
	}
	// Why Waypoints don't need to be refreshed in other modules using it as well?
	// Answer: Waypoints library doesn't actually import data the way standard ES6 module files do. All the Waypoints library does is attach an object named "Waypoint" to the web browser's global window scope.
	// And because this object exists in web browser's global window scope, when we call it here, this isn't only being applied to the waypoints created in StickyHeader.js. This is actually refreshing all the waypoints that currently exist in web browser's memory.
	// That's why we don't need to include the code to refresh waypoints in other modules where we are using it, in this case RevealOnScroll.js.

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;