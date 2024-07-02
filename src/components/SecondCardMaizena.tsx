import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SecondCardMaizena() {
  return (
    <Card className="w-[700px] bg-transparent">
      <CardHeader>
        <CardTitle className="text-yellow-300">
          Maizena en Festividades
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <div>
          <p>
            <span className="text-yellow-200">Semana Santa: </span>La Maizena es un ingrediente clave en la elaboración
            del majarete, un postre tradicional a base de maíz y coco. Este
            postre es una parte importante de las celebraciones religiosas y
            familiares.
          </p>
          <p>
            <span className="text-yellow-200">Navidad: </span>
            En la temporada navideña, la Maizena se utiliza en la preparación de
            hallacas, específicamente en la masa que envuelve el relleno. Aunque
            no es el ingrediente principal, su uso mejora la textura y la
            consistencia de la masa, asegurando una mejor experiencia
            gastronómica.
          </p>
          <p>
            <span className="text-yellow-200">Carnavales: </span>
            Durante las festividades de Carnaval, es común preparar natillas, un
            postre hecho con leche, azúcar y Maizena. Este postre se disfruta en
            reuniones familiares y es una tradición que se ha mantenido a lo
            largo de los años.
          </p>
        </div>
        <img
          className=" size-60 rounded-xl"
          src="https://imgmedia.larepublica.pe/640x371/larepublica/migration/images/7F5UWCI26ZCPVLRVODF622BPYA.webp"
          alt=""
        />
      </CardContent>
    </Card>
  );
}
