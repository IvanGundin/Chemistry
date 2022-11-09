window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

document.querySelector('.sidebar').onclick = function() {
    document.querySelector('.side-menu').classList.toggle('hidden');
    var el = document.querySelector('.layers__title');
    el.style.display !== 'none' ? el.style.display = 'none' : el.style.display = 'initial';
}
