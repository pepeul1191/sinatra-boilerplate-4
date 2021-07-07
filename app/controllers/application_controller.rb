class ApplicationController < Sinatra::Base
  configure do
    set :views, 'app/views'
    enable :sessions
    set :session_secret, 'a33ac20e2af6b865a35b005c6c8df10e'
    set :layout, 'views/layouts'
  end

  get '/demo' do
    'demo'
  end  
end