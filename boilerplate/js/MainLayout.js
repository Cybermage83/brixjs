define(['marionette', 'hbs!template/MainLayout'], function (Marionette, template) {

    /**
     * @constructor
     * @extends {Marionette.Layout}
     */
    var MainLayout = Marionette.Layout.extend({
        className: 'container',
        template: template,
        regions: {
            "navigationRegion": "header",
            "mainRegion": ".main-content"
        }
    });

    return MainLayout;
});