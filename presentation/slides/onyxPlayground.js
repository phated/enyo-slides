enyo.kind({
  kind: "slidedeck.CodeSlide",
  name: "onyxPlayground",

  title: "Onyx Widget Playground",

  create: function() {
    this.inherited(arguments);

    this.setCodeSamples(["onyxButtonsSimple", "onyxPopup","onyxSlidersAndProgress","onyxControls"]);
  }
});
