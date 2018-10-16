class Api::NotesController < ApplicationController
  def index
    @notes = Note.all
  end

  def create
    @note = Note.new(note_params)
    @note.user_id = current_user.id

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 406
    end
  end

  def show
    @note = current_user.notes.find(params[:id])
    if @note
      render :show
    else
      render json: ["Note not found. Try again please."], status: 404
    end
  end

  def update
    @note = current_user.notes.find(params[:id])
    @note.title = note_params[:title]
    @note.body = note_params[:body]
    if @note.save
      render :show
    else
      render json: ["Sorry, could not update your note. Please try again."], status: 404
    end
  end

  def destroy
    @note = current_user.notes.find(params[:id])
    if @note
      @note.destroy
      render :show
    else
      render json: ["Could not delete your note"], status: 404
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end
end
