var btn = document.getElementById('viewProjectBtn'),
	rect = btn.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);


btn.addEventListener("click", openBtn);

function openBtn(){
	var page = document.querySelector('.page');

	btn.style.width = btn.offsetWidth + "px";
	btn.style.position = "fixed";
	btn.style.left = rect.left - window.scrollX + "px";
	btn.style.top = rect.top - window.scrollY - 50 + "px";
	document.body.style.overflowY = "hidden";

	setTimeout(function(){
		btn.innerHTML = "";
		btn.classList.add("open");
	}, 300);

	setTimeout(function(){
		page.classList.add("open");
	}, 350);

	setTimeout(function(){
		page.style.opacity = 1;
	}, 500);
}
