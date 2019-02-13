class CreateFinances < ActiveRecord::Migration[5.2]
  def change
    create_table :finances do |t|
      t.string :name
      t.date :dateOfInput

      t.timestamps
    end
  end
end