class ContactFormController {
  constructor() {
    this.name = 'Contact Us'
    this.model = {};
    this.schema = {
      type: "object",
      properties: {
        name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
        title: {
          type: "string",
          enum: ['dr','jr','sir','mrs','mr','NaN','dj']
        }
      }
    };
    this.form = [
      "*",
      {
        type: "submit",
        title: "Save"
      }
    ];
  }
}

export default ContactFormController;
