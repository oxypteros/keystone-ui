export default function dialogModule(Alpine) {
  Alpine.data('ksDialog', (config = {}) => ({
    open: config.open || false,

    openDialog() {
      this.open = true;
      document.querySelector('#ks-main-hook')?.setAttribute('inert', '');
      document.body.style.overflow = 'hidden';
    },
    closeDialog() {
      this.open = false;
      document.querySelector('#ks-main-hook')?.removeAttribute('inert');
      document.body.style.overflow = '';
    },
  }));
}
