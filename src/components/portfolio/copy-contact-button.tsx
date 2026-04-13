"use client";

import { useEffect, useState } from "react";

type CopyContactButtonProps = {
  value: string;
  label: string;
};

export function CopyContactButton({
  value,
  label,
}: CopyContactButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCopied(false);
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
    }
  };

  return (
    <button
      type="button"
      aria-label={label}
      className="button-secondary"
      onClick={handleCopy}
    >
      {copied ? "Скопировано" : "Скопировать"}
    </button>
  );
}