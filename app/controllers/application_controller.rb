require 'sinatra/base'

class ApplicationController < Sinatra::Base
  configure do
    set :views, 'app/views'
    enable :sessions
    #set :session_secret '3cec4b335aa3b9f3f959a9afcceda37b3'
  end
  
  get '/' do
    "Hello, World!"
  end
end