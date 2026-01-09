export default function tooltipModule(Alpine) {
  Alpine.data('ksTooltip', () => ({
    visible: false,

    trigger: {
      ['@mouseenter']() {
        this.visible = true;
      },
      ['@mouseleave']() {
        this.visible = false;
      },
      ['@focus']() {
        this.visible = true;
      },
      ['@blur']() {
        this.visible = false;
      },
      [':aria-describedby']() {
        return this.$id('ks-tooltip');
      },
    },
  }));
}
