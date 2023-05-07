# Asset File Naming and Folder Structure Convention

In order to keep our asset files organized and easy to find, we have established a naming convention and folder structure for all assets used in our React.js project. This convention and structure should be followed by all developers working on the project.

## File Naming Convention

Asset files should be named using the following format:

`{asset-context}-{asset-description}-{asset-dimension}-{asset-index}.{asset-file-extension}`

#### Description
- Asset Context: a brief word or phrase indicating thecontext of the asset. For example, if the asset is animage of a background, the asset context could be"background".
- Asset Description: a brief description of the asset. Forexample, if the asset is an image of a mountain, the assetdescription could be "mountain".
- Asset Dimension: the dimensions of the asset in the format of widthxheight. For example, if the asset is an image with a width of 500px and height of 300px, the asset dimension could be "500x300".
- Asset Index: n optional index number to differentiatebetween multiple assets with the same context,description, and dimension.
- Asset File Extension: the file extension of the asset. Forexample, if the asset is an image in PNG format, the assetfile extension would be "png".

For example, a file name for a background image might look like this

`background-header-image-1920x1080.jpg`

## Folder Structure

Asset files should be organized into folders using the following structure:

- assets
- image
  - background
    - jpg
    - png
    - ...
  - product
    - png
    - jpeg
    - ...
  - ...
- icon
  - stroke
    - png
    - svg
    - ...
  - fill
    - png
    - svg
    - ...
  - ...
- logo
  - brand
    - png
    - svg
    - ...
  - brand
    - png
    - svg
    - ...
  - ...
- video
  - background
    - mp4
    - mov
    - ...
  - product
    - mp4
    - avi
    - ...
  - ...
- ...

#### Description
- **Asset Type**: The general type of asset (e.g. image, font, or icon) will be the root folder.

- Asset Context: A child folder indicating the context of the asset, short description used in the file name (e.g. background, background or logo, product).

- Asset File Extension: A sub-child folder indicating the file extension of the asset (e.g. jpg, png, svg).

- Asset: sub-child item that contains the actual asset file(s), following the naming convention outlined above.

For example, a folder structure for the background-header-image-1920x1080.jpg file might look like this:

`image/background/jpg/background-header-image-1920x1080.jpg`

### Examples

Here are a few examples of file names and folder structures using this convention:

`logo-main-200x50.png`
`image/background/png/background-header-image-1920x1080.jpg`
`icon/social/facebook.svg`
`font/heading/OpenSans-Bold.ttf`

**Extra sub-folders could be added to establish more context.**

By following this naming convention and folder structure, we can easily find and manage all assets used in our project.
