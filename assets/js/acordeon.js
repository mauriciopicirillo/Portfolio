// const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

// acordeonTriggers.forEach((trigger) => {
//     trigger.addEventListener('click', (e) => {
//         const acordeon = trigger.parentElement
//         const isOpen = acordeon.classList.contains('open')
        
//         if (isOpen) {
//             acordeon.classList.remove('open')
//         } else {
//             acordeon.classList.add('open')
//         }
//     })
// })

const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.parentElement;
        acordeon.classList.toggle('open'); // Alterna a classe 'open' automaticamente
    });
});