// Debouncing and Throttling in javascript

let counter = 0;
const getData = () => {
    // calls an API and get data
    console.log("Fetching data ..", counter++);
}

const delayCheckDebouncing = (fn, delay) => {
    let timer;
    return function() {
        // clear timeout if it is already present on each key press event
        // to stop previous key timer
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn()
        }, delay);
    }
}

/**
 * Same things can be achived using throttling
 * Here we controlle function call using a flag
 * @param {} fn - task to perform after certain interval
 * @param delay - time interval
 */
const throttle = (fn, delay) => {
    // this flag inisialization happens only once at a time of function binding (example of clouser)
    let flag = true;
    console.log("Initialize the flag");
    return function() {
        console.log("Inside returing function");
        if (flag) {
            fn();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}

/** call actual funtion that is getData() after 3 sec of any key press
* so if you continuous typing anything and then pause for sometimes then only it will call 
* getData() function
* so if time delay between two key press is greater than 3 then only call getData()
* Hence Debouncing means - execute some task based on delay between two events
* User case : typeahead seach bar, scollring on page 
**/
const betterFunction = delayCheckDebouncing(getData, 3000);

/**
 * Only call the funton after certain limit of time
 * It does not depend on if the time between two key press is certain limit or not
 * So if difference between two function call is 3 sec then execute getData()
 * Hence Throttling means - execute some task after perticular interval of time till then ignore
 * all the subsequent funciton calls 
 * Use case : gaming example where next shoot even only be happen after certain time
 */
// smae kind solution can be achived using throttling method
// const betterFunction = throttle(getData, 3000);