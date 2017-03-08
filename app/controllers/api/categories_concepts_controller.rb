class Api::CategoriesConceptsController < ApplicationController
  def create
    cat_id = Category.find_by_name(params[:categories][:category]).id
    @categories_concept = CategoriesConcept.create(concept_id: params[:categories][:concept_id].to_i, category_id: cat_id)
    render 'api/categories_concepts/show'
  end

  def destroy
    @categories_concept = CategoriesConcept.find(params[:id])
    @categories_concept.destroy
    render 'api/categories_concepts/show'
  end


end
