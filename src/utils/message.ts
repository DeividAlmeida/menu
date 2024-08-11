import { currencyToString } from ".";
import { allItems, border, categories } from "../App";
import { Cart } from "../types/cart";

export class Message {
  private order_number: number;
  constructor(
    public data: URLSearchParams
  ) {
    this.data  =  data;
    this.order_number = Math.floor(Math.random() * 1000)
    this.send_client_message();
  }

  private get cart(): [] {
    return JSON.parse(this.data.get("cart") as string);
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

  private get sub_total(): number {
    const total = this.data.get("total") as string;
    return total ? parseFloat(total) : 0;
  }

  private get discount (): number {
    return parseFloat(this.data.get("discount") as string);
  }

  private get complement(): string {
    if(this.data.get("complement")!.length === 0) return "N/A";
    return this.data.get("complement") as string;
  }

  private get delivery_fee(): number {
    return parseInt(this.data.get("delivery_fee") as string);
  }

  private get total(): number {
    return this.sub_total - this.discount + this.delivery_fee;
  }

  private get order_detail(): string { 
    return this.cart.map((item:Cart, index)=>{
      return `➤ *${categories[item.type].title}:* ${item.tastes.map((taste: number) => `\\n   ● ${allItems[taste].title}`).join(", ")} ${item.border? `\\n   *Borda:*  ${border[item.border].description}` : ""}  \\n   *Sub-total:* ${currencyToString(item.sub_total)}`
    }).join("\\n \\n");
  }

  private send_client_message(): void {
    if (this.cart.length > 0) 
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
                    "text": process.env.REACT_APP_PHONE_NUMBER
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
                    "text": this.name,
                  },
                  {
                    "type": "text",
                    "text": this.order_detail
                  },
                  {
                    "type": "text",
                    "text": this.address
                  },
                  {
                    "type": "text",
                    "text": this.complement
                  },
                  {
                    "type": "text",
                    "text": currencyToString(this.delivery_fee)
                  },
                  {
                    "type": "text",
                    "text": currencyToString(this.discount)
                  },
                  {
                    "type": "text",
                    "text": currencyToString(this.total)
                  },
                  {
                    "type": "text",
                    "text": "o atendente"
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