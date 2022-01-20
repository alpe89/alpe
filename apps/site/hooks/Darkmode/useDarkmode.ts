import { useCallback, useEffect, useState } from 'react';
import { ColorMode } from './types';

export function useDarkmode() {
  const [currentMode, setCurrentMode] = useState<ColorMode | undefined>(
    undefined
  );

  const toggleDarkmode = useCallback(() => {
    const classList = document.querySelector('html').classList;

    if (currentMode === ColorMode.DARK) {
      classList.remove(ColorMode.DARK);
      classList.add(ColorMode.LIGHT);
      setCurrentMode(ColorMode.LIGHT);
    } else {
      classList.remove(ColorMode.LIGHT);
      classList.add(ColorMode.DARK);
      setCurrentMode(ColorMode.DARK);
    }
  }, [currentMode]);

  useEffect(() => {
    if (
      window.matchMedia?.('(prefers-color-scheme: dark)').matches &&
      !currentMode
    ) {
      setCurrentMode(ColorMode.DARK);
      document.querySelector('html').classList.add(ColorMode.DARK);
    } else if (
      window.matchMedia?.('(prefers-color-scheme: light)').matches &&
      !currentMode
    ) {
      setCurrentMode(ColorMode.LIGHT);
      document.querySelector('html').classList.add(ColorMode.LIGHT);
    } else {
      setCurrentMode(
        document.querySelector('html').classList.contains(ColorMode.DARK)
          ? ColorMode.DARK
          : ColorMode.LIGHT
      );
    }
  }, [currentMode]);

  return { toggleDarkmode, currentMode };
}
