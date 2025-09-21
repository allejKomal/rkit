'use client';

import PageWrapper from '@/components/hoc/page-wrapper';
import { PlateEditor } from '@/components/plate/plate-editor';

export default function Page() {
  return (
    <PageWrapper
      showBackButton
      title="Rich Text Editor"
      description="Advanced rich text editor with formatting, blocks, and collaboration features"
    >
      <div className="h-full not-first:w-full">
        <PlateEditor />
      </div>
    </PageWrapper>
  );
}
