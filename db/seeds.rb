10.times do
	Student.create({
		firstName: Faker::Dog.name,
		lastName: Faker::Dog.name,
		department_id: "1"
	})
end
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?