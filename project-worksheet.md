# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Functional Components | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 2| API integration | Complete	
|Day 2| MVP | Complete
|Day 3| Post MVP | Incomplete
|Day 4| Present | Incomplete


## Project Description

Ransom Note Generator.

App takes user input and converts each letter into a text component, each randomly and legibly styled using the google fonts api and the color scheme api.  The end result is a renderscreen resembling a ransom note.  In post-mvp versions, can be converted to an image file and shared to various social media, and user can access CSS text styling info to be used in other web dev projects.

https://drive.google.com/file/d/0B-nmbX0rBb-XcElQMUpheTNGUl9jckV2VFMxUHduUUhfYlVn/view?usp=sharing

## Wireframes

https://drive.google.com/file/d/0B-nmbX0rBb-Xd1R1cl9mbzBQZFcyZ0Vtb2FrNHc2ZkNoNnBz/view?usp=sharing

Basic wireframe of project MVP.

## Priority Matrix

https://drive.google.com/file/d/0B-nmbX0rBb-XZWxUQW1mekdlN1Z1aXVJMDlpdEEtSmc0OXZz/view?usp=sharing

-Component Structure<br>
-Input/SetState Methods<br>
-API calls<br>
-Landing Screen & About Pages<br>
-Responsive Design<br>
-Additional Post-MVP CSS<br>
-HTML -> IMAGE conversion<br>
-Social media sharing<br>


### MVP/PostMVP - 5min

#### MVP 

- Utilizes two APIs
	- Google Fonts: https://developers.google.com/fonts/docs/developer_api?apix_params=%7B%22sort%22%3A%22alpha%22%7D
	- The Color API (schemes): http://www.thecolorapi.com/docs
- User text input renders as a collection of letter components, each with unique color and font styling.

#### PostMVP 

https://drive.google.com/file/d/0B-nmbX0rBb-XNWlMQmJrVnRCWmRNMnhBdmMxT00wUEFEdnRJ/view?usp=sharing<br>

-When user clicks a certain letter component, the rest of the text renders with that components styling.<br>
-Sidebar displaying CSS code 
-Backshadow, embossing, other style parameters<br>
-Responsive Design<br>
-Additional Post-MVP CSS<br>
-HTML -> IMAGE conversion<br>
-Social media sharing<br>

## React Architectural Design

https://drive.google.com/file/d/0B-nmbX0rBb-XUkk5MGhYLXdONm04WnlWSTBNVXdOQzM2N3lZ/view?usp=sharing
Basic Component Heirarchy

#### [SAMPLE FROM A MAP BASED PROJECT](https://res.cloudinary.com/dvjtpejbw/image/upload/v1540221204/20181022_111216.jpg)

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

#### SAMPLE.....
| Component | Description |
| --- | :---: |
| App | Stores other components, stores user input as state, makes api calls,  - maybe router| 
| User Input | Controlled text input form | 
| Render Screen | Pareses user input into words, renders word components |
| Word | Parses words into letters, renders leter components |
| Letter | Renders individual letters, applies randomized inline styles |
| Info Display | Displays style properties of selected letter |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| API Research and Planning | H | 4rs | 4hrs |
| Component Structure | H | 2hrs| 3hrs |
| Input/onChange state setting | H | 2hrs| 2hrs |
| Working with APIs | H | 4hrs| 4hr |
| CSS Tweaking | M | 4hrs| 4hrs |
| Info Display | L | 4hrs | 4hrs
| HTML => Image | L | 3hrs | NA |
| Social Media Sharing | L | 3hrs | NA |
| Total | H | 26hrs| 21hrs | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries

https://github.com/nfl/react-helmet<br>
https://github.com/niklasvh/html2canvas<br>

 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
