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

project1 = Repo.insert!(%Project{name: "Personal Identity Project", class: "Identity & Brand Design", class_short: "I&BD", semester: "Spring '21", desc: "Project 1 for I&BD.", imgs: ["IBD_1_1"], tags: ["Graphic Design", "Illustrator"]});