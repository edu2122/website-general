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
    title: "Toronto: Creación y Evolución del Dulce",
    firstSubtitle: "Creación del Toronto",
    firstContent:
      "El Toronto es un dulce emblemático de Venezuela, creado por la famosa empresa de chocolates Savoy, que fue fundada en Caracas en 1941 por Don Rodolfo Höllrigl. La historia de este icónico dulce comienza en la década de 1960, cuando Savoy decidió innovar su línea de productos con un bombón que combinara el chocolate con el crocante de los frutos secos. Así nació el Toronto, un bombón de chocolate con leche relleno de una avellana tostada, envuelto en una capa de chocolate crujiente.",
    secondSubtitle: "Expansión de Popularidad",
    secondContent:
      "Desde su lanzamiento, el Toronto ganó rápidamente popularidad entre los venezolanos de todas las edades. Su combinación única de sabores y texturas lo hizo un favorito en fiestas, celebraciones y como regalo.",
    thirdSubtitle: "Adquisición por Nestlé",
    thirdContent:
      "En 1988, Nestlé adquirió Savoy, y con ello, la producción del Toronto. Esta adquisición permitió la expansión de la distribución del dulce a nivel nacional e internacional, manteniendo la receta original que lo hizo famoso.",
    image1:
      "https://lokierotumuch.com/wp-content/uploads/2021/06/Toronto-lo-kiero-tu-much-stratus-agency-group-1170x731.png",
    image2:
      "https://socialite360.com/wp-content/uploads/2023/10/Sin-titulo-3-143-800x445.jpg",
  },
  {
    title: "Importancia Cultural y Lugar en la Gastronomía",
    firstSubtitle: "Símbolo de Calidad y Tradición",
    firstContent:
      "El Toronto es más que un simple dulce; es un símbolo de la calidad y la tradición de la industria chocolatera venezolana. Representa el legado de Savoy y su compromiso con la excelencia en la elaboración de chocolates.",
    secondSubtitle: "Elemento Nostálgico",
    secondContent:
      "Para muchos venezolanos, el Toronto evoca recuerdos de la infancia y momentos especiales. Es comúnmente asociado con las celebraciones navideñas, cumpleaños y otros eventos festivos.",
    thirdSubtitle: "Presencia en la Cultura Popular",
    thirdContent:
      "El Toronto ha sido mencionado en canciones, programas de televisión y otras formas de cultura popular en Venezuela, consolidando su estatus como un ícono cultural.",
    image1:
      "https://http2.mlstatic.com/D_NQ_NP_803569-MLV72861853898_112023-O.webp",
    image2:
      "https://urielcavzla.com/wp-content/uploads/2023/01/ovomaltina_Mesa-de-trabajo-1-600x600.jpg",
  },
  {
    title: "Importancia Cultural y Lugar en la Gastronomía",
    firstSubtitle: "Postres y Repostería",
    firstContent:
      "El Toronto se utiliza a menudo como ingrediente en la repostería venezolana. Se incorpora en tortas, mousses y helados, aportando su distintivo sabor y textura a una variedad de postres.",
    secondSubtitle: "Regalo Clásico",
    secondContent:
      "Debido a su elegancia y presentación, el Toronto es un regalo clásico en Venezuela. Es común verlo en cestas de regalos y como detalle en ocasiones especiales.",
    thirdSubtitle: "Consumo Diario",
    thirdContent:
      "Además de su uso en celebraciones, el Toronto es consumido cotidianamente como un antojo o merienda, siendo accesible en tiendas y supermercados en todo el país.",
    image1:
      "https://http2.mlstatic.com/D_NQ_NP_803569-MLV72861853898_112023-O.webp",
    image2:
      "https://urielcavzla.com/wp-content/uploads/2023/01/ovomaltina_Mesa-de-trabajo-1-600x600.jpg",
  },
];

export function CarouselToronto() {
  return (
    <Carousel className="w-full max-w-3xl">
      <CarouselContent>
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
