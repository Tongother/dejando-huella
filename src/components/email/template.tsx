import { Html, Text, Section, Heading, Img, Button, Tailwind, Head, Container, Row, Column } from "@react-email/components";

interface TemplateProps {
    nombre: string;
    telefono: string;
    correo: string;
    mensaje: string;
}

const Template = ({ nombre, telefono, correo, mensaje }:TemplateProps) => {
  return (
    <Html lang="es" style={{background: "#d1d3f4"}}>
        <Head />
        <Tailwind>
            <Container className="bg-[#F2F3FC] w-[80%] h-[90%] rounded-xl max-w-max border border-black border-solid">
                <Section>
                    <Row>
                        <Column align="center">
                        <Img
                            alt="Logo de dejando huella"
                            width="280"
                            height="280"
                            src="https://res.cloudinary.com/dpsgova0s/image/upload/v1731277291/logo_morado_naranja_u5mnrk.png"
                        />
                        </Column>
                    </Row>
                </Section>
                <Section className="text-center">
                    <Text className="my-[16px] text-[18px] font-semibold leading-[28px] text-indigo-600">
                        Remitente: <span className="font-normal">{nombre}</span>
                    </Text>
                    <Heading
                    as="h1"
                    className="m-0 mt-[8px] px-[24px] text-[28px] font-semibold leading-[36px] text-gray-900"
                    >
                        Enviado desde la página web de la empresa
                    </Heading>
                    <Text className="text-[16px] px-[24px] leading-[24px] text-gray-500">
                        {mensaje}
                    </Text>
                    <Container className="w-full">
                        <Text className="text-[16px] leading-[24px] text-gray-500">
                            <strong>Telefono:</strong> {telefono}
                            <br />
                            <strong>Correo:</strong> {correo}
                        </Text>
                    </Container>
                    <Button
                    className="my-[16px] rounded-[8px] bg-indigo-600 px-[40px] py-[12px] font-semibold text-white"
                    href={`mailto:${correo}`}
                    >
                        Responder
                    </Button>
                </Section>
            </Container>
        </Tailwind>
    </Html>
  );
}

export default Template;