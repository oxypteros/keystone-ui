# Security Policy

## Supported Versions

Keystone UI is currently under active development. We generally support the latest minor release.

| Version | Supported          | Notes                      |
| ------- | ------------------ | -------------------------- |
| 0.1.x   | :white_check_mark: | Current development branch |
| < 0.1.0 | :x:                | No longer supported        |

## Reporting a Vulnerability

We take the security of Keystone UI seriously. If you believe you have found a security vulnerability in one of our components (specifically regarding **XSS vectors** or **CSP bypasses**) please report it to us as described below.

**Please do not report security vulnerabilities through public GitHub issues.**

### How to Report

We prefer you use GitHub's **Private Vulnerability Reporting**:

1. Go to the [Security tab](../../security) of this repository.
2. Click on **"Report a vulnerability"**.
3. Provide a detailed description of the issue, including a Minimal Reproducible Example (reproduction code or a CodePen/StackBlitz link).

_If for some reason you cannot use GitHub Reporting, you may email us at hello@oxypteros.com._

### What to Expect

1.  **Acknowledgment:** We will make a best effort to acknowledge your report within 48 hours.
2.  **Assessment:** We will confirm the vulnerability and determine its severity.
3.  **Fix:** We will work on a patch. You may be invited to collaborate in a private fork if necessary.
4.  **Disclosure:** Once the fix is released, we will publish a Security Advisor and credit you for the discovery (unless you prefer to remain anonymous).

## Scope

### In Scope

- **Cross-Site Scripting (XSS):** If a component renders user content in a way that allows script execution.
- **CSP Violations:** Since Keystone UI is designed for `alpine/csp`, any component that fails to work under strict CSP settings is considered a security/functional defect.
- **Supply Chain:** Vulnerabilities in our build dependencies that could inject malicious code into the distribution files.

### Out of Scope

- UX/UI bugs that do not pose a security risk (please open a standard Issue for these).
- Vulnerabilities in Hugo, Tailwind CSS, or Alpine.js core (please report those to the respective projects).
- Any library, plugin, or dependency you install that is not part of the original Keystone UI `package.json`.
- Vulnerabilities introduced by changes you make to the components after copying them into your project.
- Security issues caused by how you use the components in your application.
- Vulnerabilities related to your hosting provider, server configuration, or Hugo version mismatches outside our supported range.
