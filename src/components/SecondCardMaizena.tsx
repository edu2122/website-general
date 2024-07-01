import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SecondCardMaizena() {
  return (
    <Card className="w-[700px] bg-transparent">
      <CardHeader>
        <CardTitle className="text-yellow-300">
          Papel de la Maizena en Festividades
        </CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <div>
          <p>
            <span className="text-yellow-200">Semana Santa: </span> Durante la
            Semana Santa, la Maizena es un ingrediente clave en la elaboración
            del majarete, un postre tradicional a base de maíz y coco. Este
            postre es una parte importante de las celebraciones religiosas y
            familiares.
          </p>
          <p>
            <span className="text-yellow-200">⚪ Navidad: </span>
            En la temporada navideña, la Maizena se utiliza en la preparación de
            hallacas, específicamente en la masa que envuelve el relleno. Aunque
            no es el ingrediente principal, su uso mejora la textura y la
            consistencia de la masa, asegurando una mejor experiencia
            gastronómica.
          </p>
          <p>
            <span className="text-yellow-200">⚪ Carnavales: </span>
            Durante las festividades de Carnaval, es común preparar natillas, un
            postre hecho con leche, azúcar y Maizena. Este postre se disfruta en
            reuniones familiares y es una tradición que se ha mantenido a lo
            largo de los años.
          </p>
        </div>
        <img
          className="size-72"
          src="https://http2.mlstatic.com/D_NQ_NP_796198-MLV30957242037_062019-O.webp"
          alt=""
        />
      </CardContent>
    </Card>
  );
}
