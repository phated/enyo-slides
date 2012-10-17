enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'enyoFuture',

  title: 'Back to the Future of Enyo',

  components: [
    {
      kind: 'enyo.FittableColumns',
      components: [
        {
          tag: 'ul',
          fit: true,
          components: [
            {
              tag: 'li',
              components: [
                {
                  content: 'Enyo'
                },
                {
                  tag: 'ul',
                  components: [
                    {
                      tag: 'li',
                      content: 'Data model integration and binding'
                    },
                    {
                      tag: 'li',
                      content: 'New browser support (Chrome for Android, IE10, etc.)'
                    },
                    {
                      tag: 'li',
                      content: 'Localization library'
                    },
                    {
                      tag: 'li',
                      content: 'UI component theming guide'
                    },
                    {
                      tag: 'li',
                      content: 'Adding LESS for theming'
                    },
                    {
                      tag: 'li',
                      content: 'Bower for package management? (If Blaine has anything to say about it)'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          tag: 'ul',
          style: 'width: 50%;',
          components: [
            {
              tag: 'li',
              components: [
                {
                  content: 'Ares (Browser-based IDE for Enyo apps)'
                },
                {
                  tag: 'ul',
                  components: [
                    {
                      tag: 'li',
                      content: 'Drag-and-drop UI editor'
                    },
                    {
                      tag: 'li',
                      content: 'Code completion'
                    },
                    {
                      tag: 'li',
                      content: 'Components to extend local and cloud storage'
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
      kind: 'enyo.Image',
      src: '$presentation/assets/images/back-to-the-future.png',
      style: 'display: block; margin: 0 auto;'
    }
  ]
});
