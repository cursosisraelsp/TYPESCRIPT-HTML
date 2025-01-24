# EXEMPLO DE USO DE FUNCIONES

## INTRODUCCIÓN

Neste exemplo móstrase a importación de funcións en TypeScript.

## NOTAS

### 1.Deberase modificar o arquivo `tsconfig.json` para que se importen las funciones de TypeScript. 

```json

    /* Language and Environment */
    "target": "esnext",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    
    /* Modules */
    "module": "esnext",                                /* Specify what module code is generated. */
    "rootDir": "./src",                                  /* Specify the root folder within your source files. */
    "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
    
    /* Emit */
    "outDir": "./public/javascript/",                                   /* Specify an output folder for all emitted files. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    
    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    
    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true,                                 /* Skip type checking all .d.ts files. */

```
tal vez sairavos este erro o compilar a través do comando `tsc`:
```bash
tsconfig.json:10:35 - error TS5096: Option 'allowImportingTsExtensions' can only be used when either 'noEmit' or 'emitDeclarationOnly' is set.

10     "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
                                     ~~~~


Found 1 error in tsconfig.json:10

```

non lle deades importancia sempre e cando vos xenere os arquivos `.js` na carpeta `public/javascript/`.

### 2. Deberedes instalar 'express', co seguinte comando instalaredes todos os paquetes necesarios:

```bash
npm install express
```

### 3. Deberedes modificar o arquivo importado:

Cando estamos a compilar TypeScript, o compilador vai a buscar por todas as funciones importadas en el ficheiro `src/index.ts` e vai a compilar todas as funciones que se importen.

Na carpeta `javascript/` vai a estar todos os ficheiros `.js` que se compilaron. E en `index.js` teremos o seguinte código:
```javascript
import { selecionDato } from "./funcions.ts";
selecionDato();
```
polo que deberemos modificar o arquivo importado a `funcions.js`