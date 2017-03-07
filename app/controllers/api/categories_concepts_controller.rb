class Api::CategoriesConceptsController < ApplicationController
  def create
    @category.create(categories_params)
    render 'api/comments/show'
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    render 'api/comments/show'
  end

  def categories_params
    params.require(:categories).permit(:concept_id, :category_id)
  end
end
