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