class HomeController < ApplicationController
  get '/' do
    locals = {
      :title => 'Bienvenido',
    }
    puts settings.constants
    erb :'home/index', :layout => :'layouts/blank', :locals => locals
  end  

  get '/distritos' do
    District.all.to_a.to_json
  end  
end
