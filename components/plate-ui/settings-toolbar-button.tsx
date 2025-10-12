'use client';

import * as React from 'react';

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import {
  AlignCenter,
  BookOpen,
  Check,
  Clock,
  Eye,
  Focus,
  Maximize,
  Minus,
  Monitor,
  Plus,
  Save,
  Settings,
  Smartphone,
  Type,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { ToolbarButton } from '../ui/toolbar';

export type EditorWidth = 'default' | 'fullWidth' | 'demo' | 'ai' | 'select';

interface SettingsContextType {
  // Width
  editorWidth: EditorWidth;
  setEditorWidth: (width: EditorWidth) => void;

  // Focus Mode
  focusMode: boolean;
  setFocusMode: (enabled: boolean) => void;

  // Typewriter Mode
  typewriterMode: boolean;
  setTypewriterMode: (enabled: boolean) => void;

  // Font Size
  fontSize: number;
  setFontSize: (size: number) => void;

  // Line Height
  lineHeight: number;
  setLineHeight: (height: number) => void;

  // Word Count
  showWordCount: boolean;
  setShowWordCount: (show: boolean) => void;

  // Auto Save
  autoSave: boolean;
  setAutoSave: (enabled: boolean) => void;
}

const SettingsContext = React.createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [editorWidth, setEditorWidth] = React.useState<EditorWidth>('fullWidth');
  const [focusMode, setFocusMode] = React.useState(false);
  const [typewriterMode, setTypewriterMode] = React.useState(false);
  const [fontSize, setFontSize] = React.useState(16);
  const [lineHeight, setLineHeight] = React.useState(1.6);
  const [showWordCount, setShowWordCount] = React.useState(true);
  const [autoSave, setAutoSave] = React.useState(true);

  return (
    <SettingsContext.Provider
      value={{
        editorWidth,
        setEditorWidth,
        focusMode,
        setFocusMode,
        typewriterMode,
        setTypewriterMode,
        fontSize,
        setFontSize,
        lineHeight,
        setLineHeight,
        showWordCount,
        setShowWordCount,
        autoSave,
        setAutoSave,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = React.useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}

const widthOptions = [
  {
    icon: <Monitor className="h-4 w-4" />,
    label: 'Centered',
    description: 'Comfortable reading width',
    value: 'default' as const,
  },
  {
    icon: <Maximize className="h-4 w-4" />,
    label: 'Full Width',
    description: 'Maximum content width',
    value: 'fullWidth' as const,
  },
  {
    icon: <Monitor className="h-4 w-4" />,
    label: 'Demo Mode',
    description: 'Same as centered (demo)',
    value: 'demo' as const,
  },
  {
    icon: <Smartphone className="h-4 w-4" />,
    label: 'Compact',
    description: 'Minimal padding for AI/chat',
    value: 'ai' as const,
  },
  {
    icon: <Smartphone className="h-4 w-4" />,
    label: 'Inline',
    description: 'Tight spacing for selections',
    value: 'select' as const,
  },
];

export function SettingsToolbarButton(props: DropdownMenuProps) {
  const {
    editorWidth,
    setEditorWidth,
    focusMode,
    setFocusMode,
    typewriterMode,
    setTypewriterMode,
    fontSize,
    setFontSize,
    lineHeight,
    setLineHeight,
    showWordCount,
    setShowWordCount,
    autoSave,
    setAutoSave,
  } = useSettings();

  return (
    <DropdownMenu {...props}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <ToolbarButton pressed={false} isDropdown>
              <Settings className="h-4 w-4" />
            </ToolbarButton>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>Editor Settings</TooltipContent>
      </Tooltip>

      <DropdownMenuContent align="start" className="w-80 max-h-[80vh] overflow-y-auto">
        {/* Writing Modes */}
        <DropdownMenuLabel className="flex items-center gap-2">
          <Focus className="h-4 w-4" />
          Writing Modes
        </DropdownMenuLabel>

        <div className="px-2 py-1 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <div>
                <div className="font-medium text-sm">Focus Mode</div>
                <div className="text-xs text-muted-foreground">Hide distractions</div>
              </div>
            </div>
            <Switch checked={focusMode} onCheckedChange={setFocusMode} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlignCenter className="h-4 w-4" />
              <div>
                <div className="font-medium text-sm">Typewriter Mode</div>
                <div className="text-xs text-muted-foreground">Center active line</div>
              </div>
            </div>
            <Switch checked={typewriterMode} onCheckedChange={setTypewriterMode} />
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Display Settings */}
        <DropdownMenuLabel className="flex items-center gap-2">
          <Type className="h-4 w-4" />
          Display Settings
        </DropdownMenuLabel>

        <div className="px-2 py-1 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Font Size</span>
              <span className="text-xs text-muted-foreground">{fontSize}px</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => setFontSize(Math.max(12, fontSize - 1))}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <Slider
                value={[fontSize]}
                onValueChange={([value]) => setFontSize(value)}
                min={12}
                max={24}
                step={1}
                className="flex-1"
              />
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => setFontSize(Math.min(24, fontSize + 1))}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Line Height</span>
              <span className="text-xs text-muted-foreground">{lineHeight.toFixed(1)}x</span>
            </div>
            <Slider
              value={[lineHeight]}
              onValueChange={([value]) => setLineHeight(value)}
              min={1.2}
              max={2.0}
              step={0.1}
              className="w-full"
            />
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Productivity Features */}
        <DropdownMenuLabel className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          Productivity
        </DropdownMenuLabel>

        <div className="px-2 py-1 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <div>
                <div className="font-medium text-sm">Word Count</div>
                <div className="text-xs text-muted-foreground">Show statistics</div>
              </div>
            </div>
            <Switch checked={showWordCount} onCheckedChange={setShowWordCount} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              <div>
                <div className="font-medium text-sm">Auto Save</div>
                <div className="text-xs text-muted-foreground">Save automatically</div>
              </div>
            </div>
            <Switch checked={autoSave} onCheckedChange={setAutoSave} />
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Width Options */}
        <DropdownMenuLabel className="flex items-center gap-2">
          <Monitor className="h-4 w-4" />
          Editor Width
        </DropdownMenuLabel>

        {widthOptions.map(({ icon, label, description, value }) => (
          <DropdownMenuItem
            key={value}
            className="flex items-center justify-between py-2"
            onClick={() => setEditorWidth(value)}
          >
            <div className="flex items-center gap-3">
              {icon}
              <div className="flex flex-col">
                <span className="font-medium text-sm">{label}</span>
                <span className="text-xs text-muted-foreground">{description}</span>
              </div>
            </div>
            {editorWidth === value && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
