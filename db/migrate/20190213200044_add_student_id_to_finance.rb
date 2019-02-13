class AddStudentIdToFinance < ActiveRecord::Migration[5.2]
  def change
    add_column :finances, :student_id, :integer
  end
end
