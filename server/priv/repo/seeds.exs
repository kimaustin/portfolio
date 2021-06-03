# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Portfolio.Repo.insert!(%Portfolio.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Portfolio.Repo
alias Portfolio.Projects.Project

# add :name, :string
# add :class, :string
# add :semester, :string
# add :desc, :string
# add :imgs, {:array, :string}
# add :tags, {:array, :string}

project1 = Repo.insert!(%Project{name: "Paint Collage", class: "2D Fundamentals", class_short: "2D", semester: "Fall '16", desc: "Final project 2D Fundamentals", imgs: ["2D/1_1"], tags: ["Art", "Acrylic Paint", "Illustrator"]});
project1 = Repo.insert!(%Project{name: "Shoe Storage Project", class: "3D Fundamentals", class_short: "3D", semester: "Spring '17", desc: "Final project 3D Fundamentals", imgs: ["3D/1_1"], tags: ["Design", "Sketch-Up"]});
project1 = Repo.insert!(%Project{name: "Hard-Drive Paper Model", class: "3D Fundamentals", class_short: "3D", semester: "Spring '17", desc: "3D Hard Drive sketch and paper model for 3D Fundamentals", imgs: ["3D/2_1"], tags: ["Sketch-Up"]});
project1 = Repo.insert!(%Project{name: "Planet Beat Looper", class: "Programming Basics", class_short: "PB", semester: "Fall '17", desc: "Final Project; Circular-based Beat Looper for Programming Baiscs", imgs: ["PB/1_1"], tags: ["P5.js"]});
project1 = Repo.insert!(%Project{name: "Siddhartha Book Design", class: "Typography 1", class_short: "Type 1", semester: "Spring '18", desc: "Siddhartha Book Design for Typography 1", imgs: ["Type1/1_1"], tags: ["InDesign", "Typography"]});
project1 = Repo.insert!(%Project{name: "Type Study Exercises", class: "Typography 1", class_short: "Type 1", semester: "Spring '18", desc: "Type Study Exercises for Typography 1", imgs: ["Type1/2_1"], tags: ["InDesign", "Typography"]});
project1 = Repo.insert!(%Project{name: "Animator Project", class: "Object-Oriented Design", class_short: "OOD", semester: "Spring '18", desc: "Final Project for Object Oriented Design", imgs: ["OOD/1_1"], tags: ["Java"]});
project1 = Repo.insert!(%Project{name: "Fog X Flo", class: "5D Fundamentals", class_short: "5D", semester: "Fall '18", desc: "Fog X Flo project and reflection for 5D Fundamentals", imgs: ["5D/1_1"], tags: ["Javascript", "CSS", "HTML", "Photography", "Experience Design"]});
project1 = Repo.insert!(%Project{name: "CD Album Project", class: "5D Fundamentals", class_short: "5D", semester: "Fall '18", desc: "CD Album Project and reflection for 5D Fundamentals", imgs: ["5D/2_1"], tags: ["Javascript", "CSS", "HTML", "Photography", "Experience Design"]});
project1 = Repo.insert!(%Project{name: "IFHS Conference Series", class: "Graphic Design 1", class_short: "GD1", semester: "Fall '18", desc: "IFHS Conference Series for Graphic Design 1", imgs: ["GD1/1_1"], tags: ["Illustrator", "Photography"]});
project1 = Repo.insert!(%Project{name: "NarcoCulture Poster", class: "Information Design 1", class_short: "ID1", semester: "Fall '18", desc: "NarcoCulture Poster for Information Design 1", imgs: ["ID1/1_1"], tags: ["Illustrator", "Information Design"]});
project1 = Repo.insert!(%Project{name: "Travel Guide", class: "Information Design 1", class_short: "ID1", semester: "Fall '18", desc: "Travel Guide between my Appt., Boston, and Atlanta for Information Design 1", imgs: ["ID1/2_1"], tags: ["Illustrator", "Information Design"]});
project1 = Repo.insert!(%Project{name: "How a Song is Built", class: "Information Design 1", class_short: "ID1", semester: "Fall '18", desc: "Anaylzes 'How a Song is Built' for Information Design 1", imgs: ["ID1/3_1"], tags: ["Illustrator", "Information Design"]});
project1 = Repo.insert!(%Project{name: "CloutFit", class: "Interaction Design", class_short: "ID", semester: "Spring '19", desc: "CloutFit project for Interaction Design", imgs: ["ID/1_1"], tags: ["Balsamiq", "Interaction Design", "Experience Design", "Sketch"]});
project1 = Repo.insert!(%Project{name: "Einstein Bagels Menu Redesign", class: "Typography 2", class_short: "Type 2", semester: "Spring '19", desc: "Einstein Bagels Menu Redesign for Typography 2", imgs: ["Type2/1_1"], tags: ["InDesign", "Typography", "Illustrator"]});
project1 = Repo.insert!(%Project{name: "Music Albums", class: "Typography 2", class_short: "Type 2", semester: "Spring '19", desc: "Music Albums for Typography 2", imgs: ["Type2/2_1"], tags: ["InDesign", "Typography", "Illustrator"]});
project1 = Repo.insert!(%Project{name: "88Rising Magazines", class: "Typography 2", class_short: "Type 2", semester: "Spring '19", desc: "88Rising Magazines for Typography 2", imgs: ["Type2/3_test_T", "Type2/3_1_W", "Type2/3_2_W", "Type2/3_3_W", "Type2/3_4_W"], tags: ["InDesign", "Typography", "Illustrator"]});
project1 = Repo.insert!(%Project{name: "Data Privacy Campaign", class: "Graphic Design 2", class_short: "GD2", semester: "Fall '19", desc: "Data Privacy Campaign for Graphic Design 2", imgs: ["GD2/1_1"], tags: ["InDesign", "Illustrator", "Graphic Design"]});
project1 = Repo.insert!(%Project{name: "Tsuro Game", class: "Software Development", class_short: "SD", semester: "Fall '19", desc: "Final Project; Tsuro Game for Software Development", imgs: ["SD/1_1"], tags: ["Java"]});
project1 = Repo.insert!(%Project{name: "PhotoWalk App", class: "Interacion Design: Mobile", class_short: "ID:M", semester: "Fall '20", desc: "PhotoWalk App for Interaction Design: Mobile", imgs: ["IDM/1_1"], tags: ["Figma", "Mobile Design"]});
project1 = Repo.insert!(%Project{name: "UltimateGuitar App Redesign", class: "Interacion Design: Mobile", class_short: "ID:M", semester: "Fall '20", desc: "UltimateGuitar App Redesign for Interaction Design: Mobile", imgs: ["IDM/1_1"], tags: ["Figma", "Mobile Design"]});
project1 = Repo.insert!(%Project{name: "NEU Covid App Redesign", class: "Human Computer Interaction", class_short: "HCI", semester: "Fall '20", desc: "NEU Covid App Redesign for Human Computer Interaction", imgs: ["HCI/1_1"], tags: ["Figma", "Mobile Design"]});
project1 = Repo.insert!(%Project{name: "Personal Identity Project", class: "Identity & Brand Design", class_short: "I&BD", semester: "Spring '21", desc: "Project 1 for Identity & Brand Design", imgs: ["IBD/1_1"], tags: ["Graphic Design", "Illustrator"]});
project1 = Repo.insert!(%Project{name: "Album Cards Product", class: "Identity & Brand Design", class_short: "I&BD", semester: "Spring '21", desc: "Album Cards Product for Identity & Brand Design", imgs: ["IBD/2_1"], tags: ["Graphic Design", "Illustrator"]});
project1 = Repo.insert!(%Project{name: "Orchestral Era Tokens", class: "Identity & Brand Design", class_short: "I&BD", semester: "Spring '21", desc: "Orchestral Era Tokens for Identity & Brand Design", imgs: ["IBD/3_1"], tags: ["Graphic Design", "Illustrator"]});
project1 = Repo.insert!(%Project{name: "PlayComb", class: "Group Design Capstone", class_short: "Capstone", semester: "Spring '21", desc: "PlayComb Design for Group Design Capstone", imgs: ["Cap/1_1"], tags: ["Web Design", "Blender", "Animation", "3D Print"]});
project1 = Repo.insert!(%Project{name: "SpotifyParty", class: "Web Development", class_short: "WebDev", semester: "Spring '21", desc: "Final Project; SpotifyParty for Web Development", imgs: ["WD/1_1"], tags: ["React", "Elixir-Phoenix", "Web Design", "Figma"]});
project1 = Repo.insert!(%Project{name: "EventsApp", class: "Web Development", class_short: "WebDev", semester: "Spring '21", desc: "EventsApp for Web Development", imgs: ["WD/2_1"], tags: ["React", "Elixir-Phoenix"]});
project1 = Repo.insert!(%Project{name: "Multiplayer Tsuro Game", class: "Web Development", class_short: "WebDev", semester: "Spring '21", desc: "Multiplayer Tsuro Game for Web Development", imgs: ["WD/3_1"], tags: ["React", "Elixir-Phoenix"]});