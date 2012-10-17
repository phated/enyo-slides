enyo.kind({
  kind: "slidedeck.CodeSlide",
  name: "kindsPlayground",

  title: "Kinds Playground",

  create: function() {
    this.inherited(arguments);

    this.setCodeSamples(["sample1", 'sample2', 'sample3', 'sample4']);
  }
});
