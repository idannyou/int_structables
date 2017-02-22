class Api::ConceptsController < ApplicationController

  def index
    @concepts = Concept.all.includes(:images)
    #when it gets the concept from the database, it also grabs the images and the image_url too, so there will be less queries
  end

  def create
    @concept = Concept.new(concept_params)
    @concept.user_id = current_user.id

    if @concept.save
      render 'api/concepts/show'
    else

      render json: @concept.errors, status: 422
    end
  end

  def show
    @concept = Concept.find(params[:id])
  end

  def destroy
    @concept = Concept.find(params[:id])
    @concept.destroy
    render 'api/concepts/show'
  end

  def update
    @concept = Concept.find(params[:id])
    if @concept.update(concept_params)
      render 'api/concepts/show'
    else
      render json: @concept.errors, status: 422
    end
  end

  private
  def concept_params
    params.require(:concept).permit(:title, :description, :equations, :publish)
  end

end
