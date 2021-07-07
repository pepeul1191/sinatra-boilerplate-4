class ApplicationController < Sinatra::Base
  configure do
    set :views, 'app/views'
    enable :sessions
    set :session_secret, 'a33ac20e2af6b865a35b005c6c8df10e'
    set :layout, 'views/layouts'
  end

  def initialize(app = nil)
    super(app)
    @constants = {
      :base_url => 'http://localhost:3000/',
    }
    puts "******** constructing myapp **********"
  end

  get '/demo' do
    'demo'
  end  
end