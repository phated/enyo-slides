enyo.kind({
  kind: "slidedeck.Slide",
  name: "aboutUs",

  components: [
    {
      kind: "onyx.Toolbar", content: "We Are Kind Of Awesome"
    },
    {
      kind: 'enyo.FittableColumns',
      components:[
        {
          fit: true,
          name: "left_div",
          components: [
            {
              components: [
                {
                  components: [
                    {
                      kind: 'enyo.Image',
                      classes: 'right-photo',
                      src: '$presentation/assets/images/blaine.jpg'
                    },
                    {
                      tag: 'ul',
                      components: [
                        {
                          tag: 'li',
                          components: [
                            {
                              content: 'Blaine Bublitz'
                            },
                            {
                              tag: 'ul',
                              components: [
                                {
                                  tag: 'li',
                                  content: 'Kind of a big deal'
                                },
                                {
                                  tag: 'li',
                                  content: 'Co-founded Iced Development'
                                },
                                {
                                  tag: 'li',
                                  content: 'Contributor to EnyoJS'
                                },
                                {
                                  tag: 'li',
                                  content: 'Works on JavaScript/HTML5 and Node.js'
                                },
                                {
                                  tag: 'Likes complicated front-end JavaScript projects'
                                },
                                {
                                  tag: 'li',
                                  content: 'Does a lot of toolchain development'
                                },
                                {
                                  tag: 'li',
                                  content: 'Developed tooling for EnyoJS for easier and faster development'
                                },
                                {
                                  tag: 'li',
                                  content: 'Interested in Responsive/mobile-first design'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              style: 'text-align: center;',
              components: [
                {tag: "a", attributes: { href: "http://iceddev.com" }, content: "Iced Dev" },
                {tag: "span", content: " - "},
                {tag: "a", attributes: { href: "http://github.com/phated" }, content: "Github" },
                {tag: "span", content: " - "},
                {tag: "a", attributes: { href: "http://twitter.com/BlaineBublitz" }, content: "Blaine on Twitter" },
                {tag: "span", content: " - "},
                {tag: "a", attributes: { href: "http://twitter.com/iceddev" }, content: "Iced on Twitter" }
              ]
            }
          ]
        },
        {
          name: "right_div",
          style: 'width: 50%;',
          components: [
            {
              components: [
                {
                  kind: "enyo.Image",
                  classes: "right-photo",
                  src: "$presentation/assets/images/ryan_headshot_med.jpg"
                },
                {
                  tag: 'ul',
                  components: [
                    {
                      tag: 'li',
                      components: [
                        {
                          content: 'Ryan Rix'
                        },
                        {
                          tag: 'ul',
                          components: [
                            {
                              tag: 'li',
                              content: 'Also, kind of a big deal'
                            },
                            {
                              tag: 'li',
                              content: 'HeatSync Labs operations team member'
                            },
                            {
                              tag: 'li',
                              content: 'Open Source Contributor'
                            },
                            {
                              tag: 'li',
                              content: 'Qt and Enyo Developer'
                            },
                            {
                              tag: 'li',
                              content: 'Day job: Freelance DevOps plus JavaScript and Ruby on Rails dev.'
                            },
                            {
                              tag: 'li',
                              content: 'At night: 3D Printer, Rocketry, Hacker/Maker'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              style: 'text-align: center;',
              components: [
                {tag: "a", attributes: { href: "http://rix.si" }, content: "The blagosphere" },
                {tag: "span", content: " - "},
                {tag: "a", attributes: { href: "http://github.com/rrix" }, content: "Github" },
                {tag: "span", content: " - "},
                {tag: "a", attributes: { href: "http://twitter.com/rrrrrrrix" }, content: "Tweeters" },
                {tag: "span", content: " - "},
                {tag: "a", attributes: { href: "http://heatsynclabs.org" }, content: "HeatSync Labs" }
              ]
            }
          ]
        }
      ]
    }
  ]
});
