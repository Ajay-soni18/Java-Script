const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function(button) {
    button.addEventListener('mouseenter', function(e) {
        console.log(e);
        console.log(e.target);
        // if(e.target.id==='pink'){
            //     body.style.background=e.target.id
            // }
            // if(e.target.id==='black'){
            //     body.style.background=e.target.id
            // }
            // if(e.target.id==='green'){
            //     body.style.background=e.target.id
            // }
            // if(e.target.id==='purple'){
            //     body.style.background=e.target.id
            // }
        button.addEventListener('mouseleave', function() {
            body.style.background = 'white';
        });
        switch(e.target.id) {
            case 'pink':
                body.style.background = e.target.id;
                break;
            case 'black':
                body.style.background = e.target.id;
                break;
            case 'green':
                body.style.background = e.target.id;
                break;
            case 'purple':
                body.style.background = e.target.id;
                break;
            default:
                // Default case handling, if necessary
                break;
        }
       
    });
});
