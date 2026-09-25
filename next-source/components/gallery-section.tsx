export function GallerySection() {
  const images = [
    {
      src: "/images/gallery-1.jpeg",
      alt: "Porta com rede de proteção instalada",
    },
    {
      src: "/images/gallery-2.jpeg",
      alt: "Piscina protegida com rede de segurança",
    },
    {
      src: "/images/gallery-3.jpeg",
      alt: "Rede de proteção em área interna e mezanino",
    },
    {
      src: "/images/gallery-4.jpeg",
      alt: "Varanda protegida com rede de segurança",
    },
  ]

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Segurança que você pode ver
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Veja como nossas redes de proteção transformam lares em ambientes seguros
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
