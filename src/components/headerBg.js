const headerBg = () => {
  window.onscroll = function(){
		let top = window.scrollY;
    let header = document.getElementsByClassName('header__container')[0]

		top > 0 ? header.classList.add('header__container-bg') : header.classList.remove('header__container-bg');
	};
}

export default headerBg