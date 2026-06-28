const apiKey = "989c295b0c06dc0879ea783b340a2de5";
const apiSecret = "f4ca03afce2809559cad3bc0a5dff74e";
const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

fetch("https://api.mailjet.com/v3.1/send", {
  method: "POST",
  headers: {
    Authorization: `Basic ${auth}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    Messages: [
      {
        From: {
          Email: "info@cortexhive.co.uk",
          Name: "Cortex Hive Portal",
        },
        To: [
          {
            Email: "info@cortexhive.co.uk",
            Name: "Cortex Hive HQ",
          },
        ],
        Subject: "Mailjet API Credentials Test",
        HTMLPart: "<p><strong>Mailjet is successfully integrated!</strong> Your API key and secret key are working and ready to process lead alerts.</p>"
      }
    ]
  })
})
.then(async r => {
  const status = r.status;
  const text = await r.text();
  console.log("Status:", status);
  console.log("Response:", text);
})
.catch(console.error);
