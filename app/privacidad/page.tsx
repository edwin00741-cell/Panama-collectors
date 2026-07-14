import { ContentPage } from "@/components/content-page";

export default function PrivacidadPage() {
  return (
    <ContentPage eyebrow="Privacidad" title="Politica de privacidad" intro="Tratamiento responsable de informacion recibida por medios digitales y canales de contacto.">
      <article className="content-card"><h2>Datos recopilados</h2><p>Podemos recibir nombre, correo, telefono, empresa, mensaje y servicio solicitado mediante formularios o WhatsApp.</p></article>
      <article className="content-card"><h2>Uso de informacion</h2><p>La informacion se utiliza para responder solicitudes, preparar propuestas, coordinar entrevistas y dar seguimiento comercial u operativo.</p></article>
      <article className="content-card"><h2>Confidencialidad</h2><p>Panama Collectors aplica criterios de reserva, confidencialidad y proteccion de datos alineados al sector financiero.</p></article>
    </ContentPage>
  );
}
