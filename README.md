# Cross Platform Browser Extension template repository

React + TailwindCSS bundled with Vite.

# Demo

The extensions when enabled modifies https://blank.org. Clicking the "Click me!" button also sends a message to the background script.

![extension-demo](https://github.com/akoskm/vite-react-tailwindcss-browser-extension-simple/assets/3111627/a2916c28-e249-43c4-9088-8aa01320a45d)


# Installation
```
npm i
```

# Building the Extension:

## Firefox
`npm run build` builds the extension by default for Firefox.

The generated files are in `dist/`.

To load the extension in Firefox go to `about:debugging#/runtime/this-firefox` or

Firefox > Preferences > Extensions & Themes > Debug Add-ons > Load Temporary Add-on...

Here locate the `dist/` directory and open `manifest.json`

## Chrome
`npm run build:chrome` builds the extensions for Google Chrome.

The generated files are in `dist/`.
To load the extensions in Google Chrome go to `chrome://extensions/` and click `Load unpacked`. Locate the dist directory and select `manifest.json`.

# Files:

 - content-script - UI files
 - background.ts - Background script/Service worker
 - index.html - popup UI

If you have any questions feel free to open an issue.
