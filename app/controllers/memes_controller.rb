class MemesController < ApplicationController

  def index
    @memes = Meme.all
  end

  def show
    @memes_path = memes_path
    @memes_size = Meme.count
    if params[:id].to_i > @memes_size 
      @meme = Meme.last
    else
      @meme = Meme.find params[:id]
    end
  end

  def like
    meme = (Meme.find params[:id]).increment! :likes
    redirect_to memes_path + '/' + meme.id.to_s
  end


end
