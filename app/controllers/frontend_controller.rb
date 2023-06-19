class FrontendController < ApplicationController
  def index
    render file: 'frontend/index.html'
  end
end
