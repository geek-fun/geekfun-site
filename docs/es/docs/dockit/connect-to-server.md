---
title: "Conectar DocKit a una base de datos"
description: "Añade a DocKit una conexión a Elasticsearch, OpenSearch, EasySearch, MongoDB o DynamoDB y pruébala antes de guardarla."
---

# Conectar DocKit a una base de datos

Pulsa **+** y selecciona el tipo de base de datos.

- **Elasticsearch, OpenSearch y EasySearch.** Introduce la URL con `http://` o `https://` y el puerto del servidor, a menudo `9200`. Elige autenticación básica o clave de API según el servidor. Mantén la verificación del certificado en HTTPS.
- **MongoDB.** Introduce el host y el puerto con la autenticación adecuada, o pega la URI del proveedor. Si eliges SCRAM, revisa la base de autenticación (`admin` en muchas instalaciones).
- **DynamoDB.** Elige el modo de conexión. Las claves de acceso requieren región, ID y clave secreta. AWS Profile, SSO y Assume Role requieren Ultimate. Para DynamoDB Local puedes usar `http://localhost:8000` con credenciales ficticias.

Pulsa **Probar conexión**. Si funciona, pulsa **Confirmar** y abre la conexión en la barra lateral. Si hay un error de permisos, comprueba qué índices, colecciones o tablas puede leer tu cuenta.

Sigue con la [primera consulta de búsqueda](/es/docs/dockit/search-editor) o revisa la [configuración de conexiones remotas (en inglés)](/docs/dockit/remote-connections).
