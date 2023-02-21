import { appProtocol, postIdea, postImage, notPostImage } from "./common";
import {
  MessageAPIResponseBase,
  TextMessage,
  WebhookEvent,
  TemplateMessage,
} from "@line/bot-sdk";
import { test } from "vitest";

/**
 * リッチメニューのボタンが押されて一番初めに返信されるテキストメッセージ.
 * タイトルの入力を促す
 */
export const firstResTitle: TextMessage = {
  type: "text",
  text: "アイデアのタイトルを入力してください",
};

/**
 * タイトルの入力後に返信されるテキストメッセージ.
 * 説明の入力を促す
 */
export const secondResCaption: TextMessage = {
  type: "text",
  text: "アイデアの説明を入力してください",
};

/**
 * 説明の入力後に返信されるテンプレートメッセージ．
 * 写真も添付するかの確認を行う
 */
export const optionalRes: TemplateMessage = {
  type: "template",
  altText: "説明に写真も添付しますか？",
  template: {
    type: "confirm",
    text: "説明に写真も添付しますか？",
    actions: [
      {
        type: "postback",
        data: postIdea + appProtocol + postImage,
        label: "はい",
        displayText: "はい",
      },
      {
        type: "postback",
        data: postIdea + appProtocol + notPostImage,
        label: "いいえ",
        displayText: "いいえ",
      },
    ],
  },
};
