'use client';

import * as React from 'react';

import { Edit3, FileText, MoreHorizontal, Plus, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

import { useFileManager } from './file-manager-context';

interface FileItemProps {
  file: {
    id: string;
    name: string;
    updatedAt: number;
  };
  isActive: boolean;
  onSelect: () => void;
  onRename: (newName: string) => void;
  onDelete: () => void;
}

const FileItem = React.memo(({ file, isActive, onSelect, onRename, onDelete }: FileItemProps) => {
  const [isRenaming, setIsRenaming] = React.useState(false);
  const [renameName, setRenameName] = React.useState(file.name);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isRenaming && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isRenaming]);

  const handleRename = React.useCallback(() => {
    if (renameName.trim() && renameName !== file.name) {
      onRename(renameName.trim());
    }
    setIsRenaming(false);
  }, [renameName, file.name, onRename]);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleRename();
      } else if (e.key === 'Escape') {
        setRenameName(file.name);
        setIsRenaming(false);
      }
    },
    [handleRename, file.name]
  );

  const handleStartRename = React.useCallback(() => {
    setIsRenaming(true);
  }, []);

  return (
    <div
      className={cn(
        'group flex items-center gap-2 rounded-md p-2 cursor-pointer hover:bg-muted/50 transition-colors',
        isActive && 'bg-muted'
      )}
    >
      <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />

      {isRenaming ? (
        <Input
          ref={inputRef}
          value={renameName}
          onChange={e => setRenameName(e.target.value)}
          onBlur={handleRename}
          onKeyDown={handleKeyDown}
          className="h-8 text-sm"
        />
      ) : (
        <div className="flex-1 truncate text-sm" onClick={onSelect}>
          {file.name}
        </div>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <MoreHorizontal className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleStartRename}>
            <Edit3 className="h-4 w-4 mr-2" />
            Rename
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onDelete} className="text-destructive focus:text-destructive">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
});

FileItem.displayName = 'FileItem';

export function FileManagerSidebar() {
  const {
    files,
    currentFileId,
    createFile,
    deleteFile,
    renameFile,
    switchToFile,
    sidebarOpen,
    setSidebarOpen,
  } = useFileManager();

  const [newFileName, setNewFileName] = React.useState('');
  const [isCreating, setIsCreating] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isCreating && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isCreating]);

  const handleCreateFile = () => {
    const name = newFileName.trim() || 'Untitled Document';
    createFile(name);
    setNewFileName('');
    setIsCreating(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCreateFile();
    } else if (e.key === 'Escape') {
      setNewFileName('');
      setIsCreating(false);
    }
  };

  const sortedFiles = React.useMemo(() => {
    return [...files].sort((a, b) => b.updatedAt - a.updatedAt);
  }, [files]);

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center justify-between mr-5">
            <SheetTitle className="text-base font-medium">Files</SheetTitle>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCreating(true)}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-1">
          <div className="space-y-1">
            {isCreating && (
              <div className="flex items-center gap-2 rounded-md p-2 bg-muted/30">
                <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <Input
                  ref={inputRef}
                  placeholder="File name..."
                  value={newFileName}
                  onChange={e => setNewFileName(e.target.value)}
                  onBlur={handleCreateFile}
                  onKeyDown={handleKeyDown}
                  className="h-8 text-sm"
                />
              </div>
            )}

            {sortedFiles.map(file => (
              <FileItem
                key={file.id}
                file={file}
                isActive={file.id === currentFileId}
                onSelect={() => switchToFile(file.id)}
                onRename={newName => renameFile(file.id, newName)}
                onDelete={() => deleteFile(file.id)}
              />
            ))}

            {sortedFiles.length === 0 && !isCreating && (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No files yet</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCreating(true)}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create your first file
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="border-t p-4">
          <div className="text-xs text-muted-foreground">
            {files.length} file{files.length !== 1 ? 's' : ''}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
