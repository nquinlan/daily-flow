class Indexkey
	def initialize
		@index = {"200" => "thunderstorm with light rain",
		"201" => "thunderstorm with rain",
		"202" => "thunderstorm with heavy rain",
		"210" => "light thunderstorm",
		"211" => "thunderstorm",
		"212" => "heavy thunderstorm",
		"221" => "ragged thunderstorm",
		"230" => "thunderstorm with light drizzle",
		"231" => "thunderstorm with drizzle",
		"232" => "thunderstorm with heavy drizzle",
		"300" => "light intensity drizzle",
		"301" => "drizzle",
		"302" => "heavy intensity drizzle",
		"310" => "light intensity drizzle rain",
		"311" => "drizzle rain",
		"312" => "heavy intensity drizzle rain",
		"313" => "shower rain and drizzle",
		"314" => "heavy shower rain and drizzle",
		"321" => "shower drizzle",
		"500" => "light rain",
		"501" => "moderate rain",
		"502" => "heavy intensity rain",
		"503" => "very heavy rain",
		"504" => "extreme rain",
		"511" => "freezing rain",
		"520" => "light intensity shower rain",
		"521" => "shower rain",
		"522" => "heavy intensity shower rain",
		"531" => "ragged shower rain",
		"600" => "light snow",
		"601" => "snow",
		"602" => "heavy snow",
		"611" => "sleet",
		"612" => "shower sleet",
		"615" => "light rain and snow",
		"616" => "rain and snow",
		"620" => "light shower snow",
		"621" => "shower snow",
		"622" => "heavy shower snow",
		"701" => "mist",
		"711" => "smoke",
		"721" => "haze",
		"731" => "Sand/Dust Whirls",
		"741" => "Fog",
		"751" => "sand",
		"761" => "dust",
		"762" => "VOLCANIC ASH",
		"771" => "SQUALLS",
		"781" => "TORNADO",
		"800" => "sky is clear",
		"801" => "few clouds",
		"802" => "scattered clouds",
		"803" => "broken clouds",
		"804" => "overcast clouds	",
		"900" => "tornado",
		"901" => "tropical storm",
		"902" => "hurricane",
		"903" => "cold",
		"904" => "hot",
		"905" => "windy",
		"906" => "hail",
		"950" => "Setting",
		"951" => "Calm",
		"952" => "Light breeze",
		"953" => "Gentle Breeze",
		"954" => "Moderate breeze",
		"955" => "Fresh Breeze",
		"956" => "Strong breeze",
		"957" => "High wind, near gale",
		"958" => "Gale",
		"959" => "Severe Gale",
		"960" => "Storm",
		"961" => "Violent Storm",
		"962" => "Hurricane"}
	end

	def gimme
		return @index
	end

	def vulgar
		swearsbro = ["Holy Fucking Shit! ", "Well Fuck... ", "Holy Frosted Fuck! ", "Son of a Bitch! ", "MotherFuckingFuckface! ", "Well look at this fucking Shit, ", "Sheeeeeeeeeeeit. ", "God Fucking Damnit. "]

		@index.keys.each do |key|
			temp = swearsbro.sample + @index[key]
			@index[key] = temp
		end

		return @index
	end
end

# a = Indexkey.new
# puts a.vulgar