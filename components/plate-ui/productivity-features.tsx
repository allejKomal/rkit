'use client';

import * as React from 'react';

import { Save, Zap } from 'lucide-react';
import type { TNode, Value } from 'platejs';
import { useEditorSelector } from 'platejs/react';

import { useSettings } from './settings-toolbar-button';

interface WordCountStats {
  words: number;
  characters: number;
  charactersWithoutSpaces: number;
  readingTime: number; // in minutes
}

function calculateWordCount(value: Value): WordCountStats {
  let text = '';

  const extractText = (node: TNode): void => {
    if ('text' in node && typeof node.text === 'string') {
      text += node.text;
    } else if (node.children && Array.isArray(node.children)) {
      node.children.forEach(extractText);
    }
  };

  value.forEach(extractText);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const charactersWithoutSpaces = text.replace(/\s/g, '').length;
  const readingTime = Math.ceil(words / 200); // Average reading speed: 200 words per minute

  return {
    words,
    characters,
    charactersWithoutSpaces,
    readingTime,
  };
}

export function WordCountDisplay() {
  const { showWordCount, autoSave } = useSettings();
  const editorValue = useEditorSelector(editor => editor.children, []);

  const stats = React.useMemo(() => calculateWordCount(editorValue), [editorValue]);

  if (!showWordCount) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-background/80 backdrop-blur-sm border rounded-md shadow-sm px-2 py-1 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <span>{stats.words} words</span>
          <span>{stats.readingTime} min read</span>
          {autoSave && (
            <div className="flex items-center gap-1 text-green-600">
              <Save className="h-2.5 w-2.5" />
              <span>Saved</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function FocusModeOverlay() {
  const { focusMode } = useSettings();

  if (!focusMode) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      {/* Subtle top overlay */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-background/60 to-transparent" />

      {/* Subtle bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background/60 to-transparent" />

      {/* Minimal focus indicator */}
      <div className="absolute top-2 right-2 z-50">
        <div className="bg-primary/5 border border-primary/10 rounded-full px-2 py-0.5 flex items-center gap-1">
          <Zap className="h-2.5 w-2.5 text-primary/60" />
          <span className="text-xs text-primary/60">Focus</span>
        </div>
      </div>
    </div>
  );
}
