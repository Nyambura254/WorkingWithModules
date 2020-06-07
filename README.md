# WorkingWithModules
how to work with modules in javascript

THIS WORKING EXAAMPLE WEBSITE WAS LEARNED/CLONED AND MODIFIED THROUGH A LEARNING GUIDE FROM PLURALSIGHT
https://app.pluralsight.com/course-player?clipId=b905b31c-055b-4d1c-acaf-96f6ec0043ae

you need to have an IDE installed eg vs code and node latest version installed will work
*run nmp install*-to get express modules

*nmp start* run server at 3000


topics
what is modules....
1.export-create module
2.import-using that module
3.encspsulate code-how to put chunk of code into use
4.control access-incase you need certain code
5.reference it own dependancies-incase you need to access a piece of code

CREATING MODULES
1.Named export---separating content in template.js.

2.Default export-you need to know what indefault version to simplify how you are doing your defaults
----------in sessionRepository.js.

3.Aggregating modules--importing everything we have created in sessionRepository.js.


USING MODULES
1.Enabling modules
converting app.js into modules base(index.html)where you linked your app.js in script tags
2.Default import-
app.js(changes this app to leverage what we build in last module.
import getSessions
import sessionTemplate
2.Named imports

