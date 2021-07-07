class HomeController < ApplicationController
  get '/' do
    locals = {
      :title => 'Bienvenido',
    }
    puts @constants
    erb :'home/index', :layout => :'layouts/blank', :locals => locals
  end  
end
