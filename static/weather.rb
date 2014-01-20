require 'httparty'
require 'json'

class Weatherapi

	def initialize
		@url = "http://api.openweathermap.org/data/2.5/weather?q=Denver&mode=xml&units=imperial"
	end

	def gimme
		responce = JSON.parse(HTTParty.get("http://api.openweathermap.org/data/2.5/weather?q=Denver&mode=xml&units=imperial"))
		return responce
	end
end