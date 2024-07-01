import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FirstCardToronto() {
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
            <span className="text-yellow-200">Navidad: </span>
            Durante la temporada navideña, los Torontos son un componente
            clásico de las cestas de regalo y celebraciones familiares. Su
            presentación elegante y su sabor exquisito los convierten en un
            regalo ideal. Además, los Torontos suelen ser utilizados para
            decorar mesas y como parte de los obsequios en intercambios de
            regalos navideños.
          </p>
          <p>
            <span className="text-yellow-200">Cumpleaños y Fiestas: </span>
            En las fiestas de cumpleaños y otras celebraciones, los Torontos son
            populares como parte de las mesas de dulces y en las piñatas. Se
            utilizan a menudo como premios en juegos y concursos, y su
            envoltorio brillante y atractivo los hace destacar en cualquier
            fiesta.
          </p>
          <p>
            <span className="text-yellow-200">
              Carnavales y Otras Festividades:{" "}
            </span>
            Durante los carnavales y otras festividades, los Torontos se
            distribuyen entre los participantes como parte de las celebraciones.
            Su consumo en estos eventos refleja su integración en la cultura
            festiva de Venezuela.
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
