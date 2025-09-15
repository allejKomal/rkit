'use client';

import emojiMartData from '@emoji-mart/data';
import { EmojiInputPlugin, EmojiPlugin } from '@platejs/emoji/react';
import type { Data as EmojiMartData } from 'emoji-mart';

import { EmojiInputElement } from '@/components/plate-ui/emoji-node';

export const EmojiKit = [
  EmojiPlugin.configure({
    options: { data: emojiMartData as typeof EmojiMartData },
  }),
  EmojiInputPlugin.withComponent(EmojiInputElement),
];
