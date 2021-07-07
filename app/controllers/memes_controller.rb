class MemesController < ApplicationController

  def index
    redirect_to meme_path(1)
  end

  def show
    @memes_size = Meme.count
    if params[:id].to_i > @memes_size 
      @meme = Meme.last
    elsif params[:id].to_i < 1
      @meme = Meme.first
    else
      @meme = Meme.find params[:id]
    end
  end

  def like
    meme = (Meme.find params[:id]).increment! :likes
    redirect_to memes_path + '/' + meme.id.to_s
  end


end
