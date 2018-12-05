# BETTERNOTE

[Betternote](https://betternote-evernote.herokuapp.com/#/) is a FullStack clone of the famous note taking application Evernote. Betternote is a single page application that uses Ruby, Ruby on Rails, and PostgreSQL for the backend and React.js/Redux, JavaScript, HTML5 and CSS3 for the frontend. Betternote incorporated libraries such as React-Quill.js and HoverMaster.css. The project was designed and built in 10 days.

Betternote lets users create, edit and delete notes which can be customized to the user's needs.

## Home page
![alt text](/app/assets/images/ss1.png)

## Sign In Page
![alt text](/app/assets/images/ss2.png)

## Main Page
![alt text](/app/assets/images/ss3.png)

## Features
* Secured frontend to backend user authentication using BCrypt.
* Users can create, edit and delete notes using a Quill-enabled rich text editor.
* Quill.js supports customization of notes through colors, images, videos and various other customization tools.
* Users can browse all of their notes they have created.

# Displaying User's Notebooks (still in progress)
Notebooks are assigned on a user basis and are only accesable through that specific user. When the user is logged in to Betternote, he will only see the Notebooks that are created. A *First Notebook* is created upon creating a user.

Every user gets their own unique session id that is userd to sign in. When a user is signed in, that session is is used to match the user with his particular notebooks, notes and tags.

# Saving User's updates
There are many different ways to handle the users's input which is created inside the Quill Editor. At first, I used a setTimeout function that was triggered after every three seconds updating the current note that the user was using. However, after close inspection and the realization that setTimeout is determined by a series of factors that could affect the user's experience I opted out to use a more efficient approach - debounce. Debounce is a much better event handler, as it allows us to group multiple sequential calls into a single one. The sequential calls in this situation occur while the user is typing in the text editor. As soon as the user stops typing, the event is triggered through debounce updating the user's current note body and title. 

```javascript
 handleChangeTitle(e) {
    this.setState({title: e.target.value}, debounce(this.actionNote, 1000));
  }

  handleChangeBody(text) {
    const body = text.slice(0);
    this.setState({ body: body, text: text, id: this.props.currentNote.id}, debounce(this.actionNote, 1000));
  }
```

# Betternote in Action
![](/app/assets/images/gif1.gif)


# Project Design
In the 10 day-window for working on this project. Betternote was focused on the design and the implementation of the main functionalities of the original website Evernote. Organizing code and establishing specific styling was prioritizzed over every single functionality that Evernote does. The intent was to create a pixel-perfect clone. 

# Technologies
Due to the timeline of this project, convenience and speed was prioritized over scalability.

# Future Features
* Tags and Taggings ability, with search on notes key-words
* Notebooks (editing and creating features)
* Sorting Search bar based on Notes or Notebook
