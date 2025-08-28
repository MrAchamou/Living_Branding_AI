
// ====================================================================
// 🛡️ FRONTEND ERROR HANDLER 2.0 - QUANTUM ERROR MANAGEMENT
// ====================================================================

interface FrontendError {
  message: string;
  stack?: string;
  component?: string;
  context?: any;
}

class FrontendErrorHandler {
  private apiUrl = '/api/frontend-error-capture';
  
  async captureError(error: FrontendError, context: any = {}) {
    try {
      await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          error: {
            message: error.message,
            stack: error.stack
          },
          context,
          component: error.component,
          timestamp: Date.now(),
          userAgent: navigator.userAgent
        })
      });
      
      console.log('🛡️ Error sent to AI correction system');
    } catch (captureError) {
      console.warn('⚠️ Failed to capture error:', captureError);
    }
  }
  
  setupGlobalHandlers() {
    // Capture des erreurs React
    window.addEventListener('error', (event) => {
      this.captureError({
        message: event.message,
        stack: event.error?.stack,
        component: 'global'
      }, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });
    
    // Capture des promesses rejetées
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError({
        message: event.reason?.message || 'Promise rejection',
        stack: event.reason?.stack,
        component: 'promise'
      }, {
        reason: event.reason
      });
    });
  }
}

export const frontendErrorHandler = new FrontendErrorHandler();

// Auto-setup
if (typeof window !== 'undefined') {
  frontendErrorHandler.setupGlobalHandlers();
}
