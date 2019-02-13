require 'rubygems'
require 'httparty'

class Iris
	include HTTParty

	base_uri "localhost:3000/"

	def listStudents
		self.class.get('/api/v1/students')
	end

	def oneStd
		self.class.get('/api/v1/students/1')
	end

	def input
		self.class.post('/api/v1/students/')
	end
end

allStd = Iris.new
puts allStd.listStudents
puts allStd.oneStd