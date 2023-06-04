import data from "./src/db.js";

for (let i = 1; i <= 8; i++) {
	const popularProject = document.querySelector(`.content-wrap:nth-child(${i})`);
	const notableProject = document.querySelector(`.card-wrap:nth-child(${i})`);

	popularProject.querySelector('.subInfo span:nth-child(1) a').innerText = data.popular_projects[i-1].category;
	popularProject.querySelector('.subInfo span:nth-child(2) a').innerText = data.popular_projects[i-1].creator;
	popularProject.querySelector('.titleInfo strong').innerText = data.popular_projects[i-1].title;
	popularProject.querySelector('.percentage').innerText = `${data.popular_projects[i-1].sponsorship_rate}% 달성`;

	notableProject.querySelector('.subInfo span:nth-child(1) a').innerText = data.notable_projects[i-1].category;
	notableProject.querySelector('.subInfo span:nth-child(2) a').innerText = data.notable_projects[i-1].creator;
	notableProject.querySelector('.titleInfo strong').innerText = data.notable_projects[i-1].title;
	notableProject.querySelector('.percentage').innerText = `${data.notable_projects[i-1].sponsorship_rate}% 달성`;
}

for (let i = 1; i <= 22; i++) {
	let columnIndex;
	let innerIndex;

	if (i%5 === 0) {
		columnIndex = i/5;
		innerIndex = 5;
	} else {
		columnIndex = Math.floor(i/5) + 1;
		innerIndex = i%5;
	}
	document.querySelector(`.extended-category-item-column:nth-child(${columnIndex}) .extended-category-item:nth-child(${innerIndex}) .itemText`).innerText = data.categories[i-1];
}
