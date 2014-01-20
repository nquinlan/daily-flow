require 'rubygems'
require 'httparty'
require './static/indexkey.rb'
require './static/weather.rb'
require 'sinatra'

# set sinatra's variables
# set :app_file, __FI÷(__FILE__)
set :views, "views"
set :public, 'static'


get '/' do
  erb :indexed
end

not_found do  
  status 404  
  'not found'  
end  