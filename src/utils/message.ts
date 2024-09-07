import { currencyToString } from ".";
import categories from "../models/categories.json";
import items from "../models/items.json";
import borders from "../models/borders.json";
import { Cart } from "../types/cart";

export class Message {
  private order_number: number;
  constructor(
    public data: FormData
  ) {
    this.data  =  data;
    this.order_number = Math.floor(Math.random() * 1000);
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
    if(this.data.get("complement") === "") return "N/A";
    return this.data.get("complement") as string;
  }
  private get payment(): string {
    return this.data.get("payment") as string;
  }

  private get delivery_fee(): number {
    return parseInt(this.data.get("delivery_fee") as string);
  }

  private get delivery_fee_filted(): string {
    return this.data.get("delivery_fee") === "0" 
      ? "A combinar"
      :  currencyToString(this.delivery_fee);
  }

  private get total(): number {
    return this.sub_total - this.discount + this.delivery_fee;
  }

  private get order_detail(): string { 
    return this.cart.map((item:Cart, index)=>{
      return `➤ *${categories[item.type].title}:* ${item.tastes.map((taste: number) => `\\n   ● ${items[taste].title}`).join(", ")} ${item.border? `\\n   *Borda:*  ${borders[item.border].description}` : ""}  \\n   *Sub-total:* ${currencyToString(item.sub_total)}`
    }).join("\\n \\n");
  }

  public async  send_message(
    to = this.number,
    to_nickname = "o atendente",
    chat_number = process.env.REACT_APP_PHONE_NUMBER
  ) {
    if (this.cart.length > 0){
      const send =  await fetch(`https://graph.facebook.com/v20.0/${process.env.REACT_APP_META_NUMBER_ID}/messages`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.REACT_APP_META_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "messaging_product": "whatsapp",
          "to": to,
          "type": "template",
          "template": {
            "name": "gui_pedidos",
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
                    "text": chat_number
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
                    "text": this.payment
                  },
                  {
                    "type": "text",
                    "text": this.delivery_fee_filted
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
                    "text": to_nickname
                  }
                ]
              }
            ]
          }
        }),
        redirect: "follow"
      });
      return send.json();
    }
  }
}