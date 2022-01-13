# What is it about?

This is and educational site for learners. People who are registered and logged in, can do built-in (by admin) quizzes 
and also take courses and also create courses. The back-end stores the data of how many quizzes, coures (created or did)
they made, and many things as well that I will elaborate below.

Link of my video on the the final project:  Uploaded on [Youtube](https://pages.github.com/).

# Distinctiveness and Complexity

##### Why I believe my project satisfies the distinctiveness and complexity requirements: #####

- My web application has different login, logout, register forms and apprehensions. Altough the learned methods was used
  by me, and always applied them when I felt the need.

- When the user was not logged in, when visiting the page, it redirects the user to the login form in order to use the equipments.

- The main site, the home shows the datas which was rendered using back-end django in that case. When clicked on the quiz it
  redirects to a new page where javascript shows with a control flow(condition) what to add to the page content, using DOM here.
  The Javascript looks for the form when submit steps into action, and inside the form it searches the name of the inputs in order
  to valuate the values put in them. A next (or retry) button appears according to the result. Meaning when clicked on next It 
  gives to the backend django the result to increment the given data. It depends on the context of course. This proves the complexity
  and distinctiveness of using back-end (Django) and front-end (Javascript) in this case. I added some css in this to animate a little.
  
 - The info anchor/list on the navbar directs the user to the info panel, where only the admin can post anything, mostly for the purpose
  of conveying information about the news and informations. The javascript brings the page with DOM, it uses front-end features. User stays
  in the same html page as in the case of the home site.
  
  -When clicked on the courses as mentioned above, here also the javascript front-end steps into action and using DOM it renders the page
  using display block/none approach. When the 'click to start' pressed on any given course introduction, it also functions with DOM nad djago 
  uses back-end to redirect the user to the page designed to the course-page. When clicked on a course, it renders the video and text.
  The video embedded using here the EmbedVideoField which was installed by django-embed-video from pip.
  
  - When clicked on the rounded profile picture the bootstrap feature appear and lists the selections. When clicking on 'New Project..' or 'Profile'
   It step into another html page using back-end django here. A left-arrow shows the way back to the javascript lead page.
   The clickable logout in the dropdown menu also gives a new page with the selectable choices. And a message with infos shows up using Javascript
   as well.
   
   The abovementioned statements - in my opinion - proves the distinctiveness and complexity of my projects. 
  
  
  # What’s contained in each file I created.
  1. Language
    - static\language - I stored here tha css and js parts
     - headers.css -> little adjustment on the navbar
     - inbox.js -> DOM contents whick loads the quiz, info, courses contents in the index.html and with the help of DOM it displays 
       with block or none the give datas. In order not to increment the number or datas, everytime when clicked on a button, the innerHTML of the given variable 
       will be nullified after in loads all the contents that were needed. Fetch API was used here with Js. Jsonified datas was sent back to display in HTML.
        
     - language-quiz.css -> Uses animation keyframes style, with transition to make it more appealing
     - language-quiz.js -> Control flow method (condition precisely in this case) if the give condition is met, the DOM put into HTML and displays on the
       language-quiz.html. A from is given here, when submitted the form gives the input name and its values when met with the request of the DOM here. 
       It uses loop to compare the correct answers with the given answers in the quiz. Submitting this from according to the result it gives the next button
       ( in case above 75% ) or retry button. In case of 'Next' backend will save the result and django will keep it. In case of the retry, it loads the page 
       again in order to fill it once more. InnerText, ForEach, arrays, append method were used here mostly.
     - login.html
   

   - Templates
     - course_lst
     - created_course.html
     - index.html
     - language-quiz.html
     - layout.htm
     - login_register.html
     - on_course.html
     - profile_edit.html
     - profile.html
   - admin.py
   - apps.py
   - forms.py
   - models.py
   - tests.py
   - urls.py
   - views.py
     - profile_edit.html
     - profile.html


![This is an image](https://files.fm/thumb_show.php?i=zzepgvz5f)

