export class Message {
  private order_number: number;
  constructor(
    public data: URLSearchParams
  ) {
    this.data  =  data;
    this.order_number = Math.floor(Math.random() * 1000)
    this.sendClientMessage();
  }


  private get number(): string {
    return this.data.get("phone") as string;
  }

  private get name(): string {
    return this.data.get("name") as string;
  }

  private get address(): string {
    return this.data.get("address") as string;
  }

  private get sub_total(): string {
    return this.data.get("total") as string;
  }

  private get complement(): string {
    return this.data.get("complement") as string;
  }

  private get delivery_fee() {
    return this.data.get("out_town") === "on"? 5.00 : "A combinar";
  }

  private get total(): string {
    if (this.delivery_fee === 5.00) {
      return (parseFloat(this.sub_total) + this.delivery_fee).toFixed(2);
    }
    return `${this.data.get("total")} + Entrega` as string;
  }

  private sendClientMessage(): void {
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
                  "text": this.order_number
                },
                {
                  "type": "text",
                  "text": this.number,
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
                  "text": "*[Sabor 3]*"
                },
                {
                  "type": "text",
                  "text": "chedda"
                },
                {
                  "type": "text",
                  "text": this.sub_total
                },
                {
                  "type": "text",
                  "text": this.address
                },
                {
                  "type": "text",
                  "text": `${this.delivery_fee}`
                },
                {
                  "type": "text",
                  "text": this.complement
                },
                {
                  "type": "text",
                  "text": this.total 
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