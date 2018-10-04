# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


wriggly = Park.create(name: "Wriggly Field Dog Friendly Area", address: "2645 N Sheffield Ave, Chicago, IL 60614", count: 1, lat: "41.930005", long: "-87.653658 ")
belmont = Park.create(name: "Belmont Harbor Dog Beach", address: "N Lake Shore Dr & Lake Shore Drive Dr, Chicago, IL 60657", count: 0, lat: "41.261353", long: "-74.948311" )
logan = Park.create(name: "Logan Square Dog Park", address:"2526 N Western Ave, Chicago, IL 60647", count: 5, lat: "41.917903", long: "-87.687423" )