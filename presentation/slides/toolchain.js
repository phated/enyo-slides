enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'toolchain',

  title: 'Better Web App Development Through Tooling',

  components: [
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          content: 'Cloning and Submoduling can be hard'
        },
        {
          tag: 'li',
          content: 'Downloading ZIPs is worse'
        },
        {
          tag: 'li',
          components: [
            {
              tag: "a",
              attributes: {
                href: "http://npmjs.org/package/enyo"
              },
              content: "Enyo CLI (npmjs.org/package/enyo)"
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Based on Grunt.js and installable with NPM (npm install -g enyo)'
                },
                {
                  tag: 'li',
                  content: 'Initial a project template - enyo init:[enyo, bootplate, module]'
                },
                {
                  tag: 'li',
                  content: 'Debug your project - enyo debug'
                },
                {
                  tag: 'li',
                  content: 'Build your project - enyo build'
                },
                {
                  tag: 'li',
                  content: 'Manage packages/modules - enyo add/remove:[package]'
                }
              ]
            }
          ]
        },
        {
          tag: 'li',
          components: [
            {
              tag: "a",
              attributes: {
                href: "https://github.com/MeatballIndustries/enyo-bower"
              },
              content: "Enyo-Bower - Enyo Package Manager"
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Fork of Twitter/Bower - used interally in Enyo CLI'
                },
                {
                  tag: 'li',
                  content: 'Uses its own endpoint for package registry and places packages into lib/ directory'
                },
                {
                  tag: 'li',
                  content: 'Allows installing, removing, registering of packages/modules'
                },
                {
                  tag: 'li',
                  components: [
                    {
                      tag: "a",
                      attributes: {
                        href: "http://meatballindustries.github.com/enyo-components/"
                      },
                      content: "Searchable list of registered packages (meatballindustries.github.com/enyo-components/)"
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
});
