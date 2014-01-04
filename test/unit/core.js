(function( $, undefined ) {

	module( "Core" );

	test( "Requirements", function() {
		expect( 5 );

		ok( $, "jQuery exists" );
		ok( $.Autosave, "jQuery.Autosave exists" );
		ok( $.Autosave.Handler, "jQuery.Autosave.Handler exists" );
		ok( $.Autosave.Sequence, "jQuery.Autosave.Sequence" );
		ok( $.fn.autosave, "jQuery.fn.Autosave exists" );
	});

	test( "Initialization / Destruction", function() {
		var fixture = $( "#qunit-fixture" ).autosave(),
			autosave = fixture.data( 'autosave' );

		expect( 3 );

		ok( autosave instanceof jQuery.Autosave, "Autosave instance stored in element." );
		equal( autosave.inputs().length, 11, "Element contains 11 inputs (one is ignored)." );

		autosave.destroy();

		equal( fixture.data( "autosave" ), undefined, "Autosave instance has been destroyed." );
	});

})( jQuery );
