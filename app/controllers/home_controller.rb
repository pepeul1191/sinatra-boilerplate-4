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
  ['/', '/about-us', '/help', '/department', '/department/([\w]+)',].each do |path|
    get path do
      locals = {
        :title => 'Bienvenido',
        :href => '/',
        :csss => HomeHelper::index_css(settings.constants),
        :jss => HomeHelper::index_js(settings.constants),
      }
      erb :'home/index', :layout => :'layouts/blank', :locals => locals
    end  
  end

  get '/department/list' do
    Department.all.to_a.to_json
  end

  get '/department/get' do
    id = params[:id]
    Department.where(id: id).to_a[0].to_json
  end

  get '/distritos' do
    District.all.to_a.to_json
  end

  get '/employee/list' do
    resp = []
    status = 200
    begin
      resp = Employee.limit(10).to_a
    rescue Exception => e
      status = 500
      resp = [
        'Se ha producido un error en listar los permisos del sistema',
        e.message,
      ]
    end
    status status
    resp.to_json
  end 

  post '/department/edit' do
    puts params[:id]
  end
end
