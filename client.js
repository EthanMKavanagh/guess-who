
/*TODO:
    [x] in onReady, make function to append divs for each person with their github image
    [] create alert to tell player the name of the person they are looking for
        [x] assign each person's div a number
        [] make each person's picture/div a button
        [] .alert();
        [] generate number between
    [] if they pick right
        [] success message
        [] generate another number/name
    [] if they're wrong
        [] error message
        [] try again
*/
console.log('js');
$(document).ready(onReady);
function onReady() {
    console.log('Here are all the available people:', people);
    getPics();
    $(document).on('click', '.person', clickPerson)
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

function clickPerson() {
} // end clickPerson