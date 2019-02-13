class CreateTeachers < ActiveRecord::Migration[5.2]
  def change
    create_table :teachers do |t|
      t.text :firstName
      t.text :lastName
      t.string :units

      t.timestamps
    end
  end
end
