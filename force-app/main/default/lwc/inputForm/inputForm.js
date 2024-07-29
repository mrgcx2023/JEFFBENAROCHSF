import { LightningElement, track } from 'lwc';


// Genesys Script
(function (g, e, n, es, ys) {
    g['_genesysJs'] = e;
    g[e] = g[e] || function () {
      (g[e].q = g[e].q || []).push(arguments)
    };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  })(window, 'Genesys', 'https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js', {
    environment: 'prod',
    deploymentId: 'a6fc8135-5645-4e19-ae60-260f47f0a42c'
  });
    Genesys("subscribe", "Journey.ready", function() {
  console.log("Journey plugin is ready.")
});

export default class InputForm extends LightningElement {
    @track inputValue = '';

    handleInputChange(event) {
        this.inputValue = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        // Show confirmation dialog
        // const isConfirmed = window.confirm('Are you sure you want to submit the form?');
        // if (!isConfirmed) {
        //     return;
        // }

        // Track form submission with Genesys
        this.trackFormSubmission(this.inputValue);
    }

    trackFormSubmission(inputValue) {
        // Ensure Genesys is loaded
        if (typeof Genesys === 'undefined') {
            console.error('Genesys script not loaded');
            return;
        }

        Genesys("command", "Journey.record", {
            eventName: "form_submitted",
            customAttributes: {
                email: `${inputValue}`
            },
            traitsMapper: [
                { "fieldName": "email", "traitName": "email" }
            ]
        });
    }
}