# Jobma Landing — Static Frontend

Small static landing page demo built with Bootstrap, Swiper.js and WOW.js.

## Overview

A responsive promotional site showcasing Jobma features:

- Hero, features, testimonial, CTA and footer sections implemented in [index.html](index.html).
- Interactive wheel visualization and sliders implemented in [js/app.js](js/app.js).
- Project styling in [css/styles.css](css/styles.css).
- Local vendor assets under [js/](js/) and [css/](css/) and images/icons under [assets/](assets/).

## Files

- [index.html](index.html)
- [README.md](README.md)
- [css/animate.min.css](css/animate.min.css)
- [css/bootstrap.min.css](css/bootstrap.min.css)
- [css/swiper-bundle.min.css](css/swiper-bundle.min.css)
- [css/styles.css](css/styles.css)
- [js/app.js](js/app.js)
- [js/bootstrap.bundle.min.js](js/bootstrap.bundle.min.js)
- [js/swiper-bundle.min.js](js/swiper-bundle.min.js)
- [js/wow.min.js](js/wow.min.js)
- [assets/](assets/) (icons, img)

## Key code locations and symbols

- Wheel drawing and labels: [`drawWheel`](js/app.js) implemented in [js/app.js](js/app.js).
- Sectors data (labels & icons): [`sectors`](js/app.js) in [js/app.js](js/app.js).
- Companies carousel: [`imgCarousel`](js/app.js) in [js/app.js](js/app.js).
- Interview kit slider: [`intervewSlider`](js/app.js) in [js/app.js](js/app.js).
- Card activation helper: [`setActiveCard`](js/app.js) in [js/app.js](js/app.js).
- Styles & layout: [css/styles.css](css/styles.css).

## Run locally

1. Open the project folder.
2. Open [index.html](index.html) in a modern browser (no build step required).

## Customize

- Change wheel sectors: edit the [`sectors`](js/app.js) array in [js/app.js](js/app.js).
- Adjust wheel appearance/size: edit [`drawWheel`](js/app.js) or styles in [css/styles.css](css/styles.css).
- Tweak Swiper behavior: update `imgCarousel` and `intervewSlider` options in [js/app.js](js/app.js).
- Update static assets: replace images in [assets/img/](assets/img/) and icons in [assets/icons/](assets/icons/).

## Notes

- JS initializes on DOMContentLoaded and re-renders wheel on resize via [`drawWheel`](js/app.js).
- No package manager or build tool used — all dependencies are local static files: [js/swiper-bundle.min.js](js/swiper-bundle.min.js), [js/wow.min.js](js/wow.min.js), [js/bootstrap.bundle.min.js](js/bootstrap.bundle.min.js).

## License

Add your preferred license here.

## Contact

Maintainers: update contact info as needed.
