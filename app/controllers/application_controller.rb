class ApplicationController < ActionController::Base
  before_action :skip_authenticity_token
end
