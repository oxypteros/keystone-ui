// assets/js/modules/tooltip.js
export default function tooltipModule(Alpine) {
  Alpine.data('ksTooltip', () => ({
    visible: false,
    timer: null,

    open() {
      if (this.timer) clearTimeout(this.timer);
      this.visible = true;
    },
    scheduleClose() {
      if (this.timer) clearTimeout(this.timer);
      // 170ms buffer to bridge pointer move from trigger and tooltip
      this.timer = setTimeout(() => {
        this.visible = false;
      }, 170);
    },
    close() {
      this.visible = false;
      if (this.timer) clearTimeout(this.timer);
    },
    // Bindings
    trigger: {
      ['@mouseenter']() {
        this.open();
      },
      ['@mouseleave']() {
        this.scheduleClose();
      },
      ['@focus']() {
        this.open();
      },
      ['@blur']() {
        this.scheduleClose();
      },
      // WCAG 1.4.13: Dismissible
      ['@keydown.escape.window']() {
        if (this.visible) {
          this.close();
        }
      },
      // Accessibilty
      [':aria-describedby']() {
        return this.$id('ks-tooltip');
      },
    },
  }));
}
