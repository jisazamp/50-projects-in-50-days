const panels = document.querySelectorAll('.panel');
let activePanelIndex = 0;

const addPanelActive = (panel, index) => {
  if (panel.classList.contains('active')) return;

  panels[activePanelIndex].classList.remove('active');
  panel.classList.add('active');
  activePanelIndex = index;
};

panels.forEach((panel, index) => {
  panel.addEventListener('click', () => addPanelActive(panel, index));
});
