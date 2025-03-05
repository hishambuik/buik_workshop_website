const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('show')) {
            entry.target.classList.add('show');
            observer2.unobserve(entry.target)
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.hidden-v2');
hiddenElements2.forEach((el) => observer2.observe(el));


