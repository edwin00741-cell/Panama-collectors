import { ContentPage } from "@/components/content-page";

export default function PrivacidadPage() {
  return (
    <ContentPage
      switchHref="/en/privacy"
      eyebrow="Privacidad"
      title="Política de privacidad"
      intro="Tratamiento responsable de información recibida por medios digitales, formularios y canales de contacto de Panama Collectors S.A."
      heroImage="/assets/images/generated/cumplimiento-documental-bancario.png"
      imageAlt="Gestión documental y privacidad de información"
    >
      <section className="article-section">
        <h2>Datos recopilados</h2>
        <p>Podemos recibir nombre, correo, teléfono, empresa, mensaje y servicio solicitado mediante formularios, correo electrónico o WhatsApp.</p>
      </section>

      <section className="article-section">
        <h2>Uso de información</h2>
        <p>La información se utiliza para responder solicitudes, preparar propuestas, coordinar entrevistas y dar seguimiento comercial u operativo.</p>
      </section>

      <section className="article-section">
        <h2>Confidencialidad</h2>
        <p>Panama Collectors aplica criterios de reserva, confidencialidad y protección de datos alineados al sector financiero y a la naturaleza sensible de la información gestionada.</p>
      </section>
    </ContentPage>
  );
}
