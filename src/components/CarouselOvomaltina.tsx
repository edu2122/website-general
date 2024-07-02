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
    title: "Historia de la Ovomaltina y su Introducción",
    content: "",
    firstSubtitle: "Historia de la Marca Ovomaltina",
    firstContent:
      "Ovomaltina, conocida como Ovaltine en algunos países, es una marca de bebida nutritiva que se originó en Suiza en 1904. Fue desarrollada por el químico Dr. Georg Wander y su hijo Albert Wander. La bebida fue inicialmente creada como un suplemento alimenticio para ayudar a combatir la malnutrición, proporcionando una fuente rica en vitaminas, minerales y maltodextrina.",
    secondSubtitle: "Introducción en Venezuela",
    secondContent:
      "La Ovomaltina fue introducida en Venezuela a mediados del siglo XX. Su llegada coincidió con una época de crecimiento económico y modernización en el país, lo que facilitó la importación y popularización de productos alimenticios extranjeros. Rápidamente, la Ovomaltina ganó popularidad entre los venezolanos, convirtiéndose en una parte esencial de la dieta diaria de muchas familias.",
    image1:
      "https://http2.mlstatic.com/D_NQ_NP_803569-MLV72861853898_112023-O.webp",
    image2:
      "https://urielcavzla.com/wp-content/uploads/2023/01/ovomaltina_Mesa-de-trabajo-1-600x600.jpg",
  },
  {
    title: "Popularidad y Usos Comunes en Venezuela",
    firstSubtitle: "Parte de la Infancia",
    firstContent:
      "La Ovomaltina se ha convertido en un elemento fundamental en la infancia de muchos venezolanos. Su sabor único y sus beneficios nutricionales hicieron que fuera una opción popular para el desayuno y la merienda de los niños.",
    secondSubtitle: "Cultura Popular",
    secondContent:
      "La Ovomaltina se ha establecido firmemente en la cultura popular venezolana. Anuncios publicitarios memorables y su presencia constante en hogares han consolidado su lugar en la memoria colectiva del país.",
    image1:
      "https://http2.mlstatic.com/D_NQ_NP_938895-MLU73331817766_122023-O.webp",
    image2:
      "https://http2.mlstatic.com/D_NQ_NP_801734-MLU73331788032_122023-O.webp",
  },
  {
    title: "Popularidad y Usos Comunes en Venezuela",
    firstSubtitle: "Bebida Nutritiva",
    firstContent:
      "Tradicionalmente, la Ovomaltina se consume mezclada con leche caliente o fría. Esta bebida se disfruta en el desayuno o como una merienda nutritiva.",
    secondSubtitle: "Ingrediente en Repostería",
    secondContent:
      "En la repostería venezolana, la Ovomaltina se utiliza como ingrediente en la preparación de tortas, galletas y otros postres, aportando su característico sabor a malta y cacao.",
    thirdSubtitle: "Complemento en Batidos",
    thirdContent:
      "La Ovomaltina es un complemento popular en batidos y smoothies, donde se mezcla con frutas y yogur para crear bebidas energéticas y nutritivas.",
    image1:
      "https://www.alfonzorivas.com/images/productos/detalle/lata_ovomaltina.jpg",
    image2:
      "https://http2.mlstatic.com/D_NQ_NP_838966-MLU73331788060_122023-O.webp",
  },
];

export function CarouselOvomaltina() {
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
