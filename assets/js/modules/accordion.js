export default function accordionModule(Alpine) {
  Alpine.data('ksAccordion', (allowMultiple = false) => ({
    activeValues: [],
    // User could pass string and not boolean in Hugo side
    multiple: allowMultiple === true || allowMultiple === 'true',

    toggle(id) {
      const isAlreadyOpen = this.activeValues.includes(id);

      if (this.multiple) {
        // MULTIPLE MODE
        if (isAlreadyOpen) {
          this.activeValues = this.activeValues.filter((i) => i !== id);
        } else {
          this.activeValues.push(id);
        }
      } else {
        // SINGLE MODE
        if (isAlreadyOpen) {
          this.activeValues = [];
        } else {
          this.activeValues = [id];
        }
      }
    },

    isOpen(id) {
      return this.activeValues.includes(id);
    },

    handleKeydown(e) {
      const buttons = Array.from(this.$el.querySelectorAll('[data-accordion-trigger]'));
      const currentIndex = buttons.indexOf(e.target);
      if (currentIndex === -1) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          buttons[(currentIndex + 1) % buttons.length].focus();
          break;
        case 'ArrowUp':
          e.preventDefault();
          buttons[(currentIndex - 1 + buttons.length) % buttons.length].focus();
          break;
        case 'Home':
          e.preventDefault();
          buttons[0].focus();
          break;
        case 'End':
          e.preventDefault();
          buttons[buttons.length - 1].focus();
          break;
      }
    },
  }));
}
