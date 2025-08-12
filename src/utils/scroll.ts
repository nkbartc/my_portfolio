export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Account for fixed header/navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const getActiveSection = (sections: string[]): string | null => {
  const scrollPosition = window.scrollY + 100;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const { top, bottom } = element.getBoundingClientRect();
      const absoluteTop = top + window.scrollY;
      const absoluteBottom = bottom + window.scrollY;

      if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
        return section;
      }
    }
  }

  return sections[0] || null;
};