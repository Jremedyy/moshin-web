import { createContext, useState, ReactNode } from 'react';

export interface OverlayContextProps {
    isVisible: boolean;
    content: ReactNode;
    showOverlay(content: ReactNode): void;
    hideOverlay(): void;
}

export const OverlayContext = createContext<OverlayContextProps>({} as OverlayContextProps);

interface OverlayProviderProps {
    children?: ReactNode;
}

export const OverlayProvider = (props: OverlayProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const showOverlay = (content: ReactNode) => {
    document.body.style.overflow = "hidden";

    setContent(content);
    setIsVisible(true);
  };

  const hideOverlay = () => {
    document.body.style.overflow = "auto";

    setIsVisible(false);
    setContent(null);
  };

  return (
    <OverlayContext.Provider value={{ isVisible, content, showOverlay, hideOverlay }}>
      {props.children}
    </OverlayContext.Provider>
  );
};