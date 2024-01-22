document.addEventListener("DOMContentLoaded", function () {

	// При клике на элемент переключаем, удаляем или добавляем класс для другого эелемента.
	// Параметры:
	// actionElement - класс элемета для клика,
	// targetElement - класс изменяемого элемента,
	// tagetClass - с каким классом выполняется действие,
	// targetAction - какое действие выполняем (toggle, remove, add).

	const tabsToggle = function (
		actionElement,
		targetElement,
		tagetClass = "toggle",
		targetAction = "toggle"
	) {
		if (document.querySelector(actionElement)) {
			const tabsBtn = document.querySelectorAll(actionElement);
			const tabsContent = document.querySelectorAll(targetElement);
			tabsBtn.forEach(function (btn, index) {
				btn.addEventListener("click", function (e) {
					e.preventDefault();
					if (targetAction === "toggle") {
						if (tabsContent[index].classList.contains(tagetClass)) {
							tabsContent[index].classList.remove(tagetClass);
						} else {
							tabsContent[index].classList.add(tagetClass);
						}
					}
					if (targetAction === "remove") {
						tabsContent[index].classList.remove(tagetClass);
					}
					if (targetAction === "add") {
						tabsContent[index].classList.add(tagetClass);
					}
				});
			});
		}
	};

	// Открываем бургер меню по клику на .mobile_menu_btn
	tabsToggle(".mobile_menu_btn", "body");
	tabsToggle(".mobile_menu_btn", ".mobile_menu__inner");
	tabsToggle(".mobile_menu_btn", ".mobile_menu");
	tabsToggle(".mobile_menu_btn", ".overlay");

	// Закрываем бургер меню по клику на .mobile_menu .close
	tabsToggle(".mobile_menu .close", "body");
	tabsToggle(".mobile_menu .close", ".mobile_menu__inner");
	tabsToggle(".mobile_menu .close", ".mobile_menu");
	tabsToggle(".mobile_menu .close", ".overlay");

	// Открываем/закрываем подменю в бугер меню
	tabsToggle(
		".mobile_menu .main_menu__item__dropdown .main_menu__link",
		".mobile_menu .main_menu__item__dropdown"
	);

	// Закрываем бургер меню по клику на оверлее
	tabsToggle(".overlay", "body", "toggle", "remove");
	tabsToggle(".overlay", ".mobile_menu__inner", "toggle", "remove");
	tabsToggle(".overlay", ".mobile_menu", "toggle", "remove");
	tabsToggle(".overlay", ".overlay", "toggle", "remove");

	// Панель поиска
	tabsToggle(".header_middle__btn__search", ".search", "toggle", "add");
	tabsToggle(".header_middle__btn__search", ".overlay", "toggle", "add");
	tabsToggle(".search_close", ".search", "toggle", "remove");
	tabsToggle(".search_close", ".overlay", "toggle", "remove");
	tabsToggle(".overlay", ".search", "toggle", "remove");

});
