
/*TODO:
    [x] in onReady, make function to append divs for each person with their github image
    [] create alert to tell player the name of the person they are looking for
        [x] assign each person's div a number
        [x] make each person's picture/div a button
        [x] .alert();
        [x] generate number between
    [] if they pick right
        [] success message
        [] generate another number/name
    [] if they're wrong
        [] error message
        [] try again
*/

//global variables
let playerNumber = randomNumber(1, people.length);

console.log('js');
$(document).ready(onReady);
function onReady() {
    console.log('Here are all the available people:', people);
    getPics();
    $(document).on('click', '.person', clickPerson);
    alert(playerNumber);
} // end onReady

function getPics() {
    let personNumber = 0;
    for (let i = 0; i < people.length; i++) {
        personNumber++
        $('#peopleDiv').append(`
            <div class="person" data-person-number=${personNumber}>
                <img src="https://github.com/${people[i].githubUsername}.png?size=250" 
                alt="Profile image of ${people[i].name}">
            </div>
        ` );
    } // end if
} // end getPics

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function clickPerson() {
    if (playerNumber === $(this).data('person-number')) {
        console.log('click works');
        alert('You got it right!');
    } // end if
    if (playerNumber != $(this).data('person-number')) {
        alert('Oops, try again!');
    } // end if
} // end clickPerson