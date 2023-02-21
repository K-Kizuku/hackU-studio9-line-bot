import {
  WebhookEvent,
  MessageAPIResponseBase,
  TemplateMessage,
} from "@line/bot-sdk";

export const textEventHandler = async (
  event: WebhookEvent,
  accessToken: string
): Promise<MessageAPIResponseBase | undefined> => {
  if (event.type !== "message" || event.message.type !== "text") {
    return;
  }

  const { replyToken } = event;
  const { text } = event.message;
  const splitText = text.split(">", 1);
  let response: TemplateMessage = {
    type: "template",
    altText: "temp",
    template: {
      type: "buttons",
      text: "各種設定",
      actions: [
        {
          type: "postback",
          label: "Buy",
          data: "action=buy&itemid=111",
          // displayText: "Buy",
        },
      ],
    },
  };

  switch (splitText[0]) {
    case "‼︎":
      break;
  }
  await fetch("https://api.line.me/v2/bot/message/reply", {
    body: JSON.stringify({
      replyToken: replyToken,
      messages: [response],
    }),
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
};
