export default function tabsModule(Alpine) {
  Alpine.data('ksTabs', (config = {}) => ({
    current: config.default || '',
    items: [],

    init() {
      // Scan and build the index
      this.items = Array.from(this.$root.querySelectorAll('[role="tab"]')).map(
        (el) => el.dataset.tab,
      );

      // Priority: URL Hash > Config Default > First Item
      const hash = window.location.hash.replace('#', '');
      const matchingItem = this.items.find((item) => this.idName(item) === hash);

      if (matchingItem) {
        this.current = matchingItem;
      } else if (!this.current && this.items.length > 0) {
        this.current = this.items[0];
      }
    },

    // Standard Setter
    set(name) {
      if (this.current === name) return;
      this.current = name;
    },

    // Protocol: Strict Kebab Case
    // Matches Hugo's logic: lower | replaceRE "[^a-z0-9]+" "-" | trim "-"
    idName(name) {
      return name
        .toString() // Safety
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with dash
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
    },

    // Helper: Check state
    isSelected(name) {
      return this.current === name;
    },

    // Navigation Logic
    next() {
      let index = this.items.indexOf(this.current);
      let nextIndex = (index + 1) % this.items.length;
      this.activate(this.items[nextIndex]);
    },

    prev() {
      let index = this.items.indexOf(this.current);
      let prevIndex = (index - 1 + this.items.length) % this.items.length;
      this.activate(this.items[prevIndex]);
    },

    // Core Activation
    activate(item) {
      this.set(item);

      // Wait for Alpine to update DOM classes, then scroll/focus
      this.$nextTick(() => {
        const el = this.$root.querySelector(`[data-tab="${item}"]`);
        if (el) {
          el.focus();
          // Smooth scroll the tab into view on mobile
          el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
    },

    // Bindings for the Button Elements
    trigger(name, variant = 'line') {
      const safeName = this.idName(name);
      return {
        [':id']() {
          return this.$id('ks-tab', safeName);
        },
        [':aria-controls']() {
          return this.$id('ks-panel', safeName);
        },

        ['@click']() {
          this.activate(name);
        },

        // Keyboard Support
        ['@keydown.right.prevent']() {
          this.next();
        },
        ['@keydown.left.prevent']() {
          this.prev();
        },
        ['@keydown.home.prevent']() {
          this.activate(this.items[0]);
        },
        ['@keydown.end.prevent']() {
          this.activate(this.items[this.items.length - 1]);
        },

        // ARIA & Focus
        [':aria-selected']() {
          return this.isSelected(name);
        },
        [':tabindex']() {
          return this.isSelected(name) ? '0' : '-1';
        },

        // Visual Styling
        [':class']() {
          const isSelected = this.isSelected(name);

          if (variant === 'pill') {
            // PILL STYLE
            return isSelected ? 'ks-tabs-pill-active' : 'ks-tabs-pill-inactive';
          } else {
            // LINE STYLE
            return isSelected ? 'ks-tabs-line-active' : 'ks-tabs-line-inactive';
          }
        },
      };
    },
  }));
}
