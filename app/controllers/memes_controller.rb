class MemesController < ApplicationController

  def index
    curr_meme_id = cookies[:curr_meme_id] ? cookies[:curr_meme_id] : 1
    redirect_to meme_path curr_meme_id
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
    cookies[:curr_meme_id] = @meme.id
  end

  def like
    meme = (Meme.find params[:id]).increment! :likes
    redirect_to memes_path + '/' + meme.id.to_s
  end


end
