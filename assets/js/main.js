import Alpine from '@alpinejs/csp';
// PLUGINS
import focus from '@alpinejs/focus';
import anchor from '@alpinejs/anchor';
import collapse from '@alpinejs/collapse';

// REGISTER PLUGINS
Alpine.plugin(focus);
Alpine.plugin(anchor);
Alpine.plugin(collapse);

// INITIALIZE STORES
// (Add stores here)

// IMPORT MODULES
// (Uncomment to enable modules)

import accordionModule from './modules/accordion.js';
import tabsModule from './modules/tabs';
import tooltipModule from './modules/tooltip.js';

// INITIALIZE MODULES
// (Uncomment to Init modules)

accordionModule(Alpine);
tabsModule(Alpine);
tooltipModule(Alpine);

// START
window.Alpine = Alpine;
Alpine.start();
