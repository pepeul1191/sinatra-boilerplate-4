class HomeController < ApplicationController
  get '/' do
    locals = {
      :title => 'Bienvenido',
    }
    erb :'home/index', :layout => :'layouts/blank', :locals => locals
  end  
end
