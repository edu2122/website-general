import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FirstCardMaizena() {
  return (
    <Card className="w-[700px] bg-transparent">
      <CardHeader>
        <CardTitle className="text-yellow-300">
          Papel de la Maizena en la Alimentación Diaria
        </CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <div>
          <p>
            <span className="text-yellow-200">⚪ Espesante Común: </span>
            La Maizena se utiliza diariamente en muchos hogares venezolanos como
            espesante para salsas, sopas y cremas. Su capacidad para mejorar la
            textura y consistencia de los alimentos la hace indispensable en la
            cocina cotidiana.
          </p>
          <p>
            <span className="text-yellow-200">⚪ Desayunos y Meriendas: </span>
            Es común encontrar la Maizena en recetas de desayuno y merienda,
            como en la preparación de atoles y batidos. Estos platillos no solo
            son nutritivos sino también fáciles de preparar, lo que los
            convierte en una opción popular para comenzar el día.
          </p>
          <p>
            <span className="text-yellow-200">⚪ Repostería Casera: </span>
            En la repostería casera, la Maizena se emplea para preparar una
            variedad de postres, incluyendo galletas, pudines y pasteles. Su
            capacidad para proporcionar una textura suave y ligera es muy
            valorada en estas preparaciones.
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
