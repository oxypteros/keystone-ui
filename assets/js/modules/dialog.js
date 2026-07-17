export default function dialogModule(Alpine) {
  Alpine.data('ksDialog', (config = {}) => ({
    open: config.open || false,

    openDialog() {
      this.open = true;
      document.querySelector('#main-content')?.setAttribute('inert', '');
    },
    closeDialog() {
      this.open = false;
      document.querySelector('#main-content')?.removeAttribute('inert');
    },
  }));
}
