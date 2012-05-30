enyo.kind({
  kind: "Panels",
  name: "Slides.SlidesPane",
  arrangerKind: "CardArranger",

  addSlide: function( component ) {
    enyo.log( "Adding component:" );
    enyo.log( component );

    var instance = this.createComponent( component, {owner: this} );

    this.render();
  },

  cleanOut: function() {
    this.destroyComponents();
  },

  goToSlide: function( idx ) {
    this.setIndex( idx );
  }
});
