require "./main"
# Rakefile
task default: [:clean, :build, :install]

task :clean do
  puts "Cleaning packages"
  # `rm *.deb`
end

task :run do
  puts 'hola start dev'
  #run MyApp
end

namespace :dev do
  task :start do
    puts 'hola start dev'
    run MyApp
  end
end