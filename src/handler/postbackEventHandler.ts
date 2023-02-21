import {
  WebhookEvent,
  MessageAPIResponseBase,
  TemplateMessage,
  TextMessage,
} from "@line/bot-sdk";
import { appProtocol, postIdea, dm } from "../resposse/common";

export const postBackEventHandler = async (
  event: WebhookEvent,
  accessToken: string
): Promise<MessageAPIResponseBase | undefined> => {
  if (event.type !== "postback" || event.postback.data === undefined) {
    return;
  }

  const { replyToken } = event;
  const { data } = event.postback;
  const response: TemplateMessage | TextMessage = {
    type: "text",
    text: "error",
  };
  const splitData = data.split(appProtocol, 1);
  switch (splitData[0]) {
    case postIdea:
      switch (splitData[1]) {
      }
      break;
    case dm:
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
