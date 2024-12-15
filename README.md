# Apptienda

Apptienda es una aplicación de tienda en línea que permite a los usuarios iniciar sesión, registrarse, capturar fotos, verlas en una galería y navegar por los productos disponibles.

## Características

- Inicio de sesión de usuario
- Registro de usuario
- Recuperación de contraseña
- Captura de imágenes usando la cámara del dispositivo
- Guardado de imágenes en una galería local
- Visualización de imágenes guardadas en la galería
- Gestión de productos y clientes
- Navegación a través de diferentes secciones de la aplicación mediante un menú lateral
- Funcionalidad de GPS para ubicaciones

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/Apptienda.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd Apptienda
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia la aplicación:
    ```bash
    ionic serve
    ```

## Estructura del Proyecto

- `src/app/login/login.page.html`: Página de inicio de sesión.
- `src/app/register/register.page.html`: Página de registro.
- `src/app/home/home.page.html`: Página principal después de iniciar sesión.
- `src/app/camara/camara.page.html`: Página para capturar fotos.
- `src/app/galeria/galeria.page.html`: Página para ver las fotos guardadas en la galería.
- `src/app/reset-password/reset-password.page.html`: Página para recuperar la contraseña.

## Uso

1. Abre la aplicación en tu navegador.
2. Ingresa tu correo electrónico y contraseña para iniciar sesión.
3. Si no tienes una cuenta, haz clic en "Registrarse" para crear una nueva cuenta.
4. Si olvidaste tu contraseña, haz clic en "Olvidaste tu contraseña" para recuperarla.
5. Navega a la sección "Tomar Foto" desde el menú para capturar una imagen.
6. Navega a la sección "Galería" desde el menú para ver las imágenes guardadas.

## Publicación

### Generación de APK y Bundle App

1. Genera un APK sin firmar:
    ```bash
    ionic cordova build android --prod --release
    ```

2. Genera un Bundle App:
    ```bash
    ionic cordova build android --prod --release -- -- --packageType=bundle
    ```

### Pruebas

1. Ejecuta pruebas unitarias:
    ```bash
    npm run test
    ```

2. Ejecuta pruebas E2E:
    ```bash
    npm run e2e
    ```

### Configuración para Producción

1. Configura el archivo `config.xml` con los siguientes parámetros:
    ```xml
    <widget id="com.tuempresa.apptienda" version="1.0.0">
        <name>Apptienda</name>
        <description>Aplicación de tienda en línea</description>
        <author email="desarrollador@tuempresa.com" />
        <preference name="android-minSdkVersion" value="22" />
        <preference name="android-targetSdkVersion" value="30" />
    </widget>
    ```

2. Firma el APK utilizando Keytool de Java:
    ```bash
    keytool -genkey -v -keystore tu-key.keystore -alias tu-alias -keyalg RSA -keysize 2048 -validity 10000
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore tu-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk tu-alias
    ```

3. Optimiza el APK firmado:
    ```bash
    zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk Apptienda.apk
    ```

### Envío del Proyecto

1. Excluye las carpetas `e2e` y `node_modules` y comprime el proyecto.
2. Envía el archivo comprimido al AVA.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para discutir cualquier cambio que te gustaría realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE] para obtener más detalles.

## Cómo usar

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/Apptienda.git
    ```
2. Instala las dependencias:
    ```bash
    npm install
    ```
3. Inicia la aplicación:
    ```bash
    ionic serve
    ```

## Contribuir

¡Las contribuciones son bienvenidas! Por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
    ```bash
    git checkout -b feature-nueva-funcionalidad
    ```
3. Realiza tus cambios y haz un commit:
    ```bash
    git commit -m 'Agrega nueva funcionalidad'
    ```
4. Sube tus cambios a tu fork:
    ```bash
    git push origin feature-nueva-funcionalidad
    ```
5. Abre un Pull Request en GitHub.
