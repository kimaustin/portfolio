defmodule Portfolio.Repo.Migrations.CreateProjects do
  use Ecto.Migration

  def change do
    create table(:projects) do
      add :name, :string
      add :class, :string
      add :class_short, :string
      add :semester, :string
      add :desc, :string
      add :imgs, {:array, :string}
      add :tags, {:array, :string}

      timestamps()
    end

  end
end
