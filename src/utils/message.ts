export class Message {
  constructor(
    private message: string,
    public number: string
  ) {
    this.message = message;
    this.number  =  number;
  }

  public sendMessage(): void {
    fetch("https://graph.facebook.com/v20.0/394693823720490/messages", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.META_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "messaging_product": "whatsapp",
        "to": this.number,
        "type": "template",
        "template": {
          "name": "size",
          "language": {
            "code": "pt_BR"
          }
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