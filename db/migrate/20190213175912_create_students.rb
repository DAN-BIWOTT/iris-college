class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.text :firstName
      t.text :lastName

      t.timestamps
    end
  end
end
