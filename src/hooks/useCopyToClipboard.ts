import { useEffect, useRef, useState } from "react";
import { copyMessageDuration } from "../lib/constants";

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const reset = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(reset.current), []);

  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      window.clearTimeout(reset.current);
      setCopied(true);
      reset.current = window.setTimeout(
        () => setCopied(false),
        copyMessageDuration,
      );
    } catch {
      setCopied(false);
    }
  }

  return { copied, copy };
}
