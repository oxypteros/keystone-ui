# Keystone UI

![Keystone](./.github/badges/keystone.svg) [![Documentation Status](https://img.shields.io/website?url=https://keystone.oxypteros.com/docs/&label=Documentation&up_message=ONLINE&down_message=OFFLINE&style=flat&logo=cloudflare&logoColor=%23F38020&labelColor=%23FEFEFE&up_color=%23266429&down_color=BC2C00)](https://keystone.oxypteros.com/) ![Status](https://img.shields.io/badge/Status-Work_In_Progress-orange?style=flat&labelColor=%23FEFEFE)


## Build With

![Hugo](./.github/badges/hugo.svg) ![AlpineJs](./.github/badges/alpinedotjs.svg) ![Tailwind](./.github/badges/tailwindcss.svg)

### Testing

[![Accessibility](./.github/badges/a11y.svg)](https://github.com/oxypteros/keystone-ui/actions/workflows/accessibility-audit.yml) [![Security](./.github/badges/security.svg)](https://github.com/oxypteros/keystone-ui/actions/workflows/security-audit.yml) [![Performance](./.github/badges/performance.svg)](https://pagespeed.web.dev/report?url=https://keystone.oxypteros.com)

## Introduction

Keystone is **NOT** a theme.  
It is a construction kit of high-quality UI components for Hugo developers.

Inspired by the _copy/paste_ philosophy of [shadcn/ui](https://ui.shadcn.com/), Keystone gives you complete ownership and transparency of the code. 

> We provide the architectural foundation. You build the rest. 

Each component is: 
- Fully functional out of the box
- Designed to be modified, extended, or stripped down
- Free from hidden abstractions or runtime magic

## The Three Pillars
We build everything on three structural pillars:

### Accessibility 
Everyone should be able to use your site. Each component targets **WCAG 2.2 AA** compliance by default.
- Requirements (WCAG/ARIA) are defined at the **blueprint level**.
- Components are continuously tested using **automated tools** and **manual audits**.
### Security 
All components are designed to work under a **strict Content Security Policy (CSP)**.
- All interactivity uses the **Alpine.js CSP Build**.
- Development enforces a strict CSP baseline: `default-src 'none';`, `script-src 'self';`, `style-src 'self';`.

### Performance 
Engineering for speed. Zero bloat, no hydration delays, and no layout shifts.
- Automated PageSpeed testing is part of the pipeline.
- Real-world performance is validated across multiple devices and network conditions.

## Technical Blueprint
### Installation
Keystone is currently in **pre-release**. 
Components are stable, but the library is evolving.

#### **The Starter Method**  
Use this repo as a **GitHub Template**. 
- Click **"Use this template"** above.
- Components are **disabled by default** to keep builds minimal.

#### **The Manual Method** _(Integration)_  
To add Keystone into an existing project: 
- Follow the steps in the [Get started](https://keystone.oxypteros.com/docs/get-started/) documentation.
- _Copy/paste_ individual components as needed.

## Documentation
For further information on installation/usage of the components consult the [official documentation](https://keystone.oxypteros.com)