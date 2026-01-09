import Alpine from '@alpinejs/csp';
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
// (Add modules here)
import tooltipModule from './modules/tooltip.js';

// INITIALIZE MODULES
// (Init modules here)
tooltipModule(Alpine);

// START
window.Alpine = Alpine;
Alpine.start();
