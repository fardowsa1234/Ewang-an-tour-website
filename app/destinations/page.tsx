import DestinationCard from "../components/DestinationCard"

const safariDestinations = [
  {
    name: "Maasai Mara, Kenya",
    description: "Experience the incredible wildlife of the Maasai Mara.",
    image:
      "/WhatsApp11.jpeg",
  },
  {
    name: "Serengeti, Tanzania",
    description: "Witness the great wildebeest migration in the Serengeti.",
    image:
      "/WhatsApp7.jpeg",
  },
  {
    name: "Kruger National Park, South Africa",
    description: "Explore one of Africa's largest game reserves.",
    image:
      "/WhatsApp7.jpeg",
  },
]

const beachDestinations = [
  {
    name: "Mombasa",
    description: "Relax on pristine beaches and crystal-clear waters.",
    image:
      "/WhatsApp7.jpeg",
  },
  {
    name: "Ruwanda",
    description: "Experience the perfect blend of culture and beach life.",
    image:
      "/WhatsApp7.jpeg",
  },
  {
    name: "Mombasa",
    description: "Discover the stunning beauty of the Seychelles islands.",
    image:
      "/WhatsApp7.jpeg",
  },
]

export default function Destinations() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight py-12 text-primary-dark transition-colors sm:text-5xl md:text-6xl">
            Our Destinations
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our handpicked safari and beach destinations.
          </p>
        </div>

        <div className="mt-16">
          <h2 id="safari" className="text-3xl font-extrabold text-blue-600 mb-8">
            Safari Adventures
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {safariDestinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                name={destination.name}
                description={destination.description}
                image={destination.image}
                type="safari"
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 id="beach" className="text-3xl font-extrabold text-blue-600 mb-8">
            Beach Destinations
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {beachDestinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                name={destination.name}
                description={destination.description}
                image={destination.image}
                type="beach"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

