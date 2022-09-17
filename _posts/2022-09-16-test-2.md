---
layout: article
title: Google Analytics para Jekyll
date: 2022-09-16T19:21:09.464Z
tags:
  - google
  - analytics
  - espanol
  - jekyll
category:
  - google
author: Fredy Sandoval
image: /assets/uploads/googleanalytics.webp
---
# Google Analytics para Jekyll 

El sistema de Monitoreo de Google Analytics es un servicio gratis, ofrecido por Google. Que monitorea y reporta el tráfico de una página Web.
En este tutorial, te mostraré como agregar en nuevo script "Global Site Tag" a tu sitio de Jekyll.

# Paso 1.

Has Login en tu sitio de Google Analitics y crea una nueva propiedad para recibir un "Tracking ID" para tú página Web.
Ejemplo: XX-XXXXXX
<style>
  code.t {
    background-color: var(--header-hover-background-color);
  }
</style>
# Paso 2. 
### Instalando el tracking de Google Analytics
primero crea un nuevo archivo llamado <code class="t"> analytics.html </code> en tu archivo llamado <code> _includes </code>.

Ahora Copia y pega el siguiente código "Global Site Tag" (gtag.js) en tu archivo llamado <code class="t">analytics.html</code> y guárdalo.

```html
<script async src="https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics }}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '{{ site.google_analytics }}');
</script>
```

Encontrarás tu propio código en la página de Google Analytics (gtag.js) <strong> Admin > Property > Tracking info > Tracking code. <strong>Tu propio codigo "Tracking ID" se muestra en la parte superior de la pagina.

El <code class="t"> {% raw %}{{ site.google_analitics }}{% endraw %}" </code> que e incluido arriba, te permitirá configurar tu propio Tracking ID en el archivo <code>_config.yml</code>.

# Añadiendo tu Tracking ID de Google Analytics a tu Jekyll archivo de configuración
Abre tu <code style="t">_config.yml</code> y agrega las siguientes líneas de código. Es importante que incluyas tu propio "Tracking ID" asi que remplaza <code class="t">XX-XXXXXX</code> por el código de tu propia página.

```yml
# Google Analytics
google_analytics: UA—XXXXXXXX-X
```
# Finalmente
Google recomienda colocar el script dentro de la sección <code class="t">{{ "<head>" | escape }}</code> de tu página web, para que funcione correctamente.

{% raw %}
```ruby
{% if site.google_analytics and jekyll.environment == 'production' %}
  {% include analytics.html %}
{% endif %}
```
{% endraw %}

En el futuro, cuando tú ejecutes <code style="t">bundle exec jekyll serve</code> la parte de Google Analytics no se vera afectada si esta accedes a la página localmente. "localhost:4000".

Si necesitas que se muestre el tag dentro de un entorno de desarrollo, puedes ejecutar
```yml
JEKYLL_ENV=production bundle exec jekyll build
```

Siempre asegúrate manualmente que tu tag está insertado correctamente.