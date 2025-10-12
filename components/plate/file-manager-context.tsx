'use client';

import * as React from 'react';

import { type Value } from 'platejs';

import { useDebounce } from '@/hooks/use-debounce';

export interface FileData {
  id: string;
  name: string;
  content: Value;
  createdAt: number;
  updatedAt: number;
}

interface FileManagerContextType {
  files: FileData[];
  currentFileId: string | null;
  currentFile: FileData | null;
  createFile: (name: string) => string;
  deleteFile: (id: string) => void;
  renameFile: (id: string, newName: string) => void;
  switchToFile: (id: string) => void;
  updateCurrentFileContent: (content: Value) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const FileManagerContext = React.createContext<FileManagerContextType | null>(null);

export function useFileManager() {
  const context = React.useContext(FileManagerContext);
  if (!context) {
    throw new Error('useFileManager must be used within FileManagerProvider');
  }
  return context;
}

const STORAGE_KEY = 'plate-editor-files';
const DEFAULT_CONTENT: Value = [
  {
    children: [{ text: '' }],
    type: 'h1',
  },
];

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

export function FileManagerProvider({ children }: { children: React.ReactNode }) {
  const [files, setFiles] = React.useState<FileData[]>([]);
  const [currentFileId, setCurrentFileId] = React.useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  // Debounce files to reduce localStorage writes
  const debouncedFiles = useDebounce(files, 300);

  // Load files from localStorage on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsedFiles = JSON.parse(saved);
          if (Array.isArray(parsedFiles) && parsedFiles.length > 0) {
            setFiles(parsedFiles);
            setCurrentFileId(parsedFiles[0].id);
            return;
          }
        } catch (e) {
          console.warn('Failed to parse saved files', e);
        }
      }

      // Create default file if none exist
      const defaultFile: FileData = {
        id: generateId(),
        name: 'Untitled Document',
        content: DEFAULT_CONTENT,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      setFiles([defaultFile]);
      setCurrentFileId(defaultFile.id);
    }
  }, []);

  // Save debounced files to localStorage
  React.useEffect(() => {
    if (debouncedFiles.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(debouncedFiles));
    }
  }, [debouncedFiles]);

  const currentFile = React.useMemo(() => {
    return files.find(file => file.id === currentFileId) || null;
  }, [files, currentFileId]);

  const createFile = React.useCallback((name: string) => {
    const newFile: FileData = {
      id: generateId(),
      name,
      content: DEFAULT_CONTENT,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    setFiles(prev => [...prev, newFile]);
    setCurrentFileId(newFile.id);
    return newFile.id;
  }, []);

  const deleteFile = React.useCallback(
    (id: string) => {
      setFiles(prev => {
        const newFiles = prev.filter(file => file.id !== id);

        // If we're deleting the current file, switch to another one
        if (currentFileId === id) {
          if (newFiles.length > 0) {
            setCurrentFileId(newFiles[0].id);
          } else {
            // Create a new default file if no files remain
            const defaultFile: FileData = {
              id: generateId(),
              name: 'Untitled Document',
              content: DEFAULT_CONTENT,
              createdAt: Date.now(),
              updatedAt: Date.now(),
            };
            setCurrentFileId(defaultFile.id);
            return [defaultFile];
          }
        }

        return newFiles;
      });
    },
    [currentFileId]
  );

  const renameFile = React.useCallback((id: string, newName: string) => {
    setFiles(prev =>
      prev.map(file => (file.id === id ? { ...file, name: newName, updatedAt: Date.now() } : file))
    );
  }, []);

  const switchToFile = React.useCallback((id: string) => {
    setCurrentFileId(id);
  }, []);

  const updateCurrentFileContent = React.useCallback(
    (content: Value) => {
      if (!currentFileId) return;

      // Use functional update to avoid recreating the entire array
      setFiles(prev => {
        const fileIndex = prev.findIndex(file => file.id === currentFileId);
        if (fileIndex === -1) return prev;

        const updatedFiles = [...prev];
        updatedFiles[fileIndex] = {
          ...updatedFiles[fileIndex],
          content,
          updatedAt: Date.now(),
        };

        return updatedFiles;
      });
    },
    [currentFileId]
  );

  const contextValue: FileManagerContextType = React.useMemo(
    () => ({
      files,
      currentFileId,
      currentFile,
      createFile,
      deleteFile,
      renameFile,
      switchToFile,
      updateCurrentFileContent,
      sidebarOpen,
      setSidebarOpen,
    }),
    [
      files,
      currentFileId,
      currentFile,
      createFile,
      deleteFile,
      renameFile,
      switchToFile,
      updateCurrentFileContent,
      sidebarOpen,
      setSidebarOpen,
    ]
  );

  return <FileManagerContext.Provider value={contextValue}>{children}</FileManagerContext.Provider>;
}
