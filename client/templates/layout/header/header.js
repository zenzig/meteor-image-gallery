Template.header.helpers({
	isActive: function (type) {
		var name = Router.current().route.getName();
		return (name === type) ? 'active' : '';
	}
});

Template.header.events ({
	'click [data-toggle=offcanvas], click .activated a': function (e) {
		$('[data-toggle=offcanvas]').toggleClass('visible-xs text-left');
    	$('[data-toggle=offcanvas]').find('i').toggleClass('glyph-menu glyphicon-chevron-left');
	    $('.row-offcanvas').toggleClass('activated');
	    $('#lg-menu').toggleClass('activated');
	    $('#tag-list').toggleClass('activated');
	    $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
	    $('#sidebar-footer').toggleClass('hidden-xs').toggleClass('visible-xs');
	    $('#logo').toggleClass('hidden-xs').toggleClass('visible-xs');
	    $('#tag-list').toggleClass('hidden-xs').toggleClass('visible-xs');
	    $('#title').toggleClass('visible-xs').toggleClass('hidden-xs');
	}
});
