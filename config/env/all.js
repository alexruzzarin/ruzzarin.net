/**
 * Created by Alex on 3/21/2015.
 */
'use strict';
module.exports = {
    url: 'www.ruzzarin.net',
    port: process.env.PORT || 3000,
    cdnUrl: process.env.cdnUrl || false,
    minified: process.env.NODE_ENV === 'production' ? '.min' : '',
    app: {
        title: 'Alex Ruzzarin - Software Developer',
        description: 'Programmer with degree in Analysis and Development of Information Systems. Professional and trainer certified by Microsoft. Crazy for technology, works with. Net, but is a fan of Ruby and JavaScript (and Node.Js).',
        keywords: 'HTML,CSS,JavaScript,.net,dotnet,node,nodejs,node.js,asp.net,aspnet'
    },
    social: {
        name: 'Alex Ruzzarin',
        url: 'http://www.ruzzarin.net',
        google: 'https://plus.google.com/+AlexRuzzarin',
        youtube: 'https://www.youtube.com/channel/UCzSHLabsxKezSIpoc5bD7Zw',
        facebook: 'https://www.facebook.com/alex.ruzzarin',
        twitter: 'https://twitter.com/alexruzzarin',
        instagram: 'https://instagram.com/alexruzzarin',
        linkedin: 'https://www.linkedin.com/in/alexruzzarin',
        github: 'https://github.com/alexruzzarin'
    },
    azureCdn: {
        account: process.env.AZURE_STORAGE_ACCOUNT,
        accessKey: process.env.AZURE_STORAGE_ACCESS_KEY,
        cacheControl: 'public, max-age=31530000',
        cacheControlHeader: 'public, max-age=31530000'
    },
    prerender: {
        token: process.env.prerenderToken || ''
    },
    sendgrid: {
        user: process.env.sgUser || '',
        key: process.env.sgKey || ''
    }
};