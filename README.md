# Kirby Quickselect v1.2

This field is based on the core select field and adds a filter and placeholder functionality. It uses the [select2](https://github.com/select2/select2) jQuery plugin.

When displaying the images of a page with `options: images` it will display thumbs automatically.

## Installation

Simply put the `quickselect` folder into your `site/plugins` folder.

## Example

![Preview](quickselect.gif)

````
featured:
  label:       Image
  type:        quickselect
  options:     images
  placeholder: Choose an image...
````

Just like you do with the regular `select` field, you can specify what elements should be listed. `pages`, `children`, `files`, `images`, [...](https://getkirby.com/docs/cheatsheet/panel-fields/select). Even a more complex `query` or options from another field.

Anything that's printed in the list can be searched for. So if you set the `text` of a `query` to `{{title}} ({{uri}})`, you can find pages by their ancestors, too.

Compared to the core `select` field, you can also define a `placeholder` that can make things clearer for the editor.
