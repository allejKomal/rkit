// Web Worker for handling heavy localStorage operations
self.onmessage = function(e) {
  const { type, data } = e.data;
  
  switch (type) {
    case 'SAVE_FILES':
      try {
        localStorage.setItem('plate-editor-files', JSON.stringify(data));
        self.postMessage({ type: 'SAVE_SUCCESS' });
      } catch (error) {
        self.postMessage({ type: 'SAVE_ERROR', error: error.message });
      }
      break;
      
    case 'LOAD_FILES':
      try {
        const saved = localStorage.getItem('plate-editor-files');
        const files = saved ? JSON.parse(saved) : [];
        self.postMessage({ type: 'LOAD_SUCCESS', data: files });
      } catch (error) {
        self.postMessage({ type: 'LOAD_ERROR', error: error.message });
      }
      break;
      
    default:
      self.postMessage({ type: 'UNKNOWN_ACTION' });
  }
};
