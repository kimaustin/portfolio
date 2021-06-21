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

project1 = Repo.insert!(%Project{class: "2D Fundamentals", name: "Paint Collage", class_short: "2D", semester: "Fall '16", desc: "Final project 2D Fundamentals", imgs: ["2D/1_1_W"], tags: ["Art", "Acrylic Paint", "Illustrator"]});
project1 = Repo.insert!(%Project{class: "3D Fundamentals", name: "Shoe Storage Project", class_short: "3D", semester: "Spring '17", desc: "Final project 3D Fundamentals", imgs: ["3D/1_1_W", "3D/1_2_T", "3D/1_3_T", "3D/1_4_T", "3D/1_5_T"], tags: ["Design", "Sketch-Up"]});
project1 = Repo.insert!(%Project{class: "3D Fundamentals", name: "Hard-Drive Paper Model", class_short: "3D", semester: "Spring '17", desc: "3D Hard Drive sketch and paper model for 3D Fundamentals", imgs: ["3D/2_1"], tags: ["Sketch-Up"]});
project1 = Repo.insert!(%Project{class: "Programming Basics", name: "Planet Beat Looper", class_short: "PB", semester: "Fall '17", desc: "Final Project; Circular-based Beat Looper for Programming Baiscs", imgs: ["PB/1_1"], tags: ["P5.js"]});
project1 = Repo.insert!(%Project{class: "Typography 1", name: "Siddhartha Book Design", class_short: "Type 1", semester: "Spring '18", desc: "Siddhartha Book Design for Typography 1", imgs: ["Type1/1_1_W", "Type1/1_2_T", "Type1/1_3_W"], tags: ["InDesign", "Typography"]});
project1 = Repo.insert!(%Project{class: "Typography 1", name: "Type Study Exercises", class_short: "Type 1", semester: "Spring '18", desc: "Type Study Exercises for Typography 1", imgs: ["Type1/2_1_W", "Type1/2_2_W", "Type1/2_3_W", "Type1/2_4_W", ], tags: ["InDesign", "Typography"]});
project1 = Repo.insert!(%Project{class: "Object-Oriented Design", name: "Animator Project", class_short: "OOD", semester: "Spring '18", desc: "Final Project for Object Oriented Design", imgs: ["OOD/1_1"], tags: ["Java"]});
project1 = Repo.insert!(%Project{class: "5D Fundamentals", name: "Fog X Flo", class_short: "5D", semester: "Fall '18", desc: "Fog X Flo project and reflection for 5D Fundamentals", imgs: ["5D/1_1"], tags: ["Javascript", "CSS", "HTML", "Photography", "Experience Design"]});
project1 = Repo.insert!(%Project{class: "5D Fundamentals", name: "CD Album Project", class_short: "5D", semester: "Fall '18", desc: "CD Album Project and reflection for 5D Fundamentals", imgs: ["5D/2_1"], tags: ["Javascript", "CSS", "HTML", "Photography", "Experience Design"]});
project1 = Repo.insert!(%Project{class: "Graphic Design 1", name: "IFHS Conference Series", class_short: "GD1", semester: "Fall '18", desc: "IFHS Conference Series for Graphic Design 1", imgs: ["GD1/1_1_W", "GD1/1_2_W", "GD1/1_3_W", "GD1/1_4_W", "GD1/1_5_T", "GD1/1_6_T", "GD1/1_7_T", "GD1/1_8_W"], tags: ["Illustrator", "Photography"]});
project1 = Repo.insert!(%Project{class: "Information Design 1", name: "NarcoCulture Poster", class_short: "ID1", semester: "Fall '18", desc: "NarcoCulture Poster for Information Design 1", imgs: ["ID1/1_1_W", "ID1/1_2_T", "ID1/1_3_T", "ID1/1_4_T"], tags: ["Illustrator", "Information Design"]});
project1 = Repo.insert!(%Project{class: "Information Design 1", name: "Travel Guide", class_short: "ID1", semester: "Fall '18", desc: "Travel Guide between my Appt., Boston, and Atlanta for Information Design 1", imgs: ["ID1/2_1_W", "ID1/2_2_W", "ID1/2_3_W", "ID1/2_4_W"], tags: ["Illustrator", "Information Design"]});
project1 = Repo.insert!(%Project{class: "Information Design 1", name: "How a Song is Built", class_short: "ID1", semester: "Fall '18", desc: "Anaylzes 'How a Song is Built' for Information Design 1", imgs: ["ID1/3_1"], tags: ["Illustrator", "Information Design"]});
project1 = Repo.insert!(%Project{class: "Interaction Design", name: "CloutFit", class_short: "ID", semester: "Spring '19", desc: "CloutFit project for Interaction Design", imgs: ["ID/1_1_T", "ID/1_2_T", "ID/1_3_T", "ID/1_4_T"], tags: ["Balsamiq", "Interaction Design", "Experience Design", "Sketch"]});
project1 = Repo.insert!(%Project{class: "Typography 2", name: "Einstein Bagels Menu Redesign", class_short: "Type 2", semester: "Spring '19", desc: "Einstein Bagels Menu Redesign for Typography 2", imgs: ["Type2/1_1_W", "Type2/1_2_W", "Type2/1_3_W", "Type2/1_4_W", "Type2/1_5_W"], tags: ["InDesign", "Typography", "Illustrator"]});
project1 = Repo.insert!(%Project{class: "Typography 2", name: "Music Albums", class_short: "Type 2", semester: "Spring '19", desc: "Music Albums for Typography 2", imgs: ["Type2/2_1_W", "Type2/2_2_W", "Type2/2_3_W", "Type2/2_4_W"], tags: ["InDesign", "Typography", "Illustrator"]});
project1 = Repo.insert!(%Project{class: "Typography 2", name: "88Rising Magazines", class_short: "Type 2", semester: "Spring '19", desc: "88Rising Magazines for Typography 2", imgs: ["Type2/3_1_W", "Type2/3_2_W", "Type2/3_3_W", "Type2/3_4_W"], tags: ["InDesign", "Typography", "Illustrator"]});
project1 = Repo.insert!(%Project{class: "Graphic Design 2", name: "Data Privacy Campaign", class_short: "GD2", semester: "Fall '19", desc: "Data Privacy Campaign for Graphic Design 2", imgs: ["GD2/1_1_W", "GD2/1_2_W", "GD2/1_3_W", "GD2/1_4_T", "GD2/1_5_T"], tags: ["InDesign", "Illustrator", "Graphic Design"]});
project1 = Repo.insert!(%Project{class: "Software Development", name: "Tsuro Game", class_short: "SD", semester: "Fall '19", desc: "Final Project; Tsuro Game for Software Development", imgs: ["SD/1_1"], tags: ["Java"]});
project1 = Repo.insert!(%Project{class: "Interacion Design: Mobile", name: "PhotoWalk App", class_short: "ID:M", semester: "Fall '20", desc: "PhotoWalk App for Interaction Design: Mobile", imgs: ["IDM/1_1_W", "IDM/1_2_W", "IDM/1_3_TM"], tags: ["Figma", "Mobile Design"]});
project1 = Repo.insert!(%Project{class: "Interacion Design: Mobile", name: "UltimateGuitar App Redesign", class_short: "ID:M", semester: "Fall '20", desc: "UltimateGuitar App Redesign for Interaction Design: Mobile", imgs: ["IDM/2_1_W", "IDM/2_2_W", "IDM/2_3_TM"], tags: ["Figma", "Mobile Design"]});
project1 = Repo.insert!(%Project{class: "Human Computer Interaction", name: "NEU Covid App Redesign", class_short: "HCI", semester: "Fall '20", desc: "NEU Covid App Redesign for Human Computer Interaction", imgs: ["HCI/1_1_WM", "HCI/1_2_WM"], tags: ["Figma", "Mobile Design"]});
project1 = Repo.insert!(%Project{class: "Identity & Brand Design", name: "Personal Identity Project", class_short: "I&BD", semester: "Spring '21", desc: "Project 1 for Identity & Brand Design", imgs: ["IBD/1_1_T", "IBD/1_2_T", "IBD/1_3_T", "IBD/1_4_W"], tags: ["Graphic Design", "Illustrator"]});
project1 = Repo.insert!(%Project{class: "Identity & Brand Design", name: "Album Cards Product", class_short: "I&BD", semester: "Spring '21", desc: "Album Cards Product for Identity & Brand Design", imgs: ["IBD/2_1_T", "IBD/2_2_T", "IBD/2_3_T", "IBD/2_4_W"], tags: ["Graphic Design", "Illustrator"]});
project1 = Repo.insert!(%Project{class: "Identity & Brand Design", name: "Orchestral Era Tokens", class_short: "I&BD", semester: "Spring '21", desc: "Orchestral Era Tokens for Identity & Brand Design", imgs: ["IBD/3_1_T", "IBD/3_2_T", "IBD/3_3_T", "IBD/3_4_W"], tags: ["Graphic Design", "Illustrator"]});
project1 = Repo.insert!(%Project{class: "Group Design Capstone", name: "PlayComb", class_short: "Capstone", semester: "Spring '21", desc: "PlayComb Design for Group Design Capstone", imgs: ["Cap/1_1"], tags: ["Web Design", "Blender", "Animation", "3D Print"]});
project1 = Repo.insert!(%Project{class: "Web Development", name: "SpotifyParty", class_short: "WebDev", semester: "Spring '21", desc: "Final Project; SpotifyParty for Web Development", imgs: ["WD/1_1"], tags: ["React", "Elixir-Phoenix", "Web Design", "Figma"]});
project1 = Repo.insert!(%Project{class: "Web Development", name: "EventsApp", class_short: "WebDev", semester: "Spring '21", desc: "EventsApp for Web Development", imgs: ["WD/2_1"], tags: ["React", "Elixir-Phoenix"]});
project1 = Repo.insert!(%Project{class: "Web Development", name: "Multiplayer Tsuro Game", class_short: "WebDev", semester: "Spring '21", desc: "Multiplayer Tsuro Game for Web Development", imgs: ["WD/3_1"], tags: ["React", "Elixir-Phoenix"]});