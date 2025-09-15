'use client';

import React, { useState } from 'react';

import { CopyCheck, CopyIcon } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '../ui/button';

interface CopyToClipboardButtonProps {
  text: string;
  className?: string;
}

export default function CopyToClipboardButton({
  text,
  className = '',
}: CopyToClipboardButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast('Copied CLI command', {
        description: text,
      });

      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <Button onClick={handleCopy} variant={'secondary'}>
        {copied ? <CopyCheck className="w-4 h-4" /> : <CopyIcon className="w-4 h-4" />}
      </Button>

      <div
        className={`absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 pointer-events-none transition-opacity ${
          copied ? 'opacity-100' : ''
        }`}
      >
        Copied!
      </div>
    </div>
  );
}
