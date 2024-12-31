//  -------------------------------------------
//  ----------  /02/pokemon-static/  ----------
//  ----------  astro.config.mjs  -------------
//  -------------------------------------------


// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import solidJs from '@astrojs/solid-js';


// https://astro.build/config
export default defineConfig({

    //base: '/udemy/pokemon-static',
    // Asegúrate de definir el subdirectorio correcto en "base"
    
    //site: 'https://devtalles.antonydev.tech/astro/02-pokemon-static',
    
    //base: '/astro/02-pokemon-static/',  // <--- Este es el subdirectorio donde se encuentra tu proyecto -----  Descomentar para Producción  -----
    
    integrations: [tailwind(), icon(), solidJs()]

});