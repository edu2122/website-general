import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const arrayInfo = [
  {
    title: "Origen de la Maizena en Venezuela",
    content:
      "La Maizena llegó a Venezuela a principios del siglo XX, coincidiendo con la expansión global del producto. Introducida inicialmente por empresas estadounidenses y europeas, su popularidad creció rápidamente en el país debido a su versatilidad y capacidad para mejorar la textura y consistencia de los alimentos.",
    firstSubtitle: "Desarrollo y Expansión en Venezuela",
    firstContent:
      "La Maizena fue rápidamente adoptada en la cocina venezolana por su capacidad para espesar salsas, sopas y postres. Uno de los usos más comunes es en la preparación de natillas y atoles, que son postres tradicionales en muchas regiones del país. Además, se utiliza en la preparación de empanadas y arepas, donde ayuda a mejorar la textura de la masa.",
    secondSubtitle: "Producción Local",
    secondContent:
      "A medida que crecía la demanda, surgieron empresas locales que comenzaron a producir Maizena. Empresas como Alfonzo Rivas & Cía, conocida por su marca Maizina Americana, han sido fundamentales en la producción y distribución del producto a nivel nacional. Esto no solo redujo la dependencia de las importaciones, sino que también impulsó la economía local.",
    image1:
      "https://quemantequilla.online/wp-content/uploads/2019/09/Maizena-Americana-jpg.webp",
    image2:
      "https://http2.mlstatic.com/D_NQ_NP_796198-MLV30957242037_062019-O.webp",
  },
  {
    title: "Origen de la Maizena en Venezuela",
    firstSubtitle: "Presencia en la Cultura Popular",
    firstContent:
      "La Maizena se ha convertido en un ingrediente básico en la despensa de los hogares venezolanos. Su uso se ha transmitido de generación en generación, convirtiéndose en un componente esencial de muchas recetas familiares. En la cultura popular, la Maizena es sinónimo de tradición y hogar, simbolizando el sabor y la consistencia de la cocina casera.",
    secondSubtitle: "Innovación y Diversificación",
    secondContent:
      "A lo largo de los años, la Maizena ha evolucionado para adaptarse a las necesidades del mercado. Con el tiempo, los fabricantes locales han diversificado la oferta de productos a base de Maizena, adaptándola a diferentes necesidades culinarias y dietéticas. Esto incluye la creación de mezclas para postres y productos instantáneos que facilitan la preparación de comidas tradicionales y modernas.",
    image1:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAhLhRVZ-wO1P-poTvgtfXgcPxMQUtWuz3r0Ou-CjDDz6pyO34jItnEw-iq2x3xc6wKCYeEmO0BKVcUA_TUnYsC3pTANIH2WrPT4-_qQ13QMjWRmlpS8MHx0OFDFVPfZ7StCxNVtj8KJ3T/s1600/Maizina+Americana-2009.jpg",
    image2:
      "https://http2.mlstatic.com/D_NQ_NP_796198-MLV30957242037_062019-O.webp",
  },
  {
    title: "Usos Tradicionales y Contemporáneos",
    firstSubtitle: "Natillas y Atoles",
    firstContent:
      "La Maizena es un ingrediente fundamental en la preparación de natillas y atoles, postres tradicionales que forman parte de las celebraciones familiares y festividades. Su capacidad para espesar estos dulces asegura una textura suave y cremosa.",
    secondSubtitle: "Dulces Caseros ",
    secondContent:
      "En la elaboración de dulces caseros como el majarete, una mezcla de maíz y coco, la Maizena se utiliza para alcanzar la consistencia deseada. Este postre es especialmente popular durante la Semana Santa y otras festividades religiosas.",
    thirdSubtitle: "Sopas y Cremas",
    thirdContent:
      "La Maizena es utilizada como espesante en sopas y cremas, aportando una textura más rica y sustanciosa. Ejemplos incluyen la crema de auyama (calabaza) y la crema de pollo.",
    image1:
      "https://desvelado.ar/wp-content/uploads/20-postres-venezolanos-populares-en-venezuela-para-probar.jpg",
    image2:
      "https://www.recetasjudias.com/wp-content/uploads/2015/05/Papitas-de-Leche-Bolitas-de-leche.jpg",
  },
  {
    title: "Usos Tradicionales y Contemporáneos",
    firstSubtitle: "Repostería Moderna",
    firstContent:
      "La Maizena es ampliamente utilizada en la repostería contemporánea para preparar pasteles, galletas y otros postres. Su capacidad para proporcionar ligereza y evitar la formación de grumos la hace ideal para recetas modernas.",
    secondSubtitle: "Alternativas Sin Gluten",
    secondContent:
      "Con el aumento de la demanda de productos sin gluten, la Maizena se ha convertido en una alternativa popular a la harina de trigo. Se utiliza en la preparación de panes, tortas y otros productos de panadería para personas con intolerancia al gluten.",
    thirdSubtitle: "Productos Instantáneos",
    thirdContent:
      "Las empresas locales han desarrollado productos instantáneos a base de Maizena, como mezclas para postres y cremas instantáneas, que facilitan la preparación de comidas tradicionales y modernas en menos tiempo.",
    image1:
      "https://www.unileverfoodsolutions.com.ar/dam/global-ufs/mcos/sla/argentina/calcmenu/products/AR-products/packshots/foodsolutions/maizena-2-kg/maizena2.jpg",
    image2:
      "https://assets.unileversolutions.com/recipes-v3/214607-default.jpg?im=AspectCrop=(625,469);Resize=(625,469)",
  },
];

export function CarouselMaizena() {
  return (
    <Carousel className="w-full max-w-3xl">
      <CarouselContent>
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent border-gray-600 border-[2px]">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <h3 className="text-3xl text-yellow-400 mb-8 underline">
                    Origen de la Maizena en Venezuela
                  </h3>
                  <p className="text-gray-300 mb-8">
                    La Maizena llegó a Venezuela a principios del siglo XX,
                    coincidiendo con la expansión global del producto.
                    Introducida inicialmente por empresas estadounidenses y
                    europeas, su popularidad creció rápidamente en el país
                    debido a su versatilidad y capacidad para mejorar la textura
                    y consistencia de los alimentos.
                  </p>
                  <div className="mb-8">
                    <h4 className="text-left text-xl text-yellow-300">
                      Desarrollo y Expansión en Venezuela
                    </h4>
                    <p className="text-gray-300">
                      La Maizena fue rápidamente adoptada en la cocina
                      venezolana por su capacidad para espesar salsas, sopas y
                      postres. Uno de los usos más comunes es en la preparación
                      de natillas y atoles, que son postres tradicionales en
                      muchas regiones del país. Además, se utiliza en la
                      preparación de empanadas y arepas, donde ayuda a mejorar
                      la textura de la masa.
                    </p>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-left text-xl text-yellow-300">
                      Producción Local
                    </h4>
                    <p className="text-gray-300">
                      A medida que crecía la demanda, surgieron empresas locales
                      que comenzaron a producir Maizena. Empresas como Alfonzo
                      Rivas & Cía, conocida por su marca Maizina Americana, han
                      sido fundamentales en la producción y distribución del
                      producto a nivel nacional. Esto no solo redujo la
                      dependencia de las importaciones, sino que también impulsó
                      la economía local.
                    </p>
                  </div>
                  <div className="flex gap-8">
                    <img
                      src="https://quemantequilla.online/wp-content/uploads/2019/09/Maizena-Americana-jpg.webp"
                      alt=""
                      className="size-[200px] rounded-lg"
                    />
                    <img
                      src="https://http2.mlstatic.com/D_NQ_NP_796198-MLV30957242037_062019-O.webp"
                      alt=""
                      className="size-[200px] rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
        {arrayInfo.map((info, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent border-gray-600 border-[2px]">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <h3 className="text-3xl text-yellow-400 mb-8 underline">
                    {info.title}
                  </h3>
                  <p className="text-gray-300 mb-8">{info.content}</p>
                  <div className="mb-8">
                    <h4 className="text-left text-xl text-yellow-300">
                      {info.firstSubtitle}
                    </h4>
                    <p className="text-gray-300">{info.firstContent}</p>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-left text-xl text-yellow-300">
                      {info.secondSubtitle}
                    </h4>
                    <p className="text-gray-300">{info.secondContent}</p>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-left text-xl text-yellow-300">
                      {info.thirdSubtitle}
                    </h4>
                    <p className="text-gray-300">{info.thirdContent}</p>
                  </div>
                  <div className="flex gap-8">
                    <img
                      src={info.image1}
                      alt=""
                      className="size-[200px] rounded-lg"
                    />
                    <img
                      src={info.image2}
                      alt=""
                      className="size-[200px] rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
