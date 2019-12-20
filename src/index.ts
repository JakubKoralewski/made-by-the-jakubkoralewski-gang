let search = {
	icon: document.querySelector("div#search i"),
	input: document.querySelector("div#search input") as HTMLInputElement,
	onInputClick: () => search.active(search.icon.parentElement),
	isActive: false,
	active: (elem: HTMLElement) => {
		search.isActive = !search.isActive;
		if(search.isActive) {
			elem.classList.add("active");
		} else {
			search.input.value = "";
			elem.classList.remove("active");
		}
	}
};

search.icon.addEventListener("click", search.onInputClick);

let nav = {
	clickCatcher: document.querySelector("div#click-catcher"),
	nav: document.querySelector("body > nav"),
	hamburger: document.querySelector("#hamburger"),
	isActive: false,
	listItems: null as NodeListOf<HTMLLIElement>,
	activeListItem: null as HTMLLIElement,
	active: () => {
		nav.isActive = !nav.isActive;
		if(nav.isActive) {
			[nav.nav, nav.clickCatcher]
				.forEach(
					(x) => x.classList.remove("active"));
		} else {
			[nav.nav, nav.clickCatcher]
				.forEach(
					(x) => x.classList.add("active"));
		}
	},
	onClickCatcherClick: (e: Event) => {
		console.log("Click catcher click");
		e.stopPropagation();
		nav.active();
	},
	hamburgerOnClick: () => {
		nav.active();
		console.log("hamburgerOnClick");
	},
	navOnClick: () => {
		nav.active();
	},
	setActiveListItem: (elem: HTMLLIElement) => {
		nav.activeListItem.classList.remove("active");
		nav.activeListItem = elem;
		nav.activeListItem.classList.add("active");
	},
	listItemClick: (e: Event) => {
		nav.setActiveListItem(e.target as HTMLLIElement);
	}
};
nav.listItems = nav.nav.querySelectorAll("ul > li");
nav.listItems.forEach(
	(x) => x.addEventListener("click", nav.listItemClick)
);

nav.activeListItem = nav.listItems[0];
nav.activeListItem.classList.add("active");

nav.hamburger.addEventListener("click", nav.hamburgerOnClick);
nav.nav.addEventListener("click", nav.navOnClick);
nav.clickCatcher.addEventListener("click", nav.onClickCatcherClick);

let header = {
	h1: document.querySelector("header > h1") as HTMLHeadingElement,
	makeHeaderAnimatable: () => {
		const text = header.h1.innerText.trim();
		header.h1.innerHTML = "";
		for(const letter of text) {
			const span = document.createElement("span");
			span.innerText = letter;
			if(letter === " ") {
				span.classList.add("empty");
			}
			header.h1.appendChild(span);
		}
	},
	date: document.querySelector("header > div#date"),
	setDate: () => {
		header.date.innerHTML = `
			<small>Today is</small>
			<strong>${new Date().toISOString()}</strong>`;
	}
};
header.makeHeaderAnimatable();
header.setDate();
