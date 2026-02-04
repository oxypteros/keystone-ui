export default function tooltipModule(Alpine) {
  Alpine.data('ksTooltip', () => ({
    visible: false,
    openTimer: null,
    closeTimer: null,
    
    // Configurable delays
    // delayIn prevents "flashing" from adjacent items
    // delayOut creates the "bridge" for the mouse
    delayIn: 200, // ~150ms tactile reaction
    delayOut: 250, // ~250ms average visual reaction

    init() {
      // Listen for other tooltips opening.
      // If another opens, and I am not the one, I must die immediately.
      this.$watch('visible', (value) => {
        if (value) {
          window.dispatchEvent(new CustomEvent('ks-tooltip:opened', {
            detail: { id: this.$id('ks-tooltip') }
          }));
        }
      });
    },

    open() {
      // Clear any pending close actions
      if (this.closeTimer) clearTimeout(this.closeTimer);
      
      // If already open, do nothing
      if (this.visible) return;

      // Intent Delay (prevent accidental triggers)
      this.openTimer = setTimeout(() => {
        this.visible = true;
      }, this.delayIn);
    },

    scheduleClose() {
      // Clear pending open actions (if user left before it opened)
      if (this.openTimer) clearTimeout(this.openTimer);

      // The Bridge: Allow time to move to content
      this.closeTimer = setTimeout(() => {
        this.visible = false;
      }, this.delayOut);
    },

    close() {
      // Immediate kill switch
      this.visible = false;
      if (this.openTimer) clearTimeout(this.openTimer);
      if (this.closeTimer) clearTimeout(this.closeTimer);
    },

    // Bindings
    trigger: {
      ['@mouseenter']() { this.open(); },
      ['@mouseleave']() { this.scheduleClose(); },
      ['@focus']() { this.open(); },
      ['@blur']() { this.scheduleClose(); },
      ['@keydown.escape.window']() { this.close(); },
      
      // Accessibility
      [':aria-describedby']() { return this.$id('ks-tooltip'); },
      
      // Event Listener on the Window
      ['@ks-tooltip:opened.window'](event) {
        // If the opened tooltip is NOT me, close immediately.
        if (event.detail.id !== this.$id('ks-tooltip')) {
          this.close();
        }
      }
    },
  })); 
}