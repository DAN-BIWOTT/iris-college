class Student < ApplicationRecord
	has_many :finances
	belongs_to :department
end
