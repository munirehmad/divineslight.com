class CAdminController < ApplicationController
 def upload
    Meme.create(title: params[:title], likes: params[:likes], meme: params[:file])
    redirect_to memes_path
 end
end
