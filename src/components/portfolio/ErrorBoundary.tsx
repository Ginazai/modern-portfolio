import { Component, type ReactNode } from 'react';

/** Renders nothing if a decorative layer (WebGL) fails, so the rest of the page is never affected. */
export class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
