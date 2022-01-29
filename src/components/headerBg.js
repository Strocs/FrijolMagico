const headerBg = () => {
	window.onscroll = function(){
	  	let top = window.scrollY;
    	let header = document.getElementsByClassName('header__container')[0]
		let headerSize = document.getElementsByClassName('header__main')[0]
		let logoText = document.getElementsByClassName('logo__text')[0]

		top > 0 ? 	(header.classList.add('header__container-bg'), 
					headerSize.classList.add('header__main-bg'),
					logoText.classList.add('logo__text-bg')
					) 
					: 
					(header.classList.remove('header__container-bg'),
					headerSize.classList.remove('header__main-bg'),
					logoText.classList.remove('logo__text-bg')
					);

	};

}

export default headerBg