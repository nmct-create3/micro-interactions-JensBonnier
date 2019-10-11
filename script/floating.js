
const isLeeg = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };


const handleFloatingLabel = function(){
    const floatingInput = document.querySelector('.js-name-input');
    const floatingLabel = document.querySelector('.js-name-label');

    //TODO: check of iets ingevuld id met blur event
        //voeg class is-floating toe als er een value is
        //maak de class is-floating aan en zorg dat het blijft bovenaan staan
        //indien de input weer leeg is halen we die class er terug af

    floatingInput.addEventListener('blur', function(){

        if(floatingInput.value) {
            floatingLabel.classList.add('is-floating');
        } 
        else {
            floatingLabel.classList.remove('is-floating');
        }
    });
};





document.addEventListener('DOMContentLoaded', function(){
    console.log('float to go');
    handleFloatingLabel();

});