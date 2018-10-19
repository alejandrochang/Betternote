# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user1 = User.create!(username: "Danny Xu", password: "Toronto", email: "thesix@gmail.com")
# notebook1 = Notebook.create!(user_id: user1.id, title: "Test Notebook")
# note1 = Note.create!(title: "test note", user_id: user1.id, notebook_id: notebook1.id)
#
# user2 = User.create!(username: "John Travolta", password: "pulp_fiction", email: "classic@gmail.com")
# notebook1 = Notebook.create!(user_id: user2.id, title: "Test Notebook # 2")
# note1 = Note.create!(title: "Mr. Travolta is an actor", user_id: user2.id, notebook_id: notebook1.id)
# note1 = Note.create!(title: "test note", user: user1, notebook: notebook1)

# User.destroy_all
# Note.destroy_all
# Notebook.destroy_all
#
user1 = User.create!(username: 'alejandrochang', password: "california", email: 'chang@gmail.com')
notebook1 = Notebook.create!(user_id: user1.id, title: "First Notebook")
note1 = Note.create!(title: "Tasks to complete:", user_id: user1.id, notebook_id: notebook1.id)

user2 = User.create!(username: "demo-user", password: "demo12345", email: "demo@gmail.com")
notebook2 = Notebook.create!(user_id: user1.id, title: "First Notebook")
note2 = Note.create!(title: "Vacation Plans", user_id: user2.id, notebook_id: notebook2.id)
note3 = Note.create!(title: "Important Reminders", user_id: user2.id, notebook_id: notebook2.id)
note4 = Note.create!(title: "Coding Research", user_id: user2.id, notebook_id: notebook2.id)
