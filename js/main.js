let count = 0;
document.querySelector('#dark-mode').addEventListener('click', (e) =>{
	let circle = document.querySelector('.dark-mode__switch');
	if(count == 0){
		count++;
		circle.classList.toggle('dark-mode__switch--active');
		darkMode();
	}else{
		count = 0;
		circle.classList.remove('dark-mode__switch--active');
		lightMode();

	}
})


const body = document.querySelector('body');
const headerTitle = document.querySelector('.cabezera__titulo');
const card = document.querySelectorAll('.Bcard');
const cardRedName = document.querySelectorAll('.Bcard__red-social-name');
const cardRedFollows = document.querySelectorAll('.Bcard__info-num');
const Mcard = document.querySelectorAll('.Mcard');
const McardVistas = document.querySelectorAll('.Mcard__vistas');
const McardNum = document.querySelectorAll('.Mcard__num');


const darkMode = () =>{
	body.style.background = '#0e0e0e'
	headerTitle.classList.add('cabezera__titulo-dark')
	card.forEach( e => e.classList.add('Bcard-dark'));
	cardRedName.forEach( e => e.classList.add('Bcard__red-social-name-dark'))
	cardRedFollows.forEach( e => e.classList.add('Bcard__info-num-dark'))
	Mcard.forEach( e => e.classList.add('Mcard-dark'))
	McardVistas.forEach( e => e.classList.add('Mcard__vistas-dark'))
	McardNum.forEach( e => e.classList.add('Mcard__num-dark'))
}

const lightMode = () =>{
	body.style.background = 'white'
	headerTitle.classList.remove('cabezera__titulo-dark')
	card.forEach( e => e.classList.remove('Bcard-dark'));
	cardRedName.forEach( e => e.classList.remove('Bcard__red-social-name-dark'))
	cardRedFollows.forEach( e => e.classList.remove('Bcard__info-num-dark'))
	Mcard.forEach( e => e.classList.remove('Mcard-dark'))
	McardVistas.forEach( e => e.classList.remove('Mcard__vistas-dark'))
	McardNum.forEach( e => e.classList.remove('Mcard__num-dark'))
 
}