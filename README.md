# Debouncing and Throttling
 This is example of debouncing and throttling in Javascript
 
# What is Debouncing in Javscript?
In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.

# What is Throttling in Javascript?
Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.

# Why we need them?
Debouncing / Throttling in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a    method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.


# Use of Debouncing and Throttling in Real Life
We can throttle a button click event, if we do not want the user to spam by clicking the button frequently.
In the case of window resize event, if we want to redraw the UI only when the user has fixed the size of the window, we can use debouncing.
With Mouse move event, if we are displaying the location coordinates of the mouse pointer, it is much better to show the coordinates once the user reached the desired location. Here, we can use debouncing

# Useful links:
[Telerik - Deboundcing and throttling](https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript#:~:text=Throttling%20is%20a%20technique%20in,Hello%2C%20world%20on%20the%20console.)
[Geeks for Geeks - Deboucning](https://www.geeksforgeeks.org/debouncing-in-javascript/#:~:text=Debouncing%20in%20JavaScript%20is%20a,is%20a%20single%20threaded%20language.)
