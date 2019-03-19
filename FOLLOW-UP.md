# Implementation:

### Q) What libraries did you add to the frontend and backend? What are they used for?

##### General:
* RamdaJS: A library that incentivates you to program in a more functional pattern.
    
##### Backend:
 * Chai and Jasmine: Libraries used for testing (have support for both the backend and frontend).
    In this case, I only used them to test what I personally wrote in the backend.

##### Backend:
* Lodash: A utility library, to help with some common case scenarios, despite not having been
    heavily used in this challenge.
* Redux: A state management library, built with uni-directional flow of data in mind. Helps you
    keep your app state organized and predictable.
 * Redux-thunk: A redux middleware, that makes it easier to work with async actions in Redux. 
    
---

# General:

### Q) How long, in hours, did you spend on the test?

Roughly 16 hours, having to dedicate more time to the frontend than on the backend.

### Q) If you had more time, what further improvements or new features would you add?

Although the complexity of this challenge might not really call for it, I would think about adding
some sort of cache capability in both the frontend and the backend (the list of categories does not
change, no matter what you do).

Additionally, invest more effort in the frontend to provide the user with more feedback on what is
happening (a request is being made, data is loading, invalid values, etc.).

Frontend tests.

### Q) Which parts are you most proud of? And why?

I'm quite happy with the way the backend turned out - I believe it to be quite organized, with good
readability.

I also think the state management facet of the frontend was well done.

### Q) Which parts did you spend the most time with? What did you find most difficult?

The frontend, mostly. Had to freshen up my memory on React principles and how it works (especially once
integrate Redux into it). One particular difficulty that I had was understanding how to customize
the Material Theme being used. And even then, some things were left out, so some styling ended up
not being what I wanted (but still spent quite a bit of time trying to get it to work).

### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.

The test is well assembled and does a good job of making you consider quite a few approaches (especially on
the frontend).

As for improvements:
 * I think the API could already validate possible values of 'category', since they're enumerable and finite.
 This led me to have to validate it manually in the backend and, as an... approach in the fronted, left it as
 a one-time fetch to populate a select. Approaches, approaches, approaches. :\)
 
 * There's a **slight** level of ambiguity in the instructions, when it says that our solutions are required to follow
 the provided design guidelines, but, later on, says how we don't have to use the provided styleguide or components,
 in the **Design** section.
 
 * As a last suggestion - perhaps incorporate a few more requirements in the backend, so that there's more to do
 there than simply integrate with the CN API.
 
 .. but otherwise, awesome test! \o/