// oldIcons
(function changeSvgStroke() {
    // Функция для изменения толщины обводки всех SVG-иконок
    function updateSvgStroke() {

	const leftPanel = document.querySelector('a[href*="marketplace"]');
	if (!leftPanel) return;

	// Выбираем все элементы <svg> в интерфейсе
        const svgElements = leftPanel.querySelectorAll('svg');

        svgElements.forEach(svg => {
            // Проверяем, содержит ли SVG элемент <path>
            const paths = svg.querySelectorAll('path');
            if (paths.length > 0) {
                paths.forEach(path => {
                    // Устанавливаем желаемую толщину обводки
                    path.style.strokeWidth = '3'; // Задайте необходимую толщину
		   // path.setAttribute('vector-effect' 'none');
		   // path.style.vector-effect = 'none';
                    path.style.stroke = '#000'; // Используем текущий цвет текста
                });
            }
        });
    }

    // Запускаем функцию при загрузке страницы
    document.addEventListener('DOMContentLoaded', updateSvgStroke);
    // Также запускаем при изменениях в DOM (например, при навигации)
    const observer = new MutationObserver(updateSvgStroke);
    observer.observe(document.body, { childList: true, subtree: true });
})();

(function changeSvgStroke2() {
    // Функция для изменения толщины обводки всех SVG-иконок
    function updateSvgStroke() {

	const leftPanel = document.querySelector('a[href*="visualizer"]');
	if (!leftPanel) return;

	// Выбираем все элементы <svg> в интерфейсе
        const svgElements = leftPanel.querySelectorAll('svg');

        svgElements.forEach(svg => {
            // Проверяем, содержит ли SVG элемент <path>
            const paths = svg.querySelectorAll('path');
            if (paths.length > 0) {
                paths.forEach(path => {
                    // Устанавливаем желаемую толщину обводки
                    path.style.strokeWidth = '1'; // Задайте необходимую толщину
		   // path.setAttribute('vector-effect' 'none');
		   // path.style.vector-effect = 'none';
                    path.style.stroke = '#000'; // Используем текущий цвет текста
                });
            }
        });
    }

    // Запускаем функцию при загрузке страницы
    document.addEventListener('DOMContentLoaded', updateSvgStroke);
    // Также запускаем при изменениях в DOM (например, при навигации)
    const observer = new MutationObserver(updateSvgStroke);
    observer.observe(document.body, { childList: true, subtree: true });
})();

const elements = document.querySelectorAll('.PopoverTrigger__PopoverTriggerContainer-sc-yux5vv-0.ecHWOS');
elements.forEach(element => {
	if (el.textContent.includes('M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z')) {
	el.remove();
	}
});

//oldSidebarSeparator
document.addEventListener('DOMContentLoaded', function() {
const targetElement = document.querySelector('.main-yourLibraryX-entryPoints.main-yourLibraryX-library');
if (targetElement) {

	const newElement = document.createElement('div')
	newElement.className = '_2d88f15e3a701ff39cc8d2dfac3e93a6-scss';

	targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
}
});

(function moveCoverSlot() {
	function adjustCoverSlot() {
		const targetElement = document.querySelector('.main-coverSlotCollapsed-container');
		const referenceElement = document.querySelector('.ffFwfKcPDbmAPLXzxzKq.NowPlayingView.enter-done');

		if (targetElement && referenceElement) {
			targetElement.classList.add('move-right');
		} else if (targetElement) {
			targetElement.classList.remove('move-right');
		}
	}

	adjustCoverSlot();

	const observer = new MutationObserver(adjustCoverSlot);
	observer.observe(document.body, { childList: true, subtree: true });
})();

// returnButtonToCover
//(function addCustomButton() {
//	function createButton() {
//		const targetElement = document.querySelector('.ffFwfKcPDbmAPLXzxzKq.NowPlayingView.enter-done');
//
//		if (targetElement && !document.getElementById('main-coverSlotCollapsed-expandButton2')) {
//			
//			const button = document.createElement('main-coverSlotCollapsed-expandButton');
//			button.id = 'main-coverSlotCollapsed-expandButton2';
//			button.style.cssText = '
//				border: none;
//			';
//
//			button.innerHTML = '
//				<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 Svg-img-icon-small"><path d="M.47 4.97a.75.75 0 0 1 1.06 0L8 11.44l6.47-6.47a.75.75 0 1 1 1.06 1.06L8 13.56.47 6.03a.75.75 0 0 1 0-1.06z"></path></svg>
//			';
//
//			button.addEventListener('click', () => {
//				console.log('sas');
//			});
//
//			targetElement.appendChild(main-coverSlotCollapsed-expandButton);
//		}
//	}
//
//	createButton();
//
//	const observer = new MutationObserver(createButton);
//	observer.observe(document.body, { childList: true, subtree: true });
//})();