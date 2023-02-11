export const slideProps = {
  initial: { x: '100vw' },
  animate: { x: 0 },
  exit: { x: '-100vw' },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

export const slideUpProps = {
  initial: { y: '100vh' },
  animate: { y: 0 },
  exit: { y: '100vh' },
  transition: { duration: 0.6, ease: 'easeInOut' },
};
