class Api::CommentsController < ApplicationController

  before_filter :load_commentable

  def index
    @comments = @commentable.comments
  end

  def create
    @comment = @commentable.comments.new(comment_params)
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render 'api/comments/show'
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render 'api/comments/show'
    else
      render json: @comment.errors, status: 422
    end
  end

  private

  def load_commentable
    resource, id = request.path.split('/')[2,3]
    @commentable = resource.singularize.classify.constantize.find(id)
  end

  def comment_params
    params.permit(:content)
  end


end
