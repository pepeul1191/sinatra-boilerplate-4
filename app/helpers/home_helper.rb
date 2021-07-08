module Helpers
  module HomeHelper
    extend self
    def index_css(constants)
      resp = []
      if constants[:static_env] == 'dev'
        resp = [
          'bower_components/font-awesome/css/font-awesome.min',
          'assets/css/constants',
          'assets/css/styles',
          'dist/my-app/styles'
        ]
      else
        resp = [
          'dist/home.min',
        ]
      end
      resp
    end

    def index_js(constants)
      resp = []
      if constants[:static_env] == 'dev'
        resp = [
          'dist/my-app/runtime',
          'dist/my-app/polyfills',
          'dist/my-app/vendor',
          'dist/my-app/main',
        ]
      else
        resp = [
          'dist/home.min',
        ]
      end
      resp
    end
  end
end