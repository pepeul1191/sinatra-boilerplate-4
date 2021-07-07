class HomeController < ApplicationController
  ['/', '/distritos', '/whatever'].each do |path|
    before path do
      puts 'before'
      puts check_session_true
    end
  end

  before '/' do
    puts 'before2'
  end

  get '/' do
    locals = {
      :title => 'Bienvenido',
    }
    puts settings.constants
    puts css
    puts HomeHelper::index_css
    erb :'home/index', :layout => :'layouts/blank', :locals => locals
  end  

  get '/distritos' do
    District.all.to_a.to_json
  end  
end
