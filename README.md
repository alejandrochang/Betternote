# BETTERNOTE

[Betternote](https://betternote-evernote.herokuapp.com/#/) is a clone of the famous note takin application Evernote.Betternote is a single page application developed using Ruby, Rails, and PostgreSQL for the backend and React and Redux for the frontend. Betternote incorporated React-Quill, and HoverMaster.css libraries. The project was designed and built in 10 days.

Betternote lets users create notebooks that contain notes which can be edited and managed. This allows users to control and manage their notes through notebooks.

## Home page
![Home Page](/app/assets/images/ss1.png)

## Sign In Page

## Main Page

## Betternote

## Features
* Secured frontend to backend user authentication using BCrypt.
* Users can create and edit notes using a Quill-enabled rich text editor.
* Quill supports customization of notes through colors, images, videos.
* Users can see all the notes they have created.
* Users can see notes from specific notebooks

# Displaying User's Notebooks
Notebooks are assigned on a user basis and are only accesable through that specific user. When the user is logged in to Betternote, he will only see the Notebooks that are created. A *First Notebook* is created upon creating a user.

![alt text](file:///Users/alejandrochang/Desktop/shot1.png)

Every user gets their own unique session id that is userd to sign in. When a user is signed in, that session is is used to match the user with his particular notebooks, notes and tags.

# Saving User's updates
There are many different ways to handle the users's input which comes from the quill library. Betternote uses a setTimeout function that is triggered after every three seconds updating the current note that the user is using.

```javascript
 handleChangeBody(text) {
    const body = text.slice(0);
    setTimeout( () => {
      this.props.updateNote(this.state)
    }, 3000)

    this.setState({body: body, text: text, id: this.props.note.id})
  }
```
# Project Design
In the 10 day-window for working on this project. Betternote was focused on the design and the implementation of the main functionalities of the original website Evernote. Organizing code and establishing specific styling was prioritizzed over every single functinoality that Evernote does.

# Technologies
Convenience and speed was prioritized over scalability.

# Future Features
* Taags and Taggings Function
* Notebooks editing and creating
* Sorting Search bar based on Notes or Notebook
* Additional features on the quill
