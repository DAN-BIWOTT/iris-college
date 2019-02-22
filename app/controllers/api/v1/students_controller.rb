module Api
	module V1
		class StudentsController < ApplicationController
			respond_to :json
			def index
				@student = allStd
				render json: {status: 'SUCCESS',message:'STUDENTS LOADED',data:@student},status: :ok
			end

			def show
				@student = singleStd
				render json: {status: 'SUCCESS',message: 'STUDENT LOADED',data:@student},status: :ok
			end

			def create
				@student = Student.new(student_params)

				if @student.save
					render json: {status: 'SUCCESS',message: 'STUDENT LOADED',data:@student},status: :ok
					else
					render json: {status: 'Error',message: 'the file could not be created',data:@student.errors},status: :unprocessable_entity
				end
			end

			def update
				@student = Student.find(params[:id])

				if @student.update_attributes(student_params)
					render json: {status: 'SUCCESS',message: 'STUDENT EDITED',data:@student},status: :ok
				else
					render json: {status: 'Error',message: 'the file could not be edited',data:@student.errors},status: :unprocessable_entity
				end
			end

			def destroy
				@student = Student.find(params[:id])
				
				if @student.destroy
					render json: {status: 'Deleted item', message: 'item Deleted'},status: :ok
				else
					render json: {status: 'ERROR', message: 'item not Deleted', data:@student.errors},status: :unprocessable_entity
				end
			end

			private

			def student_params
				  params.permit(:firstName, :lastName, :department_id)
			end

			def allStd
				@allStd = Student.find_by_sql("SELECT id,firstName,lastName FROM students")
				return @allStd
			end

			def singleStd
				@singleStd = Student.find(params[:id])
				@toReturn = @singleStd.firstName+" "+@singleStd.lastName
				return @toReturn
			end
		end
	end
end