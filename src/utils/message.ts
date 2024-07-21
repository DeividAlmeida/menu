export class Message {
  constructor(
    public number: string
  ) {
    this.number  =  number;
    this.sendMessage();
  }

  private sendMessage(): void {
    fetch(`https://graph.facebook.com/v20.0/${process.env.REACT_APP_META_NUMBER_ID}/messages`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_META_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "messaging_product": "whatsapp",
        "to": this.number,
        "type": "template",
        "template": {
          "name": "gui_pizza",
          "language": {
            "code": "pt_BR"
          },
          "components": [
            {
              "type": "button",
              "sub_type": "url",
              "index": 0,
              "parameters": [
                {
                  "type": "text",
                  "text": "1234567"
                }
              ]
            },
            {
              "type": "body",
              "parameters": [
                {
                  "type": "text",
                  "text": "001"
                },
                {
                  "type": "text",
                  "text": "75992581723"
                },
                {
                  "type": "text",
                  "text": "grande"
                },
                {
                  "type": "text",
                  "text": "[Sabor 1]"
                },
                {
                  "type": "text",
                  "text": "[Sabor 2]"
                },
                {
                  "type": "text",
                  "text": "[Sabor 3]"
                },
                {
                  "type": "text",
                  "text": "chedda"
                },
                {
                  "type": "text",
                  "text": "12.00"
                },
                {
                  "type": "text",
                  "text": "Rua irmã Dulce"
                },
                {
                  "type": "text",
                  "text": "5.00"
                },
                {
                  "type": "text",
                  "text": "Portão branco"
                },
                {
                  "type": "text",
                  "text": "17.00"
                }
              ]
            }
          ]
        }
      }),
      redirect: "follow"
    }).then(
      response => response.text()
    ).then(
      result => console.log(result)
    ).catch(
      error => console.log("error", error)
    );
  }
}