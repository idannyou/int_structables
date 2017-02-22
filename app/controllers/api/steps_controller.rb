class Api::StepsController < ApplicationController
  def index
    @steps = Step.all
  end

  def create
    debugger
    @step = Step.new(step_params)


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
    params.require(:step).permit(:conceptId)
  end



end
