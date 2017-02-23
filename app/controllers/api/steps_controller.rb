class Api::StepsController < ApplicationController

  def index
    @steps = Step.where(concept_id: step_params[:concept_id])
  end

  def create
    @step = Step.new(step_params)
    @step.save
    render 'api/steps/show'
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
    params.require(:step).permit(:body, :order, :concept_id, :title)
  end



end
