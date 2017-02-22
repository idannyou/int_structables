class Api::StepsController < ApplicationController
  def index
    @steps = Step.all
  end

  def create
    @step = Step.new(step_params)
    @step.concept_id = current_user.id

    if @step.save
      render 'api/steps/show'
    else

      render json: @step.errors, status: 422
    end
  end

  def show
    @step = Step.find(params[:id])
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy
    render 'api/steps/show'
  end

  def update
    @step = Step.find(params[:id])
    if @step.update(step_params)
      render 'api/steps/show'
    else
      render json: @step.errors, status: 422
    end
  end

  private
  def step_params
    params.require(:step).permit(:title, :description, :equations, :publish)
  end

end
