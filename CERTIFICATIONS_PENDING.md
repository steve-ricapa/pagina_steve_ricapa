# Verificación de certificaciones

El catálogo se basa en el inventario de LinkedIn proporcionado por Steve, no en una exportación obtenida directamente por el sitio. Se consolidó la entrada duplicada de Postman y se conservó la grafía original de las entradas de Palo Alto Networks.

| Registro                                                                                                                      | Evidencia pendiente                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AI-103, SC-500 y OTCA                                                                                                         | Enlaces personales de verificación. Las páginas oficiales describen los programas; no prueban la titularidad.                                                                       |
| AB-100                                                                                                                        | Constancia del examen, fecha exacta y, si Microsoft emite la credencial Expert, enlace e ID de esa credencial. Por ahora se muestra solo como examen aprobado comunicado por Steve. |
| MATLAB Onramp, FCA-Fortigate y las entradas sin fecha de Palo Alto Networks, Credicorp y Centro Nacional de Seguridad Digital | Fecha de expedición y constancia original; los campos faltantes siguen en `null`.                                                                                                   |
| Microsoft Security Compliance y registros de Palo Alto Networks con tipo pendiente                                            | Documento del emisor para confirmar el tipo de credencial y, cuando proceda, la grafía original. Los dos PSE vencieron en julio de 2025.                                            |
| Demás registros                                                                                                               | Enlaces personales verificables, cuando existan y estén autorizados. No publicar ID ni datos de nacimiento de Cambridge.                                                            |

## Catálogo local

Las 23 entradas de Platzi se almacenan en `.local/certifications-platzi.json`, fuera de Git y sin importaciones desde la app. Conserva una copia privada: un clon nuevo no incluye ese archivo. No almacenar credenciales privadas en `public/` ni en el código del sitio.

Para habilitar una entrada concreta con autorización, mueve solo esa entrada al catálogo `src/features/portfolio/data/certifications.ts`, configura `isPublic: true` y elimina la copia local de esa entrada. No conectar el archivo privado al build.
